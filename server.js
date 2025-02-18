import express from 'express';
import dotenv from 'dotenv';
import { checkDatabaseConnection } from './Database/db.js';
import router from './Router/friendsRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json())

// Check database connection
checkDatabaseConnection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api',router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
