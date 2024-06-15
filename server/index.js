const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

// const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 1234;

// Initialize OpenAI API
// const openaiApiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key
// const configuration = new Configuration({
//   apiKey: openaiApiKey
// });
// const openai = new OpenAIApi(configuration);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle textarea content
app.get('/my-gil-endpoint', async (req, res) => {
    res.json({a: "hi I'm gil"})
});
app.post('/analyze', async (req, res) => {
  const { text, additionalInstructions } = req.body;

  try {
    const prompt = `${text}\nAdditional instructions: ${additionalInstructions}`;
    // const completion = await openai.completions.create({
    //   model: 'text-davinci-003', // Adjust the model based on your needs
    //   prompt: prompt,
    //   max_tokens: 150 // Adjust token limit as necessary
    // });

    // res.json({ response: completion.data.choices[0].text.trim() });

    res.json({response: "Hello world this is from SERVER"});
  } catch (err) {
    console.error('OpenAI API error:', err);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
