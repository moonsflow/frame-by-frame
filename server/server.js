import Express from 'express';
import path from 'path';

// Webpack
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// API
import forecast from './routes/api/forecast';
import giphy from './routes/api/giphy'

const app = new Express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo:true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(Express.static(path.resolve(__dirname, '../dist/')));
app.use('/api', forecast);
app.use('/api', giphy);


app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port: ${port}!`);
  }
});

export default app;