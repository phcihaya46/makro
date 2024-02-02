const cloudinary = require("cloudinary").v2

cloudinary.config({ 
    cloud_name: 'db6rjmnwz', 
    api_key: '298229473635324', 
    api_secret: process.env.CLOUDINARY_SECRET, 
  });

module.exports = cloudinary

