import {
  date,
  EntityDefId,
  ICreated,
  IEntityIdentifier,
  IIdentifier,
  ILink,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IPressReference
  extends IIdentifier,
    ICreated,
    IUpdated,
    IUUID {
  /**
   * Entities mentioned in the press reference
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  activity_entities?: IEntityIdentifier[];
  /**
   * maxLength: 8192
   * The author of the press reference
   * Searchable: No
   */
  author?: string;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.PressReference;
  /**
   * Date when the press reference is posted
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  posted_on?: date;
  /**
   * maxLength: 8192
   * The publisher of the press reference
   * Searchable: No
   */
  publisher?: string;
  /**
   * maxLength: 8192
   * Searchable: No
   */
  thumbnail_url?: string;
  /**
   * maxLength: 8192
   * The title of the press reference
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  title?: string;
  /**
   * The URL of the press reference
   * Searchable: No
   */
  url?: ILink;
}
