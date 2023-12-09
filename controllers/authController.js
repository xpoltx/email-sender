import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

export const register = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;

    bcrypt
        .hash(req.body.password, 10)
        .catch((err) => {
            res.status(400).json('Error while hashing password');
        })
        .then((hash) => {
            const user = User.create({
                username: username,
                password: hash,
                email: email,
                role: role,
            })
                .then((userData) => {
                    res.status(201).json({
                        username: userData.username,
                        email: userData.email,
                        role: userData.role,
                    });
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        });
};

export const login = (req, res) => {
    const email = req.body.email;

    User.findOne({ email: email })
        .then((user) => {
            bcrypt
                .compare(req.body.password, user.password)
                .then(() => {
                    console.log('Login succeed');
                })
                .catch((err) => {
                    return res.status(500).json(err);
                });

            res.status(201).json({
                username: user.username,
                email: user.email,
                role: user.role,
            });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
};
