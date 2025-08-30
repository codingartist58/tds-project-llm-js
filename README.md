# JavaScript LLM Agent (POC)

## Overview
This is a minimal **JavaScript-based LLM Agent** proof of concept (POC).  
It demonstrates:
- Running a simple LLM reasoning loop in the browser.  
- Calling external **tools** dynamically (Google Search, AI Pipe API, JS code execution).  
- Communicating with an Express backend that proxies API calls.  

The goal is to keep the code small, and easy to extend.

---

## Features
- **Chat UI** in the browser (HTML + vanilla JS).  
- **Reasoning loop**: LLM decides whether to respond directly or call tools.  
- **Tool support**:
  - **Google Search** (via Custom Search JSON API).  
  - **AI Pipe API** (via proxy).  
  - **JavaScript execution** (sandboxed in browser).  
- **Bootstrap UI** with alerts for errors.  
- **OpenAI-compatible API calls** (via [aipipe.org](https://aipipe.org)).  

---

## Setup

### 1. Clone and install
```bash
git clone <your-repo-url>
cd tds-project-bonus-llm
npm install
