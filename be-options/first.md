# 📝 Assignment: End-to-End Encrypted URL Shortener

Expected time investment: 6 - 8 Hours

Preferred languages/frameworks: Node.js & React or Next.js 

## 📘 Overview

In this assignment, you will design and implement a **URL shortening service** with a twist: **end-to-end encryption (E2EE)**. Unlike typical shorteners (like bit.ly or tinyurl), your service must ensure that the original long URL is never visible to the server in plaintext.

This assignment explores the intersection of **web development**, **cryptography**, and **privacy-centric design**.

---

## 🎯 Objectives

- Build a simple URL shortener web application
- Apply **end-to-end encryption** principles to protect user data
- Understand **zero-knowledge architectures**
- Demonstrate client-server separation of responsibility

---

## 🧠 Core Concepts to Explore

- **Symmetric encryption** (e.g., AES-GCM) in the browser
- **URL fragment identifiers** (the `#` part) and how they are excluded from HTTP requests
- **Data minimization** and privacy-by-design
- Basic frontend/backend web architecture

---

## 📌 Requirements

1. **Client-side encryption**  
   The long URL must be encrypted in the browser before being sent to the server.

2. **Short URL with embedded key**  
   The encryption key must be embedded in the URL *fragment* (e.g., `https://your.site/abc123#key`) so the server cannot access it.

3. **Server-side storage**  
   The server should store only the encrypted data with a short ID.

4. **Decryption and redirect**  
   When visiting the short URL, the client should:
   - Fetch the encrypted payload using the ID
   - Use the key from the fragment to decrypt it
   - Redirect the user to the original long URL

5. **No plaintext URL exposure**  
   At no point should the server be able to read or log the original URL.

---

## 🧪 Evaluation Criteria

| Criteria                        | Description                                                  |
|--------------------------------|--------------------------------------------------------------|
| ✅ Functionality                | Does the shortener work end-to-end with encryption?          |
| 🔐 Security                    | Is the encryption properly handled client-side?              |
| 🌐 Web Design                  | Is the user experience intuitive and clean?                  |
| 🧱 Architecture                | Is the separation between client and server well structured? |
| 📖 Code Quality & Comments     | Is the code readable and well-documented?                    |

---

## 📂 Submission Guidelines

- Submit a link to your GitHub repository
- Include a working demo or deployment URL (optional but encouraged)
- Include a brief write-up describing:
  - Your approach
  - Encryption method used
  - Any trade-offs or limitations
  - Bonus features (if any)

---

## 💡 Bonus Ideas (Optional)

- Support for link expiration or self-destruction after one use
- Password-protected links
- QR code generation
- Analytics (click count, geolocation) while maintaining privacy

---

## 🔚 Reminder

This is not just a coding challenge — it's about designing secure, privacy-respecting systems. Keep in mind: **what the server doesn't know, it can't leak**.
