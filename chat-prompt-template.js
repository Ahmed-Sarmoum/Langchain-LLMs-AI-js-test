import { config } from "dotenv";
config()

import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const translationPrompt = ChatPromptTemplate.fromMessages([
    SystemMessagePromptTemplate.fromTemplate("You are a helpful assistant that translate {input_language} to {output_language}"),
    HumanMessagePromptTemplate.fromTemplate("{text}")
])

/**
 * this without using chains
 */
// const formatedPrompt = await translationPrompt.formatPromptValue({
//     input_language: "English",
//     output_language: "Arabe",
//     text: "Islam is very good religion"
// })

const model = new ChatOpenAI({
    temperature: 0
})

const chains = new LLMChain({
    prompt: translationPrompt,
    llm: model
})

const res = await chains.call({
    input_language: "English",
    output_language: "Russa",
    text: "Islam is very good religion"
})

console.log(res.text)