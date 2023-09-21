export enum Region{
    Africa = 'Africa',
    Americas = 'Americas',
    Asia = 'Asia',
    Europe = 'Europe',
    Oceania = 'Oceania',
}

export interface SmallCountry{
    name: string;
    cca3: string;
    borders: string[];
}

export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    cioc?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    fifa?:        string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}



export interface Currencies {
    GBP?: All;
    IMP?: All;
    EUR?: All;
    GGP?: All;
    RON?: All;
    RSD?: All;
    GIP?: All;
    MDL?: All;
    HUF?: All;
    BGN?: All;
    SEK?: All;
    CHF?: All;
    NOK?: All;
    BAM?: BAM;
    DKK?: All;
    BYN?: All;
    UAH?: All;
    ISK?: All;
    MKD?: All;
    CZK?: All;
    JEP?: All;
    PLN?: All;
    RUB?: All;
    FOK?: All;
    ALL?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: string;
    glv?: string;
    ell?: string;
    fra?: string;
    nfr?: string;
    ita?: string;
    est?: string;
    ron?: string;
    deu?: string;
    ltz?: string;
    srp?: string;
    lav?: string;
    sqi?: string;
    hun?: string;
    slk?: string;
    swe?: string;
    cnr?: string;
    bul?: string;
    lit?: string;
    nld?: string;
    lat?: string;
    tur?: string;
    fin?: string;
    gsw?: string;
    roh?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    bos?: string;
    hrv?: string;
    mlt?: string;
    dan?: string;
    bel?: string;
    rus?: string;
    cat?: string;
    spa?: string;
    slv?: string;
    nor?: string;
    ukr?: string;
    gle?: string;
    isl?: string;
    de?:  string;
    mkd?: string;
    ces?: string;
    nrf?: string;
    pol?: string;
    por?: string;
    fao?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
