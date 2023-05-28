import dotenv from "dotenv";
import Axios from "axios";

import { handleError } from "../helpers/errors.js";
import { sendTwilioMessage } from "../helpers/twilio.js";

dotenv.config();

const sendOpenAIChatRequest = async ({ message }) => {
  try {
    const messageData = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: message }],
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    };
    const chatRequest = await Axios.post(
      "https://api.openai.com/v1/chat/completions",
      messageData,
      headers
    );
    return {
      responseMessage: chatRequest?.data?.choices?.[0]?.message?.content,
    };
  } catch (error) {
    throw new Error(error);
  }
};

/*
Recieves a message from twilio with: ProfileName, Body, From
*/
export const sendChatbotMessage = async (req, res) => {
  try {
    const { Body: message, From: userContact } = req.body;
    if (typeof message === "string" && message !== "") {
      const { responseMessage } = await sendOpenAIChatRequest({ message });
      const sentMessage = await sendTwilioMessage({
        message: responseMessage,
        userContact,
      });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          responseMessage,
          messageSid: sentMessage.sid,
          messageStatus: sentMessage.status,
        })
      );
    } else {
      handleError({ res, errorMessage: "invalid message" });
    }
  } catch (error) {
    handleError({ res, errorMessage: error?.message || error?.name });
  }
};