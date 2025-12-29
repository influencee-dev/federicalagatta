
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration?: string;
  category: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating: number;
}
