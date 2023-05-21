# Whatsapp AI chatbot

## Project description:

This project aims to develop a WhatsApp chatbot using the OpenAI API to enhance the comunication experiencie for The Hub Coworking members. Is also a starting point in the search to integrate and adapt OpenAI services to the needs of different businesses.

### Next steps:

- Train it with the company data.

## Technologies:

Programming language: JavaScript

- Server environment: Node.js
- Backend framework: Express.js
- Communication API: Twilio

Artificial Intelligence: OpenAI

Environment variables module: .env

## Versioning:

node --> 18.12.1

## How it works:

![API](https://github.com/vanavi-bernitez/Viviana_HTML_final_project/assets/115891257/5063d989-0709-4315-baca-f59d31fe1174)

## How to install and run the Project:

1. Ensure Node.js is installed on your machine. If you don't, download it from the official Node.js website (https://nodejs.org) and follow the installation instructions for your operating system.

2. Clone the project repository to your local machine.

```
git clone <THIS REPO URL>
```

4. Open a terminal and navigate to the project's root directory.

5. Install the project dependencies.

```
npm install
```

6. Start the project by running the next command:

```
node index.js
```

Or with Nodemon: it restarts the application when detects any changes

```
nodemon index.js
```

7. Use the API endpoint and test it on POSTMAN. The message sendend in the request body should be an object with the next structure:

```
{
    message: "Your message here"
}
```
