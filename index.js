const express = require("express")
const db =require("./routes/db-config")
const app = express()
const cookie = require("cookie-parser")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000

app.use("/js", express.static(__dirname + "/public/js"))
app.use("/images", express.static(__dirname + "/public/images"))
app.use("/css", express.static(__dirname + "/public/css"))
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(cookie())
app.use(express.json())
db.connect((err)=>{
    if(err){
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Database connected");
});
app.use("/", require("./routes/pages"))
app.use("/api", require("./controllers/auth"))
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
