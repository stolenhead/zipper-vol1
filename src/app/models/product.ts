
export interface Product {
  id: string;
  product_name:string;
  current_price: number;
  estimated_price_min: number,
  estimated_price_max: number,
  bid: boolean | object,
  day_of_publication:string;
  last_day: string;
  numbers_of_bids:number;
  buy_now:boolean;
  category: string;
  tags:Tag[];
  src: string;
  delivery: Delivery;
  autor: DesignerData;
}

interface Tag {
  id: string;
  name: string;
}

interface Delivery {
  is_international: boolean;
  price: number;
  method_paid: string;
  country:string;
  postal_code:string;
}

interface DesignerData {
  id: string;
  name: string;
  user_name: string;
  city: string;
  country: string;
}