import express from 'express';
import routes from './routes';

let app = express();

app.use('/', routes);

app.listen(3000, () => {console.log('App started on port 3000.')});
