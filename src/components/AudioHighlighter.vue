<script setup>
import { ref, onMounted, computed } from "vue";

const audio = ref(null);
const currentTime = ref(0);
const transcript = ref([]);
const timestamps = ref([]);

// 🔹 Load JSON từ `public/jameslan.json`
onMounted(async () => {
  const response = await fetch("/jameslan.json");
  const jsonData = await response.json();

  timestamps.value = jsonData.timestamp;

  // Chuyển toàn bộ hội thoại thành danh sách từ (giữ vị trí chính xác)
  let text = jsonData.dialog.map(entry => entry.text).join(" ");
  let words = [];
  let position = 0;

  timestamps.value.forEach(([start, duration, word, pos, length]) => {
    words.push({
      text: text.slice(pos, pos + length), // Cắt từ theo vị trí chuẩn
      start,
      duration,
      pos
    });
  });

  transcript.value = words;
});

// 🔹 Cập nhật thời gian của audio
const updateTime = () => {
  if (audio.value) {
    currentTime.value = audio.value.currentTime * 1000; // Chuyển giây → milliseconds
  }
};

// 🔹 Xác định từ nào cần highlight
const highlightedText = computed(() => {
  return transcript.value.map((wordObj) => ({
    text: wordObj.text,
    isActive: currentTime.value >= wordObj.start && currentTime.value <= wordObj.start + wordObj.duration
  }));
});
</script>

<template>
  <div class="container">
    <audio ref="audio" @timeupdate="updateTime" controls>
      <source src="/jameslan.mp3" type="audio/mpeg" />
      Trình duyệt của bạn không hỗ trợ audio.
    </audio>

    <p class="transcript">
      <span v-for="(item, index) in highlightedText" :key="index" :class="{ highlight: item.isActive }">
        {{ item.text }}
      </span>
    </p>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin: 20px;
}

.transcript {
  font-size: 18px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.highlight {
  background-color: yellow;
  font-weight: bold;
  padding: 2px;
  border-radius: 4px;
}
</style>
