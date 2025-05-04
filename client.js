const WebSocket = require('ws');
const readline = require('readline');

const SERVER_URL = 'ws://localhost:8080';
const ws = new WebSocket(SERVER_URL);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ws.on('open', () => {
    console.log(`✅ Connected to ${SERVER_URL}`);
    promptInput();
});

ws.on('message', (msg) => {
    console.log(`📢 Broadcast: ${msg}`);
});

ws.on('close', () => {
    console.log('❌ Disconnected from server');
    process.exit(0);
});

function promptInput() {
    rl.question('Type message: ', (input) => {
        ws.send(input);
        promptInput();
    });
}
