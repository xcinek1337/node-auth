[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mongo,)](https://skillicons.dev)
## nodeJS-auth + JWT
![node-auth](https://github.com/xcinek1337/node-auth/assets/125750465/96480cc2-6d1c-4450-b5c7-ac648737a3ad)

This course was used to teach how user authentication works, creating a user along with storing data in a database(hashing password with bscrypt). The second most important point in this project was to create a page with access only for logged-in users, for this the JSON WEB TOKEN package was used, which with its usability facilitated the process of verifying whether the user is logged in.  
## Usage

1. Register a new user.
2. Log in with the registered credentials.
3. Access protected routes available only to authenticated users.

## Utility

- **User Authentication**: Implemented user registration and login functionality.
- **Password Hashing**: Used bcrypt to hash passwords before storing them in the database.
- **Protected Routes**: Created pages that can only be accessed by authenticated users.
- **JWT**: Utilized JSON Web Tokens to manage user sessions and authentication status.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JsonWebToken
- Bcrypt
- EJS

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. You can add your MongoDB URL, but for this example, I provide my test collection:
   ```bash
    const dbURII = your_mongodb_uri
   ```
4. Start the server (make sure you have nodejs): 
    ```bash
    node app
    ```
    or (automatically restart the server after code changes)
    ```
    nodemon app
    ```
## Acknowledgements
This project was created as part of a [YouTube Tutorial](<https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp>). Despite the fact that the material is not the latest, I highly recommend going through this tutorial, because the author explains the operation of the code in an easy and understandable way.
