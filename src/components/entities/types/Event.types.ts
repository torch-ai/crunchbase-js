import {
  date,
  EntityDefId,
  EventType,
  ICategories,
  ICreated,
  IDescription,
  IEntityIdentifier,
  IIdentifier,
  IImageId,
  IImageUrl,
  ILink,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
} from "../../components.types";

export interface IEvent
  extends IIdentifier,
    ICategories,
    ICreated,
    IDescription,
    IImageId,
    IImageUrl,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   * End date of the Event
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  ends_on?: date;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Event;
  /**
   * Type of Event (e.g. hackathon, meetup, conference)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  event_type?: EventType;
  /**
   * Link to main Event page
   * Searchable: No
   */
  event_url?: ILink;
  /**
   * Total number of Contestants at the Event
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_contestants?: number;
  /**
   * Total number of Exhibitors at the Event
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_exhibitors?: number;
  /**
   * Total number of Organizers at the Event
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_organizers?: number;
  /**
   * Total number of Speakers at the Event
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_speakers?: number;
  /**
   * Total number of Sponsors for the Event
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  num_sponsors?: number;
  /**
   * The organizer of the Event
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  organizer_identifiers?: IEntityIdentifier[];
  /**
   * Algorithmic rank assigned to the top 100,000 most active Events
   * Field Type: integer
   * Searchable: Yes
   * Search Operators: between, blank, eq, gt, gte, lt, lte, not_eq
   */
  rank_event?: number;
  /**
   * Link to the Event registration page
   * Searchable: No
   */
  registration_url?: ILink;
  /**
   * Start date of the Event
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  starts_on?: date;
  /**
   * Name of the Event venue
   * Searchable: Yes
   * Search Operators: blank, contains, eq, not_contains, not_eq, starts
   */
  venue_name?: string;
}
