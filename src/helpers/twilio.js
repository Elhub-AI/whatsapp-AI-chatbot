import Twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const twilioClient = Twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendTwilioMessage = async ({ message, userContact }) => {
  if (message !== "") {
    return twilioClient.messages.create({
      body: message,
      // TODO: add a supported number for the business
      from: "whatsapp:+14155238886",
      to: userContact,
    });
  } else {
    throw new Error("Invalid message");
  }
};
