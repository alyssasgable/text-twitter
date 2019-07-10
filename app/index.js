require("dotenv").config();
const app = require("./app");

// 404
app.use((req, res, next) => {
  return res
    .status(404)
    .send({ message: "[Route] --> " + req.url + " <-- Not found." });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.status(500).json({ error: err });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🔥 -------- listening on PORT: ${PORT} ---------- 🔥`));