
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="logo-font text-3xl font-medium mb-1 italic">Federica La Gatta</h3>
            <p className="text-[#4A5D23] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">Nutrizionista</p>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Nutrizionista dedicata a percorsi di salute personalizzati per ritrovare l'equilibrio e il benessere attraverso un'alimentazione consapevole e sostenibile.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-stone-400">Navigazione</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-stone-600 hover:text-[#4A5D23] transition-colors">Home</Link></li>
              <li><Link to="/consulenze" className="text-stone-600 hover:text-[#4A5D23] transition-colors">Consulenze</Link></li>
              <li><Link to="/contatti" className="text-stone-600 hover:text-[#4A5D23] transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-stone-400">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-stone-600">
                <MapPin size={18} className="mr-2 text-[#4A5D23]" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center text-stone-600">
                <Phone size={18} className="mr-2 text-[#4A5D23]" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center text-stone-600">
                <Mail size={18} className="mr-2 text-[#4A5D23]" />
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-6 text-stone-400">Seguimi</h4>
            <div className="flex space-x-4">
              <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-50 rounded-full text-[#4A5D23] hover:bg-[#4A5D23] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-400 text-xs text-center md:text-left">
          <p>© {new Date().getFullYear()} Dott.ssa Federica La Gatta. P.IVA 12345678901. Tutti i diritti riservati.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-stone-600">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
