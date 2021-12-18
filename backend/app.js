const { Client } = require("pg");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

const client = new Client(process.env["DATABASE_URL"]);
const query = async (queryText, values) => {
  const result = await client.query(queryText, values);
  return result;
};

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.post("/feedback", async function (req, res) {
  const text = `INSERT INTO feedback(comment, experience_rating, payment_process_rating, customer_service_rating)
   VALUES($1, $2, $3, $4) RETURNING *`;
  try {
    const { comment, experience, paymentProcess, customerService } = req.body;
    const values = [comment, experience, paymentProcess, customerService];
    const result = await query(text, values);
    res.send({ message: "Feedback added", data: result.rows[0] });
  } catch (err) {
    console.log(err.stack);
  }
});

app.listen(port, async () => {
  await client.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
