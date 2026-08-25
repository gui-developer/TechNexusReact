

export function Contato() {

  return (
    <div>
        <main className='min-h-screen bg-slate-50 pt-28 pb-16 flex justify-center'>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Fale Conosco
          </h1>
          <p className="text-slate-600 text-lg">
            Entre em contato com a equipe comercial, suporte técnico ou dúvidas gerais
          </p>
        </div>

        <form 
          className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-6"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-2">
              Nome Completo:
            </label>
            <input 
              type="text" 
              id="nome"
              name="nome"
              required 
              placeholder="Digite seu nome completo"
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Corporativo:
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              required 
              placeholder="exemplo@empresa.com.br"
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700"
            />
          </div>
          <div>
            <label htmlFor="assunto" className="block text-sm font-medium text-slate-700 mb-2">
              Assunto:
            </label>
            <input 
              type="text" 
              id="assunto"
              name="assunto"
              required 
              placeholder="Sobre o que deseja falar?"
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700"
            />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-2">
              Mensagem:
            </label>
            <textarea 
              id="mensagem"
              name="mensagem"
              required 
              rows={5}
              placeholder="Escreva sua mensagem detalhada aqui..."
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-slate-700 resize-y"
            ></textarea>
          </div>
          <div className="mt-2">
            <button 
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>

            </div>
        </main>
    </div>
  )
}
