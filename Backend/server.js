// server.js

import express from "express";
import dotenv from 'dotenv';
import { db_connection } from "./mongo_connection.js";

dotenv.config({ path: '../config/.env' });

const app = express();
const port = process.env.SERVER_PORT ;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const db_url = process.env.MONGO_DB_URL;

// Call the db_connection function to establish the database connection
db_connection(db_url);


