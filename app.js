let express = require("express"),
    app = express();
const port = 3000;


// Routes
/* let indexRoutes = require("./routes/index");

// Configs

*/


// Landing Page
app.get("/", function(req, res){
	res.render("index"); // CHANGE TO LANDING ONCE LANDING IS INCORPORATED!!!
});


// START THE SERVER
app.listen(port, () => console.log(`app listening on port ${3000}!`));