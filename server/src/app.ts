import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as flickrRouter } from './routes/flicker';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/flickr', flickrRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
