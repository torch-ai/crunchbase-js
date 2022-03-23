import { IEntityIdentifier } from "../components.types";

export type AutocompleteCollectionId =
  | "organizations"
  | "organization.companies"
  | "organization.investors"
  | "organization.schools"
  | "people"
  | "person.investors"
  | "funding_rounds"
  | "acquisitions"
  | "investments"
  | "events"
  | "press_references"
  | "funds"
  | "event_appearances"
  | "ipos"
  | "ownerships"
  | "categories"
  | "category_groups"
  | "locations"
  | "jobs"
  | "principals";

export interface IAutocompleteParams {
  query: string;
  /** One or more AutocompleteCollectionIds separated by "," */
  collection_ids?: string;
  limit?: number;
}

export interface IAutocompleteResult {
  entities: IAutocompleteEntity[];
}

export interface IAutocompleteEntity {
  identifier: IEntityIdentifier;
  facet_ids: string[];
  short_description: string;
}
