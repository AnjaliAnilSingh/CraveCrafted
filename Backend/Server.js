import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import UserModel from './user.js';
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());  // Increase the limit for JSON
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],  // Allow only GET and POST methods
    allowedHeaders: ['Content-Type', 'Authorization']  // Allow specific headers
}));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log("Database connection error:", err));

app.get('/', (req, res) => {
    res.send('msg sent!!')
})

app.post('/createUser', (req, res) => {
    UserModel.create(req.body).then(user => console.log(user)).catch(err => console.log(err)) //Creates a new document in the "users" collection
    return res.json({ created: true })
})

app.post('/check', async (req, res) => {
    const { username } = req.body;
    const data = await UserModel.exists({ username: username });
    if (data) {
        console.log('User already exists')
        return res.json({ exists: true, message: 'Username exists in the collection' });
    } else {
        console.log('Username available')
        return res.json({ exists: false, message: 'No such user exists in the collection' });
    }
})

app.post('/auth', async (req, res) => {
    const { username, password } = req.body
    const data = await UserModel.findOne({ username: username })
    if (data) {
        if (data.password == password) {
            res.json({ validCreds: true, message: 'Username and Password are correct,', id: data._id})
        }
        else {
            res.json({ validCreds: false, message: 'Password is wrong!' })
        }
    }
    else {
        res.json({ validCreds: false, message: 'Username does not exist!!' })
    }
})
