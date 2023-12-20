import express from 'express';
import { create } from 'express-handlebars';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

// ROUTES
import AuthRoutes from './routes/auth.js';
import ProductsRoutes from './routes/products.js';

dotenv.config();

const app = express();

const hbs = create({ defaultLayout: 'main', extname: 'hbs' });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(AuthRoutes);
app.use(ProductsRoutes);

const startApp = async () => {
      try {
            await mongoose.connect(process.env.MONGO_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
            });

            console.log('Mongo DB connected');

            const PORT = process.env.PORT || 4500;
            app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
      } catch (error) {
            console.error('Error starting the app:', error.message);
      }
};

startApp();

