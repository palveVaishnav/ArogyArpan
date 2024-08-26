import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { createFdInput, signinInput, signupInputDoctor, signupInputUser, updateDoctorInput, updateFdInput, updateUserInput, validationTable } from '@palve_vaishnav/arogyarpan'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

// Fucking cors 
app.use('/*', cors());

// User routes 
app.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  if (body.userType == "doctor") {
    const result = signupInputDoctor.safeParse(body);
    if (!result.success) {
      c.status(401);
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.json(result.error.issues)
    }
    try {
      const doctor = await prisma.doctor.create({
        data: {
          // userType:body.userType,
          name: body.name,
          regno: body.regno,
          regDate: new Date(body.regDate),
          StateCouncil: body.stateCouncil,
          email: body.email,
          password: body.password,
        }
      })
      const jwt = await sign({
        id: doctor.id
      }, c.env.JWT_SECRET)
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text(jwt);
    } catch (e) {
      c.status(400)
      console.error('Error creating doctor:', e);
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.json({ Error: e });
    }
  } else {
    const { success } = signupInputUser.safeParse(body);
    if (!success) {
      c.status(401);
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text("Invalid Inputs User !!")
    }
    try {
      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: body.password,
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text(jwt);
    } catch (e) {
      c.status(401)
      console.log("Error while creating user ! ");
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.json({ Error: e });
    }
  }


})

app.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(401);
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    return c.text("Invalid Inputs !!")
  }
  try {
    let user;
    if (body.userType === "doctor") {
      user = await prisma.doctor.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })
    } else {
      user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password
        }
      })

    }

    if (!user) {
      c.status(403)
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text('No such User Exists!! Check email and password')
    }
    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    return c.text(jwt)
  } catch (e) {
    console.log(e)
    c.status(411)
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    return c.text("Error While logging in!")
  }
})

app.get('/profile', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const token = c.req.header('Authorization') || ""
  const { id } = await verify(token, c.env.JWT_SECRET);
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
      }
    })
    if (!user) {
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.json({ Error: "User Does not Exist !!" })
    }
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    return c.json(user);
  } catch (e) {
    c.status(400)
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    return c.json({ msg: "user Not Found", error: e })
  }
})

app.get('/doctor', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const token = c.req.header('Authorization') ?? ""
  const { id } = await verify(token, c.env.JWT_SECRET);
  try {
    const user = await prisma.doctor.findFirst({
      where: {
        id: Number(id),
      }
    })
    if (!user) {
      return c.json({ Error: "User Does not Exist !!" })
    }
    return c.json(user);
  } catch (e) {
    c.status(400)
    return c.json({ msg: "user Not Found", error: e })
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
})

// Will implement it later 
app.patch('/profile/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  if (body.userType === "doctor") {
    const dId = Number(c.req.param('id'));
    const { success } = updateDoctorInput.safeParse(body)
    if (!success) {
      c.status(400)
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text("Invalid Inputs to Update Doctor Profile")
    }
    const { name, email, password, bio } = await c.req.json();

    const doctor = await prisma.doctor.update({
      where: {
        id: dId,
      },
      data: {
        name,
        email,
        password,
        bio
      }
    });
    if (!doctor) {
      c.status(401);
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text("Error while updating doctor profile")
    }
    // User and donor 
  } else {
    const uid = Number(c.req.param('id'));
    const { success } = updateUserInput.safeParse(body)
    if (!success) {
      c.status(400)
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text("Invalid Inputs to Update User Profile")
    }

    const { name, stayAnonymous, email, password, bio } = await c.req.json();
    const newUser = await prisma.user.update({
      where: {
        id: uid,
      },
      data: {
        name,
        stayAnonymous,
        email,
        password,
        bio
      }
    })
    if (!newUser) {
      c.status(401);
      await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
      return c.text("Error While Updation User ")
    }
  }
  c.status(200);
  await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  return c.text('Updated Successfully')
})

// fundraiser Routes 
app.post('/fundraiser', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    // Parse the request body once
    const body = await c.req.json();

    // Validate the input using Zod
    const result = createFdInput.safeParse(body);
    if (!result.success) {
      c.status(401);
      return c.json({ error: "Invalid Inputs by Zod", details: result.error.errors });
    }

    // Destructure the validated data
    const {
      authorId,
      authorName,
      title,
      patientName,
      age,
      location,
      hospital,
      disgnose, // I know the spelling isn't correct, but it's not a typo
      story,
      amount,
      due,
    } = result.data;

    // Create the fundraiser entry in the database
    const fundraiser = await prisma.fundraiser.create({
      data: {
        authorId,
        authorName,
        title,
        patientName,
        age,
        location,
        hospital,
        disgnose, // I know the spelling isn't correct, but it's not a typo
        story,
        amount,
        due: new Date(due),
      }
    });

    // Check if the fundraiser was created successfully
    if (!fundraiser) {
      c.status(500);
      return c.text("Error while creating the Fundraiser !!");
    }

    // Return the fundraiser ID as JSON
    return c.json(fundraiser.id);
  } catch (e) {
    c.status(400);
    return c.json({ error: e });
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
});


/*
app.post('/fundraiser', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = createFdInput.safeParse(body);
  if (!success) {
    c.status(401);
    return c.text("Invalid Inputs by Zod !!")
  }

  const {
    authorId,
    authorName,
    title,
    patientName,
    age,
    location,
    hospital,
    disgnose,
    story,
    amount,
    due,
  } = await c.req.json();

  try {
    const fundraiser = await prisma.fundraiser.create({
      data: {
        authorId: Number(authorId),
        authorName,
        title,
        patientName,
        age: Number(age),
        location,
        hospital,
        disgnose,
        story,
        amount: Number(amount),
        due: new Date(due),
      }
    })
    if (!fundraiser) {
      return c.text("Error while creating the Fundraiser !!")
    }
    return c.json(fundraiser.id)
  } catch (e) {
    c.status(400)
    return c.json({ Error: e })
  }

})
*/

// add pagination 
app.get('/fundraiser', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const fundraiserList = await prisma.fundraiser.findMany();
    return c.json(fundraiserList);
  } catch (e) {
    return c.json({ Errror: e })
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
})

app.get('/fundraiser/:id', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const id = c.req.param('id');
  try {
    const fundraiser = await prisma.fundraiser.findFirst({
      where: {
        id: Number(id)
      }
    });
    return c.json(fundraiser);
  } catch (e) {
    return c.json({ Errror: e })
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
})

app.patch('/fundraiser/:id', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const id = c.req.param('id')
  const body = await c.req.json();
  const { success } = updateFdInput.safeParse(body);
  if (!success) {
    c.status(401);
    return c.text("Invalid Inputs !!")
  }
  const {
    title,
    patientName,
    age,
    location,
    hospital,
    disgnose,
    story,
    amount,
    due,
  } = await c.req.json();

  try {
    const fundraiser = await prisma.fundraiser.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        patientName,
        age: Number(age),
        location,
        hospital,
        disgnose,
        story,
        amount: Number(amount),
        due: new Date(due)
      }
    })
    if (!fundraiser) {
      return c.text("Error while Updating the Fundraiser !!")
    }
    c.status(200)
    return c.text("Fundraiser Updated !")
  } catch (e) {
    c.status(400)
    return c.json({ Error: e })
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
})

// Not Implementing just yet!! don't have any payment gateway available 
app.get('/fundraiser/:id/donate', (c) => {
  return c.text('Payment Gateway')
})
// For Doctors 
// Currently notworking !! dont'know why
// [] Done : sign up is not created for doctors 
// Both request below are same, my intension while creating them was different but they are same now 

app.post('/fundraiser/verify', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  // Get the Authorization token from the header
  const token = c.req.header('Authorization') ?? "";

  // Verify the token and extract doctor ID
  const dId = await verify(token, c.env.JWT_SECRET);
  console.log(dId)

  // Parse the request body
  const { fundraiserId, status, message } = await c.req.json();
  try {

    const doctor = await prisma.doctor.findFirst({
      where: {
        id: Number(dId.id)
      }
    })
    if (!doctor) {
      c.status(404);
      return c.text("Doctor Not in the DB");
    }
    const fr = await prisma.fundraiser.update({
      where: {
        id: Number(fundraiserId)
      },
      data: {
        verified: Boolean(status),
        doctorId: doctor.id,
        doctorName: doctor.name
      }
    });
    if (!fr) {
      c.status(404);
      return c.text("Error While Updating Fundraiser");
    }

    const validation = await prisma.validation.create({
      data: {
        doctorId: Number(dId.id),
        fundraiserId: Number(fundraiserId),
        status,
        message,
      }
    });

    if (!validation) {
      c.status(404);
      return c.text('Error While Adding Entry to Validation Table');
    }

    c.status(200);
    return c.json({ success: true });
  } catch (error) {
    // await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
    c.status(418)
    console.log(error)
    return c.json({ Error: error })
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
});


app.post('/Old/fundraiser/verify', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  // Get the Authorization token from the header
  const token = c.req.header('Authorization') ?? "";

  // Verify the token and extract doctor ID
  const dId = await verify(token, c.env.JWT_SECRET);

  // Parse the request body
  const { fundraiserId, status, message } = await c.req.json();

  try {
    // Find the doctor by ID
    const doctor = await prisma.doctor.findFirst({
      where: {
        id: Number(dId)
      }
    });

    if (!doctor) {
      c.status(400);
      return c.text("Doctor ID is invalid.");
    } else {
      console.log(doctor);
    }

    // Update the fundraiser with verification details
    const fr = await prisma.fundraiser.update({
      where: {
        id: Number(fundraiserId)
      },
      data: {
        verified: Boolean(status),
        doctorId: doctor.id,
        doctorName: doctor.name
      }
    });

    if (!fr) {
      return c.text('Fudraiser not Found')
    } else {
      console.log(fr);

    }

    // Create a validation entry
    const validation = await prisma.validation.create({
      data: {
        doctorId: Number(dId),
        fundraiserId: Number(fundraiserId),
        status,
        message,
      }
    });

    if (!fr || !validation) {
      c.status(402);
      return c.text("Doctor exists, but error occurred while updating the database.");
    }

    c.status(200);
    return c.text(String(fundraiserId));

  } catch (e) {
    c.status(400);
    return c.json({ message: "Error while updating Fundraiser/Validation table!", error: e });
  } finally {
    await prisma.$disconnect(); // Ensures Prisma Client disconnects after the request
  }
});



/*
app.put('/fundraiser/verify', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const token = c.req.header('Authorization') ?? ""
  const dId = await verify(token, c.env.JWT_SECRET)
  // const type = c.req.header('type')

  const { fundraiserId, status, message } = await c.req.json();

  const doctor = await prisma.doctor.findFirst({
    where: {
      id: Number(dId)
    }
  })
  if (doctor) {
    try {
      const fr = await prisma.fundraiser.update({
        where: {
          id: Number(fundraiserId)
        },
        data: {
          verified: status,
          doctorId: doctor.id,
          doctorName: doctor.name
        }
      })
      const Validation = await prisma.validation.create({
        data: {
          doctorId: Number(dId),
          fundraiserId: Number(fundraiserId),
          status,
          message,
        }
      })
      if (!fr || !Validation) {
        c.status(402)
        return c.text("Doctor esist, but error while updation db with prisma")
      }
      c.status(200)
      return c.text(fundraiserId)
    } catch (e) {
      c.status(400)
      return c.json({ message: " Error while  updating Fundraiser/validation table !", Error: e })
    }
  } else {
    c.status(400)
    return c.text("Doctor id Invalid ")
  }
})
*/

app.get("/userid", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const token = c.req.header('Authentication') || "";
  const id = await verify(token, c.env.JWT_SECRET)
  return c.json(id)
})



/*
app.patch('/fundraiser/verify/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const { verified, dId, message } = await c.req.json();
  const Fid = Number(c.req.param('id'));
  const body = await c.req.json();
  const { success } = validationTable.safeParse(body);
  if (!success) {
    c.status(401);
    return c.text("Invalid Inputs !!")
  }
  const doctor = await prisma.doctor.findFirst({
    where: {
      id: Number(dId)
    }
  })
  if (doctor) {
    try {
      const fr = await prisma.fundraiser.update({
        where: {
          id: Fid
        },
        data: {
          verified,
          doctorId: doctor.id,
          doctorName: doctor.name
        }
      })
      const Validation = await prisma.validation.create({
        data: {
          doctorId: Number(dId),
          fundraiserId: Fid,
          status: Boolean(verified),
          message,
        }
      })
      c.status(200)
      return c.text("Validation Successfull !!")
    } catch (e) {
      c.status(400)
      return c.json({ message: " Error while  updating Fundraiser/validation table !", Error: e })
    }
  } else {
    c.status(400)
    return c.text("Doctor id Invalid ")
  }

})
*/


export default app
