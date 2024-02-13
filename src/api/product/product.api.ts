import { AxiosInstance } from 'axios';
import { GetProductsData } from './product.response';

class ProductAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getProducts = async () => {
    const url = '/products';
    const response = await this.coreClient.get<GetProductsData>(url);
    const data = response.data;
    const result = data.result;

    return result;
  };

  getProductDetail = async (productId: number) => {
    const url = `/products/${productId}`;
    const response = await this.coreClient.get<GetProductsData>(url);
    const data = response.data;
    const result = data.result;

    return result;
  };
}

export default ProductAPI;
