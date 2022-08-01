const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { options } = require("request");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  namee = req.body.name;
  email = req.body.email;

  var data = {
    members: [
      { email_address: email, status: "subscribed", first_name: namee },
    ],
  };
  var json_data = JSON.stringify(data);
  var options = {
    url: "https://us14.api.mailchimp.com/3.0/lists/yourlistid",
    method: "POST",
    headers: {
      Authorization: "bearer yourApiKey",
    },
    body: json_data,
  };
  request(options, (error, response, body) => {
    if (error) {
      res.send("Hello world not approved");
    } else {
      if (response.statusCode == 200) {
        res.sendFile(__dirname + "/Success.html");
      } else {
        res.send("Hello world not approved");
      }
    }
  });
});

app.listen(3000, () => console.log("3000 is there? yes it is"));
