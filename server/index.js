require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes/main');
const MongoStore = require('connect-mongo');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
}));

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})