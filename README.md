📌 README.md - AI Chatbot with Vue.js
📝 Introduction
This is an AI Chatbot application built with Vue.js 3. The chatbot sends user messages to the Groq API and displays AI responses with a sleek user interface.

🏗 Technologies Used
Vue.js 3 (Composition API, ref)
Axios (for API requests)
Tailwind CSS (for styling)
⚙ Project Structure
bash
Copy
Edit
📂 src/
│── 📂 components/
│   ├── Chatbot.vue  # Main chatbot component
│── 📂 assets/        # Contains images and icons (if needed)
│── App.vue           # Main file to render the chatbot
│── main.js           # Vue entry point
│── README.md         # Documentation
🚀 Installation & Running the Project
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/your-repo/chatbot-vue.git
cd chatbot-vue
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Run the application

bash
Copy
Edit
npm run dev
🔥 How the Chatbot Works
The user enters a message and presses Enter or Send.
The message is displayed in the chat interface.
The AI API (Groq API) processes the message and returns a response.
The AI's response is displayed in the chat interface.
🛠 Configuring the API Key
You need to add your API key to the .env file before running the project:

bash
Copy
Edit
VITE_GROQ_API_KEY=your_api_key_here
📌 Notes
If the API returns a 404 error, check the API URL.
If there's no response from the AI, verify your API key.
📌 You can customize the UI by modifying the Chatbot.vue file!

🛠 Happy coding! 🚀