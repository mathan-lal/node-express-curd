import { User } from "../models/user.model.js";

const crateUser = async (req, res, next) => {
   try {
    const payload ={
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const user = await User.findOne({email: payload.email});
    if(user) {
        console.log('User Already Exist');
    }

    const data = await User.create(payload);
    res.status(201).json({data});
   } catch (error) {
    console.log('Error While Creating User: ', error);
   } 
}

const updateUser = async(req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({message: 'User not Found'});
        }

        user.name = name;
        user.email = email;
        
        if (password) {
            user.password = password;
        }

        await user.save();
        return res.status(200).send({user});

    } catch (error) {
        console.log('error while updating user: ', error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user) {
            console.log('User is not found.!');
        }
        const userDeleted = await User.deleteOne({_id: id});
        return res.status(201).json({userDeleted, message: 'user deleted successfully'});

    } catch (error) {
        console.log('Error While Deleting user', error);
    }
}

const getUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        return res.status(200).json({user, message: 'get user successfully'});
    } catch (error) {
        console.log('Error While getting user');
    }
}

export {crateUser, updateUser, deleteUser, getUser};