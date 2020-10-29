import {
  date,
  EntityDefId,
  ICreated,
  IEntityIdentifier,
  IIdentifier,
  ILocationIdentifier,
  IName,
  IPermalink,
  IShortDescription,
  IUpdated,
  IUUID,
} from "../../components.types";

export enum AppearanceType {
  Contestant = "contestant",
  Exhibitor = "exhibitor",
  Organizer = "organizer",
  Speaker = "speaker",
  Sponsor = "sponsor",
}

export interface IEventAppearance
  extends IIdentifier,
    ICreated,
    IName,
    IPermalink,
    IShortDescription,
    IUpdated,
    IUUID {
  /**
   Describe how an Organization or a Person is participating in an Event (e.g. Speaker, Sponsor, etc.)
   Searchable: Yes
   Search Operators: blank, eq, includes, not_eq, not_includes
   */
  appearance_type?: AppearanceType;
  /**
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  entity_def_id?: EntityDefId.Event_appearance;
  /**
   * Name of the Event
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  event_identifier?: IEntityIdentifier;
  /**
   * Location of the Event (e.g. Japan, San Francisco, Europe, Asia)
   * Field Type: identifier_multi
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  event_location_identifiers?: ILocationIdentifier[];
  /**
   * Start date of the Event
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  event_starts_on?: date;
  /**
   * The name of the participant in an Event
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  participant_identifier?: IEntityIdentifier;
}
