import { OpenAI } from "langchain/llms/openai"
import { config } from "dotenv"

config()


const model = new OpenAI({
    temperature: 0.9
})
 
const res = await model.call('what can you do for me?')
console.log(res)
