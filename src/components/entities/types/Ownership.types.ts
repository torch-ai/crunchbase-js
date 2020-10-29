import {
  EntityDefId,
  ICreated,
  IEntityIdentifier,
  IIdentifier,
  IName,
  IPermalink,
  IUpdated,
  IUUID,
} from "../../components.types";

export enum OwnershipType {
  AffiliatedCompany = "affiliated_company",
  Division = "division",
  InvestmentArm = "investment_arm",
  JointVenture = "joint_venture",
  Subsidiary = "subsidiary",
}

export interface IOwnership
  extends IIdentifier,
    ICreated,
    IName,
    IPermalink,
    IUpdated,
    IUUID {
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   * Possible values are:
   */
  entity_def_id?: EntityDefId.Ownership;
  /**
   * Name of the sub-organization that is related to a parent organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  ownee_identifier?: IEntityIdentifier;
  /**
   * Name of the organization that has sub-organizations
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  owner_identifier?: IEntityIdentifier;
  /**
   * This is the relationship defining how a sub-organization is related to a parent organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  ownership_type?: OwnershipType;
}
