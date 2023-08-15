const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const databaseUrl = 'mongodb://localhost:27017/aswin';

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
