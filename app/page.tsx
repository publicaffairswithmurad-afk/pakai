"use client"
import { useState } from "react"

export default function Page() {
  const [story, setStory] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (story.trim().length < 2) {
      alert("Pehle kahani likho Janu!")
      return
    }
    setLoading(true)
    setResult("⏳ PAK'AI SOCH RAHA HAI... Hazrat Ali pe script ban rahi hai...")

    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: story }),
      })
      const data = await res.json()
      setResult(data.script || data.error || "✅ Ho gaya!")
    } catch (e) {
      setResult("❌ Error: Vercel me GROQ_API_KEY check karo")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PAK<span className="text-[#00ff88]">'AI</span></h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#00ff88] text-black rounded-full font-bold">Free Try</button>
          <button className="px-4 py-2 border rounded-full">Login</button>
        </div>
      </div>

      <p className="text-center text-gray-400 mb-4 text-sm">CapCut Best Caption + Smart B-Roll</p>

      {/* Main Box */}
      <div className="bg-[#111] border border-[#00ff88]/20 rounded-3xl p-4">
        <textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Yahan apni kahani likho... Ex: Hazrat Ali ka insaf..."
          className="w-full h-40 bg-black border border-gray-800 rounded-2xl p-4 text-white outline-none focus:border-[#00ff88]"
        />
        <div className="flex justify-between items-center mt-3">
          <div className="h-1 bg-gray-800 w-2/3 rounded-full overflow-hidden">
            <div className="h-full bg-[#00ff88]" style={{ width: `${Math.min((story.split(" ").length / 620) * 100, 100)}%` }}></div>
          </div>
          <span className="text-xs text-gray-400">{story.split(" ").filter(w=>w).length} / 620 words</span>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full mt-4 bg-[#00ff88] text-black font-black py-4 rounded-2xl text-lg disabled:opacity-50"
        >
          {loading ? "⏳ PAK'AI SOCH RAHA HAI..." : "🔥 GENERATE CINEMATIC VIDEO"}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-green-950/40 border border-[#00ff88] rounded-2xl text-white whitespace-pre-wrap text-sm leading-relaxed">
            {result}
          </div>
        )}
      </div>

      <h2 className="text-center text-3xl font-black mt-10">APNI <span className="text-[#00ff88]">NICHE</span> CHUNO</h2>
      <p className="text-center text-gray-400 text-sm mt-2">Har niche ke liye alag cinematic style</p>
    </div>
  )
}
