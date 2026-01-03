import { Youtube, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo-removebg.png';
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
              <img src={logo} alt="Concorde.Tech" className="h-20 w-auto object-contain" />
            <h3 className="text-2xl font-bold text-white mb-4">
            </h3>
            <p className="text-slate-400">
              Nous construisons des solutions web exceptionnelles pour les entreprises du monde entier.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Nous suivre</h4>
            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@nexusconcorde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-slate-700 transition-colors"
              >
                <Youtube size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Concorde.Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
