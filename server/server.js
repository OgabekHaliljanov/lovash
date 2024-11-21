const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Настроим middleware
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Схема для продуктов меню
const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Роут для получения всех продуктов
app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();  // Получаем все продукты
    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).send('Error fetching menu items');
  }
});

// Роут для добавления нового продукта
app.post('/api/menu', async (req, res) => {
  const { name, description, price } = req.body;
  const newItem = new MenuItem({ name, description, price });

  try {
    const savedItem = await newItem.save();  // Сохраняем новый продукт
    res.json(savedItem);  // Возвращаем сохраненный продукт
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Error adding product');
  }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
