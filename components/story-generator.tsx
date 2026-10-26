"use client"
import { useState } from "react"

export default function StoryGenerator() {
  const [story, setStory] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!story) return
    setLoading(true)
    setResult("⏳ PAK'AI SOCH RAHA HAI...")

    try {
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: story }),
      })
      const data = await res.json()
      setResult(data.script || "✅ HO GAYA!")
    } catch (e) {
      setResult("❌ Error - Dobara try karo")
    }
    setLoading(false)
  }

  return (
    <div className="w-full">
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Yahan apni kahani likho... Ex: Hazrat Umar raat ko Madine me..."
        className="w-full h-32 bg-black/50 border border-green-500/30 rounded-xl p-4 text-white"
      />
      <div className="text-right text-xs text-gray-400">{story.split(" ").length} / 620 words</div>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full mt-4 bg-[#00ff88] text-black font-bold py-4 rounded-xl"
      >
        {loading ? "⏳ PAK'AI SOCH RAHA HAI..." : "🔥 GENERATE CINEMATIC VIDEO"}
      </button>
      {result && (
        <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-xl text-white whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  )
}
