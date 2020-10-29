import {
  EntityDefId,
  IAnnouncedOn,
  ICreated,
  IDateWithPrecision,
  IEntityIdentifier,
  IIdentifier,
  IImageId,
  IMoney,
  IName,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IFund
  extends IIdentifier,
    IAnnouncedOn,
    ICreated,
    IImageId,
    IName,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Fund;
  /**
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_identifiers?: IEntityIdentifier[];
  /**
   * Amount raised by the Fund
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  money_raised?: IMoney;
  /**
   * Total number of investment firms and individual investors
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_investors?: number;
  /**
   * Name of the fund owner
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  owner_identifier?: IEntityIdentifier;
  /**
   * Date when Fund Owner started invested the Fund
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  started_on?: IDateWithPrecision;
}
