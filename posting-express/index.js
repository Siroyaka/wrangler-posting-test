const express = require('express')
const http = require("http");
const url = require("url");
const app = express()
const port = 9112

const postTest = async () => {
  const { promise, resolve, reject } = Promise.withResolvers();
  const bodyData = {
    email: "posting-express@email.mail",
    from: "express"
  };

  const bufferdData = Buffer.from(JSON.stringify(bodyData), "utf-8");
  const contentLength = bufferdData.length.toString();

    const urlStr = "http://localhost:9210/";
    const parsedUrl = url.parse(urlStr);

  try {
    const option = {
      protocol: parsedUrl.protocol,
      hostname: parsedUrl.hostname,
      path: parsedUrl.path,
      port: parsedUrl.port,
      method: "post",
      headers: {
        "content-type": "application/json;charset=utf-8",
        "Content-Length": contentLength,
      },
    };

    const httpsRequest = http.request(option, (response) => {
      resolve(response);
    });

    httpsRequest.on("error", reject);

    httpsRequest.end(bufferdData);
    
  } catch (error) {
    console.error(error);
    reject(error);
  }

  await promise;
};

app.get("/", (req, res) => {
    postTest();

    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
