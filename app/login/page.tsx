"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);

export default function Login() {
  const router=useRouter(); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [busy,setBusy]=useState(false);
  async function submit(e:React.FormEvent){e.preventDefault();setBusy(true);setError(""); const {error}=await supabase.auth.signInWithPassword({email,password}); if(error)setError(error.message);else router.push("/");setBusy(false);}
  return <main className="auth"><form className="authCard" onSubmit={submit}><div className="brand">Gym<span>Pilot</span></div><h1>Connexion</h1><p className="muted">Accédez à l’espace de gestion de votre salle.</p><label>Email<input className="input" type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Mot de passe<input className="input" type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></label>{error&&<div className="error">{error}</div>}<button className="btn" disabled={busy}>{busy?"Connexion…":"Se connecter"}</button></form></main>
}