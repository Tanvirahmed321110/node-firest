const express=require('express')
const cors=require('cors')
// const { json } = require('express/lib/response')
const app=express()


app.use(cors())
app.use(express.json())
const port=4000



const user=[
    { name:'tanvir',id:0,Email:'tanvir@hmail.com'},
    { name:'sakid',id:1,Email:'sakid@hmail.com'},
    { name:'osam',id:2,Email:'osam@hmail.com'},
    { name:'barek',id:3,Email:'barek@hmail.com'},
    // { name:'b',id:34,Email:433},
 ]

 const foods=[
     {name:'mango',color:'red'},
     {name:'vagitable',color:'s'},
     {name:'meet',color:'pik'},
     {name:'fish',color:'silver'},
     {name:'fish',color:'silver'},
 ]



app.get('/',(req,res)=>{
    res.send('this is seconds nodes')
})

app.get('/foods',(req,res)=>{
    const search=req.query.search
    if(search){
      const searchResults=foods.filter(food=>food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      res.send(searchResults)
    }
    else{
        res.send(foods)
    }
})

app.get('/user',(req,res)=>{
    res.send(user)
    // console.log(req.query.search)
})

app.get('/user/:id',(req,res)=>{
    
    const id=req.params.id
    const userId=user[id]
    res.send(userId)
})


//post
app.post('/user',(req,res)=>{
    const newUser=req.body
    newUser.id=user.length
    user.push(newUser)
    console.log('console from post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.listen(port,()=>{
    console.log('listening...',port)
})