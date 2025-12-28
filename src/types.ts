export interface Sucursal {
  ciudad: string;
  ofip: string;
  sucursales: string[];

}

export interface Empresa {
  id: number;
  nomempresa: string;
  urlinterna: string,
  target: string,
  precio: string,
  velocidad: string,
  img: string;
  ciudades: Sucursal[];
}


export interface Proveedores {
  id: number,
  nombre: string,
  urlinterna: string,
  img: string,
  url: string,
}

export interface Herramientas {
  id: number,
  nombre: string,
  urlinterna: string,
  img: string,

}


export interface FaqItem {
  question: string;
  answer: string;
}

export interface BestProvider {
  name: string;
  description: string;
}

export interface City {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  introTitle: string;
  introText: string;
  mapEmbedUrl: string;
  bestProviders: BestProvider[];
  faqs: FaqItem[];
}
