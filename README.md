# 🛰️ Broadcast Server

A simple CLI-based broadcast server and client using Node.js and WebSockets.

This project demonstrates real-time communication between multiple clients via a central WebSocket server. Messages sent by one client are broadcasted to all connected clients.

---

## Features

✅ Broadcast messages from any client to all other connected clients  
✅ Multiple clients supported simultaneously  
✅ Simple CLI interface for server and client  
✅ Graceful shutdown of server  
✅ Lightweight and easy to run

---

## Installation

Clone the repo:

```bash
git clone https://github.com/kjamrit/broadcast-server.git
cd broadcast-server
```
Install dependencies:

```bash
npm install
```

## Usage

### Starting the Server:

```bash
npm run start
```
Server starts at ws://localhost:8080

### Connecting a client:

In a new terminal tab/window

```bash
npm run connect
```
Type a message and hit Enter → message will broadcast to all connected clients.

Repeat "npm run connect" in new terminals to simulate multiple clients.

## Stopping the Server

Press Ctrl+C → server will shut down gracefully and close all client connections.


## TechStack used

- Node.js
- WebSockets




