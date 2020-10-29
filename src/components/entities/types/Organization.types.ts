import {
  date,
  EntityDefId,
  FacetId,
  FundingState,
  FundingType,
  HubTags,
  ICategories,
  ICreated,
  IDateWithPrecision,
  IDescription,
  IEntityIdentifier,
  IFacebook,
  IIdentifier,
  IImageId,
  IImageUrl,
  ILinkedIn,
  ILocationIdentifier,
  IMoney,
  IName,
  InvestorStage,
  InvestorType,
  IPermalink,
  IPOStatus,
  IShortDescription,
  ITwitter,
  IUpdated,
  IUUID,
  IWebsite,
  IWebsiteUrl,
  LayoutId,
  NumberOfEmployees,
  OperatingStatus,
  ProgramType,
  RevenueRange,
  SchoolMethod,
  SchoolProgram,
  SchoolType,
  Status,
  StockExchangeSymbol,
} from "../../components.types";

export interface IOrganization
  extends IIdentifier,
    ICategories,
    ICreated,
    IDescription,
    IUpdated,
    IFacebook,
    IImageId,
    IImageUrl,
    ILinkedIn,
    IName,
    IPermalink,
    IShortDescription,
    ITwitter,
    IUUID,
    IWebsite,
    IWebsiteUrl {
  /**
   * Name of the organization that made the acquisition
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   **/
  acquirer_identifier?: IEntityIdentifier;
  /**
   * maxItems: 255
   * Alternate or previous names for the organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   *
   * string
   * maxLength: 255
   */
  aliases?: string[];
  /**
   * The date when the organization is closed
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   **/
  closed_on?: IDateWithPrecision;
  /**
   * Whether an Organization is for profit or non-profit
   * Field Type: enum
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   * Possible values are:
   *
   * for_profit - For Profit
   * non_profit - Non-profit
   */
  company_type?: "for_profit" | "non_profit";
  /**
   *  maxLength: 8192
   * General contact email for the organization
   * Field Type: text_blob
   * Searchable: No
   */
  contact_email?: string;
  /**
   * The date when the Organization removed its stock from the stock exchange.
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  delisted_on?: IDateWithPrecision;
  /**
   * Whether an accelerator hosts any demo days
   * Field Type: boolean
   * Searchable: Yes
   * Search Operators: blank, eq
   */
  demo_days?: boolean;
  /**
   * Types of diversity represented in an organization, specifically of those who are founding members, currently the CEO, or have check-writing abilities in an investment firm. This feature is in beta and may change with future updates.
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  diversity_spotlights?: IEntityIdentifier[];
  /**
   * Field Type: enum
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   * Possible values are:
   *
   * organization - Organization
   */
  entity_def_id: EntityDefId.Company;
  /**
   * Total funding amount raised across all Funding Rounds excluding debt
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  equity_funding_total?: IMoney;
  /**
   * Date the organization was acquired or went public
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  exited_on?: IDateWithPrecision;
  /**
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  facet_ids?: (FacetId.Company | FacetId.Investor | FacetId.School)[];
  /**
   * Date the Organization was founded
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  founded_on?: IDateWithPrecision;
  /**
   * Founders of the organization
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  founder_identifiers?: IEntityIdentifier[];
  /**
   * This field describes an organization's most recent funding status (e.g. Early Stage Venture, Late Stage Venture, M&A)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  funding_stage?: FundingState;
  /**
   * Total amount raised across all funding rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  funding_total?: IMoney;
  /**
   * Total funding amount raised across all Fund Raises
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  funds_total?: IMoney;
  /**
   * Tags are labels assigned to organizations, which identify their belonging to a group with that shared label
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  hub_tags?: HubTags[];
  /**
   * The top 5 investors with investments in this company, ordered by Crunchbase Rank
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_identifiers?: IEntityIdentifier[];
  /**
   * This describes the stage of investments made by this organization (e.g. Angel, Fund of Funds, Venture Capital)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_stage?: InvestorStage[];
  /**
   * This describes the type of investor this organization is (e.g. Angel, Fund of Funds, Venture Capital)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  investor_type?: (
    | InvestorType.Accelerator
    | InvestorType.AngelGroup
    | InvestorType.CoWorkingSpace
    | InvestorType.CorporateVentureCapital
    | InvestorType.EntrepreneurshipProgram
    | InvestorType.FamilyInvestmentOffice
    | InvestorType.FundOfFunds
    | InvestorType.GovernmentOffice
    | InvestorType.HedgeFund
    | InvestorType.Incubator
    | InvestorType.InvestmentBank
    | InvestorType.MicroVC
    | InvestorType.PensionFunds
    | InvestorType.PrivateEquityFirm
    | InvestorType.SecondaryPurchaser
    | InvestorType.StartupCompetition
    | InvestorType.Syndicate
    | InvestorType.UniversityProgram
    | InvestorType.VentureCapital
    | InvestorType.VentureDebt
  )[];
  /**
   * The current public status of the Organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  ipo_status?: IPOStatus;
  /**
   * Amount of most recent Funding Round excluding debt
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  last_equity_funding_total?: IMoney;
  /**
   * The most recent Funding Round excluding debt
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   * Possible values are:
   */
  last_equity_funding_type?: FundingType;
  /**
   * Date of most recent Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  last_funding_at?: date;
  /**
   * Amount of most recent Funding Round
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  last_funding_total?: IMoney;
  /**
   * Last funding round type (e.g. Seed, Series A, Private Equity)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  last_funding_type?: FundingType;
  /**
   * See companies that have hired executives (VP and above) in a certain date range
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  last_key_employee_change_date?: date;
  /**
   * This is the auto-generated layout for the profile
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  layout_id?: LayoutId.InvestorLayout | LayoutId.SchoolLayout;
  /**
   * maxLength: 8192
   * The legal name of the organization
   * Searchable: No
   */
  legal_name?: string;
  /**
   * maxLength: 8192
   * Stock ticker symbol (e.g. AAPL, FB, TWTR)
   * Searchable: No
   */
  listed_stock_symbol?: string;
  /**
   * Where the organization is headquartered (e.g. San Francisco Bay Area, Silicon Valley)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  location_group_identifiers?: IEntityIdentifier[];
  /**
   * Where the organization is headquartered
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  location_identifiers?: ILocationIdentifier[];
  /**
   * Total number of Acquisitions
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_acquisitions?: number;
  /**
   * Total number of alumni
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_alumni?: number;
  /**
   * Number of news articles that reference the Organization
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_articles?: number;
  /**
   * Total number of current board members and advisors an organization has
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_current_advisor_positions?: number;
  /**
   * Total number of current team members an organization has on Crunchbase
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_current_positions?: number;
  /**
   * Total number of diversity investments made by an investor
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_diversity_spotlight_investments?: number;
  /**
   * Total number of employees
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  num_employees_enum?: NumberOfEmployees;
  /**
   * Total number of Enrollments
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  num_enrollments?: NumberOfEmployees;
  /**
   * Total number of events an Organization appeared in
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
   * Total number of Alumni that are Founders
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_founder_alumni?: number;
  /**
   * Total number of Founders
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_founders?: number;
  /**
   * Total number of Funding Rounds
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_funding_rounds?: number;
  /**
   * Total number of Funds raised
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_funds?: number;
  /**
   * Total number of Investments made
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_investments?: number;
  /**
   * Total number of investment firms and individual investors
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_investors?: number;
  /**
   * Total number of Lead Investments made
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_lead_investments?: number;
  /**
   * Total number of lead investment firms and individual investors
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_lead_investors?: number;
  /**
   * Total number of past team members of an organization
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_past_positions?: number;
  /**
   * Total number of portfolio organizations
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_portfolio_organizations?: number;
  /**
   * Total number of sub-organizations that belongs to a parent Organization
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_sub_organizations?: number;
  /**
   * Operating Status of Organization e.g. Active, Closed
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  operating_status?: OperatingStatus;
  /**
   * Override the layout of the Entity Profile
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  override_layout_id?:
    | LayoutId.InvestorLayout
    | LayoutId.SchoolLayout
    | LayoutId.DefaultLayout;
  /**
   * This is the parent Organization of the sub-organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  owner_identifier?: IEntityIdentifier;
  /**
   * maxLength: 8192
   * Organization's general phone number
   * Field Type: text_blob
   * Searchable: No
   */
  phone_number?: string;
  //
  /**
   * The deadline for applying to the Accelerator Program
   * Field Type: date
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  program_application_deadline?: date;
  //
  /**
   * The duration of the Acceleration Program in number of weeks
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  program_duration?: number;
  //
  /**
   * The type of Accelerator Program (e.g. On-Site, Online)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  program_type?: ProgramType;
  /**
   * Movement in Rank over the last 30 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d30?: number;
  //
  /**
   * Movement in Rank over the last 7 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d7?: number;
  //
  /**
   * Movement in Rank over the last 90 days using a score from -10 to 10
   * Field Type: decimal
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_delta_d90?: number;
  //
  /**
   * Algorithmic rank assigned to the top 100,000 most active Organizations
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_org?: number;
  //
  /**
   * Algorithmic rank assigned to the top 100,000 most active Organizations and People
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_principal?: number;
  /**
   * Estimated revenue range for organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  revenue_range?: RevenueRange;
  /**
   * The type of School Method (e.g. On Campus, Online)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  school_method?: SchoolMethod;
  /**
   * The type of School Program (e.g. Bootcamp, Four Year University)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  school_program?: SchoolProgram;
  /**
   * The type of school
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  school_type?: SchoolType;
  /**
   * Status of Organization e.g. Operating, Closed, Acquired, IPO
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  status?: Status.Closed | Status.IPO | Status.Operating | Status.WasAcquired;
  /**
   * Stock exchange where the Organization is listed e.g. NYSE, NASDAQ
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  stock_exchange_symbol?: StockExchangeSymbol;
  /**
   * Stock ticker symbol (e.g. AAPL, FB, TWTR)
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  stock_symbol?: IEntityIdentifier;
  /**
   * Latest post money valuation of organization
   * Field Type: money
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  valuation?: IMoney;
  /**
   * Date of latest post money valuation
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  valuation_date?: date;
  /**
   * The date when the Organization went public
   * Field Type: date
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  went_public_on?: date;
}
