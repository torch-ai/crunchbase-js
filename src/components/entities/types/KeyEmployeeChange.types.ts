import {
  date,
  EntityDefId,
  ICreated,
  IEntityIdentifier,
  IIdentifier,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IKeyEmployeeChange
  extends IIdentifier,
    ICreated,
    IUpdated,
    IUUID {
  /**
   * Entity Def Type
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.KeyEmployeeChange;
  /**
   * Date when the news article was posted
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  key_event_date?: date;
  /**
   * Organization that had a leadership hire mentioned
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  organization_identifier?: IEntityIdentifier;
}
