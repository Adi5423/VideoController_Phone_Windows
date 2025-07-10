# 🎮 VideoControl

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-lightgrey?logo=socket.io)
![RobotJS](https://img.shields.io/badge/RobotJS-Automation-yellow)
![Platform](https://img.shields.io/badge/Platform-Windows-orange)

> Remotely control video playback (e.g., YouTube) from your phone via a local Wi-Fi connection using a React UI and Node.js backend with keyboard automation.

---

## 📦 Project Structure

```
VideoControl/
├── client/        # React frontend
│   ├── public/    # Static files
│   └── src/       # App.js and frontend logic
├── server/        # Express + Socket.IO backend
│   ├── public/    # Contains built React files
│   └── server.js  # Main backend script
├── README.md
└── .gitignore
```

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/VideoControl.git
cd VideoControl
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Install Client Dependencies & Build

```bash
cd ../client
npm install
npm run build
```

### 4. Copy Build to Server

```bash
xcopy /E /I /Y build ..\server\public
```

### 5. Start the Server

```bash
cd ../server
node server.js
```

* A QR code and local IP (e.g., [http://192.168.1.5:4000](http://192.168.1.5:4000)) will appear.
* Open it on your phone’s browser (same Wi-Fi).

---

## 🧠 How It Works

* React frontend emits control events (e.g., PLAY, FORWARD).
* Socket.IO sends those to the server.
* `robotjs` simulates real key presses like `space`, `f`, `j`, `l`.

---

## 📱 Features

* ✅ Play/Pause
* ✅ Forward / Backward
* ✅ Fullscreen Toggle
* ✅ Fast UI: Transforms, rotate, scale via master CSS controller

---

## 🛠 Technologies Used

* React 19
* Socket.IO (client + server)
* Node.js 18
* Express.js
* RobotJS (keyboard automation)

---

## 📝 Future Plans

* ✅ Optimized deploy: one-time build, transfer folder to phone
* 🕹️ Add volume controls, skip ads
* 📦 Turn into an APK (native or webview-free, optional)

---

## 📄 License

MIT License. Free to modify and share.

---

## ✨ Credits

Crafted with 🛠️ by \[Your Name].
