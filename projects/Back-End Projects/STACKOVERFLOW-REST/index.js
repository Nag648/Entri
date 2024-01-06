const express = require('express')
const app = express()


const questions = [
  {
    question:"how to install python",
    slug:"how to install python",
    votes:3,
    views:10,
    tags:"python, pip, query"
},
{
  question:"how to install pip",
  slug:"how to install pip",
  votes:3,
  views:10,
  tags:"python, pip, query"
},
{
  question:"how to install query",
  slug:"how to install query",
  votes:3,
  views:10,
  tags:"python, pip, query"
}

]

const users = [
  {
   Name : "srilakshmi",
   followers : 1000,
   location : "guntur"
  },
  {
    Name : "sri",
    followers : 1010,
    location : "vinukonda"
   },
   {
    Name : "lakshmi",
    followers : 1300,
    location : "hyd"
   },
  
]

app.get('/',(req,res)=>{
      res.send("Home")
})
app.get('/questions',(req,res)=>{
  res.send(questions)
})
app.get('/questions/:slug',(req,res)=>{
  console.log(req.params.slug)
  const slug = req.params.slug
  questions.map(obj=>{
    if (obj.slug === slug){
      res.send(obj)
    }

  })
  res.send("question not found")
})
app.get('/users',(req,res)=>{
  res.send(users)
})
app.get('/tags',(req,res)=>{
  res.send("Tags")
})
app.get('/jobs/companies',(req,res)=>{
  res.send("companies")
})



app.listen(3001,()=>{
  console.log("server is runing")  
})