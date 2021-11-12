  interface DetailSize {
      top: string;
      chest: string;
  }

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
  
 interface TagCategory {
      id: string;
      name: string;
  }

 interface Image {
      src: string;
  }

   interface Delivery {
      is_international: boolean;
      price: number;
      method_page: string;
      country: string;
  }

  interface Autor {
      name: string;
      user_name: string;
      id: string;
      city: string;
      country: string;
      profile_image: string;
      wssp_link: string;
  }

  export interface Description {
      id: string;
      q: string;
      product_name: string;
      price: string;
      moneda: string;
      country: string;
      ciudad: string;
      is_avaiable: boolean;
      product_description: string;
      product_materials: string[];
      product_size: string;
      detail_sizes: DetailSize[];
      product_category: string;
      product_colors: string[];
      tag_categories: TagCategory[];
      is_product_in_dsct: boolean;
      is_complete_look: boolean;
      is_redesigned: boolean;
      day_of_publication: string;
      images: Image[];
      main_image: string;
      delivery: Delivery;
      autor: Autor;
      is_personalizable: boolean;
        personalizable?: Personalizable;
        dsct?: Dsct;
  }


