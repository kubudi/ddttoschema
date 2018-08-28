var Ddl = require("ddl")
var Pg = require("pg-native")
var fs = require('fs')


var db = new Pg
db.connectSync("postgresql://beamuser:beamuser@localhost:5432/beamdb")

var res = Ddl.postgresqlSync(db, "beamers")
  fs.writeFile("out.json", JSON.stringify(res), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 
