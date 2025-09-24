const express = require('express')
const app = express()
const port = 9210

app.post("/", (req, res) => {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    })
    req.on("end", (data) => {
        console.log(new Date());
        console.log("body", body);
        res.send("Got a POST request");
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
