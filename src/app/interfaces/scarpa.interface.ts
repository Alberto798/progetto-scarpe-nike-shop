export interface Scarpa {
  id: number;
  nome: string;
  categoria: string;
  prezzo: number;
  taglie_disponibili: string[]
  colori_disponibili: string[]
  descrizione: string;
  immagine: string;
  nuovo_arrivi: Boolean;
  best_seller: number;
  sales: number;
  immagine_secondaria: string;
  taglia?: string;
  quantity: number;
}




