import express from 'express'

const app =express();

app.get('/',(req,res)=>{
    res.send("Server Ready");
})

//get a list of jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'Joke One',
            content:'Laugh One'
        },
        {
            id:2,
            title:'Joke Two',
            content:'Laugh Two'
        },
        {
            id:3,
            title:'Joke Three',
            content:'Laugh Three'
        },
        {
            id:4,
            title:'Joke Four',
            content:'Laugh Four'
        },
        {
            id:5,
            title:'Joke Five',
            content:'Laugh Five'
        },
    ];
    res.send(jokes)
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serving at port ${port}`)
})