# Gayan Tharaka — Ultra-Premium MERN Stack Portfolio

A cinematic, modern portfolio website and enterprise system showcase designed for **Gayan Tharaka** (Web Developer | MERN Stack Developer | Unity C# Specialist), built with the full MERN stack (MongoDB, Express.js, React + TypeScript, Node.js), Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

---

## 🌟 Executive Overview

- **Full Name**: Gayan Tharaka
- **Title**: Web Developer | MERN Stack Developer
- **Academic Foundation**: B.Sc. (Hons) in Computer Science & Technology, Sabaragamuwa University of Sri Lanka (2021 – 2025)
- **Professional Experience**:
  - **Marketing Executive** — Fadna Tea (2026 – Present)
  - **System Developer** — Fadna Life Sciences (2025 – 2026)
- **Location**: Kegalle, Sri Lanka
- **Contact**: Phone: `+94 71 999 5885` | Email: `gayanfadna@gmail.com`

---

## 🚀 Key Systems Showcased

1. **Order Management System (OMS)** — High-throughput enterprise order lifecycle, atomic stock locking, and automated courier sync.
2. **QR-Based Online Ordering & Sales Monitoring System (MERN)** — Real-time contactless table ordering with live kitchen display (KDS) and revenue metrics.
3. **Inventory Management & Forecasting System** — Predictive reorder algorithms, batch expiry surveillance, and multi-warehouse stock management.
4. **Network Marketing Management System (MERN)** — Multi-tier binary/unilevel genealogy trees, real-time commission calculations, and distributor e-wallets.
5. **Paint Puzzle Game (Unity + C#)** — Color-mixing physics mechanics, custom shader ripples, and 60 FPS mobile optimization.

---

## 🛠 Tech Stack Architecture

### Frontend (`client/`)
- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Obsidian Glassmorphism Design Tokens
- **Animations**: Framer Motion + GSAP ScrollTrigger + Custom Magnetic Follower Cursor
- **Smooth Scrolling**: Lenis with GSAP Ticker Synchronization
- **Interactive Visuals**: Real-time Interactive Constellation Particle Canvas
- **Forms & Validation**: React Hook Form + Zod
- **Notifications**: Sonner Toaster
- **State Management**: Zustand
- **SEO Ready**: React Helmet Async

### Backend (`server/`)
- **Runtime**: Node.js + Express.js + TypeScript
- **Database**: MongoDB via Mongoose (with hybrid resilient in-memory fallback)
- **Security**: JWT Authentication, Bcrypt password hashing, Helmet headers, Express Rate Limiting
- **Validation**: Zod schema parsing
- **Admin Dashboard**: Protected routes for project CRUD and inquiry inbox management

---

## 📦 Project Structure

```
Portfolio/
├── package.json              # Root orchestration scripts
├── README.md                 # Documentation & setup guide
├── client/                   # Frontend React + TypeScript application
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── src/
│       ├── components/       # Hero, About, Skills, Projects, Experience, Contact, AdminModal, etc.
│       ├── services/         # API client & backend endpoints
│       ├── store/            # Zustand state management
│       ├── types/            # TypeScript data contracts
│       ├── index.css         # Glassmorphic utilities & color tokens
│       └── App.tsx           # Lenis integration & master layout
└── server/                   # Backend Node.js + Express REST API
    ├── package.json
    ├── tsconfig.json
    ├── .env                  # Environment variables
    └── src/
        ├── controllers/      # Project, Message, Auth, and Stats controllers
        ├── models/           # Mongoose schemas (Project, Message, Admin, Skill)
        ├── routes/           # Express API route modules
        ├── services/         # Resilient data service
        ├── data/             # Seed data and enterprise project profiles
        ├── scripts/          # Manual MongoDB seeding script
        └── server.ts         # Express server entry point
```

---

## ⚡ Quick Start & Setup

### 1. Prerequisites
- **Node.js** (v18 or higher, v24 recommended)
- **npm** (v9 or higher)
- **MongoDB** (Optional: local MongoDB service or remote MongoDB Atlas cluster URI)

### 2. Running Locally

You can run both client and server concurrently from the root directory:

```bash
# In c:\Gayan\System\Portfolio
npm run dev
```

Or run them in separate terminal windows:

#### Terminal 1 — Backend Server
```bash
cd server
npm run dev
# Server will launch on http://localhost:5000
```

#### Terminal 2 — Frontend Client
```bash
cd client
npm run dev
# Frontend will launch on http://localhost:5173
```

---

## 🔐 Admin Dashboard Credentials

The portfolio features a discrete developer control center accessible via the **Lock icon** in the top navigation bar.

- **URL**: Click the Lock icon in Navbar
- **Default Username**: `gayanadmin`
- **Default Password**: `AdminPassword2026!`

### Admin Capabilities:
- View all received client inquiries & messages
- Mark inquiries as read or delete processed messages
- Direct "Reply via Email" mailto trigger
- Add, update, or delete portfolio projects

---

## 💾 MongoDB Configuration & Resilient Fallback

In `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/gayan_portfolio
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/gayan_portfolio?retryWrites=true&w=majority
JWT_SECRET=your-custom-jwt-secret-key
ADMIN_USERNAME=gayanadmin
ADMIN_PASSWORD=AdminPassword2026!
```

> **Note**: If MongoDB is not yet configured or currently offline, the backend automatically operates in **Resilient In-Memory Mode**. All project data, inquiries, and admin sessions will work without crashing. When connected to MongoDB, data is automatically persisted to MongoDB collections.

---

## 🚢 Production Build

```bash
# Build both frontend and backend
npm run build

# Preview frontend bundle
npm --prefix client run preview
```
