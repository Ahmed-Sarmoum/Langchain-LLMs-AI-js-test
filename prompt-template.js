import { OpenAI } from "langchain/llms/openai"
import { config } from "dotenv"
import { PromptTemplate } from "langchain/prompts"
import { LLMChain } from "langchain/chains"

config()


const model = new OpenAI({
    temperature: 0.9
})

const template = "what would be a good company name for that makes {product}?"
const promptTemplate = new PromptTemplate({
    template: template,
    inputVariables: ['product']
})
 
const chain = new LLMChain({
    llm: model,
    prompt: promptTemplate
})

const res = await chain.call({
    product: "ERP software"
})

console.log(res.text)