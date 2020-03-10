export interface IServiceOptions {
  onInvalidCredentials: Function;
}

/**
 * Some type definitions based on their types.
 * Mostly, this allows easier copy and paste, but might also provide a hook for management.
 */
type BooleanOrNull = Boolean | null;
/** A URL is a fully-qualified (http or https) website reference. */
type UrlString = string;
/** A Path in the Crunchbase REST API is a relative path to the detail for an Item. */
type Path = string;
type FloatOrNull = number;
type Integer = number;
/** A Timestamp in the Crunchbase API is Unix Time, or seconds since the epoch. */
type Timestamp = string;
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public postal_code: Integer = 0; // TODO I have personal reservations about this...

  constructor(data: Partial<Address> = {}) {
    Object.assign(this, data);
  }
}

/**
 * @link https://data.crunchbase.com/docs/acquisition
 */
export class Acquisition {
  public api_path: Path = "";
  public web_path: Path = "";
  public price: Integer = 0;
  public price_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** Currency conversion is based on the announced_on date. */
  public price_usd: Integer = 0;
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public api_url: URL;
  public rank: Integer;

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
  public created_at: Timestamp = "";
  /** When the Category was last updated */
  public updated_at: Timestamp = "";
  /**
   * @deprecated This field has been deprecated in this version, so it will always return "null".
   */
  public events_in_category: null = null;

  constructor(data: Partial<Category> = {}) {
    Object.assign(this, data);
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
  public degree_type_name: String = "";
  public degree_subject: String = "";
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";

  constructor(data: Partial<Degree> = {}) {
    Object.assign(this, data);
  }
}

export enum DegreeRelationships {
  school = Relationships.school,
  person = Relationships.person
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
  public money_raised: Integer = 0;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date */
  public money_raised_usd: Integer = 0;
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
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
  public money_raised: Integer = 0;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date. */
  public money_raised_usd: Integer = 0;
  /** When available, the target of the FundingRound */
  public target_money_raised: Integer = 0;
  public target_money_raised_currency_code: CurrencyCodes =
    CurrencyCodes.unknown;
  /** currency conversion, if necessary, is done based on the announced_on date. */
  public target_money_raised_usd: Integer = 0;
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public permalink: String = "";
  public api_url: UrlString = "";
  public pre_money_valuation: Integer = 0;
  public pre_money_valuation_currency_code: Integer = 0;
  public pre_money_valuation_usd: Integer = 0;
  public rank: Integer = 0;

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
  public height: Integer = 0;
  public width: Integer = 0;
  /** file size in bytes */
  public filesize: Integer = 0;
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";

  constructor(data: Partial<Image> = {}) {
    Object.assign(this, data);
  }
}

/**
 * @link https://data.crunchbase.com/docs/investor-investment
 */
export class Investment {
  /** "Investment" */
  public type: String = "";
  public uuid: UUID = "";
  public money_invested: Integer = 0;
  public money_invested_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  public money_invested_usd: Integer = 0;
  public is_lead_investor: BooleanOrNull = null;
  public announced_on: String = "";
  public announced_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";

  constructor(data: Partial<Investment> = {}) {
    Object.assign(this, data);
  }
}

export enum InvestmentRelationships {
  funding_round = Relationships.funding_round, // many-to-one FundingRound
  invested_in = Relationships.invested_in, // many-to-one Organization or Person
  investors = Relationships.investors // one-to-many Organization or Person
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
  public opening_valuation: Integer = 0;
  public opening_valuation_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, when necessary, is done based on the went_public_on date */
  public opening_valuation_usd: Integer = 0;
  /** Money raised by virtue of the Ipo */
  public money_raised: Integer = 0;
  public money_raised_currency_code: CurrencyCodes = CurrencyCodes.unknown;
  /** currency conversion, when necessary, is done based on the went_public_on date */
  public money_raised_usd: Integer = 0;
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public job_type: String = "";

  constructor(data: Partial<Job> = {}) {
    Object.assign(this, data);
  }
}

export enum JobRelationships {
  person = Relationships.person,
  organization = Relationships.organization
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public city: String = "";
  public region: String = "";
  public region_code2: Integer = 0;
  public country: String = "";
  public country_code2: Integer = 0;
  public country_code3: Integer = 0;

  constructor(data: Partial<Location> = {}) {
    Object.assign(this, data);
  }
}

export enum LocationRelationships {
  parent_locations = Relationships.parent_locations
}

/**
 * @link https://data.crunchbase.com/docs/press-reference
 */
export class News {
  public title: String = "";
  public author: String = "";
  public posted_on: TrustedDate = "";
  public url: UrlString = "";
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public posted_on_trust_code: TrustCode = TrustCode.NullOrInvalidDate;

  constructor(data: Partial<News> = {}) {
    Object.assign(this, data);
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
  public num_employees_min: Integer = 0;
  public num_employees_max: Integer = 0;
  public total_funding_usd: Integer = 0;
  /** See Stock Exchanges */
  public stock_exchange: String = "";
  /** The symbol under which the Organization trades on the stock_exchange */
  public stock_symbol: String = "";
  public number_of_investments: Integer = 0;
  /** Fully-qualified URL */
  public homepage_url: UrlString = "";
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public permalink_aliases: String = "";
  public api_url: UrlString = "";
  public investor_type: String = "";
  public contact_email: String = "";
  public phone_number: String = "";
  public rank: Integer = 0;

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

/**
 * @link https://data.crunchbase.com/docs/organizationsummary
 */
export class OrganizationSummary {
  public permalink: String = "";
  /** Omitted in the ODM */
  public api_path: Path = "";
  public web_path: Path = "";
  public name: String = "";
  /** company, investor, group, or school */
  public primary_role: String = "";
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public api_url: UrlString = "";
  public stock_exchange: String = "";
  public stock_symbol: String = "";

  constructor(data: Partial<OrganizationSummary> = {}) {
    Object.assign(this, data);
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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  /** This represents the full URL of the endpoint */
  public api_URL: Path = "";
  public permalink_aliases: String = "";
  public api_url: UrlString = "";
  public gender: String = "";
  public rank: Integer = 0;

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
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public api_url: UrlString = "";
  public gender: String = "";

  constructor(data: Partial<PersonSummary> = {}) {
    Object.assign(this, data);
  }
}

/**
 * @link https://data.crunchbase.com/docs/web-presence
 */
export class Website {
  public website_type: WebsiteType = WebsiteType.unknown;
  public url: UrlString = "";
  public created_at: Timestamp = "";
  public updated_at: Timestamp = "";
  public website_name: String = "";

  constructor(data: Partial<Website> = {}) {
    Object.assign(this, data);
  }
}
