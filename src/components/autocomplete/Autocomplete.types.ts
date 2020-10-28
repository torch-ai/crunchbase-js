import { IEntityIdentifier } from "../components.types";

export interface IAutocompleteParams {
  query: string;
  collection_ids?: string[];
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
