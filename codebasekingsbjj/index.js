const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Crie e faça deploy da sua primeira função
exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
