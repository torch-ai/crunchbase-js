import { uuid } from "../components.types";

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

interface IEntityIdentifier {
  /** Every entity in the system has a unique identifier that contains all necessary properties to represent it. */
  description?: uuid;
  /** Optionally provided within Entity Def unique nice id of this entity */
  permalink: string;
  /** Textual representation of this entity (i.e. its "name") */
  value: string;
  /** Optionally provided location to obtain an image representing this entity */
  image_id?: string;
  /** What type of entity this be */
  entity_def_id?: string;
}
