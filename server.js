const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbconfig');
const bookRoutes = require('./routes/bookRoutes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Loading environment variables
dotenv.config(); 

//Database connection
connectDB(); 
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Library Management API',
        description: 'API for managing books in a library',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000', 
        },
      ],
    },
    apis: ['./routes/bookRoutes.js'],
  };
  
const app = express();

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Handle and parse JSON data
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use('/api', bookRoutes);

// Port setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
