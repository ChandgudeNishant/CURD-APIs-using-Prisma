# 🚀 CRUD APIs using Prisma

This repository contains a set of CRUD (Create, Read, Update, Delete) APIs built using **Node.js, Express, TypeScript, and Prisma ORM**. It provides a robust backend solution with a PostgreSQL database.

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **TypeScript** - A typed superset of JavaScript
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Relational database

## 📌 Features

✅ CRUD operations on user data 🔄\
✅ Prisma ORM for database interaction 🛢️\
✅ TypeScript for type safety ✨\
✅ PostgreSQL integration 🎯\
✅ RESTful API design 🌐

## 📂 Project Structure

```
📦 CURD-APIs-using-Prisma
├── 📂 src
│   ├── 📄 server.ts         # Entry point
│   ├── 📄 routes.ts         # API Routes
│   ├── 📄 controllers.ts    # Controller functions
│   ├── 📄 services.ts       # Business logic
│   ├── 📄 prisma.ts         # Prisma Client setup
├── 📄 .env                  # Environment variables
├── 📄 package.json          # Dependencies & scripts
├── 📄 README.md             # Documentation
```

## 🚀 Installation & Setup

1️⃣ Clone the repository:

```bash
 git clone https://github.com/ChandgudeNishant/CURD-APIs-using-Prisma.git
```

2️⃣ Navigate to the project directory:

```bash
 cd CURD-APIs-using-Prisma
```

3️⃣ Install dependencies:

```bash
 npm install
```

4️⃣ Set up environment variables:

- Create a `.env` file and add your PostgreSQL connection string:

```env
DATABASE_URL="your_postgresql_connection_string"
```

5️⃣ Run Prisma migrations:

```bash
 npx prisma migrate dev --name init
```

6️⃣ Start the server:

```bash
 npm run dev
```

## 📡 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Fetch all users   |
| GET    | `/users/:id` | Get a user by ID  |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

## 📜 License

This project is licensed under the **MIT License**.

## 🤝 Contributing

Contributions are welcome! Feel free to fork, open an issue, or submit a pull request.

## 📬 Contact

💡 **Author**: Nishant Chandgude\
🐙 GitHub: [ChandgudeNishant](https://github.com/ChandgudeNishant)

---

🚀 Happy Coding! 🎉

