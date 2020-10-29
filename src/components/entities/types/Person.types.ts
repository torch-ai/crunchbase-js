import {
  date,
  EntityDefId,
  FacetId,
  Gender,
  ICreated,
  IDescription,
  IEntityIdentifier,
  IFacebook,
  IIdentifier,
  IImageId,
  IImageUrl,
  ILinkedIn,
  ILocationIdentifier,
  IName,
  InvestorStage,
  InvestorType,
  IPermalink,
  IShortDescription,
  ITwitter,
  IUpdated,
  IUUID,
  IWebsite,
  IWebsiteUrl,
  LayoutId,
} from "../../components.types";

export interface IPerson
  extends IIdentifier,
    ICreated,
    IDescription,
    IFacebook,
    IImageId,
    IImageUrl,
    ILinkedIn,
    IName,
    IPermalink,
    IShortDescription,
    ITwitter,
    IUpdated,
    IUUID,
    IWebsite,
    IWebsiteUrl {
  /**
   * maxItems: 255
   * Alternate or previous names for the individual
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   * maxLength: 255
   */
  aliases?: string[];
  /**
   * The birthdate of the person
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  born_on?: date;
  /**
   * The date when a person died
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  died_on?: date;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id: EntityDefId.Person;
  /**
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  facet_ids?: [FacetId.Investor];
  /**
   * First name of a Person
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  first_name?: string;
  /**
   * A Person's gender
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  gender?: Gender;
  /**
   * This describes the stage of investor this person is (e.g. Angel, Fund of Funds, Venture Capital)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_stage?: InvestorStage[];
  /**
   * This describes the type of investor the person is (e.g. Angel, Fund of Funds, Venture Capital)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_type?:
    | InvestorType.IndividualOrAngel
    | InvestorType.InvestmentPartner;
  /**
   * Last name of a Person
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  last_name?: string;
  /**
   * This is the auto-generated layout for the profile
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   * Possible values are:
   */
  layout_id?: LayoutId.InvestorLayout;
  /**
   * Where the person is located (e.g. San Francisco Bay Area, Silicon Valley)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  location_group_identifiers?: IEntityIdentifier[];
  /**
   * Where the person is located (e.g. Europe, Menlo Park, China)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  location_identifiers?: ILocationIdentifier[];
  /**
   * Middle name of a Person
   * Searchable: No
   */
  middle_name?: string;
  /**
   * Number of news articles that reference the Person
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_articles?: number;
  /**
   * Total number of current Advisors and Board roles the person has
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_current_advisor_jobs?: number;
  /**
   * Total number of current Jobs the person has
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_current_jobs?: number;
  /**
   * Total number of diversity investments made by an investor
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_diversity_spotlight_investments?: number;
  /**
   * Total number of events the individual appeared in
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_event_appearances?: number;
  /**
   * Total number of Exits
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_exits?: number;
  /**
   * Total number of Exits (IPO)
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_exits_ipo?: number;
  /**
   * Number of Organizations that the person founded
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_founded_organizations?: number;
  /**
   * Number of Investments the Individual has participated in
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_investments?: number;
  /**
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_jobs?: number;
  /**
   * Number of Investments led by the Individual
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_lead_investments?: number;
  /**
   * Number of Investments the Individual has partnered in
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_partner_investments?: number;
  /**
   * Total number of past Board and Advisor roles the person has
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_past_advisor_jobs?: number;
  /**
   * Total number of past Jobs the person has
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_past_jobs?: number;
  /**
   * Number of portfolio companies associated to the Person
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_portfolio_organizations?: number;
  /**
   * Override the layout of the Entity Profile
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  override_layout_id?: LayoutId.InvestorLayout | LayoutId.DefaultLayout;
  /**
   * maxLength: 255
   * The person's primary job title
   * Field Type: text_short
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  primary_job_title?: string;
  /**
   * The organization associated to the person's primary job
   * Field Type: identifier
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  primary_organization?: IEntityIdentifier;
  /**
   * Movement in Rank over the last 30 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d30?: number;
  /**
   * Movement in Rank over the last 7 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d7?: number;
  /**
   * Movement in Rank over the last 90 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d90?: number;
  /**
   * Algorithmic rank assigned to the top 100,000 most active People
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_person?: number;
  /**
   * Algorithmic rank assigned to the top 100,000 most active Organizations and People
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_principal?: number;
}
