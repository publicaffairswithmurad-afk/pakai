"use client"
import { useState } from "react"

export default function AdminPanel() {
  const ADMIN_EMAIL = "muradoffical05@gmail.com"
  const [loginEnabled, setLoginEnabled] = useState(false)
  const [users, setUsers] = useState([
    { email: "muradoffical05@gmail.com", videos: 999, credits: 99999, role: "SUPER_ADMIN" },
    { email: "testuser@gmail.com", videos: 12, credits: 5, role: "USER" }
  ])

  const groqCost = (users.reduce((a,b)=>a+b.videos,0)*0.002).toFixed(4)

  const giveCredits = (email:string) => {
    const extra = prompt(`${email} ko kitne credits?`)
    if(!extra) return
    setUsers(users.map(u=> u.email===email ? {...u, credits: u.credits+parseInt(extra)} : u))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold">PAK'AI ADMIN PANEL - BOSS {ADMIN_EMAIL}</h1>
      <p className="bg-green-600 inline-block px-3 py-1 rounded-full text-sm mt-2">● LIVE SYSTEM</p>
      
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Total Users</p><p className="text-3xl font-bold">{users.length}</p></div>
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Groq Cost</p><p className="text-3xl font-bold text-red-400">${groqCost}</p></div>
        <div className="bg-zinc-900 p-5 rounded-2xl"><p className="text-zinc-400">Total Videos</p><p className="text-3xl font-bold text-green-400">{users.reduce((a,b)=>a+b.videos,0)}</p></div>
      </div>

      <div className="bg-zinc-900 p-5 rounded-2xl mb-8 flex justify-between items-center">
        <div><p className="font-bold">Login System (Tumhara Button)</p><p className="text-sm text-zinc-400">OFF rakho to Login page nahi ayega</p></div>
        <button onClick={()=>setLoginEnabled(!loginEnabled)} className={`${loginEnabled ? 'bg-green-600' : 'bg-red-600'} px-6 py-2 rounded-full font-bold`}>{loginEnabled ? 'ON' : 'OFF'}</button>
      </div>

      <div className="bg-zinc-900 p-5 rounded-2xl">
        <h3 className="font-bold mb-4 text-lg">Users & Credits Control</h3>
        <table className="w-full text-sm"><thead><tr className="text-zinc-500 text-left"><th>Email</th><th>Videos</th><th>Credits</th><th>Action</th></tr></thead>
        <tbody>{users.map(u=><tr key={u.email} className="border-t border-zinc-800"><td className="py-3">{u.email} {u.role==='SUPER_ADMIN' && '👑'}</td><td>{u.videos}</td><td>{u.credits}</td><td><button onClick={()=>giveCredits(u.email)} className="bg-white text-black px-3 py-1 rounded-full">+ Credits</button></td></tr>)}</tbody>
        </table>
      </div>
    </div>
  )
}
