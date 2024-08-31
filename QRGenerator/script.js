document.getElementById('generateBtn').addEventListener('click', () => {
    const input = document.getElementById('inputText').value.trim();
    if (input) {
        const qrCode = new QRious({
            element: document.getElementById('qrCode'),
            value: input,
            size: 250,
        });
    } else {
        alert('Please enter some text or URL');
    }
});
