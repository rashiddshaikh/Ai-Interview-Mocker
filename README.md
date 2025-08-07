# 🧠 AI Interview Mocker

AI-powered interview practice platform using Next.js, Clerk authentication, Drizzle ORM, and Google's Generative AI API.

---

## 🚀 Features

- ✨ Mock technical interviews powered by Google Generative AI
- 🔐 Authentication via Clerk (login/signup support)
- 🎨 TailwindCSS for responsive UI with dark mode support
- 🗂️ Drizzle ORM for PostgreSQL integration
- 🧠 Intelligent Q&A engine simulating real interview scenarios
- 📦 Deployed with Vercel (zero-config deployment)

---

## 🖥️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Auth**: [Clerk.dev](https://clerk.dev/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **AI Engine**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)
- **Deployment**: [Vercel](https://vercel.com/)

---
## 🧪 Setup & Development
### 1. Clone the repo
```bash
git clone https://github.com/rashiddshaikh/ai-interview-mocker.git
cd ai-interview-mocker
```
### 2. Install dependencies
```bash
npm install
# or
yarn
```
### 3. Configure environment
Create a .env.local file:

```env

GOOGLE_API_KEY=your_google_api_key
CLERK_PUBLISHABLE_KEY=your_clerk_key
DATABASE_URL=your_db_url
```
### 4.  Run the app
```bash
npm run dev
```

Open http://localhost:3000 to view the app.

---
## 🧠 Model Usage
- Uses @google/generative-ai to generate dynamic answers.
- Text-to-text generative models simulate realistic interview responses.
---

## 🛡️ .gitignore
Make sure you have the following in your .gitignore file:
```gitignore
.env.local
node_modules/
dist/
.next/
out/
*.log
```

---
![GitHub Repo stars](https://img.shields.io/github/stars/rashiddshaikh/ai-interview-mocker)
![GitHub forks](https://img.shields.io/github/forks/rashiddshaikh/ai-interview-mocker)
![GitHub issues](https://img.shields.io/github/issues/rashiddshaikh/ai-interview-mocker)
![GitHub last commit](https://img.shields.io/github/last-commit/rashiddshaikh/ai-interview-mocker)

---
##📄 License
This project is licensed under the MIT License.
---
##✍️ Author
Rashid Shaikh
🔗 GitHub: @rashiddshaikh
🔗 LinkedIn: linkedin.com/in/rashidshaikh-dev
📧 Email: rashiddsk05@gmail.com
---
##🌟 Contributing
- Pull requests are welcome!
- For major changes, please open an issue first.
---
##🙏 Acknowledgments
- Google Generative AI for the powerful LLM API
- Clerk.dev for seamless auth integration
- Vercel for effortless deployment
- Open-source community ❤️
---
