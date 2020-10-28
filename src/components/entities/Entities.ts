import AbstractComponent from "../AbstractComponent";
import { InterfaceKeys, IOrganization, IPerson } from "../components.types";
import {
  IEntityParams,
  IEntityCardParams,
  IOrganizationCards,
  IOrganizationResponse,
  IPersonResponse,
} from "./Entities.types";

export default class Entities extends AbstractComponent {
  private static BASE = "entities/";

  private static formatParams = (params: IEntityParams<any, any>) => ({
    entity_id: params.entity_id,
    field_ids: params.field_ids.join(","),
    card_ids: params.card_ids.join(","),
  });

  private static formatCardParams = (params: IEntityCardParams<any, any>) => ({
    ...params,
    card_field_ids: params.card_field_ids.join(","),
  });

  public async organization(
    params: IEntityParams<IOrganization, InterfaceKeys<IOrganizationCards>>
  ): Promise<IOrganizationResponse> {
    const uri = Entities.BASE + `organizations/${params.entity_id}`;
    delete params.entity_id;
    const { data } = await this.client.get<IOrganizationResponse>(uri, {
      params: Entities.formatParams(params),
    });
    return data;
  }

  public async organizationCard(
    params: IEntityCardParams<IOrganization, InterfaceKeys<IOrganizationCards>>
  ): Promise<IOrganizationResponse> {
    const uri =
      Entities.BASE +
      `organizations/${params.entity_id}/cards/${params.card_id}`;
    delete params.entity_id;
    delete params.card_id;
    const { data } = await this.client.get<IOrganizationResponse>(uri, {
      params: Entities.formatCardParams(params),
    });
    return data;
  }

  public async person(
    params: IEntityParams<IPerson, InterfaceKeys<IOrganizationCards>>
  ): Promise<IPersonResponse> {
    const uri = Entities.BASE + `people/${params.entity_id}`;
    delete params.entity_id;
    const { data } = await this.client.get<IPersonResponse>(uri, {
      params: Entities.formatParams(params),
    });
    return data;
  }

  public async personCard(
    params: IEntityCardParams<IPerson, InterfaceKeys<IOrganizationCards>>
  ): Promise<IPersonResponse> {
    const uri =
      Entities.BASE + `people/${params.entity_id}/cards/${params.card_id}`;
    delete params.entity_id;
    delete params.card_id;
    const { data } = await this.client.get<IPersonResponse>(uri, {
      params: Entities.formatCardParams(params),
    });
    return data;
  }
}
