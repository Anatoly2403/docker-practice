const port = process.env.PORT || 3001;
const db = process.env.MONGO_URL;
const apiUrl = process.env.API_URL;

module.exports = {
  port,
  db,
  apiUrl,
};
