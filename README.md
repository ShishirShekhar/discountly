# Discountly

Discountly is a web application that allows users to manage and track discount coupons. It provides features to add, edit, and delete coupons, as well as search for coupons based on various criteria.

## Features

- Add a new coupon with a unique code, discount amount, and expiration date.
- Edit an existing coupon to update its code, discount amount, or expiration date.
- Delete a coupon from the list.
- Search for coupons based on code, discount amount, or expiration date.

## Technologies Used

- Front-end: React.js, React Router, Axios, Tailwind CSS
- Back-end: Node.js, Express.js, MongoDB
- Database: MongoDB Atlas

## Installation

1. Clone the repository:

```shell
git clone https://github.com/ShishirShekhar/discountly.git
```

2. Install the dependencies for the server:

```shell
cd discountly/server
npm install
```

3. Set up the MongoDB connection:

   - Create a MongoDB Atlas cluster.
   - Create a `.env` file in the `server` directory and add your MongoDB connection URL:

   ```plaintext
   MONGODB_URI=<your-mongodb-connection-url>
   ```

4. Start the server:

```shell
npm start
```

5. Install the dependencies for the client:

```shell
cd ../client
npm install
```

6. Start the client:

```shell
npm start
```

7. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access Discountly.

## API Endpoints

- `GET /coupons`: Get all coupons.
- `POST /coupons`: Add a new coupon.
- `PUT /coupons/:id`: Update an existing coupon.
- `DELETE /coupons/:code`: Delete a coupon by code.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Built with ❤️ by [Shishir Shekhar](https://github.com/ShishirShekhar)
