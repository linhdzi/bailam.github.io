<template>
    <div class="chat-container">
      <header class="chat-header">
        <h1>AI Bot</h1>
      </header>
  
      <div class="chat-box" ref="chatBox">
        <div v-for="(msg, index) in messages" :key="index" :class="msg.role">
          <div class="message">
            <img :src="msg.role === 'user' ? userIcon : botIcon" class="avatar" />
            <span v-if="msg.role === 'user'" class="username">Bạn:</span>
            <span v-else class="username">AI:</span>
            <p v-html="msg.text"></p>
          </div>
        </div>
        <div v-if="isLoading" class="loading">🤖 AI đang suy nghĩ...</div>
      </div>
  
      <div class="chat-input">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Nhập câu hỏi..." />
        <button @click="sendMessage">Gửi</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from "vue";
  import axios from "axios";
  import userIcon from "/user-avatar.png";
  import botIcon from "/ai-avatar.png";
  
  const userInput = ref("");
  const messages = ref([]);
  const isLoading = ref(false);
  const chatBox = ref(null);
  
  const sendMessage = async () => {
    if (!userInput.value.trim()) return;
  
    messages.value.push({ role: "user", text: userInput.value });
    isLoading.value = true;
    await nextTick(() => chatBox.value.scrollTop = chatBox.value.scrollHeight);
  
    try {
      const response = await axios.post("https://api.groq.com/openai/v1/chat/completions", {
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: userInput.value }],
      }, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      
      const aiResponse = response.data.choices[0]?.message?.content || "Không có phản hồi từ AI.";
      typeMessage(aiResponse);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
      messages.value.push({ role: "ai", text: "❌ Lỗi khi gọi API." });
    }
  
    isLoading.value = false;
    userInput.value = "";
  };
  
  const typeMessage = (text) => {
    let typedText = "";
    messages.value.push({ role: "ai", text: "" });
    let index = messages.value.length - 1;
  
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        typedText += text[i];
        messages.value[index].text = typedText;
        i++;
        chatBox.value.scrollTop = chatBox.value.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 30);
  };
  </script>
  
  <style scoped>
  .chat-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    background: #f4f4f4;
  }
  .chat-header {
    background: #007bff;
    color: white;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    border-radius: 10px 10px 0 0;
  }
  .chat-box {
    height: 400px;
    overflow-y: auto;
    padding: 10px;
    background: white;
    border-radius: 5px;
  }
  .message {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .username {
    font-weight: bold;
  }
  .user {
    text-align: right;
    color: blue;
  }
  .ai {
    text-align: left;
    color: green;
  }
  .chat-input {
    display: flex;
    margin-top: 10px;
  }
  input {
    flex: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  button {
    padding: 10px 15px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .loading {
    text-align: center;
    color: gray;
  }
  </style>