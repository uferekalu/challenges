import http from "http";
import fetch from "node-fetch";

http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  let data;
  let result = [];

  try {
    const url = "https://api.thecatapi.com/v1/breeds";
    await fetch(url)
      .then((response) => response.json())
      .then((cats) => (data = cats));
    
    data.forEach((item) => {
        result.push({
            name: item.name
        })
    })
  } catch (error) {
    console.log(error);
  }
  let json_response = {
    status: 200,
    message: 'successful',
    size: data.length,
    catNames: result
  }
  console.log("server running")
  res.end(JSON.stringify(json_response))
}).listen(9000);
