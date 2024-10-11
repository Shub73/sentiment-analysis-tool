function analyzeText() {
    const text = document.getElementById('textInput').value;

    // Send the text to the server for analysis
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Sentiment: ${data.sentiment}`;
    });
}
