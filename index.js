import express  from "express"
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Home page is working ');
})

app.get('/about',(req,res)=>{
    res.send("about page is working");

})
app.get('/services',(req,res)=>{
    res.send("about page is working");
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})


