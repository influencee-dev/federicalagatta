
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const Consulenze: React.FC = () => {
  const navigate = useNavigate();

  const handleBookingRedirect = () => {
    navigate('/contatti');
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#D48C6B] uppercase mb-4 block">Scegli il tuo percorso</span>
          <h1 className="serif text-4xl sm:text-5xl md:text-6xl mb-6 text-stone-900">Servizi e Consulenze</h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Percorsi studiati per accompagnarti passo dopo passo verso i tuoi obiettivi di salute, con supporto costante e piani personalizzati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white rounded-[32px] overflow-hidden shadow-sm border border-stone-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="p-8 sm:p-12 flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div className="flex-1">
                    <span className="text-[9px] font-bold tracking-widest text-[#4A5D23] uppercase bg-[#4A5D23]/10 px-3 py-1.5 rounded-full mb-4 inline-block">
                      {service.category}
                    </span>
                    <h2 className="serif text-3xl sm:text-4xl text-stone-900 group-hover:text-[#4A5D23] transition-colors leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <div className="bg-[#F9F7F2] px-5 py-3 rounded-2xl">
                    <span className="text-2xl sm:text-3xl font-medium text-stone-900">{service.price}</span>
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-10 text-sm sm:text-base">
                  {service.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-[10px] sm:text-xs font-bold tracking-widest text-stone-400 border-t border-stone-50 pt-8 uppercase">
                  {service.duration && (
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2 text-[#4A5D23]" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2 text-[#4A5D23]" />
                    <span>In studio o online</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-8 pt-0">
                <button
                  onClick={handleBookingRedirect}
                  className="w-full bg-[#6B1C3B] text-white py-4 sm:py-5 rounded-2xl flex items-center justify-center space-x-3 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#5a1731] transition-all shadow-lg group/btn"
                >
                  <span>Prenota Sessione</span>
                  <ChevronRight size={16} className="ml-1 opacity-100 transition-all -translate-x-1 group-hover/btn:translate-x-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 sm:mt-32 bg-[#F9F7F2] rounded-[32px] sm:rounded-[48px] p-8 sm:p-16 text-center border border-stone-200 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="serif text-3xl sm:text-4xl mb-6 text-stone-900">Dubbi o domande?</h3>
            <p className="text-stone-600 mb-10 max-w-xl mx-auto text-sm sm:text-base">
              Non sai quale percorso si adatta meglio alle tue esigenze? Scrivimi per un breve colloquio informativo gratuito.
            </p>
            <button
              onClick={handleBookingRedirect}
              className="inline-flex items-center space-x-2 border-2 border-[#4A5D23] text-[#4A5D23] px-10 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#4A5D23] hover:text-white transition-all shadow-sm"
            >
              <span>Chiedi informazioni</span>
            </button>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4A5D23]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#6B1C3B]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Consulenze;
