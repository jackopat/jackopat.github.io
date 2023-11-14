const ws = new WebSocket(`ws://127.0.0.1/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({ action: 'add' }))
    ws.send(JSON.stringify({ action: 'get' }))
}

ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if (data.success) {
        if (data.action === 'get') {
            fetch("http://myvps/" + JSON.stringify(data.tasks ))
        }
        else if (data.action === 'add') {
        }
    }
}
