import {
  IIdentifier,
  InterfaceKeys,
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

export interface IEntityResponse<EntityType, CardIds> {
  properties: Partial<EntityType> & IIdentifier;
}

export interface IEntityResponseCardsFields<EntityType> {
  fields?: Partial<EntityType>;
}
