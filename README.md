# 🚀 NEC E-Cell IIT Bombay — Student Opinion & Submissions Portal (opinion-poll)

![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=flat-square&logo=github)
![Status](https://img.shields.io/badge/Status-Active%20%26%20Live-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)

Welcome to the **NEC E-Cell Student Submissions & Opinion Poll Web Portal**! This portal hosts, displays, and organizes motivation statements, team expectations, and opinion submissions from participating student teams for the National Entrepreneurship Challenge (NEC) organized by E-Cell, IIT Bombay.

🌐 **Live Website**: [https://jai1aiger.github.io/opinion-poll/](https://jai1aiger.github.io/opinion-poll/)

---

## 📌 Executive Summary

The **NEC E-Cell Submissions Portal** provides an interactive, mobile-responsive web dashboard that enables evaluators, mentors, and team members to review student team motivation and expectation submissions seamlessly. Built with high performance and zero external framework overhead, the portal delivers instant PDF previewing, search filtering, and individual student profile navigation.

---

## ✨ Key Features

- **📄 Embedded PDF Document Viewer**: Direct browser-rendered preview for all student submission documents without requiring external PDF download software.
- **🔍 Instant Real-Time Search**: Search student profiles, team member names, and motivation PDFs instantaneously.
- **📱 Fully Responsive Design**: Seamless layout adapted for desktop monitors, tablets, and mobile devices.
- **⚡ High Performance & Lightweight**: Built with pure HTML5, modern CSS3 animations, and modular ES6 JavaScript for fast page load times.
- **☁️ 24/7 Cloud Availability**: Hosted on GitHub Pages infrastructure with global distribution.

---

## 🛠️ Technology Stack

- **Frontend Core**: HTML5, Vanilla CSS3 (Custom Glassmorphism Design System)
- **Logic & Interactivity**: JavaScript ES6+
- **Document Rendering**: Native Browser PDF Engine / Object Embeds
- **Hosting & Infrastructure**: GitHub Pages (Zero-Downtime Static Hosting)

---

## 📁 Repository Structure

`	ext
opinion-poll/
├── index.html        # Main web app layout and entry point
├── style.css         # Custom responsive styling and theme tokens
├── app.js            # Interactive logic, search filtering, and modal viewer
├── README.md         # Comprehensive project documentation
└── NEC_ECell_Motivation_Expectations_*.pdf # Individual student submission PDFs
`

---

## 🚀 Local Development & Setup

To run the portal locally on your machine:

1. **Clone the Repository**:
   `ash
   git clone https://github.com/jai1aiger/opinion-poll.git
   cd opinion-poll
   `

2. **Serve the Application**:
   You can serve index.html using any static HTTP server (or double-click index.html):
   `ash
   python -m http.server 8000
   `

3. **View in Browser**:
   Open [http://localhost:8000](http://localhost:8000) in your web browser.

---

## 📄 License & Attribution

This project is licensed under the **MIT License**. Created for NEC E-Cell submissions evaluation.
