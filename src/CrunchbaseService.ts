import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import { TIMINGS } from "./constants";
import {
  IOrganizationsCallParams,
  IPeopleCallParams,
  IServiceOptions,
  OrganizationResponse,
  OrganizationsSummaryResponse,
  PeopleSummaryResponse,
  PersonResponse
} from "./CrunchbaseServiceTypes";

export default class CrunchbaseService {
  protected static SERVER_URI = "https://api.crunchbase.com/";
  protected static V3_URI = "v3.1/";
  protected static ENDPOINT_ORGANIZATIONS =
    CrunchbaseService.V3_URI + "organizations";
  protected static ENDPOINT_PEOPLE = CrunchbaseService.V3_URI + "people";

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
      originalRequest.params = originalRequest.params || {};
      originalRequest.params.user_key = this.apiKey;
      resolve(originalRequest);
    });
  }

  /**
   * @link https://data.crunchbase.com/reference#organizations
   * @param options
   */
  public getOrganizations(
    options: Partial<IOrganizationsCallParams> = {}
  ): Promise<OrganizationsSummaryResponse> {
    return this.client
      .get(CrunchbaseService.ENDPOINT_ORGANIZATIONS, {
        params: options,
        timeout: TIMINGS.organizationsTimeout
      })
      .then(response => new OrganizationsSummaryResponse(response.data));
  }

  /**
   * @link https://data.crunchbase.com/reference#organization-permalink
   * @param permalink
   */
  public getOrganization(permalink: string): Promise<OrganizationResponse> {
    return this.client
      .get([CrunchbaseService.ENDPOINT_ORGANIZATIONS, permalink].join("/"), {
        timeout: TIMINGS.organizationTimeout
      })
      .then(response => new OrganizationResponse(response.data));
  }

  // @link https://data.crunchbase.com/reference#organizations-permalink-relationship_name
  // public getOrganizationRelationships(
  //     permalink: string,
  //     relationship: OrganizationRelationships,
  //     options Partial<ICallOrganizationRelationshipsParams> = {}
  //   ): Promise<object> {
  //   return this.client
  //       .get([CrunchbaseService.ENDPOINT_ORGANIZATIONS, permalink].join("/"), {
  //         timeout: TIMINGS.organizationTimeout
  //       })
  //       .then(response => new OrganizationResponse(response.data));
  // }

  /**
   * @link https://data.crunchbase.com/reference#people
   * @param options
   */
  public getPeople(
    options: Partial<IPeopleCallParams> = {}
  ): Promise<PeopleSummaryResponse> {
    return this.client
      .get(CrunchbaseService.ENDPOINT_PEOPLE, {
        params: options
      })
      .then(response => new PeopleSummaryResponse(response.data));
  }

  /**
   * @link https://data.crunchbase.com/reference#person-permalink
   * @param permalink
   */
  public getPerson(permalink: string): Promise<PersonResponse> {
    return this.client
      .get([CrunchbaseService.ENDPOINT_PEOPLE, permalink].join("/"))
      .then(response => new PersonResponse(response.data));
  }

  // TODO The api gives us urls like "first_page_url": "https://api.crunchbase.com/v3.1/organizations/tesla-motors/competitors". We have to figure out how to follow and type those.
  // public get(url: string): Promise<any> {
  //   return this.client.get(url).then(response => response.data);
  // }

  // TODO we likely could get benefit from using performance of this
  // public batch(): Promise<object[]> {}
}
