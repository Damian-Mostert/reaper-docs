const axios = require("axios").default;

const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/aiproducts/askyoda/v2/bc54c12e-125f-42c8-99c6-95b067d494d9/add_text",
    headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODFjZGI0MTEtNzNhNi00MTMxLWFkZjEtZGIxOTIzZTE4ZGQwIiwidHlwZSI6ImFwaV90b2tlbiJ9.ubclkVUENzj9I9XaGrONB-HWd6f2O5SHEzxq1kpa_xw",
    },
    data: {
    texts: ["Hello, how are you?"],

    // Optional
    metadata: [{"metadata1": "value1"}],
    },
};

axios.request(options).then((response) => {
    console.log(response.data);
    })
    .catch((error) => {
    console.error(error);
    });