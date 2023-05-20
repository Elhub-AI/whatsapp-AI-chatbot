import dotenv from "dotenv";
import { handleError } from "../helpers/errors.js";
dotenv.config();

const sendOpenAIChatRequest = async ({ message }) => {
  try {
    return await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "assistant", content: message }],
      }),
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const sendChatbotMessage = async (req, res) => {
  try {
    const message = req.body?.message;
    if (typeof message === "string" && message !== "") {
      const chatbotResponse = await sendOpenAIChatRequest({ message });
      console.log("chatbot response", chatbotResponse);
      //TODO: connect to twilio whatsapp service and send message
      //TODO: add chatbotResponse to the http response
    } else {
      handleError({ res, error: new Error("invalid message") });
    }
  } catch (error) {
    handleError({ res, error });
  }
};
