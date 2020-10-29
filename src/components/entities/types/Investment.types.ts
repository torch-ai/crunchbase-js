import {
  EntityDefId,
  IAnnouncedOn,
  ICreated,
  IEntityIdentifier,
  IIdentifier,
  IMoney,
  IName,
  InvestorStage,
  IPermalink,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IInvestment
  extends IIdentifier,
    IAnnouncedOn,
    ICreated,
    IName,
    IPermalink,
    IUpdated,
    IUUID {
  /**
     Searchable: Yes
     Search Operators: blank, eq, includes, not_eq, not_includes
     Possible values are:
     */
  entity_def_id?: EntityDefId.Investment;
  /**
   * Name of the funding round where the Investment is made
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  funding_round_identifier?: IEntityIdentifier;
  /**
   * Amount of money raised in Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  funding_round_money_raised?: IMoney;
  /**
   * Name of the investor who participated in the Investment
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  investor_identifier?: IEntityIdentifier;
  /**
   * This describes the stage of investor this organization or person is (e.g. Angel, Fund of Funds, Venture Capital)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_stage?: InvestorStage[];
  /**
   * This field indicates whether an investor led/organized the investment
   * Searchable: Yes
   * Search Operators: blank, eq
   */
  is_lead_investor?: boolean;
  /**
   * Amount of money an Investor contributed into an investment
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  money_invested?: IMoney;
  /**
   * Types of diversity represented in an organization, specifically of those who are founding members, currently the CEO, or have check-writing abilities in an investment firm. This feature is in beta and may change with future updates.
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  organization_diversity_spotlights?: IEntityIdentifier[];
  /**
   * Name of the organization that received the investment
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  organization_identifier?: IEntityIdentifier;
  /**
   * Name of the individual who led a funding round for his/her firm
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  partner_identifiers?: IEntityIdentifier[];
}
