import { Brand } from './Brand.type';

export type Product = {
  result: any;
  brand: Brand;
  brandId: number;
  deliveryType: string;
  id: number;
  imgSrc: string;
  name: string;
  onlineStock: number;
  originalPrice: number;
  price: number;
};
