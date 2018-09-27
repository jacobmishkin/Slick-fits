const cookieParser = require('cookie-parser');
require('dotenv').config({ path: '.env' });
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

// decode the JWT so we can get the user ID on reach request.
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the user Id on to the req
    req.userId = userId;
  }
  next();
});

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
