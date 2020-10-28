import AbstractComponent from "../AbstractComponent";
import { IEntitySearch, IEntitySearchReturn } from "./Search.types";
import { IOrganization } from "../components.types";

export default class Search extends AbstractComponent {
  private static BASE = "searches/";

  public async organization(
    params: IEntitySearch<IOrganization>
  ): IEntitySearchReturn<IOrganization> {
    const { data } = await this.client.post<IEntitySearchReturn<IOrganization>>(
      Search.BASE + "organizations",
      params
    );
    return data;
  }
}
