
let express = require("express"),
app = express(),
bodyParser = require("body-parser");
const port = 3000;

// Landing Page
app.get("/", function(req, res){
	res.render("index"); // CHANGE TO LANDING ONCE LANDING IS INCORPORATED!!!
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Landing Page
app.get("/", function(req, res){
	res.render("index");
});


// START THE SERVER
app.listen(port, () => console.log(`app listening on port ${3000}!`));

