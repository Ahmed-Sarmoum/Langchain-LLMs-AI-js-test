import { config } from "dotenv";
config()

import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools"
import { ChatAgent, AgentExecutor } from "langchain/agents"

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        hl: "en",
        gl: "us"
    })
]

const model = new ChatOpenAI({
    temperature: 0,
    modelName: "gpt-3.5-turbo"
})

const agent = ChatAgent.fromLLMAndTools(model, tools)

const executer = AgentExecutor.fromAgentAndTools({
    agent: agent,
    tools: tools
})

const res = await executer.run("how many people lives in algeria in 2023?")

console.log(res)