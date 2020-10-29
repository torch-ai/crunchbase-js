import {
  EntityDefId,
  ICreated,
  IIdentifier,
  IName,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface ICategory
  extends IIdentifier,
    ICreated,
    IName,
    IUpdated,
    IUUID {
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Category;
}
