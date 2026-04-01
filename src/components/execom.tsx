const members = [
  {
    name: "Dr.Vijaya Gunturu",
    role: "Principal",
    img: "/e1.jpeg", // Add allabaksh.jpg to public folder
    email: "#",
    linkedin: "#"
  },
  {
    name: "Allabaksh Shaik",
    role: "Senior Member of IEEE, Advisor",
    img: "/e2.jpeg", // Add allabaksh.jpg to public folder
    email: "allabaksh@gmail.com",
    linkedin: "#"
  },
  {
    name: "Mokshit Balaji",
    role: "Chair",
    img: "/e3.jpeg", // Add mokshit.jpg to public folder
    email: "mokshit@gmail.com",
    linkedin: "#"
  },
  {
    name: "Hema Sai Sree",
    role: "Vice Chair",
    img: "/e4.jpeg", // Add hema-sai-sree.jpg to public folder
    email: "hemasaisree@gmail.com",
    linkedin: "#"
  },
  {
    name: "Gnanitha", 
    role: "Secretary",
    img: "/e5.jpeg", // Add gnanitha.jpg to public folder
    email: "gnanitha@gmail.com",
    linkedin: "#"
  },
  {
    name: "Hema Chandrika",
    role: "Treasurer",
    img: "/e6.jpeg", // Add hema-chandrika.jpg to public folder
    email: "hemachandrika@gmail.com",
    linkedin: "#"
  },
  {
    name: "Harshiya",
    role: "Web Master",
    img: "/e7.jpeg", // Add harshiya.jpg to public folder
    email: "harshiya@gmail.com",
    linkedin: "#"
  }
];

const ExecomBody = () => {
  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 20,
  }));

  return (
    <main className="bg-black pt-12 pb-12 relative overflow-visible isolate">
      {/* Galaxy / nebula animated background */}
      <div className="absolute inset-0 pointer-events-none galaxy-nebula-bg">
        <div className="nebula-layer nebula-layer-1"></div>
        <div className="nebula-layer nebula-layer-2"></div>
        <div className="nebula-layer nebula-layer-3"></div>
        <div className="galaxy-core"></div>
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, idx) => {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const size = Math.random() * 2.5 + 0.7;
            const delay = Math.random() * 6;
            const duration = Math.random() * 5 + 3;
            return (
              <div
                key={idx}
                className="star"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Floating particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle-dot particle-${(particle.id % 3) + 1}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <h1 className="text-4xl text-center text-white font-bold mb-16 animate-fade-in relative z-10 gradient-text">
        EXECOM 2026
      </h1>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 px-6 relative z-10 overflow-visible">

        {members.map((m, i) => (

          <div 
            key={i}
            className={`w-72 min-h-96 bg-slate-100 rounded-2xl shadow-lg transition-all duration-300 ease-out animate-fade-in-up relative border border-cyan-500/20 z-20`}
            style={{ animationDelay: `${i * 0.15}s` }}>

            <div className="h-32 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 rounded-t-2xl relative flex justify-center overflow-visible transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-blue-900 hover:to-slate-900">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity duration-500 rounded-t-2xl hover:opacity-30"></div>

              <div className="absolute -bottom-20 w-40 h-40 rounded-full border-8 border-slate-100 overflow-hidden transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center bg-white animate-floating-image shadow-lg" style={{boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)'}}>
                <img src={m.img} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
              </div>

            </div>

            <div className="pt-32 pb-6 text-center px-6 bg-slate-900 rounded-b-2xl transition-all duration-300 hover:bg-slate-800">

              <h3 className="text-white font-semibold text-lg transition-colors duration-300 hover:text-cyan-400">
                {m.name}
              </h3>

              <p className="text-cyan-400 text-sm mt-1 animate-pulse transition-colors duration-300 hover:text-white">
                {m.role}
              </p>

              <div className="flex justify-center gap-6 mt-4 transition-all duration-500 hover:gap-8 relative z-30 pointer-events-auto">

                <a href={m.linkedin} className="inline-block transform hover:rotate-12 hover:scale-150 transition-all duration-300 hover:drop-shadow-2xl icon-glow relative pointer-events-auto z-30" style={{filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.5))'}} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    className="w-7 filter hover:drop-shadow-lg hover:brightness-150 transition-all duration-300 hover:saturate-150 cursor-pointer"
                  />
                </a>

                <a href={`mailto:${m.email}`} className="inline-block transform hover:-rotate-12 hover:scale-150 transition-all duration-300 hover:drop-shadow-2xl icon-glow relative pointer-events-auto z-30" style={{filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.5))'}} target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                    className="w-7 filter hover:drop-shadow-lg hover:brightness-150 transition-all duration-300 hover:saturate-150 cursor-pointer"
                  />
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes floatingImage {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.02);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(59, 130, 246, 0.5);
          }
        }

        @keyframes cardGlowBorder {
          0%, 100% {
            box-shadow: 
              0 0 30px rgba(6, 182, 212, 0.3),
              0 0 60px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 
              0 0 50px rgba(6, 182, 212, 0.6),
              0 0 100px rgba(59, 130, 246, 0.4);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes iconGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
          }
          50% {
            text-shadow: 0 0 20px rgba(6, 182, 212, 1), 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(20px) translateX(-20px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(25px) translateX(-25px); }
          66% { transform: translateY(-20px) translateX(15px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-25px) translateX(-30px); }
          66% { transform: translateY(30px) translateX(20px); }
        }

        @keyframes nebulaDrift1 {
          0% { transform: translate3d(-8%, -6%, 0) scale(1.06); }
          100% { transform: translate3d(8%, 6%, 0) scale(1.18); }
        }

        @keyframes nebulaDrift2 {
          0% { transform: translate3d(10%, -4%, 0) scale(1.03); }
          100% { transform: translate3d(-10%, 7%, 0) scale(1.14); }
        }

        @keyframes nebulaDrift3 {
          0% { transform: translate3d(-4%, 8%, 0) scale(1.02); }
          100% { transform: translate3d(6%, -8%, 0) scale(1.1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }

        .animate-floating-image {
          animation: floatingImage 4s ease-in-out infinite;
        }

        .card-hover-glow {
          transition: all 0.5s ease;
        }

        .card-hover-glow:hover {
          animation: cardGlowBorder 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #06b6d4);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }

        .icon-glow:hover {
          animation: iconGlow 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.8));
        }

        .particle {
          position: absolute;
          pointer-events: none;
        }

        .particle-1 { animation: float1 8s linear infinite; }
        .particle-2 { animation: float2 10s linear infinite; }
        .particle-3 { animation: float3 12s linear infinite; }

        .delay-2000 {
          animation-delay: 2s;
        }

        /* galaxy spin */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 60s linear infinite;
        }

        /* Particle background */
        .particle-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8), rgba(59, 130, 246, 0.4));
          border-radius: 50%;
          opacity: 0.5;
        }

        .galaxy-nebula-bg {
          background:
            radial-gradient(circle at 18% 15%, rgba(14, 116, 144, 0.2), transparent 38%),
            radial-gradient(circle at 80% 25%, rgba(30, 64, 175, 0.18), transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(67, 56, 202, 0.2), transparent 42%);
          z-index: 0;
          overflow: hidden;
        }

        .nebula-layer {
          position: absolute;
          inset: -25%;
          filter: blur(70px);
          mix-blend-mode: screen;
          opacity: 0.5;
          will-change: transform;
        }

        .nebula-layer-1 {
          background: radial-gradient(circle at 30% 38%, rgba(56, 189, 248, 0.45), transparent 45%);
          animation: nebulaDrift1 32s ease-in-out infinite alternate;
        }

        .nebula-layer-2 {
          background: radial-gradient(circle at 62% 46%, rgba(79, 70, 229, 0.4), transparent 48%);
          animation: nebulaDrift2 41s ease-in-out infinite alternate;
        }

        .nebula-layer-3 {
          background: radial-gradient(circle at 50% 62%, rgba(6, 182, 212, 0.3), transparent 44%);
          animation: nebulaDrift3 36s ease-in-out infinite alternate;
        }

        .galaxy-core {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 9999px;
          left: 50%;
          top: 42%;
          transform: translate(-50%, -50%);
          opacity: 0.25;
          background: conic-gradient(from 0deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.2), rgba(14, 116, 144, 0.55), rgba(6, 182, 212, 0.5));
          filter: blur(8px);
          animation: spinSlow 85s linear infinite;
        }

        .star {
          position: absolute;
          border-radius: 9999px;
          background: rgba(240, 249, 255, 0.95);
          box-shadow: 0 0 7px rgba(255, 255, 255, 0.95), 0 0 12px rgba(6, 182, 212, 0.6);
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>

    </main>
  );
};

export default ExecomBody;
