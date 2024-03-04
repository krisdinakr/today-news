import axios, { AxiosInstance, AxiosResponse } from 'axios';

export abstract class BaseApi {
  private readonly _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      baseURL:
        import.meta.env.VITE_ENVIRONMENT === 'production'
          ? `${import.meta.env.VITE_PROXY_URL}${import.meta.env.VITE_BASE_URL}`
          : import.meta.env.VITE_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-API-Key': import.meta.env.VITE_KEY_API,
      },
    });
  }

  public get = <T, R>(url: string, params?: R): Promise<T> =>
    new Promise((resolve, reject) =>
      this._http
        .get(url, { params })
        .then((response: AxiosResponse) => resolve(response.data))
        .catch((error) => {
          if (error.response) {
            reject({
              message: error.response.data,
              code: error.response.status,
              location: error.config.url,
            });
          } else if (error.request) {
            reject(error.request);
          } else {
            reject(error.message);
          }

          reject(error.config);
        })
    );
}
