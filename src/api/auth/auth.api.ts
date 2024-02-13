import { AxiosInstance } from 'axios';
import { AuthDto } from './auth.dto';

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  signUp = async (dto: AuthDto) => {
    const url = '/auth/sign-up';
    const response = await this.coreClient.post(url, dto);
    const data = response.data;

    return data;
  };

  logIn = async (dto: AuthDto) => {
    const url = '/auth/log-in';
    const response = await this.coreClient.post(url, dto);
    const data = response.data;

    return data;
  };

  logOut = async () => {
    const url = '/auth/log-out';
    const response = await this.coreClient.delete(url);
    const data = response.data;

    return data;
  };

  refreshToken = async () => {
    const url = '/auth/refresh-token';
    const response = await this.coreClient.get(url);
    const data = response.data;

    return data;
  };
}

export default AuthAPI;

//response.header.setCookie
//response.header.cookie

// signup, login, refreshToken(있는 상태면  더 길게 오고)
