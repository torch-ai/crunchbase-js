import {
  date,
  EntityDefId,
  ICreated,
  IDateWithPrecision,
  IEntityIdentifier,
  IIdentifier,
  IName,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
} from "../../components.types";

export enum JobType {
  Advisor = "advisor",
  BoardMember = "board_member",
  BoardObserver = "board_observer",
  NonExecutiveEmployee = "employee",
  Executive = "executive",
}

export interface IJob
  extends IIdentifier,
    ICreated,
    IName,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   * These are the featured employees of an organization
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  employee_featured_order?: number;
  /**
   * End date of the Person's Job
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  ended_on?: IDateWithPrecision;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Job;
  /**
   * This indicates whether the Job is current or not
   * Searchable: Yes
   * Search Operators: blank, eq
   */
  is_current?: boolean;
  /**
   * Select a job type that best represent your role at the organization
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  job_type?: JobType;
  /**
   * This is the name of the organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  organization_identifier?: IEntityIdentifier;
  /**
   * First and last name of a Person
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  person_identifier?: IEntityIdentifier;
  /**
   * Start date of the Person's Job
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  started_on?: IDateWithPrecision;
  /**
   * maxLength: 255
   * Title of a Person's Job
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  title?: string;
}
