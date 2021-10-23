const express = require('express');
const cors =require('cors')
const app = express();

app.use(cors())
app.use(express.json());


const port = 5000;

app.get('/', (req, res) => {
    res.send('hello, this is node and express');
});


const users =[
    {id:0, name :"shanana" , email: "ryui@hmail.com", phone:'0138737' },
    {id:1, name :"bnana" , email: "ryui@hmail.com", phone:'0138737' },
    {id:2, name :"dhanana" , email: "ryui@hmail.com", phone:'0138737' },
    {id:3, name :"fshanana" , email: "ryui@hmail.com", phone:'0138737' },
    {id:4, name :"dshanana" , email: "ryui@hmail.com", phone:'0138737' },
    {id:5, name :"fshanana" , email: "ryui@hmail.com", phone:'0138737' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parametere
    if (search ){
        const searchResult = users.filter(user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});
// app.METHOD 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
});