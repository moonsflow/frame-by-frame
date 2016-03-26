import Express from 'express';
import path from 'path';


const app = new Express();


app.use(Express.static(path.resolve(__dirname, '../public')));


import forecast from './routes/api/forecast';
import giphy from './routes/api/giphy'


app.use('/api', forecast);
app.use('/api', giphy);


const port = process.env.PORT || 3000;
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${port}!`);
  }
});

export default app;