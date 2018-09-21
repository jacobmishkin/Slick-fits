require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');


const server = createServer();


//  TODO: use Express middleware to handel cookies (JWT)
// TODO: Use Express middleware to populate current User

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (deets) => {
    console.log(`🚀🚀🚀 Server is now running on port http://localhost:${deets.port}`);
  },
);
