async function validate() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "registrationNo": "33434"
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "manual"
    };

    try {
        const response = await fetch("https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor", requestOptions);
        const result = await response.text();
        console.log(result)
    } catch (error) {
        console.error(error);
    };

}

validate();