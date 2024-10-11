const express = require('express');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');

const app = express();
const sentiment = new Sentiment();

// Middleware to handle form data
app.use(bodyParser.json());
app.use(express.static('public')); // Serve files from the 'public' folder

// Route to analyze sentiment
app.post('/analyze', (req, res) => {
    const { text } = req.body;
    const result = sentiment.analyze(text);

    // Determine if it's positive, negative, or neutral
    let sentimentLabel = 'Neutral';
    if (result.score > 0) {
        sentimentLabel = 'Positive';
    } else if (result.score < 0) {
        sentimentLabel = 'Negative';
    }

    // Send the result back to the front-end
    res.json({ sentiment: sentimentLabel });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('App started successfully.');
});