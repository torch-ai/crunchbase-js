import AbstractComponent from "../AbstractComponent";
import { InterfaceKeys } from "../components.types";
import {
  IEntityParams,
  IEntityCardParams,
  IEntityFlatParams,
  IEntityCardFlatParams,
} from "./Entities.types";
import {
  IOrganization,
  IOrganizationCards,
  IOrganizationResponse,
} from "./types/Organization.types";
import { IPerson, IPersonCards, IPersonResponse } from "./types/Person.types";

export default class Entities extends AbstractComponent {
  private static BASE = "entities/";

  private static formatParams = (
    params: IEntityParams<any, any>
  ): IEntityFlatParams => {
    const flatParams: IEntityFlatParams = { entity_id: params.entity_id };
    if (params.field_ids) {
      flatParams.field_ids = params.field_ids.join(",");
    }
    if (params.card_ids) {
      flatParams.card_ids = params.field_ids.join(",");
    }
    return flatParams;
  };

  private static formatCardParams = (
    params: IEntityCardParams<any, any>
  ): IEntityCardFlatParams => {
    const flatParams: IEntityCardFlatParams = {
      entity_id: params.entity_id,
      card_id: params.card_id,
    };
    if (params.card_field_ids) {
      flatParams.card_field_ids = params.card_field_ids.join(",");
    }
    if (params.after_id) {
      flatParams.after_id = params.after_id;
    }
    if (params.before_id) {
      flatParams.before_id = params.before_id;
    }
    if (params.order) {
      flatParams.order = params.order;
    }
    if (params.limit) {
      flatParams.limit = params.limit;
    }
    return flatParams;
  };

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
    params: IEntityCardParams<IPerson, InterfaceKeys<IPersonCards>>
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
