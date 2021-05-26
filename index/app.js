var express = require("express");
var app= express();
var request=require("request");
app.use("/public",express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
	request("https://api.wazirx.com/api/v2/tickers",function(error,response,body){
		if(!error && response.statusCode==200){
			var data =JSON.parse(body);
			res.render("homepage",{data:data});
		}
})
})

app.listen(process.env.PORT,process.env.IP,function(){
	console.log("Server is started");
})