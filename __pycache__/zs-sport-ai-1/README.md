# ZS Sport AI

## Project Overview
ZS Sport AI is a web application designed to provide sports-related data and functionalities. This project utilizes a PHP backend with a MySQL database for data storage and retrieval.

## File Structure
```
zs-sport-ai
├── public
│   └── index.php          # Entry point for the web application
├── src
│   ├── controllers
│   │   └── index.php      # Controller for handling requests
│   ├── routes
│   │   └── api.php        # API routes for the application
│   └── models             # Directory for model files
├── db.php                 # Database connection file
└── README.md              # Project documentation
```

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd zs-sport-ai
   ```

2. **Database Configuration**
   - Ensure you have a MySQL server running.
   - Create a database named `zs_sport_ai`.
   - Update the `db.php` file with your database credentials if necessary.

3. **Install Dependencies**
   - If using Composer, run:
   ```
   composer install
   ```

4. **Run the Application**
   - Start a local server (e.g., using PHP's built-in server):
   ```
   php -S localhost:8000 -t public
   ```
   - Access the application at `http://localhost:8000`.

## Usage
- The application provides various endpoints defined in `src/routes/api.php`.
- Use the appropriate HTTP methods (GET, POST, etc.) to interact with the API.

## Contributing
- Contributions are welcome! Please submit a pull request or open an issue for discussion.

## License
- This project is licensed under the MIT License. See the LICENSE file for details.