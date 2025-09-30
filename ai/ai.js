import express from  'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
const __filename=fileURLToPath(import.meta.url)

const __dirname=path.dirname(__filename)
const app=express();
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:true}))


import { GoogleGenAI } from "@google/genai";
 const API=process.env.API_KEY
const ai = new GoogleGenAI({apiKey:API});
var t=''
async function main(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: content,
  });
 t=response.text;
 return t
}
app.get("/", (req, res) => {
    res.send("Server is running!");
});
app.post('/submit', async (req,res)=>{
const k= await main(req.body.prompt)
    res.send({ans:k})
    console.log(k)
})
if (process.env.API_KEY)
    console.log("YES")
const port=process.env.port||3000
app.listen(port,()=>{
  console.log(port)
})