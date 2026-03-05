import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(var(--border2)_1px,transparent_1px),linear-gradient(90deg,var(--border2)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#6C3FC718_0%,transparent_70%)] animate-pulse"></div>

            <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#8B5CF612_0%,transparent_70%)]"></div>
            
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 flex flex-col gap-8 justify-center">


            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-mono text-xs tracking-[4px] uppercase text-[#5C5870]"
                >
                Full Stack Developer
            </motion.p>

             <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-serif text-xl md:text-5xl text-[#F0EFF4] leading-tight"
            >
                Bonjour, je suis<br />
                <em className="text-[#A78BFA] italic">RAMANANDRAIBE<br />Nomena</em>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#9B97B2] text-base leading-relaxed max-w-xl"
            >
                Je conçois et développe des expériences web modernes, performantes et élégantes.
                De l'idée au déploiement, je maîtrise toute la chaîne.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4 flex-wrap mb-10"
            >
                <button className="text-sm font-medium text-white px-6 py-3 bg-[#6C3FC7] rounded hover:bg-[#8B5CF6] hover:-translate-y-1 hover:shadow-[0_8px_24px_#6C3FC740] transition-all duration-200">
                    Voir mes projets
                </button>
                <button className="text-sm font-medium text-[#A78BFA] border border-[#2D1F5E] rounded py-5 px-5 hover:bg-[#6C3FC720] hover:border-[#6C3FC7] hover:-translate-y-1 transition-all duration-200">
                    Télécharger CV →
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-10 pt-8 border-t border-[#2D1F5E] "
                >
                <div>
                    <div className="font-serif text-3xl text-[#A78BFA]">12+</div>
                    <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870]">Projets</div>
                </div>
                <div>
                    <div className="font-serif text-3xl text-[#A78BFA]">3 ans</div>
                    <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870]">Expérience</div>
                </div>
                <div>
                    <div className="font-serif text-3xl text-[#A78BFA]">8+</div>
                    <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870]">Technologies</div>
                </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#5C5870]">Scroll</span>
            <div className="w-px h-10 bg-[#2D1F5E] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#A78BFA] animate-[scrollDown_2s_ease-in-out_infinite]" />
            </div>
        </motion.div>

      </div>
    </section>
    )
}