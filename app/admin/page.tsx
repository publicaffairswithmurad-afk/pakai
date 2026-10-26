"use client"
import { useState } from "react"

export default function AdminPanel() {
  const ADMIN_EMAIL = "muradoffical05@gmail.com"
  const [loginEnabled, setLoginEnabled] = useState(false) // Maine OFF rakha hai - Free for all
  const [users, setUsers] = useState([
    { email: "muradoffical05@gmail.com", videos: 999, credits: 99999, role: "ADMIN - UNLIMITED" },
    { email: "testuser@gmail.com", videos: 12, credits: 5, role: "USER" },
  ])

  const groqCost = (users.reduce((a,b)=>a+b.videos,0)*0.002).toFixed(4)

  const giveCredits = (email:string) => {
    const extra = prompt(`${email} ko kitne credits?`)
    if(!extra) return
    setUsers(users.map(u=> u.email===email ? {...u, credits: u.credits+parseInt(extra)} : u))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold">PAK'AI ADMIN PANEL 🔥</h1>
      <p className="bg-green-600 inline-block px-3 py-1 rounded-full text-sm mt-2 mb-6">Boss: {ADMIN_EMAIL} - UNLIMITED FREE</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Total Videos</p><h2 className="text-3xl font-bold">{users.reduce((a,b)=>a+b.videos,0)}</h2></div>
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Total Users</p><h2 className="text-3xl font-bold">{users.length}</h2></div>
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Groq Kharcha</p><h2 className="text-3xl font-bold">${groqCost}</h2></div>
      </div>

      <div className="bg-zinc-900 p-5 rounded-2xl mb-8 flex justify-between items-center">
        <div><p className="font-bold">Login System</p><p className="text-sm text-zinc-400">OFF = Sab free video banayenge, ON = Login lagega</p></div>
        <button onClick={()=>setLoginEnabled(!loginEnabled)} className={`px-6 py-3 rounded-full font-bold ${loginEnabled?'bg-red-600':'bg-green-600'}`}>{loginEnabled ? "ON - Login Lag Raha Hai" : "OFF - Sab Free Hai ✅"}</button>
      </div>

      <div className="bg-zinc-900 p-5 rounded-2xl">
        <h3 className="font-bold mb-4 text-lg">Users & Credits Control</h3>
        <table className="w-full text-sm"><thead className="text-zinc-500"><tr><td>Email</td><td>Videos</td><td>Credits</td><td>Action</td></tr></thead>
          <tbody>{users.map(u=><tr key={u.email} className="border-t border-zinc-800"><td className="py-3">{u.email} <span className="text-xs text-yellow-400">{u.role}</span></td><td>{u.videos}</td><td>{u.credits}</td><td><button onClick={()=>giveCredits(u.email)} className="bg-white text-black px-4 py-1.5 rounded-full font-bold">+ Credits Do</button></td></tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}
