const express = require('express');
const mongoose = require('mongoose');

const user = require('./routes/api/user');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

var app = express();
// DB configure
const db = require('./config/keys').mongoURI;
//Connect server to MongoDB
mongoose.PROMISES;
mongoose
	.connect(db)
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.log(err));

app.get('/', function(req, res) {
	res.send("hello app!!");
});

//Use Routes
app.use('/api/user', user);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, function () {
	console.log("server running port", port);
});
