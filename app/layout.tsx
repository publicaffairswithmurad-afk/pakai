"use client"
import { useState } from "react"
export default function Page(){
const [story,setStory]=useState("")
const [result,setResult]=useState("")
const [loading,setLoading]=useState(false)
const gen=async()=>{
if(!story.trim()){alert("Kahani likho!");return}
setLoading(true)
setResult("⏳ PAK'AI SOCH RAHA HAI...")
try{
const r=await fetch("/api/groq",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:story})})
const d=await r.json()
setResult(d.script||"Ho gaya")
}catch(e){setResult("Error: Groq Key check karo")}
setLoading(false)
}
return(<div className="min-h-screen bg-black text-white p-4"><h1 className="text-2xl font-bold">PAK'AI</h1><textarea value={story} onChange={e=>setStory(e.target.value)} placeholder="Yahan likho... Hazrat Ali ka insaf" className="w-full h-40 bg-[#111] border border-green-500/30 rounded-2xl p-4 mt-6"/><button onClick={gen} disabled={loading} className="w-full mt-4 bg-[#00ff88] text-black font-black py-4 rounded-2xl">{loading?"SOCH RAHA...":"🔥 GENERATE CINEMATIC VIDEO"}</button>{result&&<div className="mt-4 p-4 bg-green-900/20 border border-green-500 rounded-xl whitespace-pre-wrap">{result}</div>}</div>)
}
