import http from "http";
import fetch from "node-fetch";

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let data;
    let result = [];
    let no_of_languages = 0
    const url = "https://restcountries.com/v2/all";
    await fetch(url)
      .then((response) => response.json())
      .then((countries) => (data = countries))
      .catch((error) => console.log(error));
    
    data.forEach((country) => {
      no_of_languages += country.languages.length
    })

    data
      .sort((a, b) => b.population - a.population)
      .slice(0, 9)
      .forEach((country) => {
        result.push({
          name: country.name,
          capital: country.capital,
          languages: country.languages,
          population: country.population,
          area: country.area,
        });
      });
    let json_response = {
      status: 200,
      message: "successful",
      numberOfLanguages: no_of_languages,
      size: data.length,
      result,
      code: 2000,
    };
    console.log("server running");
    res.end(JSON.stringify(json_response));
  })
  .listen(8000);

// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       console.log('Operation successful')
//       res.write(data);
//       res.end(data);
//     });
//   })
//   .listen(8000);
