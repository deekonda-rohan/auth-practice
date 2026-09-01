require("dotenv").config();
const app = require("./src/app.js");
const connectdb = require("./src/db/db.js");

connectdb();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})