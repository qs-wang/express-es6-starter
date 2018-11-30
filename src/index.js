import app from './app';
import {getLogger} from './utils/loggerfactory';

const logger = getLogger('index');

app.listen(3001, ()=>{
  logger.info('App started on port 3001.');
});
