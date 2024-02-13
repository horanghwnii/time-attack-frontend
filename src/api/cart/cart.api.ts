import { AxiosInstance } from 'axios';

class CartAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getCart = async () => {
    const url = '/cart';
    const response = await this.coreClient.get(url);
    const data = response.data;
    const result = data.result;
    const items = result.items;

    return items;
  };

  addItemToCart = async (productId: number) => {
    const url = `/cart/products/${productId}`;
    const response = await this.coreClient.post(url, productId);
    const data = response.data;
    const result = data.result;

    return result;
  };

  removeItemFromCart = async (productId: any) => {
    const url = `/cart/products/${productId}`;
    const response = await this.coreClient.delete(url, productId);
    const data = response.data;
    const result = data.result;

    return result;
  };

  clearItemInCart = async (productId: any) => {
    const url = `/cart/products/${productId}/clear`;
    const response = await this.coreClient.delete(url, productId);
    const data = response.data;
    const result = data.result;

    return result;
  };
}

export default CartAPI;
