import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight mb-6">
              Inovando o <br className="hidden md:block" /> Futuro Digital
            </h1>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Construímos soluções tecnológicas inteligentes que aceleram a transformação da sua empresa. Precisão enterprise com a agilidade de uma startup moderna.
            </p>
            
            <div>
              <Link 
                to="/about"
                className="inline-block bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <img 
              src="https://ik.imagekit.io/JohnnieDiniz/Tech%20Nexus/hero.jpg" 
              alt="Representação abstrata de conexões tecnológicas e rede digital" 
              className="w-full max-w-md lg:max-w-full h-auto rounded-2xl shadow-xl border border-slate-200 object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>

        </div>
      </div>
    </main>
  );
}