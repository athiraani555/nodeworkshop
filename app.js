const express=require('express');
var hbs=require('hbs');
var app=express();

app.set('view engine','hbs');
app.get('/',(req,res)=>{

res.send('<h1>welcome to my webpage</h1>');
});
app.get('/home', (req,res)=>{

    res.render("index.hbs");
}
  );
  app.get('/contact',(req,res)=>{

res.render("index.hbs");
  });
app.listen(3000);
