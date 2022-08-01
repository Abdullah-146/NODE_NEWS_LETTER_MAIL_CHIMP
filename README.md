![image](https://user-images.githubusercontent.com/101898018/182228290-c1b35c95-733d-43e5-8770-73dd9dde12bd.png)
News Letter SignUp
This is a News Letter signup Project using MailChimp.

Environment Variables
To run this project, you will need to add the following environment variables to your .env file

API_KEY = MailChimp API_KEY

LIST_ID = MailChimp ListId

How it Works
Your Get(/) Router will take you to /signup.html Page.
Fill The First Name, Last Name and Email then Click SignUp.
SignUp button will redirect to the POST(/) route.
Making data for the https Request to MailChimp


var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  var jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/" +your MailChimp LIST ID;

  const options = {
    method: "POST",
    auth: "name given:" + process.env.API_KEY,
  };
  
  Then do the https Request
  
  
  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
        res.sendFile(__dirname + "/sucess.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", (data) => {
        console.log("Successfully Done!");
    });
});
Then based on response render /failure.html or /success.html
Installation
Copy my repository from github or Download it.

Then to install all necessary packages for project write:

  npm install
To Run
Install nodemon globally if not already installed.

npm install -g nodemon
Then start the project

npm start
If you don't want to install nodemon then start the project using:

node app.js
  
