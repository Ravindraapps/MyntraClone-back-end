const app = require("./index");

const connect = require("./configs/db");

app.listen(3780, async() => {
    try{
        await connect();
        console.log("listening on port 3780");
    }catch(err){
        console.log(err);
    }
})