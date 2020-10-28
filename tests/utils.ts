import Service, {
  Acquisition,
  Address,
  Category,
  CollectionResponseRelationshipPagingData,
  Degree,
  Fund,
  FundingRound,
  Image,
  Investment,
  Ipo,
  Job,
  Location,
  News,
  Organization,
  Person,
  ResponseMetaData,
  ResponsePagingData,
  Website,
} from "../src";

/**
 * An instance of the service
 */

let service: Service;
const onInvalidCredentials = jest.fn(() => {});
export const getService = (): Service => {
  if (service) {
    return service;
  }

  service = new Service(process.env.API_KEY, {
    onInvalidCredentials,
  });

  return service;
};

export const expectMetaData = (metadata: ResponseMetaData) => {
  expect(metadata).toBeInstanceOf(ResponseMetaData);
  expect(metadata.version).toBeTruthy();
};

export const expectPagingData = (paging: ResponsePagingData) => {
  expect(paging).toBeInstanceOf(ResponsePagingData);
  expect(paging.current_page).toBe(1);
  expect(paging.collection_url).toBeTruthy();
};

export const expectRelationshipPagingData = (
  paging: CollectionResponseRelationshipPagingData
) => {
  expect(paging).toBeInstanceOf(CollectionResponseRelationshipPagingData);
  expect(paging.sort_order).toBeTruthy();
  expect(paging.total_items).toBeGreaterThanOrEqual(0);
  expect(paging.first_page_url).toBeTruthy(); // Not always true
};

export const expectPagingItem = (item: Record<string, any>) => {
  expect(item.type).toBeTruthy();
  expect(item.uuid).toBeTruthy();
};

export const expectApiCollectionProperties = (object: any) => {
  expect(object.permalink).toBeTruthy();
  expect(object.api_path).toBeTruthy();
  expect(object.web_path).toBeTruthy();
  expect(object.created_at).toBeTruthy();
};

export const expectAcquisition = (acquisition: Acquisition) => {
  expectApiCollectionProperties(acquisition);
  expect(acquisition).toBeInstanceOf(Acquisition);
  // expect(acquisition.completed_on).toBeTruthy(); // Not always there
  // expect(acquisition.completed_on_trust_code).toBeTruthy(); // Not always there
  expect(acquisition.acquisition_status).toBeTruthy();
  expect(acquisition.acquisition_type).toBeTruthy();
  expect(acquisition.announced_on).toBeTruthy();
  expect(acquisition.announced_on_trust_code).toBeTruthy();
  // expect(acquisition.payment_type).toBeTruthy(); // Not always there
  // expect(acquisition.disposition_of_acquired).toBeTruthy(); // Not always there
  // expect(acquisition.price).toBeTruthy(); // Can totally be null
  // expect(acquisition.price_usd).toBeTruthy(); // Can totally be null
};

export const expectAddress = (address: Address) => {
  expect(address).toBeInstanceOf(Address);
  expect(address.name).toBeTruthy();
  expect(address.city).toBeTruthy();
  // expect(address.city_web_path).toBeTruthy(); // Not always there
  expect(address.country).toBeTruthy();
  // expect(address.country_web_path).toBeTruthy(); // Not always there
  expect(address.created_at).toBeTruthy();
  expect(address.region).toBeTruthy();
  // expect(address.region_web_path).toBeTruthy(); // Not always there
  // expect(address.latitude).toBeTruthy(); // Not always there
  // expect(address.longitude).toBeTruthy(); // Not always there
};

export const expectCategory = (category: Category) => {
  expect(category).toBeInstanceOf(Category);
  expect(category.created_at).toBeTruthy();
  expect(category.name).toBeTruthy();
  // expect(category.path).toBeTruthy(); // Not always there
};

export const expectDegree = (degree: Degree) => {
  expect(degree).toBeInstanceOf(Degree);
  expect(degree.type).toBeTruthy();
  expect(degree.uuid).toBeTruthy();
  // expect(degree.started_on).toBeTruthy(); // Not always there
  // expect(degree.started_on_trust_code).toBeTruthy(); // Not always there
  // expect(degree.completed_on).toBeTruthy(); // Not always there
  // expect(degree.completed_on_trust_code).toBeTruthy(); // Not always there
  expect(degree.degree_type_name).toBeTruthy();
  expect(degree.degree_subject).toBeTruthy();
  expect(degree.created_at).toBeTruthy();
};

export const expectFund = (fund: Fund) => {
  expectApiCollectionProperties(fund);
  expect(fund).toBeInstanceOf(Fund);
  expect(fund.name).toBeTruthy();
  expect(fund.announced_on).toBeTruthy();
  expect(fund.announced_on_trust_code).toBeTruthy();
  expect(fund.money_raised).toBeTruthy();
};

export const expectFundingRound = (fundingRound: FundingRound) => {
  expectApiCollectionProperties(fundingRound);
  expect(fundingRound).toBeInstanceOf(FundingRound);
  // expect(fundingRound.target_money_raised).toBeTruthy(); // Can totally be null
  expect(fundingRound.funding_type).toBeTruthy();
  expect(fundingRound.announced_on).toBeTruthy();
};

export const expectImage = (image: Image) => {
  expect(image).toBeInstanceOf(Image);
  expect(image.type).toBeTruthy();
  expect(image.uuid).toBeTruthy();
  expect(image.asset_path).toBeTruthy();
  expect(image.content_type).toBeTruthy();
  expect(image.created_at).toBeTruthy();
};

export const expectInvestment = (investment: Investment) => {
  expect(investment).toBeInstanceOf(Investment);
  expect(investment.type).toBeTruthy();
  expect(investment.uuid).toBeTruthy();
  // expect(investment.money_invested).toBeTruthy(); // Can totally be null
  expect(investment.announced_on).toBeTruthy();
};

export const expectIpo = (ipo: Ipo) => {
  expect(ipo).toBeInstanceOf(Ipo);
  expect(ipo.api_path).toBeTruthy();
  expect(ipo.web_path).toBeTruthy();
  expect(ipo.created_at).toBeTruthy();
  // expect(ipo.opening_valuation).toBeTruthy(); // Not always there
  expect(ipo.money_raised).toBeTruthy();
  expect(ipo.opening_share_price).toBeTruthy();
  expect(ipo.stock_exchange_symbol).toBeTruthy();
  expect(ipo.stock_symbol).toBeTruthy();
  expect(ipo.went_public_on).toBeTruthy();
  expect(ipo.went_public_on_trust_code).toBeTruthy();
};

export const expectJob = (job: Job) => {
  expect(job).toBeInstanceOf(Job);
  expect(job.uuid).toBeTruthy();
  expect(job.type).toBeTruthy();
  expect(job.created_at).toBeTruthy();
  expect(job.job_type).toBeTruthy();
  // expect(job.started_on).toBeTruthy(); // This won't always be there
  // expect(job.started_on_trust_code).toBeTruthy(); // This won't always be there
  expect(job.title).toBeTruthy();
};

export const expectLocation = (location: Location) => {
  expect(location).toBeInstanceOf(Location);
  expect(location.web_path).toBeTruthy();
  expect(location.name).toBeTruthy();
  expect(location.location_type).toBeTruthy();
  // expect(location.parent_location_uuid).toBeTruthy(); // // Not always there
  expect(location.created_at).toBeTruthy();
  expect(location.city).toBeTruthy();
  expect(location.region).toBeTruthy();
  expect(location.region_code2).toBeTruthy();
  expect(location.country).toBeTruthy();
  expect(location.country_code2).toBeTruthy();
  expect(location.country_code3).toBeTruthy();
};

export const expectNews = (news: News) => {
  expect(news).toBeInstanceOf(News);
  expect(news.title).toBeTruthy();
  expect(news.posted_on).toBeTruthy();
  expect(news.posted_on_trust_code).toBeTruthy();
  expect(news.created_at).toBeTruthy();
  expect(news.url).toBeTruthy();
};

export const expectOrganization = (organization: Organization) => {
  expectApiCollectionProperties(organization);
  expect(organization).toBeInstanceOf(Organization);
  expect(organization.name).toBeTruthy();
  expect(organization.rank).toBeTruthy();
};

export const expectPerson = (person: Person) => {
  expectApiCollectionProperties(person);
  expect(person).toBeInstanceOf(Person);
  expect(person.first_name).toBeTruthy();
  expect(person.last_name).toBeTruthy();
  expect(person.rank).toBeTruthy();
};

export const expectWebsite = (website: Website) => {
  expect(website).toBeInstanceOf(Website);
  expect(website.website_type).toBeTruthy();
  expect(website.url).toBeTruthy();
  expect(website.website_name).toBeTruthy();
};
