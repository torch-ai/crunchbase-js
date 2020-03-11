export interface IServiceOptions {
  onInvalidCredentials: Function;
}

/**
 * Non-data types
 */

abstract class Response {
  metadata: ResponseMetaData = new ResponseMetaData();

  protected constructor(data: Partial<Response> = {}) {
    this.metadata = data.metadata
      ? new ResponseMetaData(data.metadata)
      : this.metadata;
  }
}

export class ResponseMetaData {
  version: number | string = ""; // 31
  www_path_prefix: string = ""; // "https://www.crunchbase.com"
  api_path_prefix: string = ""; // "https://api.crunchbase.com"
  image_path_prefix: string = ""; // "http://public.crunchbase.com/t_api_images/"

  constructor(data: Partial<ResponseMetaData> = {}) {
    Object.assign(this, data);
  }
}

abstract class PagedResponse extends Response {
  abstract data: PagedResponseData;

  protected constructor(data: Partial<PagedResponse> = {}) {
    super(data);
  }
}

abstract class PagedResponseData {
  paging: ResponsePagingData = new ResponsePagingData();
  abstract items: ResponsePagingItem[];

  protected constructor(data: Partial<PagedResponseData> = {}) {
    this.paging = data.paging
      ? new ResponsePagingData(data.paging)
      : this.paging;
  }
}

export class ResponsePagingData {
  total_items: number = 0; // 950425
  number_of_pages: number = 0; // 9505
  current_page: number = 1; // 1
  sort_order: string = ""; // "created_at DESC"
  items_per_page: number = 100; // 100
  next_page_url: string = ""; // "https://api.crunchbase.com/v3.1/organizations?page=2&sort_order=created_at%20DESC&items_per_page=100"
  prev_page_url: string | null = ""; // NULL
  key_set_url: string = ""; // "https://api.crunchbase.com/v3.1/organizations?prev_at=1583843891&prev_uuid=e68723c41312498f9b959f0d9..."
  collection_url: string = ""; // "https://api.crunchbase.com/v3.1/organizations"
  updated_since: string | null = ""; // NULL

  constructor(data: Partial<ResponsePagingData> = {}) {
    Object.assign(this, data);
  }
}

abstract class ResponsePagingItem {
  public type: string = "";
  public uuid: string = "";
  abstract properties: object;

  protected constructor(data: Partial<ResponsePagingItem> = {}) {
    Object.assign(this, data);
  }
}

abstract class CollectionResponse extends Response {
  abstract data: CollectionResponseData;

  protected constructor(data: Partial<CollectionResponse> = {}) {
    super(data);
  }
}

abstract class CollectionResponseData {
  public type: string = ""; // "Organization"
  public uuid: string = ""; // "a367b036595254357541ad7ee8869e24"
  abstract properties: object;
  abstract relationships: CollectionResponseRelationships;

  protected constructor(data: Partial<CollectionResponseData> = {}) {
    Object.assign(this, data);
  }
}

abstract class CollectionResponseRelationships {
  // The relationships available are per collection
  protected constructor(data: Partial<CollectionResponseRelationships> = {}) {
    Object.assign(this, data);
  }
}

abstract class CollectionResponseRelationshipData {
  public cardinality: Cardinality = Cardinality.OneToOne;
  public paging: CollectionResponseRelationshipPagingData = new CollectionResponseRelationshipPagingData(); //
  abstract item: ResponsePagingItem;

  protected constructor(
    data: Partial<CollectionResponseRelationshipData> = {}
  ) {
    Object.assign(this, data);
    this.paging = data.paging
      ? new CollectionResponseRelationshipPagingData(data.paging)
      : this.paging;
  }
}

abstract class CollectionResponseRelationshipsData {
  public cardinality: Cardinality = Cardinality.OneToMany;
  public paging: CollectionResponseRelationshipPagingData = new CollectionResponseRelationshipPagingData(); //
  abstract items: ResponsePagingItem[] = [];

  protected constructor(
    data: Partial<CollectionResponseRelationshipData> = {}
  ) {
    Object.assign(this, data);
    this.paging = data.paging
      ? new CollectionResponseRelationshipPagingData(data.paging)
      : this.paging;
  }
}

export class CollectionResponseRelationshipPagingData {
  total_items: number = 0; // 4
  first_page_url: string = ""; // "https://api.crunchbase.com/v3.1/organizations/tesla-motors/founders"
  sort_order: string = SortOptionParam.NotSorted; // "not_ordered"

  constructor(data: Partial<CollectionResponseRelationshipPagingData> = {}) {
    Object.assign(this, data);
  }
}

export enum Cardinality {
  OneToOne = "OneToOne",
  OneToMany = "OneToMany",
  ManyToOne = "ManyToOne", // .... Why?
  ManyToMany = "ManyToMany"
}

export enum SortOptionParam {
  NotSorted = "not_ordered",
  CreatedAsc = "created_at ASC",
  CreatedDesc = "created_at DESC",
  UpdatedAsc = "updated_at ASC",
  UpdatedDesc = "updated_at DESC"
}

/**
 * Some type definitions based on their types.
 * Mostly, this allows easier copy and paste, but might also provide a hook for management.
 */
type String = string;
type BooleanOrNull = Boolean | null;
/** A URL is a fully-qualified (http or https) website reference. */
type UrlString = string;
/** A Path in the Crunchbase REST API is a relative path to the detail for an Item. */
type Path = string;
type FloatOrNull = number | null;
type IntegerOrNull = number | null;
/** A Timestamp in the Crunchbase API is Unix Time, or seconds since the epoch. */
type Timestamp = number | null;
type UUID = string;

/**
 * @link https://data.crunchbase.com/docs/acquisitions
 */
export enum AcquisitionPaymentTypes {
  unknown = "",
  cash = "cash", // Acquired for all cash
  stock = "stock", // Acquired for stock
  cash_and_stock = "cash_and_stock" // Acquired for a combination of cash and stock
}

/**
 * @link https://data.crunchbase.com/docs/acquisitions
 */
export enum AcquisitionTypes {
  unknown = "",
  Acquisition = "Acquisition", // Acquisition of the Organization in its entirety.
  AcquiHire = "Acqui-Hire", // Acquisition of the Organization for the primary purpose of acquiring the talent.
  LBO = "LBO" // Leveraged Buy-Out
}

/**
 * @link https://data.crunchbase.com/docs/acquisitions
 */
export enum AcquisitionStatuses {
  unknown = "",
  Pending = "Pending", // Announced but not yet complete
  Complete = "Complete", // Completed and closed
  Cancelled = "Cancelled" // Cancelled after announcement
}

/**
 * @link https://data.crunchbase.com/docs/acquisitions
 */
export enum AcquisitionDispositions {
  unknown = "",
  SeparateEntity = "Separate Entity", // The acquired Organization is maintained as a separate legal entity
  Product = "Product", // The acquired Organization is rolled into the acquirer as a Product
  Division = "Division", // The acquired Organization becomes a Division of the acquirer
  Subsidiary = "Subsidiary", // The acquired Organization becomes a Subsidiary of the acquirer
  Combined = "Combined" // The acquired Organization is combined / merged with the acquirer
}

export enum CollectionTypes {
  Organization = "Organization",
  Person = "Person"
}

/**
 * @link https://data.crunchbase.com/docs/currency-codes
 */
export enum CurrencyCodes {
  unknown = "",
  AED = "AED", // United Arab Emirates Dirham
  AFN = "AFN", // Afghanistan Afghani
  ALL = "ALL", // Albania Lek
  AMD = "AMD", // Armenia Dram
  ANG = "ANG", // Netherlands Antilles Guilder
  AOA = "AOA", // Angola Kwanza
  ARS = "ARS", // Argentina Peso
  AUD = "AUD", // Australia Dollar
  AWG = "AWG", // Aruba Guilder
  AZN = "AZN", // Azerbaijan New Manat
  BAM = "BAM", // Bosnia and Herzegovina Convertible Marka
  BBD = "BBD", // Barbados Dollar
  BDT = "BDT", // Bangladesh Taka
  BGN = "BGN", // Bulgaria Lev
  BHD = "BHD", // Bahrain Dinar
  BIF = "BIF", // Burundi Franc
  BMD = "BMD", // Bermuda Dollar
  BND = "BND", // Brunei Darussalam Dollar
  BOB = "BOB", // Bolivia Boliviano
  BRL = "BRL", // Brazil Real
  BSD = "BSD", // Bahamas Dollar
  BTC = "BTC", //
  BTN = "BTN", // Bhutan Ngultrum
  BWP = "BWP", // Botswana Pula
  BYR = "BYR", // Belarus Ruble
  BZD = "BZD", // Belize Dollar
  CAD = "CAD", // Canada Dollar
  CDF = "CDF", // Congo/Kinshasa Franc
  CHF = "CHF", // Switzerland Franc
  CLF = "CLF", //
  CLP = "CLP", // Chile Peso
  CNY = "CNY", // China Yuan Renminbi
  COP = "COP", // Colombia Peso
  CRC = "CRC", // Costa Rica Colon
  CUC = "CUC", // Cuba Convertible Peso
  CUP = "CUP", // Cuba Peso
  CVE = "CVE", // Cape Verde Escudo
  CZK = "CZK", // Czech Republic Koruna
  DJF = "DJF", // Djibouti Franc
  DKK = "DKK", // Denmark Krone
  DOP = "DOP", // Dominican Republic Peso
  DZD = "DZD", // Algeria Dinar
  EEK = "EEK", //
  EGP = "EGP", // Egypt Pound
  ERN = "ERN", // Eritrea Nakfa
  ETB = "ETB", // Ethiopia Birr
  EUR = "EUR", // Euro Member Countries
  FJD = "FJD", // Fiji Dollar
  FKP = "FKP", // Falkland Islands (Malvinas) Pound
  GBP = "GBP", // United Kingdom Pound
  GEL = "GEL", // Georgia Lari
  GGP = "GGP", // Guernsey Pound
  GHS = "GHS", // Ghana Cedi
  GIP = "GIP", // Gibraltar Pound
  GMD = "GMD", // Gambia Dalasi
  GNF = "GNF", // Guinea Franc
  GTQ = "GTQ", // Guatemala Quetzal
  GYD = "GYD", // Guyana Dollar
  HKD = "HKD", // Hong Kong Dollar
  HNL = "HNL", // Honduras Lempira
  HRK = "HRK", // Croatia Kuna
  HTG = "HTG", // Haiti Gourde
  HUF = "HUF", // Hungary Forint
  IDR = "IDR", // Indonesia Rupiah
  ILS = "ILS", // Israel Shekel
  IMP = "IMP", // Isle of Man Pound
  INR = "INR", // India Rupee
  IQD = "IQD", // Iraq Dinar
  IRR = "IRR", // Iran Rial
  ISK = "ISK", // Iceland Krona
  JEP = "JEP", // Jersey Pound
  JMD = "JMD", // Jamaica Dollar
  JOD = "JOD", // Jordan Dinar
  JPY = "JPY", // Japan Yen
  KES = "KES", // Kenya Shilling
  KGS = "KGS", // Kyrgyzstan Som
  KHR = "KHR", // Cambodia Riel
  KMF = "KMF", // Comoros Franc
  KPW = "KPW", // Korea (North) Won
  KRW = "KRW", // Korea (South) Won
  KWD = "KWD", // Kuwait Dinar
  KYD = "KYD", // Cayman Islands Dollar
  KZT = "KZT", // Kazakhstan Tenge
  LAK = "LAK", // Laos Kip
  LBP = "LBP", // Lebanon Pound
  LKR = "LKR", // Sri Lanka Rupee
  LRD = "LRD", // Liberia Dollar
  LSL = "LSL", // Lesotho Loti
  LTL = "LTL", //
  LVL = "LVL", //
  LYD = "LYD", // Libya Dinar
  MAD = "MAD", // Morocco Dirham
  MDL = "MDL", // Moldova Leu
  MGA = "MGA", // Madagascar Ariary
  MKD = "MKD", // Macedonia Denar
  MMK = "MMK", // Myanmar (Burma) Kyat
  MNT = "MNT", // Mongolia Tughrik
  MOP = "MOP", // Macau Pataca
  MRO = "MRO", // Mauritania Ouguiya
  MTL = "MTL", //
  MUR = "MUR", // Mauritius Rupee
  MVR = "MVR", // Maldives (Maldive Islands) Rufiyaa
  MWK = "MWK", // Malawi Kwacha
  MXN = "MXN", // Mexico Peso
  MYR = "MYR", // Malaysia Ringgit
  MZN = "MZN", // Mozambique Metical
  NAD = "NAD", // Namibia Dollar
  NGN = "NGN", // Nigeria Naira
  NIO = "NIO", // Nicaragua Cordoba
  NOK = "NOK", // Norway Krone
  NPR = "NPR", // Nepal Rupee
  NZD = "NZD", // New Zealand Dollar
  OMR = "OMR", // Oman Rial
  PAB = "PAB", // Panama Balboa
  PEN = "PEN", // Peru Nuevo Sol
  PGK = "PGK", // Papua New Guinea Kina
  PHP = "PHP", // Philippines Peso
  PKR = "PKR", // Pakistan Rupee
  PLN = "PLN", // Poland Zloty
  PYG = "PYG", // Paraguay Guarani
  QAR = "QAR", // Qatar Riyal
  RON = "RON", // Romania New Leu
  RSD = "RSD", // Serbia Dinar
  RUB = "RUB", // Russia Ruble
  RWF = "RWF", // Rwanda Franc
  SAR = "SAR", // Saudi Arabia Riyal
  SBD = "SBD", // Solomon Islands Dollar
  SCR = "SCR", // Seychelles Rupee
  SDG = "SDG", // Sudan Pound
  SEK = "SEK", // Sweden Krona
  SGD = "SGD", // Singapore Dollar
  SHP = "SHP", // Saint Helena Pound
  SLL = "SLL", // Sierra Leone Leone
  SOS = "SOS", // Somalia Shilling
  SPL = "SPL*", // Seborga Luigino
  SRD = "SRD", // Suriname Dollar
  STD = "STD", // São Tomé and Príncipe Dobra
  SVC = "SVC", // El Salvador Colon
  SYP = "SYP", // Syria Pound
  SZL = "SZL", // Swaziland Lilangeni
  THB = "THB", // Thailand Baht
  TJS = "TJS", // Tajikistan Somoni
  TMT = "TMT", // Turkmenistan Manat
  TND = "TND", // Tunisia Dinar
  TOP = "TOP", // Tonga Pa'anga
  TRY = "TRY", // Turkey Lira
  TTD = "TTD", // Trinidad and Tobago Dollar
  TVD = "TVD", // Tuvalu Dollar
  TWD = "TWD", // Taiwan New Dollar
  TZS = "TZS", // Tanzania Shilling
  UAH = "UAH", // Ukraine Hryvnia
  UGX = "UGX", // Uganda Shilling
  USD = "USD", // United States Dollar
  UYU = "UYU", // Uruguay Peso
  UZS = "UZS", // Uzbekistan Som
  VEF = "VEF", // Venezuela Bolivar
  VND = "VND", // Viet Nam Dong
  VUV = "VUV", // Vanuatu Vatu
  WST = "WST", // Samoa Tala
  XAF = "XAF", // Communauté Financière Africaine (BEAC) CFA Franc BEAC
  XAG = "XAG", //
  XAU = "XAU", //
  XCD = "XCD", // East Caribbean Dollar
  XDR = "XDR", // International Monetary Fund (IMF) Special Drawing Rights
  XOF = "XOF", // Communauté Financière Africaine (BCEAO) Franc
  XPF = "XPF", // Comptoirs Français du Pacifique (CFP) Franc
  YER = "YER", // Yemen Rial
  ZAR = "ZAR", // South Africa Rand
  ZMK = "ZMK", //
  ZMW = "ZMW", // Zambia Kwacha
  ZWD = "ZWD", // Zimbabwe Dollar
  ZWL = "ZWL" //
}

/**
 * @link https://data.crunchbase.com/docs/funding-types
 */
export enum FundingTypes {
  unknown = "",
  seed = "seed", // Seed
  angel = "angel", // Angel
  venture = "venture", // Venture
  equity_crowdfunding = "equity_crowdfunding", // Equity Crowdfunding
  product_crowdfunding = "product_crowdfunding", // Product Crowdfunding
  private_equity = "private_equity", // Private Equity
  convertible_note = "convertible_note", // Convertible Note
  debt_financing = "debt_financing", // Debt Financing
  secondary_market = "secondary_market", // Secondary Market
  grant = "grant", // Grant
  post_ipo_equity = "post_ipo_equity", // Post-IPO Equity
  post_ipo_debt = "post_ipo_debt", // Post-IPO Debt
  non_equity_assistance = "non_equity_assistance", // Non-Equity Assistance
  undisclosed = "undisclosed", // Undisclosed
  corporate_round = "corporate_round", // Corporate Round
  initial_coin_offering = "initial_coin_offering", // Initial Coin Offering
  post_ipo_secondary = "post_ipo_secondary", // Post-IPO Secondary
  series_a = "series_a", // Series A
  series_b = "series_b", // Series B
  series_c = "series_c", // Series C
  series_d = "series_d", // Series D
  series_e = "series_e", // Series E
  series_f = "series_f", // Series F
  series_g = "series_g", // Series G
  series_h = "series_h", // Series H
  series_i = "series_i", // Series I
  series_j = "series_j", // Series J
  series_unknown = "series_unknown" // Venture - Series Unknown
}

enum Relationships {
  acquired_by = "acquired_by",
  acquiree = "acquiree",
  acquirer = "acquirer",
  acquisitions = "acquisitions",
  advisory_roles = "advisory_roles",
  board_members_and_advisors = "board_members_and_advisors",
  categories = "categories",
  competitors = "competitors",
  current_team = "current_team",
  customers = "customers",
  degrees = "degrees",
  featured_team = "featured_team",
  founded_companies = "founded_companies",
  founders = "founders",
  funded_company = "funded_company",
  funded_organization = "funded_organization",
  funding_round = "funding_round",
  funding_rounds = "funding_rounds",
  funds = "funds",
  headquarters = "headquarters",
  images = "images",
  invested_in = "invested_in",
  investor = "investor",
  investors = "investors",
  investments = "investments",
  ipo = "ipo",
  jobs = "jobs",
  members = "members",
  memberships = "memberships",
  news = "news",
  offices = "offices",
  organization = "organization",
  owned_by = "owned_by",
  parent_locations = "parent_locations",
  past_team = "past_team",
  person = "person",
  primary_affiliation = "primary_affiliation",
  primary_image = "primary_image",
  primary_location = "primary_location",
  products = "products",
  school = "school",
  stock_exchange = "stock_exchange",
  sub_organizations = "sub_organizations",
  venture_firm = "venture_firm",
  videos = "videos",
  websites = "websites"
}

/**
 * TrustedDate
 * @link https://data.crunchbase.com/docs/date
 */
type TrustedDate = string;

/**
 * Provides detail about the accuracy of any given "Date" object implemented here with TrustedDate
 * @link https://data.crunchbase.com/docs/trust-code
 */
export enum TrustCode {
  NullOrInvalidDate = 0,
  Day = 1,
  Month = 2,
  DayAndMonth = 3,
  Year = 4,
  YearAndDay = 5,
  YearAndMonth = 6,
  YearMonthAndDay = 7
}

/**
 * @link https://data.crunchbase.com/docs/website-types
 */
export enum WebsiteType {
  unknown = "",
  facebook = "facebook",
  linkedin = "linkedin",
  twitter = "twitter",
  homepage = "homepage"
}

/**
 * @link https://data.crunchbase.com/docs/address
 */
export class Address {
  /** User-provided name of the Address (e.g., "European HQ", "New York Sales Office") */
  public name: String = "";
  /** Primary street address */
  public street_1: String = "";
  /** Secondary / additional street address or information */
  public street_2: String = "";
  /** City name */
  public city: String = "";
  /** Path to Location detail for city */
  public city_web_path: Path = "";
  /** Region / State name */
  public region: String = "";
  /** Path to Location detail for region */
  public region_web_path: Path = "";
  /** Country full name */
  public country: String = "";
  /** Path to Location detail for country */
  public country_web_path: Path = "";
  public latitude: FloatOrNull = null;
  public longitude: FloatOrNull = null;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public postal_code: String = null;

  constructor(data: Partial<Address> = {}) {
    Object.assign(this, data);
  }
}

export class CollectionResponseAddressRelationshipData extends CollectionResponseRelationshipData {
  public item: AddressPagingItem = new AddressPagingItem();

  constructor(data: Partial<CollectionResponseAddressRelationshipData> = {}) {
    super(data);
    this.item = data.item ? new AddressPagingItem(data.item) : this.item;
  }
}

export class CollectionResponseAddressRelationshipsData extends CollectionResponseRelationshipsData {
  public items: AddressPagingItem[] = [];

  constructor(data: Partial<CollectionResponseAddressRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new AddressPagingItem(item));
    }
  }
}

export class AddressPagingItem extends ResponsePagingItem {
  public properties: Address = new Address();

  constructor(data: Partial<AddressPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Address(data.properties)
      : this.properties;
  }
}

/**
 * @link https://data.crunchbase.com/docs/acquisition
 */
export class Acquisition {
  public api_path: Path = "";
  public web_path: Path = "";
  public price: IntegerOrNull = null;
  public price_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** Currency conversion is based on the announced_on date. */
  public price_usd: IntegerOrNull = null;
  public payment_type: AcquisitionPaymentTypes =
    AcquisitionPaymentTypes.unknown;
  public acquisition_type: AcquisitionTypes = AcquisitionTypes.unknown;
  public acquisition_status: AcquisitionStatuses = AcquisitionStatuses.unknown;
  public disposition_of_acquired: AcquisitionDispositions =
    AcquisitionDispositions.unknown;
  public announced_on: TrustedDate = "";
  public announced_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public completed_on: TrustedDate = "";
  public completed_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public api_url: URL;
  public rank: IntegerOrNull;

  constructor(data: Partial<Acquisition> = {}) {
    Object.assign(this, data);
  }
}

export enum AcquisitionRelationships {
  acquirer = Relationships.acquirer,
  acquiree = Relationships.acquiree,
  images = Relationships.images,
  news = Relationships.news
}

export class CollectionResponseAcquisitionRelationshipData extends CollectionResponseRelationshipData {
  public item: AcquisitionPagingItem = new AcquisitionPagingItem();

  constructor(
    data: Partial<CollectionResponseAcquisitionRelationshipData> = {}
  ) {
    super(data);
    this.item = data.item ? new AcquisitionPagingItem(data.item) : this.item;
  }
}

export class CollectionResponseAcquisitionRelationshipsData extends CollectionResponseRelationshipsData {
  public items: AcquisitionPagingItem[] = [];

  constructor(
    data: Partial<CollectionResponseAcquisitionRelationshipsData> = {}
  ) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new AcquisitionPagingItem(item));
    }
  }
}

export class AcquisitionPagingItem extends ResponsePagingItem {
  public properties: Acquisition = new Acquisition();
  public relationships: object[] = []; // TODO acquiree(organization)

  constructor(data: Partial<AcquisitionPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Acquisition(data.properties)
      : this.properties;
    // console.warn("AcquisitionPagingItem.relationships TODO");
  }
}

/**
 * @link https://data.crunchbase.com/docs/category
 */
export class Category {
  /** The relative path at which to retrieve the details of the Category */
  public path: Path = "";
  /** The user-friendly name of the Category */
  public name: String = "";
  /**
   * @deprecated This field has been deprecated in this version, so it will always return "null".
   */
  public organizations_in_category: null = null;
  /**
   * @deprecated This field has been deprecated in this version, so it will always return "null".
   */
  public products_in_category: null = null;
  /** When the Category was added to Crunchbase */
  public created_at: Timestamp = null;
  /** When the Category was last updated */
  public updated_at: Timestamp = null;
  /**
   * @deprecated This field has been deprecated in this version, so it will always return "null".
   */
  public events_in_category: null = null;

  constructor(data: Partial<Category> = {}) {
    Object.assign(this, data);
  }
}

export class CollectionResponseCategoryRelationshipsData extends CollectionResponseRelationshipsData {
  public items: CategoryPagingItem[] = [];

  constructor(data: Partial<CollectionResponseCategoryRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new CategoryPagingItem(item));
    }
  }
}

export class CategoryPagingItem extends ResponsePagingItem {
  public properties: Category = new Category();

  constructor(data: Partial<CategoryPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Category(data.properties)
      : this.properties;
  }
}

/**
 * @link https://data.crunchbase.com/docs/degree
 */
export class Degree {
  /** "Degree" */
  public type: String = "";
  public uuid: UUID = "";
  public started_on: TrustedDate = "";
  public started_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public completed_on: TrustedDate = "";
  public completed_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  /** e.g., "BA", "PhD" */
  public degree_type_name: String = "unknown";
  public degree_subject: String = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;

  constructor(data: Partial<Degree> = {}) {
    Object.assign(this, data);
  }
}

export enum DegreeRelationships {
  school = Relationships.school,
  person = Relationships.person
}

export class CollectionResponseDegreeRelationshipsData extends CollectionResponseRelationshipsData {
  public items: DegreePagingItem[] = [];

  constructor(data: Partial<CollectionResponseDegreeRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new DegreePagingItem(item));
    }
  }
}

export class DegreePagingItem extends ResponsePagingItem {
  public properties: Degree = new Degree();

  constructor(data: Partial<DegreePagingItem> = {}) {
    super(data);
    if (data.properties) {
      this.properties = new Degree(data.properties);
      this.properties.type = data.type;
      this.properties.uuid = data.uuid;
    }
  }
}

/**
 * @link https://data.crunchbase.com/docs/fund-raise
 */
export class Fund {
  public api_path: Path = "";
  public web_path: Path = "";
  public name: String = "";
  public announced_on: TrustedDate = "";
  public announced_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public money_raised: IntegerOrNull = null;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date */
  public money_raised_usd: IntegerOrNull = null;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public permalink: String = "";
  public api_url: UrlString = "";

  constructor(data: Partial<Fund> = {}) {
    Object.assign(this, data);
  }
}

export enum FundRelationships {
  venture_firm = Relationships.venture_firm,
  investor = Relationships.investor, // Organization or Person Note: In our beta release this will be an empty array.
  images = Relationships.images, // Image Note: In our beta release this will be an empty array.
  videos = Relationships.videos,
  news = Relationships.news,
  websites = Relationships.websites
}

export class CollectionResponseFundRelationshipsData extends CollectionResponseRelationshipsData {
  public items: FundPagingItem[] = [];

  constructor(data: Partial<CollectionResponseFundRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new FundPagingItem(item));
    }
  }
}

export class FundPagingItem extends ResponsePagingItem {
  public properties: Fund = new Fund();
  public relationships: object[] = []; // TODO venture_firm, investor, images, videos, news, websites paging item, maybe also an organization paging item?

  constructor(data: Partial<FundPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Fund(data.properties)
      : this.properties;
    // console.warn("FundsPagingItem.relationships TODO");
  }
}

/**
 * @link https://data.crunchbase.com/docs/funding-round
 */
export class FundingRound {
  public api_path: Path = "";
  public web_path: Path = "";
  public funding_type: FundingTypes = FundingTypes.unknown;
  /** See Venture Fundings */
  public series: String = "";
  /** See Venture Fundings */
  public series_qualifier: String = "";
  public announced_on: TrustedDate = "";
  public announced_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public closed_on: TrustedDate = "";
  public closed_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public money_raised: IntegerOrNull = null;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date. */
  public money_raised_usd: IntegerOrNull = null;
  /** When available, the target of the FundingRound */
  public target_money_raised: IntegerOrNull = null;
  public target_money_raised_currency_code: CurrencyCodes =
    CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date. */
  public target_money_raised_usd: IntegerOrNull = null;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public permalink: String = "";
  public api_url: UrlString = "";
  public pre_money_valuation: IntegerOrNull = null;
  public pre_money_valuation_currency_code: IntegerOrNull = null;
  public pre_money_valuation_usd: IntegerOrNull = null;
  public rank: IntegerOrNull = null;

  constructor(data: Partial<FundingRound> = {}) {
    Object.assign(this, data);
  }
}

export enum FundingRoundRelationships {
  investments = Relationships.investments,
  funded_organization = Relationships.funded_organization,
  images = Relationships.images,
  /** @deprecated */
  videos = Relationships.videos,
  news = Relationships.news,
  websites = Relationships.websites
}

export class CollectionResponseFundingRoundRelationshipsData extends CollectionResponseRelationshipsData {
  public items: FundingRoundPagingItem[] = [];

  constructor(
    data: Partial<CollectionResponseFundingRoundRelationshipsData> = {}
  ) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new FundingRoundPagingItem(item));
    }
  }
}

export class FundingRoundPagingItem extends ResponsePagingItem {
  public properties: FundingRound = new FundingRound();
  public relationships: object[] = []; // TODO Investment paging item, maybe also an organization paging item?

  constructor(data: Partial<FundingRoundPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new FundingRound(data.properties)
      : this.properties;
    // console.warn("FundingRoundPagingItem.relationships TODO");
  }
}

/**
 * @link https://data.crunchbase.com/docs/image-asset
 */
export class Image {
  /** "ImageAsset" */
  public type: String = "";
  public uuid: UUID = "";
  /** append to image_path_prefix */
  public asset_path: Path = "";
  public content_type: String = "";
  public height: IntegerOrNull = null;
  public width: IntegerOrNull = null;
  /** file size in bytes */
  public filesize: IntegerOrNull = null;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;

  constructor(data: Partial<Image> = {}) {
    Object.assign(this, data);
  }
}

export class CollectionResponseImageRelationshipData extends CollectionResponseRelationshipData {
  public item: ImagePagingItem = new ImagePagingItem();

  constructor(data: Partial<CollectionResponseImageRelationshipData> = {}) {
    super(data);
    this.item = data.item ? new ImagePagingItem(data.item) : this.item;
  }
}

export class CollectionResponseImageRelationshipsData extends CollectionResponseRelationshipsData {
  public items: ImagePagingItem[] = [];

  constructor(data: Partial<CollectionResponseImageRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new ImagePagingItem(item));
    }
  }
}

export class ImagePagingItem extends ResponsePagingItem {
  public properties: Image = new Image();

  constructor(data: Partial<ImagePagingItem> = {}) {
    super(data);
    if (data.properties) {
      this.properties = new Image(data.properties);
      // Append the type and uuid properties to the properties for class data point consitency
      this.properties.type = data.type;
      this.properties.uuid = data.uuid;
    }
  }
}

/**
 * @link https://data.crunchbase.com/docs/investor-investment
 */
export class Investment {
  /** "Investment" */
  public type: String = "";
  public uuid: UUID = "";
  public money_invested: IntegerOrNull = null;
  public money_invested_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  public money_invested_usd: IntegerOrNull = null;
  public is_lead_investor: BooleanOrNull = null;
  public announced_on: String = "";
  public announced_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;

  constructor(data: Partial<Investment> = {}) {
    Object.assign(this, data);
  }
}

export enum InvestmentRelationships {
  funding_round = Relationships.funding_round, // many-to-one FundingRound
  invested_in = Relationships.invested_in, // many-to-one Organization or Person
  investors = Relationships.investors // one-to-many Organization or Person
}

export class CollectionResponseInvestmentRelationshipsData extends CollectionResponseRelationshipsData {
  public items: InvestmentPagingItem[] = [];

  constructor(
    data: Partial<CollectionResponseInvestmentRelationshipsData> = {}
  ) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new InvestmentPagingItem(item));
    }
  }
}

export class InvestmentPagingItem extends ResponsePagingItem {
  public properties: Investment = new Investment();
  public relationships: object[] = []; // TODO Investment funding round, partners, invested_in,  item, maybe also an organization paging item?

  constructor(data: Partial<InvestmentPagingItem> = {}) {
    super(data);
    if (data.properties) {
      this.properties = new Investment(data.properties);
      // Append the type and uuid properties to the properties for class data point consitency
      this.properties.type = data.type;
      this.properties.uuid = data.uuid;
    }
    // console.warn("InvestmentPagingItem.relationships TODO");
  }
}

/**
 * @link https://data.crunchbase.com/docs/ipo
 */
export class Ipo {
  /** path to Ipo detail in the API */
  public api_path: Path = "";
  /** path to the Ipo detail on Crunchbase */
  public web_path: Path = "";
  public went_public_on: TrustedDate = "";
  public went_public_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  /** See Stock Exchanges */
  public stock_exchange_symbol: String = "";
  public stock_symbol: String = "";
  /**
   * Number of shares sold in the Ipo Note:
   * @deprecated This field has been deprecated and will return "null"
   */
  public shares_sold: null = null;
  public opening_share_price: FloatOrNull = null;
  public opening_share_price_currency_code: CurrencyCodes =
    CurrencyCodes.unknown;
  /** currency conversion, when necessary, is done based on the went_public_on date */
  public opening_share_price_usd: FloatOrNull = null;
  public opening_valuation: IntegerOrNull = null;
  public opening_valuation_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, when necessary, is done based on the went_public_on date */
  public opening_valuation_usd: IntegerOrNull = null;
  /** Money raised by virtue of the Ipo */
  public money_raised: IntegerOrNull = null;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, when necessary, is done based on the went_public_on date */
  public money_raised_usd: IntegerOrNull = null;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  /** This field contains the full url of the api endpoint */
  public api_url: Path = "";

  constructor(data: Partial<Ipo> = {}) {
    Object.assign(this, data);
  }
}

export enum IpoRelationships {
  funded_company = Relationships.funded_company,
  stock_exchange = Relationships.stock_exchange,
  images = Relationships.images,
  /** @deprecated */
  videos = Relationships.videos,
  news = Relationships.news,
  websites = Relationships.websites
}

export class CollectionResponseIpoRelationshipData extends CollectionResponseRelationshipData {
  public item: IpoPagingItem = new IpoPagingItem();

  constructor(data: Partial<CollectionResponseIpoRelationshipData> = {}) {
    super(data);
    this.item = data.item ? new IpoPagingItem(data.item) : this.item;
  }
}

export class IpoPagingItem extends ResponsePagingItem {
  public properties: Ipo = new Ipo();

  constructor(data: Partial<IpoPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Ipo(data.properties)
      : this.properties;
  }
}

/**
 * @link https://data.crunchbase.com/docs/job
 */
export class Job {
  /** "Job" */
  public type: String = "";
  public uuid: UUID = "";
  public title: String = "";
  public is_current: BooleanOrNull = false;
  public started_on: TrustedDate = "";
  public started_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public ended_on: TrustedDate = "";
  public ended_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public job_type: String = "";

  constructor(data: Partial<Job> = {}) {
    Object.assign(this, data);
  }
}

export enum JobRelationships {
  person = Relationships.person,
  organization = Relationships.organization
}

export class CollectionResponseJobRelationshipData extends CollectionResponseRelationshipData {
  public item: JobPagingItem = new JobPagingItem();

  constructor(data: Partial<CollectionResponseJobRelationshipData> = {}) {
    super(data);
    this.item = new JobPagingItem(data.item);
  }
}

export class CollectionResponseJobRelationshipsData extends CollectionResponseRelationshipsData {
  public items: JobPagingItem[] = [];

  constructor(data: Partial<CollectionResponseJobRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new JobPagingItem(item));
    }
  }
}

export class JobPagingItem extends ResponsePagingItem {
  public properties: Job = new Job();
  public relationships: object[] = []; // TODO Person paging item, maybe also an organization paging item?

  constructor(data: Partial<JobPagingItem> = {}) {
    super(data);
    if (data.properties) {
      this.properties = new Job(data.properties);
      // Append the type and uuid properties to the properties for class data point consitency
      this.properties.type = data.type;
      this.properties.uuid = data.uuid;
    }
    // console.warn("JobPagingItem.relationships TODO");
  }
}

/**
 * @link https://data.crunchbase.com/docs/location
 */
export class Location {
  public web_path: Path = "";
  public name: String = "";
  /** "city", "region", "country" */
  public location_type: String = "";
  /** Returned only on the /locations endpoint */
  public parent_location_uuid: UUID = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public city: String = "";
  public region: String = "";
  public region_code2: IntegerOrNull = null;
  public country: String = "";
  public country_code2: IntegerOrNull = null;
  public country_code3: IntegerOrNull = null;

  constructor(data: Partial<Location> = {}) {
    Object.assign(this, data);
  }
}

export enum LocationRelationships {
  parent_locations = Relationships.parent_locations
}

export class CollectionResponseLocationRelationshipsData extends CollectionResponseRelationshipsData {
  public cardinality = Cardinality.ManyToOne; // No idea why
  public items: LocationPagingItem[] = [];

  constructor(data: Partial<CollectionResponseLocationRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new LocationPagingItem(item));
    }
  }
}

export class LocationPagingItem extends ResponsePagingItem {
  public properties: Location = new Location();
  public relationships: object = {}; // TODO

  constructor(data: Partial<LocationPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Location(data.properties)
      : this.properties;
  }
}

/**
 * @link https://data.crunchbase.com/docs/press-reference
 */
export class News {
  public title: String = "";
  public author: String = "";
  public posted_on: TrustedDate = "";
  public url: UrlString = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public posted_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;

  constructor(data: Partial<News> = {}) {
    Object.assign(this, data);
  }
}

export enum OrganizationTypes {
  unknown = "",
  company = "company",
  investor = "investor",
  school = "school",
  group = "group"
}

export class CollectionResponseNewsRelationshipsData extends CollectionResponseRelationshipsData {
  public items: NewsPagingItem[] = [];

  constructor(data: Partial<CollectionResponseNewsRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new NewsPagingItem(item));
    }
  }
}

export class NewsPagingItem extends ResponsePagingItem {
  public properties: News = new News();

  constructor(data: Partial<NewsPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new News(data.properties)
      : this.properties;
  }
}

/**
 * @link https://data.crunchbase.com/docs/organization
 */
export class Organization {
  /** unique identifier within "Organization" namespace */
  public permalink: String = "";
  public api_path: Path = "";
  public web_path: Path = "";
  /** User-friendly name (as presented on CrunchBase) */
  public name: String = "";
  /** Aliases and previous names */
  public also_known_as: string[] = [];
  /** <= 140 characters */
  public short_description: String = "";
  /** Long description. */
  public description: String = "";
  public profile_image_url: String = "";
  /** "company","investor","school", "group" */
  public primary_role: String = "";
  /** Does this Organization act as a Company? */
  public role_company: BooleanOrNull = false;
  /** Does this Organization act as an Investor? */
  public role_investor: BooleanOrNull = false;
  /** Does this Organization act as a Group? */
  public role_group: BooleanOrNull = false;
  /** Does this Organization act as a School? */
  public role_school: BooleanOrNull = false;
  /** YYYY-MM-DD */
  public founded_on: TrustedDate = "";
  public founded_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public is_closed: BooleanOrNull = null;
  /** YYYY-MM-DD */
  public closed_on: TrustedDate = "";
  public closed_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public num_employees_min: IntegerOrNull = null;
  public num_employees_max: IntegerOrNull = null;
  public total_funding_usd: IntegerOrNull = null;
  /** See Stock Exchanges */
  public stock_exchange: String = "";
  /** The symbol under which the Organization trades on the stock_exchange */
  public stock_symbol: String = "";
  public number_of_investments: IntegerOrNull = null;
  /** Fully-qualified URL */
  public homepage_url: UrlString = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public permalink_aliases: String = "";
  public api_url: UrlString = "";
  public investor_type: String = "";
  public contact_email: String = "";
  public phone_number: String = "";
  public rank: IntegerOrNull = null;

  constructor(data: Partial<Organization> = {}) {
    Object.assign(this, data);
  }
}

export enum OrganizationRelationships {
  primary_image = Relationships.primary_image, // one-to-one Image
  founders = Relationships.founders, // one-to-many Person
  featured_team = Relationships.featured_team, // one-to-many Job
  current_team = Relationships.current_team, // one-to-many Job
  past_team = Relationships.past_team, // one-to-many Job
  board_members_and_advisors = Relationships.board_members_and_advisors, // many-to-many Job
  investors = Relationships.investors, // many-to-many Organization or Person
  owned_by = Relationships.owned_by, // many-to-one Organization
  sub_organizations = Relationships.sub_organizations, // one-to-many Organization
  headquarters = Relationships.headquarters, // one-to-one Address
  offices = Relationships.offices, // one-to-many Address
  /** @deprecated */
  products = Relationships.products, // one-to-many Note: This node has been deprecated so this will return an empty array
  categories = Relationships.categories, // many-to-many Category
  /** @deprecated */
  customers = Relationships.customers, // many-to-many Note: This data has been deprecated so this will return an empty array
  /** @deprecated */
  competitors = Relationships.competitors, // many-to-many Note: This data has been deprecated so this will return an empty array
  /** @deprecated */
  members = Relationships.members, // many-to-many Note: This data has been deprecated so this will return an empty array
  /** @deprecated */
  memberships = Relationships.memberships, // many-to-one Note: This data has been deprecated so this will return an empty array
  funding_rounds = Relationships.funding_rounds, // one-to-many FundingRound
  investments = Relationships.investments, // one-to-many InvestorInvestment
  acquisitions = Relationships.acquisitions, // one-to-many Acquisition
  acquired_by = Relationships.acquired_by, // one-to-one Acquisition
  ipo = Relationships.ipo, // one-to-one Ipo
  funds = Relationships.funds, // one-to-many Fund
  websites = Relationships.websites, // one-to-many Website
  images = Relationships.images, // one-to-one Image
  /** @deprecated */
  videos = Relationships.videos, // one-to-many Note: This data has been deprecated so this will return an empty array
  news = Relationships.news // many-to-many News
}

export class CollectionResponseOrganizationRelationshipsData extends CollectionResponseRelationshipsData {
  public items: OrganizationPagingItem[] = [];

  constructor(
    data: Partial<CollectionResponseOrganizationRelationshipsData> = {}
  ) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new OrganizationPagingItem(item));
    }
  }
}

export class OrganizationPagingItem extends ResponsePagingItem {
  public properties: Organization = new Organization();
  public relationships: object[] = []; // TODO Person paging item, maybe also an organization paging item?

  constructor(data: Partial<OrganizationPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Organization(data.properties)
      : this.properties;
    // console.warn("OrganizationPagingItem.relationships TODO");
  }
}

export class OrganizationResponse extends CollectionResponse {
  data: OrganizationResponseData = new OrganizationResponseData();

  constructor(data: Partial<OrganizationResponse> = {}) {
    super(data);
    this.data = data.data ? new OrganizationResponseData(data.data) : this.data;
  }
}

export class OrganizationResponseData extends CollectionResponseData {
  public properties: Organization = new Organization();
  public relationships: OrganizationResponseRelationships = new OrganizationResponseRelationships();

  constructor(data: Partial<OrganizationResponseData> = {}) {
    super(data);
    this.properties = data.properties
      ? new Organization(data.properties)
      : this.properties;
    this.relationships = data.relationships
      ? new OrganizationResponseRelationships(data.relationships)
      : this.relationships;
  }
}

export class OrganizationResponseRelationships extends CollectionResponseRelationships {
  public primary_image: CollectionResponseImageRelationshipData = new CollectionResponseImageRelationshipData();
  public founders: CollectionResponsePersonRelationshipsData = new CollectionResponsePersonRelationshipsData();
  public featured_team: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public current_team: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public past_team: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public board_members_and_advisors: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public investors: CollectionResponseOrganizationOrPersonRelationshipsData = new CollectionResponseOrganizationOrPersonRelationshipsData();
  public owned_by: CollectionResponseOrganizationRelationshipsData = new CollectionResponseOrganizationRelationshipsData();
  public sub_organizations: CollectionResponseOrganizationRelationshipsData = new CollectionResponseOrganizationRelationshipsData();
  public headquarters: CollectionResponseAddressRelationshipData = new CollectionResponseAddressRelationshipData();
  public offices: CollectionResponseAddressRelationshipsData = new CollectionResponseAddressRelationshipsData();
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public products: object = {};
  public categories: CollectionResponseCategoryRelationshipsData = new CollectionResponseCategoryRelationshipsData();
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public competitors: object = {};
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public customers: object = {};
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public memberships: object = {};
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public members: object = {};
  public funding_rounds: CollectionResponseFundingRoundRelationshipsData = new CollectionResponseFundingRoundRelationshipsData();
  public investments: CollectionResponseInvestmentRelationshipsData = new CollectionResponseInvestmentRelationshipsData();
  public acquisitions: CollectionResponseAcquisitionRelationshipsData = new CollectionResponseAcquisitionRelationshipsData();
  public acquired_by: CollectionResponseAcquisitionRelationshipData = new CollectionResponseAcquisitionRelationshipData();
  public ipo: CollectionResponseIpoRelationshipData = new CollectionResponseIpoRelationshipData();
  public funds: CollectionResponseFundRelationshipsData = new CollectionResponseFundRelationshipsData();
  public websites: CollectionResponseWebsiteRelationshipsData = new CollectionResponseWebsiteRelationshipsData();
  public images: CollectionResponseImageRelationshipsData = new CollectionResponseImageRelationshipsData();
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public videos: object = {};
  public news: CollectionResponseNewsRelationshipsData = new CollectionResponseNewsRelationshipsData();

  constructor(data: Partial<OrganizationResponseRelationships> = {}) {
    super(data);
    this.primary_image = data.primary_image
      ? new CollectionResponseImageRelationshipData(data.primary_image)
      : this.primary_image;
    this.founders = data.founders
      ? new CollectionResponsePersonRelationshipsData(data.founders)
      : this.founders;
    this.featured_team = data.featured_team
      ? new CollectionResponseJobRelationshipsData(data.featured_team)
      : this.featured_team;
    this.current_team = data.current_team
      ? new CollectionResponseJobRelationshipsData(data.current_team)
      : this.current_team;
    this.past_team = data.past_team
      ? new CollectionResponseJobRelationshipsData(data.past_team)
      : this.past_team;
    this.board_members_and_advisors = data.board_members_and_advisors
      ? new CollectionResponseJobRelationshipsData(
          data.board_members_and_advisors
        )
      : this.board_members_and_advisors;
    this.investors = data.investors
      ? new CollectionResponseOrganizationOrPersonRelationshipsData(
          data.investors
        )
      : this.investors;
    this.owned_by = data.owned_by
      ? new CollectionResponseOrganizationRelationshipsData(data.owned_by)
      : this.owned_by;
    this.sub_organizations = data.sub_organizations
      ? new CollectionResponseOrganizationRelationshipsData(
          data.sub_organizations
        )
      : this.sub_organizations;
    this.headquarters = data.headquarters
      ? new CollectionResponseAddressRelationshipData(data.headquarters)
      : this.headquarters;
    this.offices = data.offices
      ? new CollectionResponseAddressRelationshipsData(data.offices)
      : this.offices;
    this.categories = data.categories
      ? new CollectionResponseCategoryRelationshipsData(data.categories)
      : this.categories;
    this.funding_rounds = data.funding_rounds
      ? new CollectionResponseFundingRoundRelationshipsData(data.funding_rounds)
      : this.funding_rounds;
    this.investments = data.investments
      ? new CollectionResponseInvestmentRelationshipsData(data.investments)
      : this.investments;
    this.acquisitions = data.acquisitions
      ? new CollectionResponseAcquisitionRelationshipsData(data.acquisitions)
      : this.acquisitions;
    this.acquired_by = data.acquired_by
      ? new CollectionResponseAcquisitionRelationshipData(data.acquired_by)
      : this.acquired_by;
    this.ipo = data.ipo
      ? new CollectionResponseIpoRelationshipData(data.ipo)
      : this.ipo;
    this.funds = data.funds
      ? new CollectionResponseFundRelationshipsData(data.funds)
      : this.funds;
    this.websites = data.websites
      ? new CollectionResponseWebsiteRelationshipsData(data.websites)
      : this.websites;
    this.images = data.images
      ? new CollectionResponseImageRelationshipsData(data.images)
      : this.images;
    this.news = data.news
      ? new CollectionResponseNewsRelationshipsData(data.news)
      : this.news;
  }
}

/**
 * @link https://data.crunchbase.com/docs/organizationsummary
 */
export class OrganizationSummary {
  public permalink: String = "";
  /** Omitted in the ODM */
  public api_path: Path = "";
  public web_path: Path = "";
  public name: String = "";
  public primary_role: OrganizationTypes = OrganizationTypes.unknown;
  public short_description: String = "";
  public profile_image_url: UrlString = "";
  public domain: String = "";
  public homepage_url: UrlString = "";
  public facebook_url: UrlString = "";
  public twitter_url: UrlString = "";
  public linkedin_url: UrlString = "";
  public city_name: String = "";
  public region_name: String = "";
  /** 3 letter code */
  public country_code: String = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public api_url: UrlString = "";
  public stock_exchange: String = "";
  public stock_symbol: String = "";

  constructor(data: Partial<OrganizationSummary> = {}) {
    Object.assign(this, data);
  }
}

export interface IOrganizationsCallParams {
  updated_since?: string; // When provided, restricts the result set to Organizations where updated_at >= the passed value
  query?: string; // Full text search of an Organization's name, aliases (i.e. previous names or "also known as"), and short description
  name?: string; // Full text search limited to name and aliases
  domain_name?: string; // Text search of an Organization's domain_name (e.g. www.google.com)
  categories?: string; // Filter by categories (comma separated, AND'd together) e.g. categories=Automotive,Public Transportation
  category_uuids?: string; // Filter by one or more Categories. Separate multiple UUIDs with commas. When passed, multiple UUIDs are logically AND'd together
  locations?: string; // Filter by location names (comma separated, AND'd together) e.g. locations=California,San Francisco
  organization_types?: Omit<OrganizationTypes, OrganizationTypes.unknown>[]; // Multiple organization_types are logically AND'd.
  sort_order?: SortOptionParam;
  page?: number; // Page number of the results to retrieve.
}

export class OrganizationsSummaryResponse extends PagedResponse {
  data: OrganizationsSummaryPagedResponseData = new OrganizationsSummaryPagedResponseData();

  constructor(data: Partial<OrganizationsSummaryResponse> = {}) {
    super(data);
    this.data = new OrganizationsSummaryPagedResponseData(data.data);
  }
}

export class OrganizationsSummaryPagedResponseData extends PagedResponseData {
  items: OrganizationsSummaryPagingItem[] = [];

  constructor(data: Partial<OrganizationsSummaryPagedResponseData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(
        item => new OrganizationsSummaryPagingItem(item)
      );
    }
  }
}

export class OrganizationsSummaryPagingItem extends ResponsePagingItem {
  properties: OrganizationSummary = new OrganizationSummary();

  constructor(data: Partial<OrganizationsSummaryPagingItem> = {}) {
    super(data);

    this.properties = new OrganizationSummary(data.properties);
  }
}

/**
 * @link https://data.crunchbase.com/docs/person
 */
export class Person {
  public permalink: String = "";
  public api_path: Path = "";
  public web_path: Path = "";
  public first_name: String = "";
  public last_name: String = "";
  /** Aliases / Past Names omitted when item is a related Entity */
  public also_known_as: string[] = [];
  /** omitted when a related Entity */
  public bio: String = "";
  public profile_image_url: String = "";
  public role_investor: BooleanOrNull = null;
  public born_on: TrustedDate = "";
  public born_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  /**
   * @deprecated
   */
  public is_deceased: BooleanOrNull = false;
  public died_on: TrustedDate = "";
  public died_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  /** This represents the full URL of the endpoint */
  public api_URL: Path = "";
  public permalink_aliases: String = "";
  public api_url: UrlString = "";
  public gender: String = "";
  public rank: IntegerOrNull = null;

  constructor(data: Partial<Person> = {}) {
    Object.assign(this, data);
  }
}

export enum PersonRelationships {
  primary_affiliation = Relationships.primary_affiliation, // one-to-one Job
  primary_location = Relationships.primary_location, // many-to-one Location
  primary_image = Relationships.primary_image, // one-to-one Image
  websites = Relationships.websites, // one-to-many Website
  degrees = Relationships.degrees, // one-to-many Degree
  jobs = Relationships.jobs, // one-to-many Job
  advisory_roles = Relationships.advisory_roles, // one-to-many Job
  founded_companies = Relationships.founded_companies, // one-to-many Organization
  investments = Relationships.investments, // one-to-many InvestorInvestment
  /** @deprecated */
  memberships = Relationships.memberships, // many-to-many Note: This relationship has been deprecated and will return null results
  images = Relationships.images, // one-to-many Image
  /** @deprecated */
  videos = Relationships.videos, // one-to-many Note: This relationship has been deprecated and will return null results
  news = Relationships.news // many-to-many News
}

export class CollectionResponsePersonRelationshipsData extends CollectionResponseRelationshipsData {
  public items: PersonPagingItem[] = [];

  constructor(data: Partial<CollectionResponsePersonRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new PersonPagingItem(item));
    }
  }
}

export class PersonPagingItem extends ResponsePagingItem {
  public properties: Person = new Person();

  constructor(data: Partial<PersonPagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Person(data.properties)
      : this.properties;
  }
}

export class PersonResponse extends CollectionResponse {
  data: PersonResponseData = new PersonResponseData();

  constructor(data: Partial<OrganizationResponse> = {}) {
    super(data);
    this.data = data.data ? new PersonResponseData(data.data) : this.data;
  }
}

export class PersonResponseData extends CollectionResponseData {
  public properties: Person = new Person();
  public relationships: PersonResponseRelationships = new PersonResponseRelationships();

  constructor(data: Partial<OrganizationResponseData> = {}) {
    super(data);
    this.properties = data.properties
      ? new Person(data.properties)
      : this.properties;
    this.relationships = data.relationships
      ? new PersonResponseRelationships(data.relationships)
      : this.relationships;
  }
}

export class PersonResponseRelationships extends CollectionResponseRelationships {
  public primary_affiliation: CollectionResponseJobRelationshipData = new CollectionResponseJobRelationshipData();
  public primary_location: CollectionResponseLocationRelationshipsData = new CollectionResponseLocationRelationshipsData();
  public primary_image: CollectionResponseImageRelationshipData = new CollectionResponseImageRelationshipData();
  public websites: CollectionResponseWebsiteRelationshipsData = new CollectionResponseWebsiteRelationshipsData();
  public degrees: CollectionResponseDegreeRelationshipsData = new CollectionResponseDegreeRelationshipsData();
  public jobs: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public advisory_roles: CollectionResponseJobRelationshipsData = new CollectionResponseJobRelationshipsData();
  public founded_companies: CollectionResponseOrganizationRelationshipsData = new CollectionResponseOrganizationRelationshipsData();
  public investments: CollectionResponseInvestmentRelationshipsData = new CollectionResponseInvestmentRelationshipsData();
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public memberships: object = {};
  public images: CollectionResponseImageRelationshipsData = new CollectionResponseImageRelationshipsData();
  /** @deprecated Note: This node has been deprecated so this will return an empty array */
  public videos: object = {};
  public news: CollectionResponseNewsRelationshipsData = new CollectionResponseNewsRelationshipsData();

  constructor(data: Partial<PersonResponseRelationships> = {}) {
    super(data);
    this.primary_affiliation = data.primary_affiliation
      ? new CollectionResponseJobRelationshipData(data.primary_affiliation)
      : this.primary_affiliation;
    this.primary_location = data.primary_location
      ? new CollectionResponseLocationRelationshipsData(data.primary_location)
      : this.primary_location;
    this.primary_image = data.primary_image
      ? new CollectionResponseImageRelationshipData(data.primary_image)
      : this.primary_image;
    this.websites = data.websites
      ? new CollectionResponseWebsiteRelationshipsData(data.websites)
      : this.websites;
    this.degrees = data.degrees
      ? new CollectionResponseDegreeRelationshipsData(data.degrees)
      : this.degrees;
    this.jobs = data.jobs
      ? new CollectionResponseJobRelationshipsData(data.jobs)
      : this.jobs;
    this.advisory_roles = data.advisory_roles
      ? new CollectionResponseJobRelationshipsData(data.advisory_roles)
      : this.advisory_roles;
    this.founded_companies = data.founded_companies
      ? new CollectionResponseOrganizationRelationshipsData(
          data.founded_companies
        )
      : this.founded_companies;
    this.investments = data.investments
      ? new CollectionResponseInvestmentRelationshipsData(data.investments)
      : this.investments;

    this.images = data.images
      ? new CollectionResponseImageRelationshipsData(data.images)
      : this.images;
    this.news = data.news
      ? new CollectionResponseNewsRelationshipsData(data.news)
      : this.news;
  }
}

/**
 * @link https://data.crunchbase.com/docs/personsummary
 */
export class PersonSummary {
  public permalink: String = "";
  /** Omitted in the ODM */
  public api_path: Path = "";
  public web_path: Path = "";
  public first_name: String = "";
  public last_name: String = "";
  public title: String = "";
  public organization_permalink: String = "";
  /** Omitted in the ODM */
  public organization_api_path: Path = "";
  public organization_web_path: Path = "";
  public organization_name: String = "";
  public profile_image_url: UrlString = "";
  public homepage_url: UrlString = "";
  public facebook_url: UrlString = "";
  public twitter_url: UrlString = "";
  public linkedin_url: UrlString = "";
  public city_name: String = "";
  public region_name: String = "";
  public country_code: String = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public api_url: UrlString = "";
  public gender: String = "";

  constructor(data: Partial<PersonSummary> = {}) {
    Object.assign(this, data);
  }
}

export interface IPeopleCallParams {
  updated_since?: string; // When provided, restricts the result set to Organizations where updated_at >= the passed value
  query?: string; // Full text search of an Organization's name, aliases (i.e. previous names or "also known as"), and short description
  name?: string; // Full text search limited to name and aliases
  locations?: string; // Filter by location names (comma separated, AND'd together) e.g. locations=California,San Francisco
  socials: string; // Filter by social media identity (comma separated, AND'd together) e.g. socials=ronconway
  types?: "investor";
  sort_order?: SortOptionParam;
  page?: number; // Page number of the results to retrieve.
}

export class PeopleSummaryResponse extends PagedResponse {
  data: PeopleSummaryPagedResponseData = new PeopleSummaryPagedResponseData();

  constructor(data: Partial<PeopleSummaryResponse> = {}) {
    super(data);
    this.data = new PeopleSummaryPagedResponseData(data.data);
  }
}

export class PeopleSummaryPagedResponseData extends PagedResponseData {
  items: PeopleSummaryPagingItem[] = [];

  constructor(data: Partial<PeopleSummaryPagedResponseData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new PeopleSummaryPagingItem(item));
    }
  }
}

export class PeopleSummaryPagingItem extends ResponsePagingItem {
  properties: PersonSummary = new PersonSummary();

  constructor(data: Partial<PeopleSummaryPagingItem> = {}) {
    super(data);

    this.properties = new PersonSummary(data.properties);
  }
}

/**
 * @link https://data.crunchbase.com/docs/web-presence
 */
export class Website {
  public website_type: WebsiteType = WebsiteType.unknown;
  public url: UrlString = "";
  public created_at: Timestamp = null;
  public updated_at: Timestamp = null;
  public website_name: String = "";

  constructor(data: Partial<Website> = {}) {
    Object.assign(this, data);
  }
}

export class CollectionResponseWebsiteRelationshipsData extends CollectionResponseRelationshipsData {
  public items: WebsitePagingItem[] = [];

  constructor(data: Partial<CollectionResponseWebsiteRelationshipsData> = {}) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => new WebsitePagingItem(item));
    }
  }
}

export class WebsitePagingItem extends ResponsePagingItem {
  public properties: Website = new Website();

  constructor(data: Partial<WebsitePagingItem> = {}) {
    super(data);
    this.properties = data.properties
      ? new Website(data.properties)
      : this.properties;
  }
}

/**
 * Weird things that don't really match any given collection
 */

export class CollectionResponseOrganizationOrPersonRelationshipsData extends CollectionResponseRelationshipsData {
  public items: (OrganizationPagingItem | PersonPagingItem)[] = [];

  constructor(
    data: Partial<CollectionResponseOrganizationOrPersonRelationshipsData> = {}
  ) {
    super(data);
    if (data.items) {
      this.items = data.items.map(item => {
        if (item.type === CollectionTypes.Organization) {
          // @ts-ignore - Oh mixed typings... /sigh
          return new OrganizationPagingItem(item);
        }
        if (item.type === CollectionTypes.Person) {
          // @ts-ignore - Oh mixed typings... /sigh
          return new PersonPagingItem(item);
        }
        throw new Error(`Unhandled collection relationship type: ${item.type}`);
      });
    }
  }

  public getOrganizations(): OrganizationPagingItem[] {
    // @ts-ignore - Oh mixed typings... /sigh
    return this.items.filter(
      item => item.type === CollectionTypes.Organization
    );
  }

  public getPeople(): PersonPagingItem[] {
    // @ts-ignore - Oh mixed typings... /sigh
    return this.items.filter(item => item.type === CollectionTypes.Person);
  }
}
