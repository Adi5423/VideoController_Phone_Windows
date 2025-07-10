# 🌐 VideoControl

> Control your laptop video player from your phone over Wi-Fi

This is a simple local remote control app using **Node.js**, **Socket.IO**, and a **React-based UI**. It lets you control keyboard actions (Play/Pause, Forward, Backward, Fullscreen) of your laptop's media player from your mobile phone.

---

## 📚 Features

* Play/Pause toggle
* Seek forward (`l` key)
* Seek backward (`j` key)
* Toggle fullscreen (`f` key)
* Clean mobile-friendly UI
* One-click setup

---

## 📑 Project Structure

```
VideoControl/
├── server/           # Contains Node.js + Socket.IO + robotjs server
│   ├── public/       # Contains React build (copied from client)
│   └── server.js     # Main server file
├── client/           # React source (excluded from GitHub push)
│   └── ...
├── README.md
└── .gitignore
```

---

## ⚡ Setup Instructions

### 📁 Clone the repository

```bash
git clone https://github.com/your-username/VideoControl.git
cd VideoControl
```

### 🔧 Install server dependencies

```bash
cd server
npm install
```

### 📀 Run the server

```bash
node server.js
```

You will see a **QR code** and local IP. Scan the QR using your phone to open the controller.

---

## 🔄 Updating Client UI (Optional)

If you want to modify or rebuild the React frontend:

### 1. Install client dependencies

```bash
cd client
npm install
```

### 2. Build the client

```bash
npm run build
```

### 3. Copy the build to server

```bash
xcopy /E /I /Y build ..\server\public
```

---

## 👍 Requirements

* Node.js (tested on v18+)
* Windows OS (uses `robotjs` for simulating keypress)
* Mobile and Laptop on **same Wi-Fi**

---

## 🚀 Future Improvements

* Add volume control
* Add stop / next / previous buttons
* Native Android APK (in progress, without WebView)

---

## ✅ Status

* Working and tested ✔
* All commands functional
* Easy to share and use via mobile

---

## 💼 License

MIT License
