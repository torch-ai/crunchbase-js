import {
  date,
  EntityDefId,
  ICreated,
  IDateWithPrecision,
  IIdentifier,
  IImageId,
  IMoney,
  IMoneyDecimal,
  IPermalink,
  IStockExchange,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IIpo
  extends IIdentifier,
    ICreated,
    IImageId,
    IPermalink,
    IStockExchange,
    IUpdated,
    IUUID {
  /**
   * Total amount raised from the IPO
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  amount_raised?: IMoney;
  /**
   * Date when the organization delisted its stock
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  delisted_on?: IDateWithPrecision;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Ipo;
  /**
   * Algorithmic rank assigned to the top 100,000 most active IPOs
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_ipo?: number;
  /**
   * The share price for the stock at the time of IPO
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  share_price?: IMoneyDecimal;
  /**
   * Number of shares that were outstanding at the time of IPO
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  shares_outstanding?: number;
  /**
   * Number of shares sold at the time of IPO
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  shares_sold?: number;
  /**
   * maxLength: 8192
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  short_description?: string;
  /**
   * maxLength: 8192
   * Searchable: No
   */
  stock_full_symbol?: string;
  /**
   * Valuation of the Organization at IPO
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  valuation?: IMoney;
  /**
   * Date the Organization went public
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  went_public_on?: date;
}
