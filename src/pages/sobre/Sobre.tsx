
export function Sobre() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Nossa Missão
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Transformar o cenário empresarial através da tecnologia. Na TechNexus, acreditamos que a inovação não é apenas um diferencial, mas a espinha dorsal do progresso sustentável. Desenvolvemos soluções robustas, escaláveis e intuitivas que capacitam as organizações a atingirem seu potencial máximo na era digital.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <img 
              src="https://ik.imagekit.io/JohnnieDiniz/Tech%20Nexus/sobre.png" 
              alt="Equipe da TechNexus reunida trabalhando em uma mesa com computadores" 
              className="w-full max-w-md md:max-w-full h-auto rounded-2xl shadow-lg border border-slate-200 object-cover"
            />
          </div>

        </div>
      </div>
    </main>
  );
}

