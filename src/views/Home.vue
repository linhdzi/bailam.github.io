<template>
  <div class="home-container">
    <h1>🚀 Chào mừng đến với Thực hành Vue.js</h1>
    <p>Chọn một bài tập để bắt đầu:</p>

    <div class="menu">
      <router-link to="/highlight" class="menu-item">📌 Bài 1: Highlight Hội Thoại</router-link>
      <router-link to="/chatbot" class="menu-item">💬 Bài 2: AI Chatbot</router-link>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}
.menu-item {
  text-decoration: none;
  padding: 10px;
  border: 2px solid blue;
  border-radius: 8px;
  background: lightblue;
  color: darkblue;
  font-size: 18px;
  font-weight: bold;
}
.menu-item:hover {
  background: blue;
  color: white;
}
</style>
