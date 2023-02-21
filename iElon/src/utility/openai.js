const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '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',
});

export default openai = new OpenAIApi(configuration);