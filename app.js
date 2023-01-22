const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/products');
const session = require('express-session');

const app = express();
const publicDirectory = path.resolve(__dirname, './public');

app.use(express.static(publicDirectory));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret: "Shh, es un secreto!"}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);
app.use('/user',userRoutes);
app.use('/products',productsRoutes);

app.listen(process.env.PORT || 3050, () => console.log('Servidor activo-3050'));
