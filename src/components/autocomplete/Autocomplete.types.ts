import { IEntityIdentifier } from "../components.types";

export interface IAutocompleteParams {
  query: string;
  collection_ids?: (
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
    | "principals"
  )[];
  limit?: number;
}

export interface IAutocompleteResult {
  entities: IAutocompleteEntity[];
}

interface IAutocompleteEntity {
  identifier: IEntityIdentifier;
  facet_ids: string[];
  short_description: string;
}
