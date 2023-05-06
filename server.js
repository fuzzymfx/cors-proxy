import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser"; 
import axios from "axios";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.raw({ type: 'text/plain' }))


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/post', async (req, res) => {
	console.log(req.body)
  try {
    const response = await axios.post(process.env.API_URL, req.body, {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
        'Authorization': req.headers.authorization
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.listen(3000, () => {
		console.log("Server is running on port 3000.");
		console.log(process.env.API_URL	)
	});


