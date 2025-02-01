const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../src/lib/mongodb');  // Adjusted the path
const Category = require('../src/models/Category');  // Adjusted the path
const Size = require('../src/models/Size');        // Adjusted the path
const Product = require('../src/models/Product'); 

dotenv.config();

const categories = [
    { name: 'Honey' },
    { name: 'Beauty' },
    { name: 'Parfum' }
];

const sizes = [
    { name: 'Small', price: 100 },
    { name: 'Medium', price: 110 },
    { name: 'Large', price: 120 }
];

const seedDatabase = async () => {
    try {
        // Connect to DB
        await mongoose.connect(process.env.MONGO_URI);

        // Clear existing data
        await Category.deleteMany();
        await Size.deleteMany();
        await Product.deleteMany();

        // Insert new data
        const insertedCategories = await Category.insertMany(categories);
        const insertedSizes = await Size.insertMany(sizes);

        // Create sample products
        const products = [
            {
                name: 'Daghmous',
                categorie: insertedCategories[0]._id,
                image: '/uploads/placeholder.svg',
                sizes: [
                    { size: insertedSizes[0]._id, price: insertedSizes[0].price },
                    { size: insertedSizes[1]._id, price: insertedSizes[1].price }
                ]
            },
            {
                name: 'Adidas Hoodie',
                categorie: insertedCategories[1]._id,
                image: '/uploads/placeholder.svg',
                sizes: [
                    { size: insertedSizes[1]._id, price: insertedSizes[1].price },
                    { size: insertedSizes[2]._id, price: insertedSizes[2].price }
                ]
            }
        ];

        await Product.insertMany(products);
        console.log('Data seeded successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
        process.exit(1);
    }
};

seedDatabase();
