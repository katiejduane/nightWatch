require("babel-core/register");
const fs = require("fs");

module.exports = ((settings) => {
    const seleniumServerFileName =
        fs.readdirSync("node_modules / selenium - standalone /.selenium / selenium - server /");
    settings.selenium.server_path += seleniumServerFileName;
    return settings;
})(require("./nightwatch.json"));


// If you prefer to use the nightwatch.json config file to get the selenium server, 
// remember to change this line:

// ”server_path” : “node_modules / selenium - standalone /.selenium / selenium - server /” 

//in your nightwatch.json to this:

// ”server_path” : “node_modules / selenium - standalone /.selenium / selenium - server / x.x.x - server.jar”

// where x.x.x is the version of selenium server installed. Your nightwatch.conf.js file 
// should then look like this:

// module.exports = ((settings) => {
//     return settings;
// })(require(“./nightwatch.json”));