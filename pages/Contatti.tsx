
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Clock, Instagram, CheckCircle2 } from 'lucide-react';

const Contatti: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    messaggio: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real app, you'd send this to an API or email service
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="order-2 lg:order-1">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D48C6B] uppercase mb-4 block">Come trovarmi</span>
            <h1 className="serif text-4xl sm:text-5xl md:text-6xl mb-8 text-stone-900">Iniziamo il tuo percorso insieme.</h1>
            <p className="text-stone-600 text-base sm:text-lg mb-12 leading-relaxed">
              Ricevo in studio a Milano su appuntamento e online in tutta Italia. Scegli il canale che preferisci per contattarmi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 sm:gap-10">
              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-[#4A5D23] transition-colors group-hover:bg-[#4A5D23] group-hover:text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-widest text-[10px]">Lo Studio</h4>
                  <p className="text-stone-500 text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-[#6B1C3B] transition-colors group-hover:bg-[#6B1C3B] group-hover:text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-widest text-[10px]">Email</h4>
                  <p className="text-stone-500 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-[#4A5D23] transition-colors group-hover:bg-[#4A5D23] group-hover:text-white">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-widest text-[10px]">Telefono</h4>
                  <p className="text-stone-500 text-sm">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 text-[#D48C6B] transition-colors group-hover:bg-[#D48C6B] group-hover:text-white">
                  <Instagram size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1 uppercase tracking-widest text-[10px]">Social</h4>
                  <p className="text-stone-500 text-sm">@{CONTACT_INFO.instagram}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white p-8 sm:p-12 md:p-16 rounded-[40px] shadow-2xl border border-stone-50 relative min-h-[500px] flex flex-col justify-center">
              {!submitted ? (
                <>
                  <h3 className="serif text-3xl mb-8 text-stone-900">Invia una richiesta</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Nome</label>
                        <input 
                          type="text" 
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Il tuo nome"
                          className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]/20 focus:border-[#4A5D23] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Cognome</label>
                        <input 
                          type="text" 
                          name="cognome"
                          required
                          value={formData.cognome}
                          onChange={handleChange}
                          placeholder="Il tuo cognome"
                          className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]/20 focus:border-[#4A5D23] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-1">Messaggio</label>
                      <textarea 
                        name="messaggio"
                        rows={6}
                        required
                        value={formData.messaggio}
                        onChange={handleChange}
                        placeholder="Raccontami brevemente di cosa hai bisogno..."
                        className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A5D23]/20 focus:border-[#4A5D23] transition-all resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-[#4A5D23] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#3d4d1d] transition-all flex items-center justify-center space-x-3 shadow-lg active:scale-95"
                    >
                      <span>Invia Messaggio</span>
                    </button>
                    <div className="flex items-center justify-center space-x-2 text-stone-400 text-[10px] sm:text-xs">
                      <Clock size={12} />
                      <span>Rispondo solitamente entro 24 ore</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="bg-[#4A5D23]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#4A5D23]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="serif text-3xl mb-4 text-stone-900">Grazie {formData.nome}!</h3>
                  <p className="text-stone-600 leading-relaxed mb-8">
                    Il tuo messaggio è stato inviato correttamente. <br /> Ti ricontatterò al più presto per confermare il tuo appuntamento.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#4A5D23] font-bold uppercase tracking-widest text-xs border-b-2 border-[#4A5D23] pb-1"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
