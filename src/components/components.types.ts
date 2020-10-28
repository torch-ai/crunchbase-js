/**
 * Documentation links:
 * @link https://data.crunchbase.com/docs
 * @link https://app.swaggerhub.com/apis-docs/Crunchbase/crunchbase-enterprise_api/1.0.3
 */

/** Globally unique id of this entity */
export type uuid = string;

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
