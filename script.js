const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const port = 3000

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formData')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "/public")))

{
  // Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.htm'));
})

app.get('/Advanced', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Advanced.htm'));
});
app.get('/Beginner', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Beginner.htm'));
});
app.get('/Intermediate', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Intermediate.htm'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/register.htm'));
});
app.get('/Therepy', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Therepy.htm'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/contact.htm'));
});
}


{
  // contact
const defaults = new mongoose.Schema({
  Dates: String,
  Name: String,
  Email: String,
  Phone_no: Number,
  Qwery: String
});
const user = mongoose.model("complain", defaults);

// POST route
app.post('/qwey', async (req, res) => {
  const { Name, Email, Phone_no, Qwery } = req.body;
  
  // Get the current date and remove time (set time to 00:00:00)
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  const new_user = new user({
      Dates: formattedDate, 
      Name,
      Email,
      Phone_no,
      Qwery
  });
  
  await new_user.save();  // Save the user
  res.redirect('/?message=success');
});
}

{
  //register
const default1 = new mongoose.Schema({
  Dates: String,
  Name: String,
  Email: String,
  Phone: Number,
  Age:Number,
  Gender:String,
  Address:String,
  City:String,
  Medical:String,
  Time:String,
});
const user1 = mongoose.model("register", default1);

// POST route
app.post('/regist', async (req, res) => {
  const { Name, Email, Phone_no, Age, Gender, Address, City, Medical, Time } = req.body;
  
  // Get the current date and remove time (set time to 00:00:00)
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  const new_user1 = new user1({
      Dates: formattedDate, 
      Name,
      Email,
      Phone_no,
      Age,
      Gender,
      Address,
      City,
      Medical,
      Time
  });
  
  await new_user1.save();  // Save the user
  res.redirect('/?message=success');
});

}

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
