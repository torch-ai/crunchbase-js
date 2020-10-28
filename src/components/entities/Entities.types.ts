import {
  IIdentifier,
  InterfaceKeys,
  IOrganization,
  IPerson,
  permalink,
  uuid,
} from "../components.types";

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
  acquiree_acquisitions?: unknown;
  acquirer_acquisitions?: unknown;
  child_organizations?: unknown;
  child_ownerships?: unknown;
  event_appearances?: unknown;
  founders?: unknown;
  headquarters_address?: unknown;
  investors?: unknown;
  ipos?: unknown;
  jobs?: unknown;
  key_employee_changes?: unknown;
  parent_organization?: unknown;
  parent_ownership?: unknown;
  participated_funding_rounds?: unknown;
  participated_funds?: unknown;
  participated_investments?: unknown;
  press_references?: unknown;
  raised_funding_rounds?: unknown;
  raised_funds?: unknown;
  raised_investments?: unknown;
}

export interface IPersonCards extends IEntityResponseCardsFields<IPerson> {
  degrees: unknown;
  event_appearances: unknown;
  founded_organizations: unknown;
  jobs: unknown;
  participated_funding_rounds: unknown;
  participated_funds: unknown;
  participated_investments: unknown;
  partner_funding_rounds: unknown;
  partner_investments: unknown;
  press_references: unknown;
  primary_job: unknown;
  primary_organization: unknown;
}