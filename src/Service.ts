import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { IServiceOptions } from "./Service.types";
import Search from "./components/search/Search";
import Autocomplete from "./components/autocomplete/Autocomplete";

export default class Service {
  protected static SERVER_URI = "https://api.crunchbase.com/";
  protected static V4_URI = "api/v4/";

  protected apiKey: string = "";
  protected client: AxiosInstance;
  protected options: IServiceOptions = {
    onInvalidCredentials: () => {},
  };

  public autocomplete: Autocomplete;
  public search: Search;

  // public static formatDate(
  //   property: string,
  //   trustCode: TrustCode,
  //   format: string = "short"
  // ): string {
  //   const unknown = "Unknown";
  //   if (!property || !trustCode) {
  //     return unknown;
  //   }
  //
  //   const date = new Date(property);
  //   switch (trustCode) {
  //     case TrustCode.Day:
  //       return date.toLocaleString("default", { day: "numeric" });
  //     case TrustCode.DayAndMonth:
  //       return date.toLocaleString("default", {
  //         month: format,
  //         day: "numeric",
  //       });
  //     case TrustCode.Month:
  //       return date.toLocaleString("default", { month: format });
  //     case TrustCode.Year:
  //       return date.toLocaleString("default", { year: format });
  //     case TrustCode.YearAndDay:
  //       return date.toLocaleString("default", { year: format, day: "numeric" });
  //     case TrustCode.YearAndMonth:
  //       return date.toLocaleString("default", { year: format, month: format });
  //     case TrustCode.YearMonthAndDay:
  //       return date.toLocaleString("default", {
  //         year: format,
  //         month: format,
  //         day: format,
  //       });
  //     default:
  //       return unknown;
  //   }
  // }

  public constructor(apiKey: string, options: Partial<IServiceOptions> = {}) {
    this.apiKey = apiKey;
    this.setOptions(options);
    this.client = axios.create({
      baseURL: Service.SERVER_URI + Service.V4_URI,
    });
    this.autocomplete = new Autocomplete(this.client);
    this.search = new Search(this.client);

    // Bind to incoming requests
    this.client.interceptors.request.use(this.onRequest.bind(this));
    // Bind to responses
    this.client.interceptors.response.use(
      this.onResponseSuccess.bind(this),
      this.onResponseError.bind(this)
    );
  }

  public setOptions(options: Partial<IServiceOptions>) {
    this.options = { ...this.options, ...options };
    return this;
  }

  /**
   * Modifies the original request adding authorization if required.
   */
  protected onRequest(
    originalRequest: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    return new Promise((resolve, reject) => {
      this.addAuthorization(originalRequest).then(resolve).catch(reject);
    });
  }

  /**
   * Provides success response handling
   */
  protected onResponseSuccess(response: AxiosResponse): Promise<AxiosResponse> {
    return Promise.resolve(response);
    // A hook for interacting with responses if required.
    // return new Promise((resolve, reject) => {
    //     resolve(response);
    // });
  }

  /**
   * Provides failure response handling
   */
  protected onResponseError(error: AxiosError) {
    return new Promise((resolve, reject) => {
      if (error.response && error.response.status === 401) {
        this.options.onInvalidCredentials();
      }
      reject(error);
    });
  }

  /**
   * Middleware
   */

  /**
   * Provides a method for adding authorization to any outbound requests.
   * This is currently not required as operations execute from within the private network.
   *
   * @param originalRequest
   */
  protected async addAuthorization(
    originalRequest: AxiosRequestConfig
  ): Promise<AxiosRequestConfig> {
    return new Promise(async (resolve) => {
      originalRequest.params = originalRequest.params || {};
      originalRequest.params.user_key = this.apiKey;
      resolve(originalRequest);
    });
  }
}
