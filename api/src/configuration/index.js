const port = process.env.PORT || 3001;
const db = process.env.MONGO_URL;
const authApiUrl = process.env.AUTH_API_URL;

module.exports = {
  port,
  db,
  authApiUrl,
};
