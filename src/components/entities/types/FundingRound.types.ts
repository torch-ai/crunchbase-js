import {
  EntityDefId,
  FundingState,
  FundingType,
  IAnnouncedOn,
  ICreated,
  IDateWithPrecision,
  IEntityIdentifier,
  IIdentifier,
  IImageId,
  ILocationIdentifier,
  IMoney,
  IName,
  InvestmentState,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
  RevenueRange,
} from "../../components.types";

export interface IFundingRound
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
   * Date that the Funding Round was closed
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  closed_on?: IDateWithPrecision;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.FundingRound;
  /**
   * Industries of the organization that got funded
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  funded_organization_categories?: IEntityIdentifier[];
  /**
   * maxLength: 8192
   * Description of the organization that got funded
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  funded_organization_description?: string;
  /**
   * Types of diversity represented in an organization, specifically of those who are founding members, currently the CEO, or have check-writing abilities in an investment firm. This feature is in beta and may change with future updates.
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  funded_organization_diversity_spotlights?: IEntityIdentifier[];
  /**
   * Organization's most recent funding status
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  funded_organization_funding_stage?: FundingState;
  /**
   * Total funding amount raised across all Funding Rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  funded_organization_funding_total?: IMoney;
  /**
   * Name of the organization that got funded
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  funded_organization_identifier?: IEntityIdentifier;
  /**
   * Location of the organization that got funded
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  funded_organization_location?: ILocationIdentifier;
  /**
   * Revenue range of the organization that got funded
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  funded_organization_revenue_range?: RevenueRange;
  /**
   * The funding stage of a funding round
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  investment_stage?: InvestmentState;
  /**
   * Type of Funding Round (e.g. Seed, Series A, Private Equity, Debt Financing)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  investment_type?: FundingType;
  /**
   * Names of all investors who invested in the funding round
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_identifiers?: IEntityIdentifier[];
  /**
   * This indicates whether the Funding Round is financed only through equity.
   * Searchable: Yes
   * Search Operators: blank, eq
   */
  is_equity?: boolean;
  /**
   * Name of the investor who led the investment in the funding round
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  lead_investor_identifiers?: IEntityIdentifier[];
  /**
   * Amount of money raised in Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  money_raised?: IMoney;
  /**
   * Total number of Investors in a Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_investors?: number;
  /**
   * Total number of Partner Investors in a Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_partners?: number;
  /**
   * Valuation of a Company after a Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  post_money_valuation?: IMoney;
  /**
   * Valuation of a Company before a Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  pre_money_valuation?: IMoney;
  /**
   * Algorithmic rank assigned to the top 100,000 most active Funding Rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_funding_round?: number;
  /**
   * Amount of money the funded Organization would like to raised in the Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  target_money_raised?: IMoney;
}
