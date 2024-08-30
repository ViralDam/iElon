const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: 'YOUR API KEY',
});

export default openai = new OpenAIApi(configuration);
