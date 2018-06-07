import app from './config/express';
import { authRoute, userRoute, commentRoute, postRoute } from './routes';
import { connectMongoose } from './config/mongo';
import oauth from './config/auth';

connectMongoose();

app.get('/', (req, res) => {
  res.send('index');
});

// Routes
app.use(authRoute);
app.use(userRoute);
app.use(commentRoute);
app.use(postRoute);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).send(err.message);
});

const { PORT = 8080 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
