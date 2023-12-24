import { config } from "dotenv"
config()

import { ChatOpenAI } from "langchain/chat_models/openai"
import { HumanMessage, SystemMessage } from "langchain/schema"

const model = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo"
})

// const res = await model.call([
//     new SystemMessage("You are a helpful assistant that translate english to Arabe"),
//     new HumanMessage("Translate thid from English to Arabe, I love programing")
// ])


const res = await model.generate(
    [
        [
            new SystemMessage("You are a helpful assistant that translate english to Arabe"),
            new HumanMessage("Translate thid from english to Arabe, I love programing")
        ],
        [
            new SystemMessage("You are a helpful assistant that translate english to Japan"),
            new HumanMessage("Translate thid from English to Japan, I love programing")
        ]
    ]
)

console.log(res.generations)