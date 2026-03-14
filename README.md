# Faculty Recruitment Portal

A full-stack **Faculty Recruitment Portal** developed to streamline academic application submission and management.

Built using **Node.js, Express.js, MySQL, and EJS**, the platform enables applicants to submit structured academic information while allowing administrators to manage applications efficiently.

---

## Tech Stack

| Layer | Technologies |
|------|-------------|
| Frontend | HTML, CSS, Bootstrap, JavaScript, jQuery, EJS |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Tools | Git, GitHub, Docker (optional) |

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pankhudibuilds/Faculty-Recruitment-Portal-.git
cd Faculty-Recruitment-Portal-
```

---

### 2. Install Requirements

Install the following:

- Node.js
- MySQL

Verify installation:

```bash
node -v
npm -v
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Setup Database

Login to MySQL:

```bash
sudo mysql
```

Create database:

```sql
CREATE DATABASE faculty_recruitment;
USE faculty_recruitment;
```

Create required table:

```sql
CREATE TABLE register (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  category VARCHAR(50),
  email VARCHAR(150) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Exit MySQL:

```sql
EXIT;
```

---

### 5. Configure Database Connection

Update database credentials in the configuration file:

```javascript
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "faculty_recruitment"
});

module.exports = db;
```

---

### 6. Run the Application

```bash
node index.js
```

Open in browser:

```
http://localhost:5000
```

---

## Features

- Secure authentication system (login, signup, password reset)
- Faculty application submission system
- MySQL database integration
- RESTful backend architecture
- Dynamic UI using EJS and Bootstrap

---

## Future Improvements

- Multi-institute scalability for multiple IITs
- Application status tracking
- Role-based authentication
- Secure document uploads
- Cloud deployment using Docker or AWS

---

## Contributors

- Riddhesh Dalal
- Pankhudi Pandey

---

## License

This project is intended for educational and development purposes.