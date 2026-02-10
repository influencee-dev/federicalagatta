
import React from 'react';
import { Service, Testimonial } from './types';

export const COLORS = {
  primary: '#4A5D23', // Deep Olive
  secondary: '#6B1C3B', // Burgundy
  accent: '#D48C6B', // Terracotta
  bg: '#F9F7F2', // Cream
  text: '#1a1a1a',
};

export const SERVICES: Service[] = [
  {
    id: 'prima-visita',
    title: 'Prima Visita Nutrizionale',
    description: 'Anamnesi completa, valutazione della composizione corporea e definizione degli obiettivi. Include il primo piano alimentare personalizzato.',
    price: '90€',
    duration: '60 min',
    category: 'Individuale'
  },
  {
    id: 'controllo',
    title: 'Visita di Controllo',
    description: 'Monitoraggio dei progressi, aggiornamento del piano alimentare e supporto motivazionale continuo.',
    price: '50€',
    duration: '30 min',
    category: 'Individuale'
  },
  {
    id: 'percorso-benessere',
    title: 'Percorso "Equilibrio e Consapevolezza"',
    description: 'Pacchetto di 3 mesi focalizzato sull\'educazione alimentare e sul miglioramento del rapporto con il cibo, senza restrizioni eccessive.',
    price: '280€',
    duration: 'Percorso',
    category: 'Programmi'
  },
  {
    id: 'sportiva',
    title: 'Consulenza Nutrizione Sportiva',
    description: 'Ottimizzazione della performance e del recupero tramite un piano specifico per l\'atleta (agonista o amatoriale).',
    price: '110€',
    duration: '75 min',
    category: 'Sport'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Federica mi ha aiutata a ritrovare un rapporto sano con il cibo. Non è una dieta, è un nuovo stile di vita dove mi sento finalmente a mio agio.",
    author: "Elena R.",
    rating: 5
  },
  {
    id: '2',
    text: "Professionale e molto preparata. I risultati sono arrivati senza stress, rispettando i miei ritmi e le mie preferenze alimentari.",
    author: "Marco G.",
    rating: 5
  },
  {
    id: '3',
    text: "Grazie a Federica ho risolto i miei problemi di gonfiore addominale che mi portavo dietro da anni. Consigliatissima!",
    author: "Silvia M.",
    rating: 5
  }
];

export const CONTACT_INFO = {
  phone: "340 875 7773",
  whatsapp: "393408757773",
  email: "info@federicalagatta.it",
  address: "Via A. Cesare Carelli, 28, 71121 Foggia FG",
  instagram: "federicalagatta_nutrizionista",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+A.+Cesare+Carelli+28+71121+Foggia+FG"
};

export const BUSINESS_HOURS = [
  { day: 'Lunedì', hours: '09:00 – 12:00, 17:30 – 20:00' },
  { day: 'Martedì', hours: 'Chiuso' },
  { day: 'Mercoledì', hours: '09:00 – 12:00, 17:30 – 20:00' },
  { day: 'Giovedì', hours: 'Chiuso' },
  { day: 'Venerdì', hours: '09:00 – 12:00' },
  { day: 'Sabato', hours: 'Chiuso' },
  { day: 'Domenica', hours: 'Chiuso' },
];
