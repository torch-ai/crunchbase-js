import {
  IIdentifier,
  InterfaceKeys,
  permalink,
  uuid,
} from "../components.types";
import { IOrganization } from "./types/Organization.types";
import { IAcquisition } from "./types/Acquisition.types";
import { IPerson } from "./types/Person.types";
import { IFundingRound } from "./types/FundingRound.types";
import { IFund } from "./types/Fund.types";
import { IInvestment } from "./types/Investment.types";
import { IPressReference } from "./types/PressReference.types";
import { IEventAppearance } from "./types/EventAppearance.types";
import { IIpo } from "./types/Ipo.types";
import { IOwnership } from "./types/Ownership.types";

/**
 * UUID or permalink of desired entity
 */
export type EntityId = uuid | permalink | string;

export interface IEntityParams<EntityType, CardIds> {
  entity_id: EntityId;
  /** Fields to include on the resulting entity - either an array of field_id strings in JSON or a comma-separated list encoded as string */
  field_ids?: InterfaceKeys<EntityType>[];
  /** Cards to include on the resulting entity - array of card_id strings in JSON encoded as string\ Card Ids */
  card_ids?: CardIds[];
}

export interface IEntityCardParams<EntityType, CardIds> {
  entity_id: EntityId;
  card_id: CardIds;
  /** Card fields to include on the specified card - array of field_id strings in JSON encoded as string */
  card_field_ids?: InterfaceKeys<EntityType>[];
  /** Lookup uuid of the last item in the previous page (not required for first page). Used to iterate a card's results starting at the beginning of the ordered set and moving forward. Suitable for implementing "next page" functionality. May not be provided simultaneously with before_id. */
  after_id?: string;
  /** Lookup uuid of the first item in the previous page (not required for first page). Used to iterate a card's results starting at the end of the ordered set and moving backward. Suitable for implementing "previous page" functionality. May not be provided simultaneously with after_id. */
  before_id?: string;
  /** Field name with order direction (asc/desc) */
  order?: string;
  /** Number of rows to return. Default is 100, min is 1, max is 100. */
  limit?: number;
}

interface IEntityResponse<EntityType, CardIds> {
  properties: Partial<EntityType> & IIdentifier;
}

interface IEntityResponseCardsFields<EntityType> {
  fields?: Partial<EntityType>;
}

export interface IOrganizationResponse
  extends IEntityResponse<IOrganization, InterfaceKeys<IOrganizationCards>> {
  cards?: IOrganizationCards;
}

export interface IOrganizationCards
  extends IEntityResponseCardsFields<IOrganization> {
  acquiree_acquisitions?: IAcquisition[];
  acquirer_acquisitions?: IAcquisition[];
  child_organizations?: IOrganization[];
  child_ownerships?: IOwnership[];
  event_appearances?: IEventAppearance[];
  founders?: IPerson[];
  headquarters_address?: IAddress[];
  investors?: IPrincipal[];
  ipos?: IIpo[];
  jobs?: IJob[];
  key_employee_changes?: IKeyEmployeeChange[];
  parent_organization?: IOrganization[];
  parent_ownership?: IOwnership;
  participated_funding_rounds?: IFundingRound[];
  participated_funds?: IFund[];
  participated_investments?: IInvestment[];
  press_references?: IPressReference[];
  raised_funding_rounds?: IFundingRound;
  raised_funds?: IFund[];
  raised_investments?: IInvestment[];
}

export interface IPersonResponse
  extends IEntityResponse<IPerson, InterfaceKeys<IPersonCards>> {
  cards?: IPersonCards;
}

export interface IPersonCards extends IEntityResponseCardsFields<IPerson> {
  degrees: IDegree[];
  event_appearances: IEventAppearance[];
  founded_organizations: IOrganization[];
  jobs: IJob[];
  participated_funding_rounds: IFundingRound[];
  participated_funds: IFund[];
  participated_investments: IInvestment[];
  partner_funding_rounds: IFundingRound[];
  partner_investments: IInvestment[];
  press_references: IPressReference[];
  primary_job: IJob[];
  primary_organization: IOrganization[];
}
