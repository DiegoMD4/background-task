import express from "express";
const app = express();

app.set('PORT', process.env.PORT || 4000)

//application routes
app.get('/', (req, res) =>{
    res.send("Hello World");
})



//server initialization
app.listen(app.get('PORT'),(req,res)=>{
    console.log(`Server started at http://localhost:${app.get('PORT')}`)
});
  