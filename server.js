import express from 'express';
import indexRoutes from './routes/index';

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json({ limit: '50mb' }))
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
