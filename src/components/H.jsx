import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(#6C3FC710_1px,transparent_1px),linear-gradient(90deg,#6C3FC710_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Orbe haut droite */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#6C3FC718_0%,transparent_70%)] animate-pulse" />

      {/* Orbe bas gauche */}
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,#8B5CF612_0%,transparent_70%)]" />

      {/* Contenu aligné à gauche */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Badge disponible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] border border-[#2D1F5E] px-4 py-2 rounded-full bg-[#6C3FC720] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#50FA7B] shadow-[0_0_8px_#50FA7B] animate-pulse" />
          Disponible pour missions
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-xs tracking-[4px] uppercase text-[#5C5870] mb-4"
        >
          Full Stack Developer
        </motion.p>

        {/* Nom */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl text-[#F0EFF4] leading-tight mb-4"
        >
          Bonjour, je suis<br />
          <span className="text-[#A78BFA]">RAMANANDRAIBE Nomena</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#9B97B2] text-base leading-relaxed max-w-lg mb-10"
        >
          Je conçois et développe des expériences web modernes, performantes
          et élégantes. De l'idée au déploiement, je maîtrise toute la chaîne.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 flex-wrap mb-16"
        >
          <button className="text-sm font-medium text-white bg-[#6C3FC7] px-6 py-3 rounded-lg hover:bg-[#8B5CF6] hover:-translate-y-1 hover:shadow-[0_8px_24px_#6C3FC740] transition-all duration-200">
            Voir mes projets
          </button>
          <button className="text-sm font-medium text-[#A78BFA] border border-[#2D1F5E] px-6 py-3 rounded-lg hover:bg-[#6C3FC720] hover:border-[#6C3FC7] hover:-translate-y-1 transition-all duration-200">
            Télécharger CV →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-12 pt-8 border-t border-[#2D1F5E]"
        >
          <div>
            <div className="font-serif text-3xl text-[#A78BFA]">12+</div>
            <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870] mt-1">Projets</div>
          </div>
          <div className="w-px h-10 bg-[#2D1F5E]" />
          <div>
            <div className="font-serif text-3xl text-[#A78BFA]">3 ans</div>
            <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870] mt-1">Expérience</div>
          </div>
          <div className="w-px h-10 bg-[#2D1F5E]" />
          <div>
            <div className="font-serif text-3xl text-[#A78BFA]">8+</div>
            <div className="font-mono text-xs tracking-widest uppercase text-[#5C5870] mt-1">Technologies</div>
          </div>
        </motion.div>

      </div>

      {/* Scroll hint */}
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

    </section>
  )
}