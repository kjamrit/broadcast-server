const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

let clients = new Set();

console.log(`✅ Broadcast server started on ws://localhost:${PORT}`);

wss.on('connection', (ws) => {
    console.log('📢 New client connected');
    clients.add(ws);

    ws.on('message', (message) => {
        console.log(`💬 Received: ${message}`);
        for (let client of clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        }
    });

    ws.on('close', () => {
        console.log('❌ Client disconnected');
        clients.delete(ws);
    });
});

process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    wss.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});
