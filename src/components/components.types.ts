/**
 * Documentation links:
 * @link https://data.crunchbase.com/docs
 * @link https://app.swaggerhub.com/apis-docs/Crunchbase/crunchbase-enterprise_api/1.0.3
 */

export type InterfaceKeys<T> = keyof T;

/** Globally unique id of this entity */
export type uuid = string;
export type dateTime = string;
export type date = string;
export type imageId = string;
export type permalink = string;
export type url = string;

export type Order = "asc" | "desc";

export type Operator =
  | "blank"
  | "eq"
  | "not_eq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "starts"
  | "contains"
  | "not_contains"
  | "between"
  | "includes"
  | "not_includes"
  | "includes_all"
  | "not_includes_all"
  | "domain_eq";

/**
 * @link https://data.crunchbase.com/reference#currency-codes
 */
export enum CurrencyCode {
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
  ZWL = "ZWL", //
}

export enum EntityDefId {
  Company = "company",
}

export enum FacetId {
  Company = "company",
  Investor = "investor",
  School = "school",
}

export enum FundingState {
  EarlyStageVenture = "early_stage_venture",
  IPO = "ipo",
  LateStageVenture = "late_stage_venture",
  MAndA = "m_and_a",
  PrivateEquity = "private_equity",
  Seed = "seed",
}

export enum FundingType {
  Angel = "angel",
  ConvertibleNote = "convertible_note",
  CorporateRound = "corporate_round",
  DebtFinancing = "debt_financing",
  EquityCrowdfunding = "equity_crowdfunding",
  Grant = "grant",
  InitialCoinOffering = "initial_coin_offering",
  NonEquityAssistance = "non_equity_assistance",
  PostIPODebt = "post_ipo_debt",
  PostIPOEquity = "post_ipo_equity",
  PostIPOSecondary = "post_ipo_secondary",
  PreSeed = "pre_seed",
  PrivateEquity = "private_equity",
  ProductCrowdfunding = "product_crowdfunding",
  SecondaryMarket = "secondary_market",
  Seed = "seed",
  SeriesA = "series_a",
  SeriesB = "series_b",
  SeriesC = "series_c",
  SeriesD = "series_d",
  SeriesE = "series_e",
  SeriesF = "series_f",
  SeriesG = "series_g",
  SeriesH = "series_h",
  SeriesI = "series_i",
  SeriesJ = "series_j",
  VentureSeriesUnknown = "series_unknown",
  Undisclosed = "undisclosed",
}

export enum HubTags {
  CrunchbaseVentureProgram = "cbvp",
  EmergingUnicorn = "emerging_unicorn",
  ExitedUnicorn = "exited_unicorn",
  PledgeOnePercent = "pledge_one_percent",
  Unicorn = "unicorn",
}

export enum InvestorStage {
  ConvertibleNote = "convertible_note",
  Crowdfunding = "crowdfunding",
  Debt = "debt",
  EarlyStageVenture = "early_stage_venture",
  Grant = "grant",
  InitialCoinOffering = "initial_coin_offering",
  LateStageVenture = "late_stage_venture",
  NonEquityAssistance = "non_equity_assistance",
  PostIpo = "post_ipo",
  PrivateEquity = "private_equity",
  SecondaryMarket = "secondary_market",
  Seed = "seed",
  Venture = "venture",
}

export enum InvestorType {
  Accelerator = "accelerator",
  AngelGroup = "angel_group",
  CoWorkingSpace = "co_working_space",
  CorporateVentureCapital = "corporate_venture_capital",
  EntrepreneurshipProgram = "entrepreneurship_program",
  FamilyInvestmentOffice = "family_investment_office",
  FundOfFunds = "fund_of_funds",
  GovernmentOffice = "government_office",
  HedgeFund = "hedge_fund",
  Incubator = "incubator",
  InvestmentBank = "investment_bank",
  MicroVC = "micro_vc",
  PensionFunds = "pension_funds",
  PrivateEquityFirm = "private_equity_firm",
  SecondaryPurchaser = "secondary_purchaser",
  StartupCompetition = "startup_competition",
  Syndicate = "syndicate",
  UniversityProgram = "university_program",
  VentureCapital = "venture_capital",
  VentureDebt = "venture_debt",
}

export enum IPOStatus {
  Delisted = "delisted",
  Private = "private",
  Public = "public",
}

export enum LayoutId {
  DefaultLayout = "default",
  InvestorLayout = "investor",
  SchoolLayout = "school",
}

export enum LocationType {
  City = "city",
  Region = "region",
  Country = "country",
  Continent = "continent",
  Group = "group",
}

export enum NumberOfEmployees {
  Between1And10 = "c_00001_00010",
  Between11And50 = "c_00011_00050",
  Between51And100 = "c_00051_00100",
  Between101And250 = "c_00101_00250",
  Between251And500 = "c_00251_00500",
  Between501And1000 = "c_00501_01000",
  Between1001And5000 = "c_01001_05000",
  Between5001And10000 = "c_05001_10000",
  Between10001Plus = "c_10001_max",
}

export enum OperatingStatus {
  Active = "active",
  Closed = "closed",
}

export enum ProgramType {
  OnSite = "on_site",
  Online = "online",
}

export enum RevenueRange {
  LessThan1M = "r_00000000",
  Between1MAnd$10M = "r_00001000",
  Between10MAnd$50M = "r_00010000",
  Between50MAnd$100M = "r_00050000",
  Between100MAnd$500M = "r_00100000",
  Between500MAnd$1B = "r_00500000",
  Between1BAnd$10B = "r_01000000",
  MoreThan10B = "r_10000000",
}

export enum SchoolMethod {
  OnCampus = "on_compus",
  Online = "online",
  OnlineAndOnCampus = "online_and_on_campus",
}

export enum SchoolProgram {
  Bootcamp = "bootcamp",
  CommunityCollege = "community_college",
  FourYearUniversity = "four_year_university",
  GraduateUniversity = "graduate_university",
  HighSchool = "high_school",
  TradeSchool = "trade_school",
  TwoYearUniversity = "two_year_university",
}

export enum SchoolType {
  Private = "for_profit_private",
  PrivateNonProfit = "non_profit_private",
  Public = "public",
}

export enum Status {
  Closed = "closed",
  IPO = "ipo",
  Operating = "operating",
  WasAcquired = "was_acquired",
}

export enum StockExchangeSymbol {
  ADX_AbuDhabiSecuritiesExchange = "adx",
  AFX_AfghanistanStockExchange = "afx",
  ALTX_ALTXEastAfricaExchange = "altx",
  AMEX_AmericanStockExchange = "amex",
  AMS_EuronextAmsterdam = "ams",
  AMX_ArmeniaSecuritiesExchange = "amx",
  ASCE_AbujaSecuritiesAndCommoditiesExchange = "asce",
  ASX_AustralianSecuritiesExchange = "asx",
  ATH_AthensStockExchange = "ath",
  BCBA_BuenosAiresStockExchange = "bcba",
  BDP_BudapestStockExchange = "bdp",
  BELEX_BelgradeStockExchange = "belex",
  BER_BerlinerBorse = "ber",
  BFB_BakuStockExchange = "bfb",
  BIT_ItalianStockExchange = "bit",
  BKK_ThailandStockExchange = "bkk",
  BLSE_BanjaLukaStockExchange = "blse",
  BME_MadridStockExchange = "bme",
  BMV_MexicanStockExchange = "bmv",
  BOM_BombayStockExchange = "bom",
  BRVM_RegionalSecuritiesExchangeSA = "brvm",
  BSE_BulgarianStockExchange = "bse",
  BSE_BeirutStockExchange = "bse_lb",
  BSSE_BratislavaStockExchange = "bsse",
  BSX_BermudaStockExchange = "bsx",
  BVB_BucharestStockExchange = "bvb",
  BVC_ColombianStockExchange = "bvc",
  BVFB_BelarusianCurrencyAndStockExchange = "bvfb",
  BVM_MontevideoStockExchange = "bvm",
  B3_BrazilStockExchangeAndOTCMarket = "bvmf",
  BVMT_TunisStockExchange = "bvmt",
  BX_BerneStockExchange = "bx",
  CAS_CasablancaStockExchange = "cas",
  CISE_ChannelIslandsStockExchange = "cise",
  CNSX_CanadianNationalStockExchange = "cnsx",
  COL_ColomboStockExchange = "col",
  CPH_CopenhagenStockExchange = "cph",
  CSE_CanadianSecuritiesExchange = "cse",
  CSE_CyprusStockExchange = "cse_cy",
  CSX_CambodiaSecuritiesExchange = "csx",
  TSX_V_TorontoTSXVentureExchange = "cve",
  DFM_DubaiFinancialMarket = "dfm",
  DSE_DhakaStockExchange = "dse",
  DSX_DoualaStockExchange = "dsx",
  DUS_BorseDusseldorf = "dus",
  EBR_EuronextBrussels = "ebr",
  EGX_EgyptStockExchange = "egx",
  ELI_EuronextLisbon = "eli",
  EPA_EuronextParis = "epa",
  ETR_DeutscheBorseXETRA = "etr",
  EUREX_EurexExchange = "eurex",
  FRA_FrankfurtStockExchange = "fra",
  FWB_BorseFrankfurtStockExchange = "fwb",
  GHA_GhanaStockExchange = "gha",
  GSX_GeorgianStockExchange = "gsx",
  GSX_GibraltarStockExchange = "gsx_gi",
  HEL_HelsinkiStockExchange = "hel",
  HKG_HongKongStockExchange = "hkg",
  HNX_HanoiStockExchange = "hnx",
  HOSE_HoChiMinhStockExchange = "hose",
  ICE_IcelandStockExchange = "ice",
  IDX_IndonesiaStockExchange = "idx",
  IEX_InvestorsExchange = "iex",
  IFB_IranFaraBourse = "ifb",
  IME_IranMercantileExchange = "ime",
  IRENEX_IranEnergyExchange = "irenex",
  ISE_IrishStockExchange = "ise",
  IST_IstanbulStockExchange = "ist",
  ISX_IraqStockExchange = "isx",
  JP_JapanExchange = "jp",
  JSC_BelarusianCurrencyAndStockExchange = "jsc",
  JSE_JohannesburgStockExchange = "jse",
  JSE_JamaicaStockExchange = "jse_jam",
  KASE_KazakhstanStockExchange = "kase",
  KLSE_MalaysiaStockExchange = "klse",
  KOSDAQ_KoreanSecuritiesDealersAutomatedQuotations = "kosdaq",
  KRX_KoreaStockExchange = "krx",
  KSE_KuwaitStockExchange = "kse",
  LJE_LjubljanaStockExchange = "lje",
  LSE_LondonStockExchange = "lse",
  LSM_LibyanStockMarket = "lsm",
  LSX_LaoSecuritiesExchange = "lsx",
  LuSE_LusakaSecuritiesExchange = "luse",
  LuxSE_LuxembourgStockExchange = "luxse",
  MAL_MaltaStockExchange = "mal",
  MCX_MultiCommodityExchangeOfIndia = "mcx",
  MEFF_MercadoSpanishFinancialFuturesMarket = "meff",
  MNSE_MontenegroStockExchange = "mnse",
  MOEX_MoscowExchange = "moex",
  MSE_MetropolitanStockExchange = "mse",
  MSE_MoldovaStockExchange = "mse_md",
  MSE_MacedonianStockExchange = "mse_mk",
  MSEI_MetropolitanStockExchangeOfIndia = "msei",
  MSM_MuscatSecuritiesMarket = "msm",
  MUN_BorseMunchen = "mun",
  NASDAQ = "nasdaq",
  NSE_NairobiSecuritiesExchange = "nbo",
  NEEQ_NationalEquitiesExchangeAndQuotations = "neeq",
  NEPSE_NepalStockExchange = "nepse",
  NEX_NEXExchange = "nex",
  NGM_NordicGrowthMarketExchange = "ngm",
  NIG_NigerianStockExchange = "nig",
  NOTC_NorwegianOTC = "notc",
  NPEX_NPEXStockExchange = "npex",
  NSE_NationalStockExchangeOfIndia = "nse",
  NSX_NationalStockExchangeOfAustralia = "nsx",
  NYSE_NewYorkStockExchange = "nyse",
  NYSEARCA_NYSEArca = "nysearca",
  NYSEAMERICAN_NYSEAmerican = "nysemkt",
  NZE_NewZealandStockExchange = "nze",
  OSE_OsloStockExchange = "ose",
  OTCBB_FINRAOTCBulletinBoard = "otcbb",
  OTCPink = "otcpink",
  OTCQB = "otcqb",
  OTCQX = "otcqx",
  PDEx_PhilippineDealingExchange = "pdex",
  PEX_PalestineExchange = "pex",
  PFTS_PFTSUkraineStockExchange = "pfts",
  POMSoX_PortMoresbyStockExchange = "pomsox",
  PRA_PragueStockExchange = "prg",
  PSE_PhilippineStockExchange = "pse",
  PSX_PakistanStockExchange = "psx",
  QSE_QatarStockExchange = "qse",
  RFB_RigaStockExchange = "rfb",
  RSE_RwandaStockExchange = "rse",
  RSEBL_RoyalSecuritiesExchangeOfBhutan = "rsebl",
  SASE_SarajevoStockExchange = "sase",
  SBX_BXSwiss = "sbx",
  SEHK_TheStockExchangeOfHongKong = "sehk",
  SEM_StockExchangeOfMauritius = "sem",
  SGBV_AlgiersStockExchange = "sgbv",
  SGX_SingaporeStockExchange = "sgx",
  SIX_SIXSwissExchange = "six",
  SPBEX_SaintPetersburgStockExchange = "spbex",
  SPSE_SouthPacificStockExchange = "spse",
  SSE_ShanghaiStockExchange = "sse",
  SSX_SydneyStockExchange = "ssx",
  STO_StockholmStockExchange = "sto",
  STU_BorseStuttgart = "stu",
  SWX_SIXSwissExchange = "swx",
  SZSE_ShenzhenStockExchange = "szse",
  Tadawul_SaudiStockExchange = "tadawul",
  TSE_TallinnStockExchange = "tal",
  TFEX_ThailandFuturesExchange = "tfex",
  TISE_TheInternationalStockExchange = "tise",
  TLV_TelAvivStockExchange = "tlv",
  TWSE_TaiwanStockExchange = "tpe",
  TSE_TiranaStockExchange = "tse_al",
  TSE_TehranStockExchange = "tse_ir",
  TWO_TaiwanOTCExchange = "tsec",
  TSX_TorontoStockExchange = "tsx",
  TTSE_TrinidadandTobagoStockExchange = "ttse",
  TYO_TokyoStockExchange = "tyo",
  USE_UgandaSecuritiesExchange = "use",
  UX_UkrainianExchange = "ux",
  VIE_ViennaStockExchange = "vie",
  VMF_FaroeseSecuritiesMarket = "vmf",
  VSE_VancouverStockExchange = "vse",
  WSE_WarsawStockExchange = "wse",
  YSX_YangonStockExchange = "ysx",
  ZAMACE_ZambianCommodityExchange = "zamace",
  ZSE_ZimbabweStockExchange = "zse",
  ZSE_ZagrebStockExchange = "zse_hr",
}

export interface IDateWithPrecision {
  /** A field that will contain date information up to a certain level of precision. E.g. month, day, etc. */
  description: "none" | "year" | "month" | "day";
  value: string;
}

export interface IDatetimeWithPrecision {
  /** A field that will contain date information up to a certain level of precision. E.g. month, day, etc. */
  description: "none" | "year" | "month" | "day" | "hour" | "minute" | "second";
  value: string;
}

/** Every entity in the system has a unique identifier that contains all necessary properties to represent it. */
export interface IEntityIdentifier {
  uuid: uuid;
  /** Optionally provided within Entity Def unique nice id of this entity */
  permalink?: permalink;
  /** Textual representation of this entity (i.e. its "name") */
  value?: string;
  /** Optionally provided location to obtain an image representing this entity */
  image_id?: imageId;
  /** What type of entity this be */
  entity_def_id: EntityDefId;
}

export interface IErrors {
  value: string;
}

export interface ILink {
  /** An object representing both the url and some labeling text for that url */
  description: string;
  value: string;
  label: string;
}

/** Every location entity in the system has a unique identifier that contains all necessary properties to represent it. */
export interface ILocationIdentifier extends IEntityIdentifier {
  /** Type of location (city, country, etc) */
  location_type?: LocationType;
}

export interface IMoneyDecimal {
  /** A field containing decimal data that represents some amount of money */
  description: CurrencyCode;
  value_usd?: number;
  value: number;
}

export interface IMoney {
  /** A field containing decimal data that represents some amount of money */
  description: CurrencyCode;
  value_usd?: number;
  value: number;
}

export interface IOrganization {
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
   * Descriptive keyword for an Organization (e.g. SaaS, Android, Cloud Computing, Medical Device)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  categories?: IEntityIdentifier[];
  /**
   * Superset of Industries (e.g. Software, Mobile, Health Care)
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   */
  category_groups?: IEntityIdentifier[];
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
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  created_at?: dateTime;
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
   * maxLength: 8192
   * Organization Description, Industries, Industry Groups
   * Field Type: text_long
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  description?: string;
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
   * Link to Organization's Facebook page
   * Searchable: No
   */
  facebook?: ILink;
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
   * Name of the Organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  identifier: IEntityIdentifier;
  /**
   * maxLength: 255
   * The profile image of the organization on Crunchbase
   * Searchable: No
   */
  image_id?: imageId;
  /**
   * maxLength: 8192
   * The cloudinary url of the profile image
   * Searchable: No
   */
  image_url?: string;
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
  investor_type?: InvestorType[];
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
   * Link to Organization's LinkedIn page
   * Searchable: No
   */
  linkedin?: ILink;
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
   * maxLength: 8192
   * Searchable: No
   */
  name?: string;
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
  override_layout_id?: LayoutId;
  /**
   * This is the parent Organization of the sub-organization
   * Searchable: Yes
   * Search Operators: blank, contains, eq, includes, not_contains, not_eq, not_includes, starts
   */
  owner_identifier?: IEntityIdentifier;
  /**
   * maxLength: 255
   * Searchable: No
   */
  permalink?: permalink;
  /**
   * maxItems: 255
   * These are the alternative aliases to the primary permalink of the Organization
   * Searchable: Yes
   * Search Operators: blank, includes, includes_all, not_includes, not_includes_all
   * maxLength: 255
   */
  permalink_aliases?: string[];
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
   * maxLength: 8192
   * Text of Organization Description, Industries, and Industry Groups
   * Searchable: Yes
   * Search Operators: blank, contains, not_contains
   */
  short_description?: string;
  /**
   * Status of Organization e.g. Operating, Closed, Acquired, IPO
   * Searchable: Yes
   * Search Operators: blank, eq, includes, not_eq, not_includes
   */
  status?: Status;
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
   * Link to Organization's Twitter page
   * Searchable: No
   */
  twitter?: ILink;
  /**
   * Field Type: datetime
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  updated_at?: dateTime;
  /**
   * Field Type: uuid
   * Searchable: Yes
   * Search Operators: blank, eq, includes
   */
  uuid?: uuid;
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
   * Link to homepage. note: website_url has replaced this field; this field will be deprecated in the near future
   * Searchable: No
   * @deprecated
   */
  website?: ILink;
  /**
   * maxLength: 8192
   * Link to homepage
   * Searchable: Yes
   * Search Operators: domain_blank, domain_eq, domain_includes, not_domain_eq, not_domain_includes
   */
  website_url?: url;
  /**
   * The date when the Organization went public
   * Field Type: date
   * Searchable: Yes
   * Search Operators: between, blank, eq, gte, lte
   */
  went_public_on?: date;
}
