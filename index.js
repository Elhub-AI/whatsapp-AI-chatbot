import express from "express";
import bodyParser from "body-parser";
import { sendChatbotMessage } from "./src/controllers/chatbotController.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.post("/chatbot", sendChatbotMessage);

app.listen(3000, () => console.log("Listening on port 3000..."));
