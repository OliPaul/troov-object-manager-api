import {connect} from "mongoose";

const mongoUri: string = process.env.MONGO_DB_URI || "";

connect(mongoUri)
    .then(() => console.info("Successfully connected to database"))
    .catch((error) => {
        console.error("Unable to connect database");
    });