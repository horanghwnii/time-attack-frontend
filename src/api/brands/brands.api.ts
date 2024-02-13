import { AxiosInstance } from 'axios';

class BrandsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getBrands = async () => {
    const url = '/brands';
    const response = await this.coreClient.get(url);
    const data = response.data;
    const result = data.result;

    return result;
  };

  getProduct = async (brandId: number) => {
    const url = `/brands/${brandId}`;
    const response = await this.coreClient.get(url);
    const data = response.data;

    return data;
  };
}

export default BrandsAPI;
