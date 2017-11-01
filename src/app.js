import express from 'express';
import routes from './routes';

let app = express();

app.use('/', routes);

export default app;