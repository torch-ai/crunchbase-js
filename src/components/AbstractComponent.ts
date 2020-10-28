import { AxiosInstance } from "axios";

export default abstract class AbstractComponent {
  protected client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }
}
