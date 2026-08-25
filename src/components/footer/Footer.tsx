import { 
  FacebookLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon
} from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Textos */}
        <div className="text-sm space-y-1 text-center md:text-left">
          <p className="font-medium text-slate-300">© 2026 Tech Nexus.</p>
          <p className="text-xs text-slate-500">
            Esta empresa e todas as informações são fictícias e criadas exclusivamente para fins educacionais.
          </p>
        </div>

        {/* Ícones Sociais */}
        <div className="flex items-center gap-6 text-2xl text-slate-400">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300" 
            aria-label="Facebook"
          >
            <FacebookLogoIcon weight="regular" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300" 
            aria-label="Instagram"
          >
            <InstagramLogoIcon weight="regular" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white hover:-translate-y-1 transition-all duration-300" 
            aria-label="X (Twitter)"
          >
            <XLogoIcon weight="regular" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300" 
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon weight="regular" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-red-500 hover:-translate-y-1 transition-all duration-300" 
            aria-label="YouTube"
          >
            <YoutubeLogoIcon weight="regular" />
          </a>
        </div>
      </div>
    </footer>
  );
}