import { config } from "dotenv";

config()

import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory"
import { ConversationChain } from "langchain/chains";

const llm = new OpenAI({
    temperature: 0.9
})

const memory = new BufferMemory()
const chain = new ConversationChain({
    llm: llm,
    memory: memory
})

const res1 = await chain.call({
    input: "Hi, I'm Ahmed"
})

console.log(res1)


const res2 = await chain.call({
    input: "What is my name?"
})

console.log(res2)