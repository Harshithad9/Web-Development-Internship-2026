# 📘 Assignment (09/02/2026)

## 🌐 Assignment Name: Internet Explorer

### 📌 Description

This assignment focuses on understanding how the **Client–Server architecture** works and tracing the process that occurs when a user opens a website in a browser.

---

## 🖥️ Client–Server Architecture

Client–Server architecture is a model where a **client (user device)** requests services or resources from a **server**, and the server processes the request and sends back the response.

### Components

**1. Client**

* The client is the user's device such as a computer or mobile phone.
* It sends requests to the server using a web browser.

Examples of browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge

**2. Server**

* A server is a powerful computer that stores website files and resources.
* It processes requests from clients and sends back the required data.

**3. Internet / Network**

* The communication between client and server happens through the internet using protocols like HTTP or HTTPS.

---

## 🔄 What Happens When You Open a Website

When a user enters a website URL in the browser, several steps occur behind the scenes.

### Step 1: User Enters a URL

The user types a website address such as:

```
https://www.example.com
```

### Step 2: DNS Lookup

The browser contacts a **DNS (Domain Name System)** server to convert the domain name into an **IP address**.

Example:

```
www.example.com → 192.168.1.1
```

### Step 3: Connection to Server

The browser establishes a connection with the web server using the obtained IP address.

### Step 4: HTTP Request

The browser sends an **HTTP request** to the server asking for the webpage.

### Step 5: Server Processing

The server processes the request and retrieves the required files such as:

* HTML
* CSS
* JavaScript
* Images

### Step 6: HTTP Response

The server sends the requested data back to the browser.

### Step 7: Browser Rendering

The browser interprets the files and renders the webpage on the user's screen.

---

## 📊 Basic Architecture Diagram

```
User (Client)
      ↓
Web Browser
      ↓
Internet
      ↓
Web Server
      ↓
Response Sent Back
      ↓
Webpage Displayed in Browser
```

---

## 🎯 Learning Outcomes

Through this assignment, I learned:

* The concept of **Client–Server architecture**
* How web browsers communicate with servers
* The role of **DNS in resolving domain names**
* The process of **HTTP request and response**
* How websites are loaded and displayed in a browser
