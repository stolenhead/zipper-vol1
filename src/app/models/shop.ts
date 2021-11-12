 interface Personalizable {
  description: string;
  price: string;
  moneda: string;
}

interface Dsct {
  dsct_type: string;
  description: string;
  last_date: string;
}

export interface Shop {
  id: string;
  name: string;
  price: string;
  moneda: string;
  is_product_in_dsct: boolean;
  size: string;
  color: string;
  short_description:string;
  main_image: string;
  quantity: string;
  is_personalizable: boolean;
  personalizable?: Personalizable;
  dsct?: Dsct;
}