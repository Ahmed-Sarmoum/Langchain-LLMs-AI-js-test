import { config } from "dotenv"

config()

import { OpenAI } from "langchain/llms/openai"
import { SerpAPI } from "langchain/tools"
import { Calculator } from "langchain/tools/calculator"
import { initializeAgentExecutorWithOptions } from "langchain/agents"

/**
 * using SerpAPI for browsing the internet
 */


const llm = new OpenAI({
    temperature: 0, // we set that 0 because we will asking our model to perform math calculations we don't need creative response
    // verbose: true, // troubleshooting and debugging your application
})

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        hl: "en",
        gl: "us",
        location: "algeria"
    }),
    new Calculator()
]

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
    agentType: "zero-shot-react-description"
})

console.log("Loaded the agent...")

const res = await executor.call({
    input: "who is Ahmed SARMOUM? what is the number of repositories that he has ? what is his age reaised to 0.23 power?"
    // input: "who is the first presedent of USA? what is his favorat phrase?"
    // input: "who is the creator of OpenAI company?"
})

console.log(res.output)