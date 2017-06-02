var fs = require("fs");

fs.readFile('input.txt',function(err,data){
	if(err) return console.log(err.stack);
	console.log(data.toString());
});

console.log('program done!');