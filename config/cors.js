const cors = require('cors');

const corsMiddleware = cors({
  origin: '*', // allow requests from all origins
  methods: ['GET', 'POST'] // allow these HTTP methods
});

module.exports = corsMiddleware;