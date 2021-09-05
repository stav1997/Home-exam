const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){

        res.render('index', {listUsers:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}

exports.addUserRoutes = (req, res)=>{
    res.render('addUser.ejs');
}

exports.updateUserRoutes = (req, res)=>{
    console.log("in update user route")
    let userid = req.query.id
    console.log(userid)

    axios.get('http://localhost:3000/api/user', {params:{id:userid}})
    .then(function(userdata){
        console.log(userdata.data[0].last_connection);
        res.render('updateUser', {user:userdata.data[0]});
    })
    .catch(err=>{
        res.send(err);
    })
}
