import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <Navbar/>
      <Hero/>
    </div>
  )
}