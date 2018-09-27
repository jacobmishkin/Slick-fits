const cookieParser = require('cookie-parser');
require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');


const server = createServer();

server.express.use(cookieParser());

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
