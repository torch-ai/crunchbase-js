import {
  EntityDefId,
  ICreated,
  IIdentifier,
  ILocationIdentifier,
  IName,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IAddress
  extends IIdentifier,
    ICreated,
    IName,
    IUpdated,
    IUUID {
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Address;
  /**
   * What city the address is located in (e.g. San Francisco, London, Kiev).
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  location_identifiers?: ILocationIdentifier[];
  /**
   * maxLength: 8192
   * The postal code of the address
   * Searchable: No
   */
  postal_code?: string;
  /**
   * maxLength: 8192
   * The street address of the location
   * Searchable: No
   */
  street_1?: string;
  /**
   * maxLength: 8192
   * The street address of the location
   * Searchable: No
   */
  street_2?: string;
}
