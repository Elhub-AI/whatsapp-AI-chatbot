import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = "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"
const configuration = new Configuration({
  apiKey: openaiApiKey,
})
export const openai = new OpenAIApi(configuration)