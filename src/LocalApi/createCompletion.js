import { openai } from './api.js'

const createCompletion= async ()=> {
  try {
    const response = await openai.createCompletion({
      model: 'davinci:ft-personal-2023-05-27-17-14-24',
      prompt: "¿Cómo es la vista desde El Hub?",
      max_tokens: 200
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()