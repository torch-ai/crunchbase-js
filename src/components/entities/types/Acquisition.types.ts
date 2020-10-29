import {
  AcquisitionDisposition,
  AcquisitionTerms,
  AcquisitionType,
  EntityDefId,
  FundingState,
  FundingType,
  IAnnouncedOn,
  ICreated,
  IDateWithPrecision,
  IEntityIdentifier,
  IIdentifier,
  ILocationIdentifier,
  IMoney,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
  RevenueRange,
  Status,
} from "../../components.types";

export interface IAcquisition
  extends IIdentifier,
    IAnnouncedOn,
    ICreated,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   * Keyword, sector, or industry
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  acquiree_categories?: IEntityIdentifier[];
  /**
   * Total funding amount raised across all acquired organization's funding rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  acquiree_funding_total?: IMoney;
  /**
   * Name of the acquired organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  acquiree_identifier?: IEntityIdentifier;
  /**
   * Last funding round type (e.g. Series A, Seed, Private Equity)
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  acquiree_last_funding_type?: FundingType;
  /**
   * Where the acquired organization is headquartered
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  acquiree_locations?: ILocationIdentifier[];
  /**
   * Acquired organization's total number of funding rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  acquiree_num_funding_rounds?: number;
  /**
   * Estimated revenue range for acquired organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  acquiree_revenue_range?: RevenueRange;
  /**
   * maxLength: 8192
   * Text of acquired organization's description, industries, and industry groups
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  acquiree_short_description?: string;
  /**
   * Keyword, sector, or industry
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  acquirer_categories?: IEntityIdentifier[];
  /**
   * Acquiring organization's most recent funding status
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  acquirer_funding_stage?: FundingState;
  /**
   * Total funding amount raised across all acquiring organization's funding rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  acquirer_funding_total?: IMoney;
  /**
   * Name of the acquiring organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  acquirer_identifier?: IEntityIdentifier;
  /**
   * Where the organization is headquartered
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  acquirer_locations?: ILocationIdentifier[];
  /**
   * Acquiring organization's total number of funding rounds
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  acquirer_num_funding_rounds?: number;
  /**
   * Estimated revenue range for acquiring organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  acquirer_revenue_range?: RevenueRange;
  /**
   * maxLength: 8192
   * Text of acquiring organization's description, industries, and industry groups
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  acquirer_short_description?: string;
  /**
   * Type of acquisition
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  acquisition_type?: AcquisitionType;
  /**
   * Date the Acquisition was completed
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  completed_on?: IDateWithPrecision;
  /**
   * How is the acquired Organization structured after the acquisition
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  disposition_of_acquired?: AcquisitionDisposition;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Acquisition;
  /**
   * Price of the acquisition
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  price?: IMoney;
  /**
   * Algorithmic rank assigned to the top 100,000 most active Acquisitions
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_acquisition?: number;
  /**
   * Status of the acquisition
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  status?: Status.Pending | Status.Complete; // TODO should this be a different enum?
  /**
   * Terms of the acquisition
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  terms?: AcquisitionTerms;
}
