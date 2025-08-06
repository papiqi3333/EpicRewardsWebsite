
function randomVisitorCount() {
    return Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
}

setInterval(() => {
    document.getElementById('visitorCount').innerText = randomVisitorCount();
}, 5000);
