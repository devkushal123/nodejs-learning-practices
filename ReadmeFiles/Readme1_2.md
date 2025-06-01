# Node.js Overview

Node.js is a **cross-platform, open-source JavaScript runtime environment** that runs on **Windows, Linux, Unix, macOS, and more**. It utilizes the **V8 JavaScript engine** to execute JavaScript code **outside a web browser**.

## 🚀 Features
- **Event-driven architecture** with support for **asynchronous (non-blocking) I/O**.
- Runs on **V8 JavaScript engine**, offering **high performance**.
- Ideal for **building scalable and efficient web applications**.
- **** Node.js has an event-driven architecture capable of "asynchronous I/O". 
- *** asynchronous I/O is also known as non-blocking I/O.


## some engines bases on browsers-
- V8 (from google chrome)
- Spider monkey (from firefrox)
- chakra -microsoft(edge or internet explorer)
## 📜 History
- Created by **Ryan Dahl in 2009**.
- JavaScript requires a **JS engine** to run, and Node.js initially used **Spider Monkey** (from Mozilla Firefox) but later switched to **V8** (from Google Chrome).
- Originally named **"Web.js"** since it was used for **creating web servers**, but later renamed to **Node.js**.
- Initially developed independently, but **Joyent comapny** partnered with Ryan Dahl in **2011**.
- In **2022**, **Joyent transferred Node.js trademarks to the OpenJS Foundation** for a **community-driven approach**, while remaining a platinum member.

---

## 🔥 Why Node.js?
Before Node.js, **Apache HTTP Server** was commonly used, but it operated as a **blocking server**. 
Ryan Dahl saw the limitations and introduced **non-blocking servers** with Node.js.

---

## 📦 NPM (Node Package Manager)
- Introduced in **2010**.
- Provides a vast ecosystem of **libraries and modules** for Node.js applications.
- Created by **Ryan Dahl and his team** as more developers started building **small, reusable packages**.
- To facilitate collaboration, they introduced a **package manager for Node.js**, allowing developers worldwide to **contribute and share their packages** easily.
  
### 🔹 NPM Registry
- NPM serves as a **registry—a central place** where developers can **publish and access packages**.
- Packages can be anything: **date/time handling**, **operating system utilities**.

### 🖥️ Windows Support (2011)
- Initially, Node.js was developed for **macOS and Linux**.
- In **2011**, Windows support was introduced **in collaboration with Microsoft**, making Node.js **more accessible to a larger developer community**.

### 🔄 Leadership Transition (2012)
- In **2012**, **Ryan Dahl stepped away** from Node.js.
- **Isaac Schlueter** took over leadership and focused on **expanding Node.js**.
- Isaac was the **sole creator of NPM**, which he developed in **2010** to streamline package management for Node.js.

### ⚡ The Emergence of io.js (2014)
- As Isaac managed Node.js, **development slowed down** due to various complexities.
- In **2014**, developer **Fedor Indutny** created **io.js**, a **fork of Node.js** aimed at faster and more modern development.
- This led to a split:  
  - **io.js** → Maintained by **Fedor Indutny**.  
  - **Node.js** → Still managed by **Joyent**.

### 🔗 Node.js Foundation (2015)
- In **2015**, discussions led to a **merger between Node.js and io.js**.
- This resulted in the formation of the **Node.js Foundation**, ensuring **unified development and governance**.

### 🌍 OpenJS Foundation (2019)
- By **2019**, there were **two separate communities**:  
  - **JS Foundation**  
  - **Node.js Foundation**  

- The **OpenJS Foundation** was established in **2019** through the **merger** of the **Node.js Foundation** and the **JS Foundation**. It serves as a **neutral hub** for open-source JavaScript projects, ensuring their growth and sustainability.

  ## Mission
  - Support **open-source JavaScript projects** with governance and infrastructure.
  - Provide resources to help developers **collaborate and innovate**.
  - Foster an **inclusive and sustainable** JavaScript ecosystem.

  ## Hosted Projects
  The OpenJS Foundation **supports** numerous key JavaScript projects, including:
  - [**Node.js**](https://nodejs.org)
  - [**jQuery**](https://jquery.com)
  - [**Appium**](https://appium.io)
  - [**Webpack**](https://webpack.js.org)
  - [**Dojo**](https://dojo.io)
  - And many more!

  ## Node.js & OpenJS Foundation
  The OpenJS Foundation provides **stability and governance** for **Node.js**, but the project remains **open-source and community-driven**. Global contributors help shape its direction, ensuring its continued innovation.

## V8 Engine
- [V8](https://v8.dev/) is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++.
- It is used in Chrome and in Node.js, among others.
- It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors.
- V8 can be embedded into any C++ application.

## Relationship between Node.js and V8
- Node.js is a C++ application with the V8 engine embedded into it.
- V8 is the JavaScript engine which follows the ECMAScript standard.
- Node.js has some superpowers to run code with the V8 engine, which is called the "JavaScript runtime".
