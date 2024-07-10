// worker.js
self.onconnect = function(event) {
    const port = event.ports[0];
    console.log(port)
    port.onmessage = function(event) {
        // Broadcast message to all connected clients
        self.clients.forEach(client => {
            if (client !== port) {
                client.postMessage(event.data);
            }
        });
    };

    // Keep track of connected clients
    if (!self.clients) {
        self.clients = [];
    }
    self.clients.push(port);
};
