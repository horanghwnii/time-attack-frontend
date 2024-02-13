import axios from 'axios';
import ProductAPI from './product/product.api';

const coreClient = axios.create({
  baseURL: 'https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app',
  withCredentials: true, // 필수 cookie refreshToken이 필요함. 도장이 있으면 useEffect 안에 마운트될 때 딱 한 번만 실행하도록 / useQuery를 사용함
  // auth buttons을 wrapper로 감싸서 했음 -> AuthProvider가 가장 적합함.... api.auth.refreshToken() 하면 됨
});

class API {
  static product = new ProductAPI(coreClient);
}

export default API;
