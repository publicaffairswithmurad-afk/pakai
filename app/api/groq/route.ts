import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are PAKAI - Pakistani viral story writer. Write 620 words cinematic script in Urdu/Hinglish with HOOK, BUILD, PAYOFF. Add [B-ROLL: keyword] for each scene."
          },
          { role: "user", content: prompt }
        ],
        max_tokens: 2000,
      }),
    })

    const data = await groqRes.json()
    const script = data.choices?.[0]?.message?.content || "Script nahi bana - dobara try karo"

    return NextResponse.json({ script })
  } catch (error) {
    return NextResponse.json({ script: "Error: Groq API key check karo Vercel me" }, { status: 500 })
  }
}
