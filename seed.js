const mongoose = require('mongoose');

const Product = require('./models/Product');

const products = [
    {
        author: "A.P.J Abdul Kalam",
        quote: "Dream is not the thing you see in sleep but is that thing that doesn't let you sleep."
    },
    {
        author: "Mustafa Kemal",
        quote: "A good teacher is like a candle—it consumes itself to light the way for others."
    },
    {
        author: "Ratan Tata",
        quote: "Polish your talents like you would polish your diamonds."
    },
    {
        author: "Vivek Bindra",
        quote: "Every negative incident has a positive intent."
    },
    {
        author: "Sarojini Naido",
        quote: "I am not ready to die because it requires infinity greater courage to live."
    },
    {
        author: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world."
    },
    {
        author: "Swami Vivekanand",
        quote: "All power is within you , you can do anything and everything."
    },


]

// seeding function
async function seedDB(){
    await Product.insertMany(products);
    console.log("Data seeded successfully")
}

module.exports = seedDB;