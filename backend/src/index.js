import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt';
import { createFdInput, signinInput, signupInputDoctor, signupInputUser, updateDoctorInput, updateFdInput, updateUserInput, validationTable } from '@palve_vaishnav/arogyarpan';
import { cors } from 'hono/cors';
import { redirect } from 'react-router-dom';
const app = new Hono();
// Fucking cors 
app.use('/*', cors());
// User routes 
app.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    if (body.userType == "doctor") {
        const { success } = signupInputDoctor.safeParse(body);
        if (!success) {
            c.status(401);
            return c.text("Invalid Inputs !!");
        }
        try {
            const doctor = await prisma.doctor.create({
                data: {
                    name: body.name,
                    regno: body.regno,
                    regDate: new Date(body.regDate),
                    StateCouncil: body.StateCouncil,
                    email: body.email,
                    password: body.password,
                }
            });
            if (doctor) {
                console.log("Doctor Created !!");
            }
        }
        catch (e) {
            console.error('Error creating doctor:', e);
            return c.json({ Error: e });
        }
    }
    else {
        const { success } = signupInputUser.safeParse(body);
        if (!success) {
            c.status(401);
            return c.text("Invalid Inputs !!");
        }
        try {
            const user = await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: body.password,
                }
            });
            const jwt = await sign({
                id: user.id
            }, c.env.JWT_SECRET);
            return c.text(jwt);
        }
        catch (e) {
            c.status(401);
            console.log("Error while creating user ! ");
            return c.json({ Error: e });
        }
    }
});
app.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(401);
        return c.text("Invalid Inputs !!");
    }
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if (!user) {
            c.status(403);
            return c.text('No such User Exists!! Check email and password');
        }
        const jwt = await sign({
            id: user.id
        }, c.env.JWT_SECRET);
        return c.text(jwt);
    }
    catch (e) {
        console.log(e);
        c.status(411);
        return c.text("Error While logging in!");
    }
});
app.get('/profiles', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.findMany();
        return c.json(user);
    }
    catch (e) {
        c.status(401);
        console.log(e);
        return c.text("No user Found ");
    }
});
app.get('/doctors', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const doctor = await prisma.doctor.findMany();
        return c.json(doctor);
    }
    catch (e) {
        c.status(401);
        console.log(e);
        return c.text("No user Found ");
    }
});
app.get('/profile', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const token = c.req.header('Authorization') || "";
    const { id } = await verify(token, c.env.JWT_SECRET);
    if (!id) {
        redirect('/login');
    }
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: Number(id),
            }
        });
        if (!user) {
            return c.json({ Error: "User Does not Exist !!" });
        }
        return c.json(user);
    }
    catch (e) {
        c.status(400);
        return c.json({ msg: "user Not Found", error: e });
    }
});
// Will implement it later 
app.patch('/profile/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    if (body.userType === "doctor") {
        const dId = Number(c.req.param('id'));
        const { success } = updateDoctorInput.safeParse(body);
        if (!success) {
            c.status(400);
            return c.text("Invalid Inputs to Update Doctor Profile");
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
            return c.text("Error while updating doctor profile");
        }
        // User and donor 
    }
    else {
        const uid = Number(c.req.param('id'));
        const { success } = updateUserInput.safeParse(body);
        if (!success) {
            c.status(400);
            return c.text("Invalid Inputs to Update User Profile");
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
        });
        if (!newUser) {
            c.status(401);
            return c.text("Error While Updation User ");
        }
    }
    c.status(200);
    return c.text('Updated Successfully');
});
// fundraiser Routes 
app.post('/fundaiser', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = createFdInput.safeParse(body);
    if (!success) {
        c.status(401);
        return c.text("Invalid Inputs !!");
    }
    const { authorId, authorName, title, patientName, age, location, hospital, disgnose, story, amount, due, } = await c.req.json();
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
        });
        if (!fundraiser) {
            return c.text("Error while creating the Fundraiser !!");
        }
        return c.text("Fundraiser created successfully !");
    }
    catch (e) {
        c.status(400);
        return c.json({ Error: e });
    }
});
// add pagination 
app.get('/fundaiser', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const fundraiserList = await prisma.fundraiser.findMany();
        return c.json(fundraiserList);
    }
    catch (e) {
        return c.json({ Errror: e });
    }
});
app.get('/fundaiser/:id', async (c) => {
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
    }
    catch (e) {
        return c.json({ Errror: e });
    }
});
app.patch('/fundaiser/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const id = c.req.param('id');
    const body = await c.req.json();
    const { success } = updateFdInput.safeParse(body);
    if (!success) {
        c.status(401);
        return c.text("Invalid Inputs !!");
    }
    const { title, patientName, age, location, hospital, disgnose, story, amount, due, } = await c.req.json();
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
        });
        if (!fundraiser) {
            return c.text("Error while Updating the Fundraiser !!");
        }
        c.status(200);
        return c.text("Fundraiser Updated !");
    }
    catch (e) {
        c.status(400);
        return c.json({ Error: e });
    }
});
// Not Implementing just yet!! don't have any payment gateway available 
app.get('/fundaiser/:id/donate', (c) => {
    return c.text('Payment Gateway');
});
// For Doctors 
// Currently notworking !! dont'know why
// [] Done : sign up is not created for doctors 
// Both request below are same, my intension while creating them was different but they are same now 
app.put('/fundraiser/verify/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const { verified, dId, message } = await c.req.json();
    const Fid = Number(c.req.param('id'));
    const body = await c.req.json();
    const { success } = validationTable.safeParse(body);
    if (!success) {
        c.status(401);
        return c.text("Invalid Inputs !!");
    }
    const doctor = await prisma.doctor.findFirst({
        where: {
            id: Number(dId)
        }
    });
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
            });
            const Validation = await prisma.validation.create({
                data: {
                    doctorId: Number(dId),
                    fundraiserId: Fid,
                    status: Boolean(verified),
                    message,
                }
            });
            c.status(200);
            return c.text("Validation Successfull !!");
        }
        catch (e) {
            c.status(400);
            return c.json({ message: " Error while  updating Fundraiser/validation table !", Error: e });
        }
    }
    else {
        c.status(400);
        return c.text("Doctor id Invalid ");
    }
});
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
        return c.text("Invalid Inputs !!");
    }
    const doctor = await prisma.doctor.findFirst({
        where: {
            id: Number(dId)
        }
    });
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
            });
            const Validation = await prisma.validation.create({
                data: {
                    doctorId: Number(dId),
                    fundraiserId: Fid,
                    status: Boolean(verified),
                    message,
                }
            });
            c.status(200);
            return c.text("Validation Successfull !!");
        }
        catch (e) {
            c.status(400);
            return c.json({ message: " Error while  updating Fundraiser/validation table !", Error: e });
        }
    }
    else {
        c.status(400);
        return c.text("Doctor id Invalid ");
    }
});
export default app;
