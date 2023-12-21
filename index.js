import express from 'express';
import { create } from 'express-handlebars';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import flash from "connect-flash"
import session from 'express-session';
import varMiddleware from './middleware/var.js';
import cookieParser from 'cookie-parser';
import userMiddleware from './middleware/user.js';
import hbsHelper from "./utils/index.js"

// ROUTES
import AuthRoutes from './routes/auth.js';
import ProductsRoutes from './routes/products.js';

dotenv.config();

const app = express();

const hbs = create({ defaultLayout: 'main', extname: 'hbs' , helpers : hbsHelper });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(session({ secret: 'Nurik', resave: false, saveUninitialized: false }))
app.use(flash())
app.use(varMiddleware)
app.use(userMiddleware)

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

