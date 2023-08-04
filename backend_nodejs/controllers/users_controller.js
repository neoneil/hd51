const User = require('../models/mongo_users')
const mongoose = require('mongoose')
const Users = async (req, res) => {
    const users_from_db = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(users_from_db);

}

const One_user = async (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    {
        return res.status(404).json({error:'not legal id!'});
    }
    const users_from_db = await User.findById({ _id: req.params.id })
    if(!users_from_db)
    {
        return res.status(404).json({error:'No entry found!'});
    }
    res.status(200).json(users_from_db);
}

const Save_user = (req, res, next) => {
    //console.log(req.body);
    let user = new User({
        name: req.body.name,
        exam: req.body.exam,
        current_level: req.body.current_level,
        aim: req.body.aim,
        purpose: req.body.purpose,
        deadline: req.body.deadline,
        email: req.body.email,
        city: req.body.city
        
    })
    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json(error)
        })
}

const Delete_user = async (req, res, next) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'not legal deleting id!'});
    }
    const deleted_user = await User.findOneAndDelete({_id:id});
    if(!deleted_user)
    {
        return res.status(404).json({error:'No entry found!'});
    }
    res.status(200).json(deleted_user);

}

const Update_user = async (req, res, next) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'not legal updating id!'});
    }
    const updated_user = await User.findOneAndUpdate({_id:id}, {
        ...req.body
    });
    if(!updated_user)
    {
        return res.status(404).json({error:'No entry found!'});
    }
    res.status(200).json(updated_user);

}


module.exports = { Users, One_user, Save_user, Delete_user, Update_user };