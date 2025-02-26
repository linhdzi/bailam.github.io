?? README.md - AI Chatbot v?i Vue.js
?? Gi?i thi?u
?�y l� m?t ?ng d?ng AI Chatbot ???c x�y d?ng b?ng Vue.js 3. Chatbot n�y g?i tin nh?n c?a ng??i d�ng ??n API AI (Groq API) v� hi?n th? ph?n h?i t? AI v?i giao di?n ??p m?t.

?? C�ng ngh? s? d?ng
* Vue.js 3 (Composition API, ref)
* Axios (g?i API)
* Tailwind CSS (thi?t k? giao di?n)


?? src/
??? ?? components/
?   ??? Chatbot.vue  # Th�nh ph?n ch�nh c?a chatbot
??? ?? assets/        # Ch?a ?nh v� icon (n?u c?n)
??? App.vue           # File ch�nh ?? render chatbot
??? main.js           # File kh?i ch?y Vue
??? README.md         # H??ng d?n s? d?ng

?? C�i ??t & Ch?y d? �n
1?? Clone repository
bash
CopyEdit
git clone https://github.com/your-repo/chatbot-vue.git
cd chatbot-vue
2?? C�i ??t dependencies
bash
CopyEdit
npm install
3?? Ch?y ?ng d?ng
bash
CopyEdit
npm run dev

?? C�ch ho?t ??ng c?a Chatbot
1. Ng??i d�ng nh?p tin nh?n v� nh?n Enter ho?c G?i.
2. Tin nh?n ???c hi?n th? tr�n giao di?n.
3. API AI (Groq API) x? l� v� tr? v? ph?n h?i.
4. Tin nh?n c?a AI hi?n th? tr�n giao di?n.

?? Ch?nh s?a API Key
B?n c?n th�m API Key v�o .env tr??c khi ch?y:
bash
CopyEdit
VITE_GROQ_API_KEY=your_api_key_here

