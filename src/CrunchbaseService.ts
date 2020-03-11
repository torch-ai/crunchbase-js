import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import { TIMINGS } from "./constants";
import {
  IOrganizationsCallParams,
  IServiceOptions,
  OrganizationsSummaryResponse
} from "./CrunchbaseServiceTypes";

export default class CrunchbaseService {
  protected static SERVER_URI = "https://api.crunchbase.com/";
  protected static V3_URI = "v3.1/";

  protected static DEFAULT_TIMEOUT = TIMINGS.defaultTimeout;

  protected apiKey: string = "";
  protected client: AxiosInstance;
  protected options: IServiceOptions = {
    onInvalidCredentials: () => {}
  };

  public constructor(apiKey: string, options: Partial<IServiceOptions> = {}) {
    this.apiKey = apiKey;
    this.setOptions(options);
    this.client = axios.create({
      baseURL: CrunchbaseService.SERVER_URI,
      timeout: CrunchbaseService.DEFAULT_TIMEOUT
    });

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
      this.addAuthorization(originalRequest)
        .then(resolve)
        .catch(reject);
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
    return new Promise(async (resolve, reject) => {
      originalRequest.params.user_key = this.apiKey;
      resolve(originalRequest);
    });
  }

  public getOrganizations(
    options: Partial<IOrganizationsCallParams> = {}
  ): Promise<OrganizationsSummaryResponse> {
    return this.client
      .get(CrunchbaseService.V3_URI + "organizations", {
        params: options
      })
      .then(response => new OrganizationsSummaryResponse(response.data));
  }

  // public async searchKeywords(query: string): Promise<KeywordsResponse> {
  //     return this.client.get(CrunchbaseService.ENDPOINT_KEYWORD_SEARCH + '/' + query, {
  //         timeout: 0, // Unlimited time out. This can be a rather long call.
  //     })
  //         .then(results => results.data)
  //         .then(data => new KeywordsResponse(data));
  // }
}
