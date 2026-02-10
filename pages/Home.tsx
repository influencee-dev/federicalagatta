
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Utensils, Droplets, CheckCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:h-[90vh] flex flex-col md:flex-row overflow-hidden bg-[#F9F7F2]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-16 md:py-0 z-10 order-2 md:order-1">
          <span className="text-[10px] font-bold tracking-[0.4em] text-stone-400 uppercase mb-4 sm:mb-6">Dott.ssa Federica La Gatta</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight sm:leading-[1.1] mb-6 sm:mb-8 text-stone-900 serif">
            Coaching nutrizionale per donne reali.
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 mb-8 sm:mb-10 leading-relaxed max-w-lg">
            Smetti di contare le calorie e inizia a nutrire il tuo corpo. Percorsi personalizzati per ritrovare energia e salute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/consulenze"
              className="inline-flex items-center justify-center bg-[#4A5D23] text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-[#3d4d1d] transition-all text-center tracking-widest uppercase shadow-md group"
            >
              Scopri le consulenze
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[50vh] sm:h-[60vh] md:h-full order-1 md:order-2 bg-stone-100">
          <img 
            src="flg.webp" 
            alt="Dott.ssa Federica La Gatta - Nutrizionista"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/5 md:hidden"></div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 sm:py-32 px-6 sm:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Leaf className="text-[#D48C6B]" size={36} />
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-10 text-stone-800">
            "La mia missione è educare e incoraggiare uno stile di vita sano e consapevole, aiutando gli altri ad abbracciare il concetto che siamo il prodotto di ciò che mangiamo e di come ci trattiamo."
          </h2>
          <p className="text-stone-400 font-bold tracking-widest text-[10px] uppercase">
            Benessere a 360 gradi
          </p>
        </div>
      </section>

      {/* Features / Pillars */}
      <section className="py-20 sm:py-24 px-6 sm:px-12 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6">
              <Heart className="text-[#6B1C3B]" size={24} />
            </div>
            <h3 className="serif text-2xl mb-4 text-stone-800">Amore per il corpo</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Dimentica le diete restrittive. Impariamo a fidarci dei segnali del nostro corpo e a nutrirlo con amore e rispetto.
            </p>
          </div>
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="text-[#4A5D23]" size={24} />
            </div>
            <h3 className="serif text-2xl mb-4 text-stone-800">Libertà Alimentare</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Il cibo è piacere e condivisione. Riconquista la libertà di mangiare ciò che ami senza sensi di colpa.
            </p>
          </div>
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center mb-6">
              <Droplets className="text-[#D48C6B]" size={24} />
            </div>
            <h3 className="serif text-2xl mb-4 text-stone-800">Salute Olistica</h3>
            <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
              Non solo cosa mangi, ma come dormi e come ti muovi. Un approccio integrato per una vitalità duratura.
            </p>
          </div>
        </div>
      </section>

      {/* Buone Pratiche Section */}
      <section className="py-20 sm:py-32 bg-white px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" 
                alt="Verdure fresche e nutrienti" 
                className="rounded-[32px] sm:rounded-[48px] shadow-2xl relative z-10 w-full object-cover h-[400px] sm:h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#D48C6B]/10 rounded-full z-0 hidden sm:block"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#D48C6B] uppercase mb-4 block">Educazione Alimentare</span>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight text-stone-800">Buone pratiche per il tuo benessere</h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                { title: 'Idratazione costante', desc: 'L\'acqua è essenziale. Mantieni il corpo idratato per favorire ogni processo metabolico.' },
                { title: 'Varietà stagionale', desc: 'Scegli alimenti di stagione per massimizzare l\'apporto di vitamine e minerali naturali.' },
                { title: 'Ascolto del corpo', desc: 'Riscopri il senso di sazietà e impara a nutrire la tua fame fisiologica.' },
                { title: 'Pasti consapevoli', desc: 'Crea un ambiente sereno per mangiare, assaporando ogni boccone con calma.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-[#4A5D23]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1.5">{item.title}</h4>
                    <p className="text-stone-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-[#F9F7F2] px-6 sm:px-12 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-20 text-stone-800">Cosa dicono le mie clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm text-left flex flex-col border border-stone-50">
                <div className="flex text-yellow-500 mb-6 space-x-1">
                  {[...Array(t.rating)].map((_, i) => <span key={i} className="text-lg">★</span>)}
                </div>
                <p className="italic text-stone-600 mb-8 leading-relaxed text-sm sm:text-base flex-grow">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-bold text-[#4A5D23] text-xs">
                    {t.author.charAt(0)}
                  </div>
                  <h4 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">{t.author}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-6 sm:px-12 bg-[#6B1C3B] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl mb-8 leading-tight">Pronta a prenderti cura di te?</h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 leading-relaxed">
            Iniziamo oggi il percorso verso un nuovo equilibrio. La tua salute è l'investimento più importante.
          </p>
          <Link 
            to="/consulenze"
            className="inline-block bg-white text-[#6B1C3B] px-10 sm:px-16 py-4 rounded-full text-xs sm:text-sm font-bold hover:bg-stone-100 transition-all uppercase tracking-widest shadow-xl"
          >
            Prenota una consulenza
          </Link>
        </div>
        {/* Decorative elements for mobile flare */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
