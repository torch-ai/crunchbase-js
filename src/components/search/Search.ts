import AbstractComponent from "../AbstractComponent";
import { IEntitySearch, IEntitySearchReturn } from "./Search.types";
import { IOrganization } from "../entities";
import { IFundingRound } from "../entities";
import { IPerson } from "../entities";
import { IPrincipal } from "../entities";

export default class Search extends AbstractComponent {
  private static BASE = "searches/";

  public async organizations(
    params: IEntitySearch<IOrganization>
  ): IEntitySearchReturn<IOrganization> {
    const { data } = await this.client.post<IEntitySearchReturn<IOrganization>>(
      Search.BASE + "organizations",
      params
    );
    return data;
  }

  public async people(
    params: IEntitySearch<IPerson>
  ): IEntitySearchReturn<IPerson> {
    const { data } = await this.client.post<IEntitySearchReturn<IPerson>>(
      Search.BASE + "people",
      params
    );
    return data;
  }

  public async principals(
    params: IEntitySearch<IPrincipal>
  ): IEntitySearchReturn<IPrincipal> {
    const { data } = await this.client.post<IEntitySearchReturn<IPrincipal>>(
      Search.BASE + "principals",
      params
    );
    return data;
  }

  public async fundingRounds(
    params: IEntitySearch<IFundingRound>
  ): IEntitySearchReturn<IFundingRound> {
    try {
      const { data } = await this.client.post<
        IEntitySearchReturn<IFundingRound>
      >(Search.BASE + "funding_rounds", params);

      return data;
    } catch (error) {
      throw error;
    }
  }
}
