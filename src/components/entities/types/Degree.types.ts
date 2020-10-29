import {
  EntityDefId,
  ICreated,
  IDateWithPrecision,
  IEntityIdentifier,
  IIdentifier,
  IName,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IDegree extends IIdentifier, ICreated, IName, IUpdated, IUUID {
  /**
   * Date when the degree is completed
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  completed_on?: IDateWithPrecision;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Degree;
  /**
   * The Person that received the Degree
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  person_identifier?: IEntityIdentifier;
  /**
   * The School that awarded the Degree
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  school_identifier?: IEntityIdentifier;
  /**
   * Date when the degree is started
   * Field Type: date_precision
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  started_on?: IDateWithPrecision;
  /**
   * maxLength: 255
   * The subject or major that the person focused his/her degree on
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  subject: string;
  /**
   * maxLength: 255
   * The type of degree that the person received
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  type_name: string;
}
