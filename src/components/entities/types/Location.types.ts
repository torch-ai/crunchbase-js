import {
  EntityDefId,
  FacetId,
  ICreated,
  IIdentifier,
  ILocationIdentifier,
  IName,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface ILocation
  extends IIdentifier,
    ICreated,
    IName,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   * maxLength: 8192
   * Short alphabetic or numeric geographical codes that represent countries (e.g. TWN, USA, ZAF)
   * Searchable: No
   */
  country_code?: string;
  /**
   * maxLength: 8192
   * Searchable: No
   */
  country_code_ext?: string;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Location;
  /**
   * Type of location (e.g. City, Continent, Regional Area)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  facet_ids?: (
    | FacetId.City
    | FacetId.Continent
    | FacetId.Country
    | FacetId.RegionalArea
    | FacetId.Region
  )[];
  /**
   * Regional areas this location belongs to (e.g. San Francisco Bay Area, Silicon Valley)
   * Field Type: identifier_multi
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  groups?: ILocationIdentifier[];
  /**
   * Full location name (e.g. Denver, Colorado, United States, North America)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  locations?: ILocationIdentifier;
  /**
   * maxLength: 8192
   * Region code used to define location
   * Searchable: No
   */
  region_code?: string;
}
