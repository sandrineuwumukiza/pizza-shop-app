// {
//     "swagger": "2.0",
//     "info": {
//       "title": "Pizza Shop Backend API",
//       "description": "API documentation for Pizza Shop app",
//       "version": "1.0.0"
//     },
//     "host": "localhost:3000",
//     "basePath": "",
//     "schemes": [
//       "http",
//       "https"
//     ],
//     "securityDefinitions": {
//       "BearerAuth": {
//         "type": "apiKey",
//         "name": "Authorization",
//         "in": "header",
//         "description": "Enter JWT token in the format: Bearer <token>"
//       }
//     },
//     "paths": {
//       "/users/registerUser": {
//         "post": {
//           "summary": "Create an account",
//           "description": "Register a new user with role (user or admin)",
//           "tags": [
//             "Buyer Auth"
//           ],
//           "parameters": [
//             {
//               "in": "body",
//               "name": "body",
//               "schema": {
//                 "$ref": "#/definitions/RegisterUserRequest"
//               },
//               "required": true,
//               "description": "User registration details"
//             }
//           ],
//           "responses": {
//             "201": {
//               "description": "User created"
//             },
//             "400": {
//               "description": "Bad request - User already exists or missing fields"
//             }
//           }
//         }
//       },
//       "/users/login": {
//         "post": {
//           "summary": "Login into your account",
//           "description": "Authenticate and login an existing user",
//           "tags": [
//             "Buyer Auth"
//           ],
//           "parameters": [
//             {
//               "in": "body",
//               "name": "body",
//               "schema": {
//                 "$ref": "#/definitions/LoginRequest"
//               },
//               "required": true,
//               "description": "User login credentials"
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "User logged in successfully"
//             },
//             "400": {
//               "description": "Bad request - Invalid credentials"
//             }
//           }
//         }
//       },
//       "/products/addProduct": {
//         "post": {
//           "summary": "Create a new Product",
//           "description": "Add a new product to the database",
//           "tags": [
//             "Product"
//           ],
//           "consumes": [
//             "multipart/form-data"
//           ],
//           "parameters": [
//             {
//               "in": "formData",
//               "name": "userId",
//               "type": "string",
//               "required": true,
//               "description": "User ID of the product owner"
//             },
//             {
//               "in": "formData",
//               "name": "productName",
//               "type": "string",
//               "required": true,
//               "description": "Product name"
//             },
//             {
//               "in": "formData",
//               "name": "description",
//               "type": "string",
//               "required": true,
//               "description": "Product description"
//             },
//             {
//               "in": "formData",
//               "name": "image",
//               "type": "file",
//               "description": "Product image"
//             },
//             {
//               "in": "formData",
//               "name": "price",
//               "type": "number",
//               "required": true,
//               "description": "Product price"
//             },
//             {
//               "in": "formData",
//               "name": "category",
//               "type": "string",
//               "enum": [
//                 "Food",
//                 "Fruits",
//                 "Alcohol",
//                 "Juice",
//                 "Soft drinks and Juice",
//                 "Coffee",
//                 "Wine"
//               ],
//               "required": true,
//               "description": "Product category"
//             }
//           ],
//           "security": [
//             {
//               "BearerAuth": []
//             }
//           ],
//           "responses": {
//             "201": {
//               "description": "Product created successfully"
//             },
//             "400": {
//               "description": "Bad request - Validation error"
//             }
//           }
//         }
//       },
//       "/products/productList": {
//         "get": {
//           "summary": "Get all products",
//           "description": "Retrieve a list of all products",
//           "tags": [
//             "Product"
//           ],
//           "responses": {
//             "200": {
//               "description": "Successful retrieval"
//             },
//             "404": {
//               "description": "Products not found"
//             }
//           }
//         }
//       },
//       "/products/productById/{id}": {
//         "get": {
//           "summary": "Get product by ID",
//           "description": "Retrieve a product by its ID",
//           "tags": [
//             "Product"
//           ],
//           "parameters": [
//             {
//               "name": "id",
//               "in": "path",
//               "required": true,
//               "type": "string",
//               "description": "ID of the product to retrieve"
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Successful retrieval"
//             },
//             "404": {
//               "description": "Product not found"
//             }
//           }
//         }
//       },
//       "/products/updateProduct/{id}": {
//         "put": {
//           "summary": "Update product by ID",
//           "description": "Update an existing product by its ID",
//           "tags": [
//             "Product"
//           ],
//           "parameters": [
//             {
//               "name": "id",
//               "in": "path",
//               "required": true,
//               "type": "string",
//               "description": "ID of the product to update"
//             },
//             {
//               "in": "body",
//               "name": "body",
//               "schema": {
//                 "$ref": "#/definitions/Product"
//               },
//               "required": true,
//               "description": "Updated product details"
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Product updated successfully"
//             },
//             "404": {
//               "description": "Product not found"
//             }
//           }
//         }
//       },
//       "/products/deleteProduct/{id}": {
//         "delete": {
//           "summary": "Delete product by ID",
//           "description": "Delete an existing product by its ID",
//           "tags": [
//             "Product"
//           ],
//           "parameters": [
//             {
//               "name": "id",
//               "in": "path",
//               "required": true,
//               "type": "string",
//               "description": "ID of the product to delete"
//             }
//           ],
//           "responses": {
//             "204": {
//               "description": "Product deleted successfully"
//             },
//             "404": {
//               "description": "Product not found"
//             }
//           }
//         }
//       },
//       "/cart/addToCart": {
//         "post": {
//           "summary": "Add product to cart",
//           "description": "Add a product to the user's cart",
//           "tags": [
//             "Cart"
//           ],
//           "parameters": [
//             {
//               "in": "body",
//               "name": "body",
//               "schema": {
//                 "$ref": "#/definitions/AddToCartRequest"
//               },
//               "required": true,
//               "description": "Product details to add to cart"
//             }
//           ],
//           "security": [
//             {
//               "BearerAuth": []
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Product added to cart successfully"
//             },
//             "400": {
//               "description": "Bad request - Invalid product data"
//             }
//           }
//         }
//       },
//       "/cart/removeFromCart/{id}": {
//         "delete": {
//           "summary": "Remove product from cart",
//           "description": "Remove a product from the user's cart by product ID",
//           "tags": [
//             "Cart"
//           ],
//           "parameters": [
//             {
//               "name": "productId",
//               "in": "path",
//               "required": true,
//               "type": "string",
//               "description": "ID of the product to remove from cart"
//             }
//           ],
//           "security": [
//             {
//               "BearerAuth": []
//             }
//           ],
//           "responses": {
//             "204": {
//               "description": "Product removed from cart successfully"
//             },
//             "404": {
//               "description": "Product not found in cart"
//             }
//           }
//         }
//       },
//       "/cart/viewCart": {
//         "get": {
//           "summary": "View cart",
//           "description": "Retrieve the user's current cart contents",
//           "tags": [
//             "Cart"
//           ],
//           "security": [
//             {
//               "BearerAuth": []
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Successful retrieval of cart contents"
//             },
//             "404": {
//               "description": "Cart is empty"
//             }
//           }
//         }
//       },
//       "/pay": {
//         "post": {
//           "summary": "Initiate a payment",
//           "description": "Process a payment using Flutterwave",
//           "tags": ["Payment"],
//           "parameters": [
//             {
//               "in": "body",
//               "name": "body",
//               "schema": {
//                 "$ref": "#/definitions/PaymentRequest"
//               },
//               "required": true,
//               "description": "Payment details"
//             }
//           ],
//           "responses": {
//             "200": {
//               "description": "Payment successful"
//             },
//             "400": {
//               "description": "Bad request - Invalid payment details"
//             }
//           }
//         }
//       }
//     },
//     "definitions": {
//       "RegisterUserRequest": {
//         "type": "object",
//         "properties": {
//           "username": {
//             "type": "string"
//           },
//           "password": {
//             "type": "string"
//           },
//           "role": {
//             "type": "string",
//             "enum": [
//               "user",
//               "admin"
//             ]
//           }
//         },
//         "required": [
//           "username",
//           "password",
//           "role"
//         ]
//       },
//       "LoginRequest": {
//         "type": "object",
//         "properties": {
//           "username": {
//             "type": "string"
//           },
//           "password": {
//             "type": "string"
//           }
//         },
//         "required": [
//           "username",
//           "password"
//         ]
//       },
//       "Product": {
//         "type": "object",
//         "properties": {
//           "userId": {
//             "type": "string"
//           },
//           "productName": {
//             "type": "string"
//           },
//           "description": {
//             "type": "string"
//           },
//           "image": {
//             "type": "string"
//           },
//           "price": {
//             "type": "number"
//           },
//           "category": {
//             "type": "string"
//           }
//         },
//         "required": [
//           "userId",
//           "productName",
//           "description",
//           "price",
//           "category"
//         ]
//       },
//       "AddToCartRequest": {
//         "type": "object",
//         "properties": {
//           "productId": {
//             "type": "string"
//           },
//           "quantity": {
//             "type": "integer"
//           }
//         },
//         "required": [
//           "productId",
//           "quantity"
//         ]
//       },
//       "PaymentRequest": {
//         "type": "object",
//         "properties": {
//           "tx_ref": {
//             "type": "string"
//           },
//           "amount": {
//             "type": "number"
//           },
//           "currency": {
//             "type": "string"
//           },
//           "redirect_url": {
//             "type": "string"
//           },
//           "payment_options": {
//             "type": "string"
//           },
//           "customer": {
//             "type": "object"
//           },
//           "customizations": {
//             "type": "object"
//           }
//         },
//         "required": [
//           "tx_ref",
//           "amount",
//           "currency",
//           "redirect_url",
//           "payment_options"
//         ]
//       }
//     }
//   }
  