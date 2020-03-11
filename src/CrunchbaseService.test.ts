import dotenv from "dotenv";
import CrunchbaseService from "./CrunchbaseService";
import {
  Organization,
  OrganizationsSummaryPagingItem,
  OrganizationsSummaryPagedResponseData,
  OrganizationsSummaryResponse,
  ResponseMetaData,
  ResponsePagingData,
  OrganizationSummary,
  OrganizationResponse,
  OrganizationResponseData,
  CollectionTypes,
  OrganizationResponseRelationships,
  CollectionResponseInvestmentRelationshipsData,
  CollectionResponseImageRelationshipData,
  CollectionResponsePersonRelationshipsData,
  CollectionResponseJobRelationshipsData,
  CollectionResponseOrganizationOrPersonRelationshipsData,
  CollectionResponseOrganizationRelationshipsData,
  CollectionResponseAddressRelationshipData,
  CollectionResponseAddressRelationshipsData,
  CollectionResponseCategoryRelationshipsData,
  CollectionResponseFundingRoundRelationshipsData,
  CollectionResponseAcquisitionRelationshipsData,
  CollectionResponseAcquisitionRelationshipData,
  CollectionResponseIpoRelationshipData,
  CollectionResponseFundRelationshipsData,
  CollectionResponseWebsiteRelationshipsData,
  CollectionResponseImageRelationshipsData,
  CollectionResponseNewsRelationshipsData,
  Cardinality,
  CollectionResponseRelationshipPagingData,
  ImagePagingItem,
  Image,
  PersonPagingItem,
  Person,
  JobPagingItem,
  Job,
  OrganizationPagingItem,
  AddressPagingItem,
  Address,
  CategoryPagingItem,
  Category,
  FundingRoundPagingItem,
  FundingRound,
  InvestmentPagingItem,
  Investment,
  Acquisition,
  AcquisitionPagingItem,
  Ipo,
  IpoPagingItem,
  FundPagingItem,
  Fund,
  WebsitePagingItem,
  Website,
  NewsPagingItem,
  News,
  PeopleSummaryResponse,
  PeopleSummaryPagedResponseData,
  PeopleSummaryPagingItem,
  PersonSummary,
  PersonResponse,
  PersonResponseData,
  PersonResponseRelationships,
  CollectionResponseLocationRelationshipsData,
  CollectionResponseDegreeRelationshipsData,
  LocationPagingItem,
  Location,
  DegreePagingItem,
  Degree,
  CollectionResponseJobRelationshipData
} from "./CrunchbaseServiceTypes";
import { TIMINGS } from "./constants";

/**
 * An instance of the service
 */
const onInvalidCredentials = jest.fn(() => {});

const expectMetaData = (metadata: ResponseMetaData) => {
  expect(metadata).toBeInstanceOf(ResponseMetaData);
  expect(metadata.version).toBeTruthy();
};

const expectPagingData = (paging: ResponsePagingData) => {
  expect(paging).toBeInstanceOf(ResponsePagingData);
  expect(paging.current_page).toBe(1);
  expect(paging.collection_url).toBeTruthy();
};

const expectRelationshipPagingData = (
  paging: CollectionResponseRelationshipPagingData
) => {
  expect(paging).toBeInstanceOf(CollectionResponseRelationshipPagingData);
  expect(paging.sort_order).toBeTruthy();
  expect(paging.total_items).toBeGreaterThanOrEqual(0);
  expect(paging.first_page_url).toBeTruthy(); // Not always true
};

const expectPagingItem = (item: Record<string, any>) => {
  expect(item.type).toBeTruthy();
  expect(item.uuid).toBeTruthy();
};

const expectApiCollectionProperties = (object: any) => {
  expect(object.permalink).toBeTruthy();
  expect(object.api_path).toBeTruthy();
  expect(object.web_path).toBeTruthy();
  expect(object.created_at).toBeTruthy();
};

const expectAcquisition = (acquisition: Acquisition) => {
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

const expectAddress = (address: Address) => {
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

const expectCategory = (category: Category) => {
  expect(category).toBeInstanceOf(Category);
  expect(category.created_at).toBeTruthy();
  expect(category.name).toBeTruthy();
  // expect(category.path).toBeTruthy(); // Not always there
};

const expectDegree = (degree: Degree) => {
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

const expectFund = (fund: Fund) => {
  expectApiCollectionProperties(fund);
  expect(fund).toBeInstanceOf(Fund);
  expect(fund.name).toBeTruthy();
  expect(fund.announced_on).toBeTruthy();
  expect(fund.announced_on_trust_code).toBeTruthy();
  expect(fund.money_raised).toBeTruthy();
};

const expectFundingRound = (fundingRound: FundingRound) => {
  expectApiCollectionProperties(fundingRound);
  expect(fundingRound).toBeInstanceOf(FundingRound);
  // expect(fundingRound.target_money_raised).toBeTruthy(); // Can totally be null
  expect(fundingRound.funding_type).toBeTruthy();
  expect(fundingRound.announced_on).toBeTruthy();
};

const expectImage = (image: Image) => {
  expect(image).toBeInstanceOf(Image);
  expect(image.type).toBeTruthy();
  expect(image.uuid).toBeTruthy();
  expect(image.asset_path).toBeTruthy();
  expect(image.content_type).toBeTruthy();
  expect(image.created_at).toBeTruthy();
};

const expectInvestment = (investment: Investment) => {
  expect(investment).toBeInstanceOf(Investment);
  expect(investment.type).toBeTruthy();
  expect(investment.uuid).toBeTruthy();
  // expect(investment.money_invested).toBeTruthy(); // Can totally be null
  expect(investment.announced_on).toBeTruthy();
};

const expectIpo = (ipo: Ipo) => {
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

const expectJob = (job: Job) => {
  expect(job).toBeInstanceOf(Job);
  expect(job.uuid).toBeTruthy();
  expect(job.type).toBeTruthy();
  expect(job.created_at).toBeTruthy();
  expect(job.job_type).toBeTruthy();
  // expect(job.started_on).toBeTruthy(); // This won't always be there
  // expect(job.started_on_trust_code).toBeTruthy(); // This won't always be there
  expect(job.title).toBeTruthy();
};

const expectLocation = (location: Location) => {
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

const expectNews = (news: News) => {
  expect(news).toBeInstanceOf(News);
  expect(news.title).toBeTruthy();
  expect(news.posted_on).toBeTruthy();
  expect(news.posted_on_trust_code).toBeTruthy();
  expect(news.author).toBeTruthy();
  expect(news.created_at).toBeTruthy();
  expect(news.url).toBeTruthy();
};

const expectOrganization = (organization: Organization) => {
  expectApiCollectionProperties(organization);
  expect(organization).toBeInstanceOf(Organization);
  expect(organization.name).toBeTruthy();
  expect(organization.rank).toBeTruthy();
};

const expectPerson = (person: Person) => {
  expectApiCollectionProperties(person);
  expect(person).toBeInstanceOf(Person);
  expect(person.first_name).toBeTruthy();
  expect(person.last_name).toBeTruthy();
  expect(person.rank).toBeTruthy();
};

const expectWebsite = (website: Website) => {
  expect(website).toBeInstanceOf(Website);
  expect(website.website_type).toBeTruthy();
  expect(website.url).toBeTruthy();
  expect(website.website_name).toBeTruthy();
};

/**
 * The tests
 */
describe("crunchbaseService", () => {
  dotenv.config();
  const crunchbaseService = new CrunchbaseService(process.env.API_KEY, {
    onInvalidCredentials: onInvalidCredentials
  });

  it("should be an instance of CrunchbaseService", () => {
    expect(crunchbaseService).toBeInstanceOf(CrunchbaseService);
  });

  // it('should fire our invalid credentials callback', async done => {
  //     await expect(crunchbaseService.getOrganizations({
  //         name: "Tesla"
  //     })).rejects.toThrowError();
  //     expect(onInvalidCredentials).toBeCalledTimes(1);
  //     done();
  // });

  it("should return an organizations response", async done => {
    const response = await crunchbaseService.getOrganizations({
      name: "Tesla"
    });

    expect(response).toBeInstanceOf(OrganizationsSummaryResponse);
    expectMetaData(response.metadata);
    expect(response.data).toBeInstanceOf(OrganizationsSummaryPagedResponseData);
    expectPagingData(response.data.paging);
    expect(response.data.items.length).toBeGreaterThan(0);

    const item = response.data.items.shift();
    expect(item).toBeInstanceOf(OrganizationsSummaryPagingItem);
    expectPagingItem(item);
    const summary = item.properties;
    expect(summary).toBeInstanceOf(OrganizationSummary);
    expectApiCollectionProperties(summary);
    expect(summary.name).toBeTruthy();
    expect(summary.primary_role).toBeTruthy();
    done();
  });

  it(
    "should return an organization response",
    async done => {
      const summaryResponse = await crunchbaseService.getOrganizations({
        name: "Tesla"
      });

      const response = await crunchbaseService.getOrganization(
        summaryResponse.data.items[0].properties.permalink
      );

      // Going to apologize to you right now. Sorry about how big this is.
      // Breaking it into sub functions to at least keep it more manageable.
      expect(response).toBeInstanceOf(OrganizationResponse);
      expectMetaData(response.metadata);
      expect(response.data).toBeInstanceOf(OrganizationResponseData);
      expect(response.data.type).toBe(CollectionTypes.Organization);
      expect(response.data.uuid).toBeTruthy();
      expectOrganization(response.data.properties);
      expectRelationships(response.data.relationships);

      function expectRelationships(
        relationships: OrganizationResponseRelationships
      ) {
        expect(relationships).toBeInstanceOf(OrganizationResponseRelationships);

        // Primary image
        const primaryImage = relationships.primary_image;
        expect(primaryImage).toBeInstanceOf(
          CollectionResponseImageRelationshipData
        );
        expect(primaryImage.cardinality).toBe(Cardinality.OneToOne);
        expectRelationshipPagingData(primaryImage.paging);
        expect(primaryImage.item).toBeInstanceOf(ImagePagingItem);
        expectPagingItem(primaryImage.item);
        expectImage(primaryImage.item.properties);

        // Founders
        const founders = relationships.founders;
        expect(founders).toBeInstanceOf(
          CollectionResponsePersonRelationshipsData
        );
        expect(founders.cardinality).toBe(Cardinality.OneToMany);
        expectRelationshipPagingData(founders.paging);
        const founder = founders.items.shift();
        if (founder) {
          expect(founder).toBeInstanceOf(PersonPagingItem);
          expectPagingItem(founder);
          expectPerson(founder.properties);
        }

        // Feature team
        const featuredTeams = relationships.featured_team;
        expect(featuredTeams).toBeInstanceOf(
          CollectionResponseJobRelationshipsData
        );
        expectRelationshipPagingData(featuredTeams.paging);
        const featuredTeam = featuredTeams.items.shift();
        if (featuredTeam) {
          expect(featuredTeam).toBeInstanceOf(JobPagingItem);
          expectPagingItem(featuredTeam);
          expectJob(featuredTeam.properties);
        }

        // Current team
        const currentTeams = relationships.featured_team;
        expect(currentTeams).toBeInstanceOf(
          CollectionResponseJobRelationshipsData
        );
        expectRelationshipPagingData(featuredTeams.paging);
        const currentTeam = currentTeams.items.shift();
        expect(currentTeam).toBeInstanceOf(JobPagingItem);
        expectPagingItem(currentTeam);
        expectJob(currentTeam.properties);

        // Past team
        const pastTeams = relationships.featured_team;
        expect(pastTeams).toBeInstanceOf(
          CollectionResponseJobRelationshipsData
        );
        expectRelationshipPagingData(featuredTeams.paging);
        const pastTeam = pastTeams.items.shift();
        if (pastTeam) {
          expect(pastTeam).toBeInstanceOf(JobPagingItem);
          expectPagingItem(pastTeam);
          expectJob(pastTeam.properties);
        }

        // Board members and advisors
        const boardMembersAndAdvisors =
          relationships.board_members_and_advisors;
        expect(boardMembersAndAdvisors).toBeInstanceOf(
          CollectionResponseJobRelationshipsData
        );
        expectRelationshipPagingData(featuredTeams.paging);
        const boardMembersAndAdvisor = boardMembersAndAdvisors.items.shift();
        if (boardMembersAndAdvisor) {
          expect(boardMembersAndAdvisor).toBeInstanceOf(JobPagingItem);
          expectPagingItem(boardMembersAndAdvisor);
          expectJob(boardMembersAndAdvisor.properties);
        }

        // Investors
        const investors = relationships.investors;
        expect(investors).toBeInstanceOf(
          CollectionResponseOrganizationOrPersonRelationshipsData
        );
        expectRelationshipPagingData(investors.paging);
        const investor = investors.items.shift();
        if (investor) {
          expectPagingItem(investor);
          // Not expecting anything more really, we'll use the utility methods more often

          const personInvestor = investors.getPeople().shift();
          if (personInvestor) {
            expectPagingItem(personInvestor);
            expectPerson(personInvestor.properties);
          }

          const organizationInvestor = investors.getOrganizations().shift();
          if (organizationInvestor) {
            expectPagingItem(organizationInvestor);
            expectOrganization(organizationInvestor.properties);
          }
        }

        // Owned by
        const ownedBy = relationships.owned_by;
        expect(ownedBy).toBeInstanceOf(
          CollectionResponseOrganizationRelationshipsData
        );
        expectRelationshipPagingData(ownedBy.paging);
        const owner = ownedBy.items.shift();
        if (owner) {
          expect(owner).toBeInstanceOf(OrganizationPagingItem);
          expectPagingItem(owner);
          expectOrganization(owner.properties);
        }

        // Sub organizations
        const subOrganizations = relationships.sub_organizations;
        expect(subOrganizations).toBeInstanceOf(
          CollectionResponseOrganizationRelationshipsData
        );
        expectRelationshipPagingData(subOrganizations.paging);
        const subOrganization = subOrganizations.items.shift();
        if (subOrganization) {
          expect(subOrganization).toBeInstanceOf(OrganizationPagingItem);
          expectPagingItem(subOrganization);
          expectOrganization(subOrganization.properties);
        }

        // Headquarters
        const headquarters = relationships.headquarters;
        expect(relationships.headquarters).toBeInstanceOf(
          CollectionResponseAddressRelationshipData
        );
        expect(headquarters.cardinality).toBe(Cardinality.OneToOne);
        expectRelationshipPagingData(headquarters.paging);
        expect(headquarters.item).toBeInstanceOf(AddressPagingItem);
        expectPagingItem(headquarters.item);
        expectAddress(headquarters.item.properties);

        // Offices
        const offices = relationships.offices;
        expect(offices).toBeInstanceOf(
          CollectionResponseAddressRelationshipsData
        );
        expectRelationshipPagingData(offices.paging);
        const office = offices.items.shift();
        if (office) {
          expect(office).toBeInstanceOf(AddressPagingItem);
          expectPagingItem(office);
          expectAddress(office.properties);
        }

        // Categories
        const categories = relationships.categories;
        expect(categories).toBeInstanceOf(
          CollectionResponseCategoryRelationshipsData
        );
        expectRelationshipPagingData(categories.paging);
        const category = categories.items.shift();
        if (category) {
          expect(category).toBeInstanceOf(CategoryPagingItem);
          expectPagingItem(category);
          expectCategory(category.properties);
        }

        // Funding rounds
        const fundingRounds = relationships.funding_rounds;
        expect(fundingRounds).toBeInstanceOf(
          CollectionResponseFundingRoundRelationshipsData
        );
        expectRelationshipPagingData(fundingRounds.paging);
        const fundingRound = fundingRounds.items.shift();
        if (fundingRound) {
          expect(fundingRound).toBeInstanceOf(FundingRoundPagingItem);
          expectPagingItem(fundingRound);
          expectFundingRound(fundingRound.properties);
        }

        // Investments
        const investments = relationships.investments;
        expect(investments).toBeInstanceOf(
          CollectionResponseInvestmentRelationshipsData
        );
        expectRelationshipPagingData(investments.paging);
        const investment = investments.items.shift();
        if (investment) {
          expect(investment).toBeInstanceOf(InvestmentPagingItem);
          expectPagingItem(investment);
          expectInvestment(investment.properties);
        }

        // Acquisitions
        const acquisitions = relationships.acquisitions;
        expect(acquisitions).toBeInstanceOf(
          CollectionResponseAcquisitionRelationshipsData
        );
        expectRelationshipPagingData(acquisitions.paging);
        const acquisition = acquisitions.items.shift();
        if (acquisition) {
          expect(acquisition).toBeInstanceOf(AcquisitionPagingItem);
          expectPagingItem(acquisition);
          expectAcquisition(acquisition.properties);
        }

        // Acquired by
        const acquiredBy = relationships.acquired_by;
        expect(acquiredBy).toBeInstanceOf(
          CollectionResponseAcquisitionRelationshipData
        );
        expectRelationshipPagingData(acquisitions.paging);
        expect(acquiredBy.cardinality).toBe(Cardinality.OneToOne);
        expectRelationshipPagingData(acquiredBy.paging);
        expect(acquiredBy.item).toBeInstanceOf(AcquisitionPagingItem);
        if (acquiredBy.paging.total_items > 0) {
          expectPagingItem(acquiredBy.item);
          expectAcquisition(acquiredBy.item.properties);
        }

        // IPO
        const ipo = relationships.ipo;
        expect(ipo).toBeInstanceOf(CollectionResponseIpoRelationshipData);
        expectRelationshipPagingData(ipo.paging);
        expect(ipo.cardinality).toBe(Cardinality.OneToOne);
        expectRelationshipPagingData(ipo.paging);
        expect(ipo.item).toBeInstanceOf(IpoPagingItem);
        if (ipo.paging.total_items > 0) {
          expectPagingItem(ipo.item);
          expectIpo(ipo.item.properties);
        }

        // Funds
        const funds = relationships.funds;
        expect(funds).toBeInstanceOf(CollectionResponseFundRelationshipsData);
        expectRelationshipPagingData(funds.paging);
        const fund = funds.items.shift();
        if (fund) {
          expect(fund).toBeInstanceOf(FundPagingItem);
          expectPagingItem(fund);
          expectFund(fund.properties);
        }

        // Websites
        const websites = relationships.websites;
        expect(websites).toBeInstanceOf(
          CollectionResponseWebsiteRelationshipsData
        );
        expectRelationshipPagingData(websites.paging);
        const website = websites.items.shift();
        if (website) {
          expect(website).toBeInstanceOf(WebsitePagingItem);
          expectPagingItem(website);
          expectWebsite(website.properties);
        }

        // Images
        const images = relationships.images;
        expect(images).toBeInstanceOf(CollectionResponseImageRelationshipsData);
        expectRelationshipPagingData(images.paging);
        const image = images.items.shift();
        if (image) {
          expect(image).toBeInstanceOf(ImagePagingItem);
          expectPagingItem(image);
          expectImage(image.properties);
        }

        // News
        const newsItems = relationships.news;
        expect(newsItems).toBeInstanceOf(
          CollectionResponseNewsRelationshipsData
        );
        expectRelationshipPagingData(newsItems.paging);
        const newsItem = newsItems.items.shift();
        if (newsItem) {
          expect(newsItem).toBeInstanceOf(NewsPagingItem);
          expectPagingItem(newsItem);
          expectNews(newsItem.properties);
        }
      }

      done();
    },
    TIMINGS.organizationsTimeout + TIMINGS.organizationTimeout
  );

  it("should return a people response", async done => {
    const response = await crunchbaseService.getPeople({
      name: "Buffet"
    });

    expect(response).toBeInstanceOf(PeopleSummaryResponse);
    expectMetaData(response.metadata);
    expect(response.data).toBeInstanceOf(PeopleSummaryPagedResponseData);
    expectPagingData(response.data.paging);
    expect(response.data.items.length).toBeGreaterThan(0);

    const item = response.data.items.shift();
    expect(item).toBeInstanceOf(PeopleSummaryPagingItem);
    expectPagingItem(item);
    const summary = item.properties;
    expect(summary).toBeInstanceOf(PersonSummary);
    expectApiCollectionProperties(summary);
    expect(summary.first_name).toBeTruthy();
    expect(summary.last_name).toBeTruthy();
    expect(summary.title).toBeTruthy();
    expect(summary.organization_name).toBeTruthy();
    expect(summary.organization_api_path).toBeTruthy();
    expect(summary.organization_permalink).toBeTruthy();
    expect(summary.organization_web_path).toBeTruthy();
    done();
  });

  it("should return an person response", async done => {
    const summaryResponse = await crunchbaseService.getPeople({
      name: "Buffet"
    });

    const response = await crunchbaseService.getPerson(
      summaryResponse.data.items[0].properties.permalink
    );

    // Going to apologize to you right now. Sorry about how big this is.
    // Breaking it into sub functions to at least keep it more manageable.
    expect(response).toBeInstanceOf(PersonResponse);
    expectMetaData(response.metadata);
    expect(response.data).toBeInstanceOf(PersonResponseData);
    expect(response.data.type).toBe(CollectionTypes.Person);
    expect(response.data.uuid).toBeTruthy();
    expectPerson(response.data.properties);
    expectRelationships(response.data.relationships);

    function expectRelationships(relationships: PersonResponseRelationships) {
      // Primary affiliation
      const primaryAffiliation = relationships.primary_affiliation;
      expect(primaryAffiliation).toBeInstanceOf(
        CollectionResponseJobRelationshipData
      );
      expect(primaryAffiliation.cardinality).toBe(Cardinality.OneToOne);
      expectRelationshipPagingData(primaryAffiliation.paging);
      expect(primaryAffiliation.item).toBeInstanceOf(JobPagingItem);
      expectPagingItem(primaryAffiliation.item);
      expectJob(primaryAffiliation.item.properties);

      // Primary location
      const primaryLocations = relationships.primary_location;
      expect(primaryLocations).toBeInstanceOf(
        CollectionResponseLocationRelationshipsData
      );
      expect(primaryLocations.cardinality).toBe(Cardinality.ManyToOne);
      expectRelationshipPagingData(primaryLocations.paging);
      const primaryLocation = primaryLocations.items.shift();
      if (primaryLocation) {
        expect(primaryLocation).toBeInstanceOf(LocationPagingItem);
        expectPagingItem(primaryLocation);
        expectLocation(primaryLocation.properties);
      }

      // Primary image
      const primaryImage = relationships.primary_image;
      expect(primaryImage).toBeInstanceOf(
        CollectionResponseImageRelationshipData
      );
      expect(primaryImage.cardinality).toBe(Cardinality.OneToOne);
      expectRelationshipPagingData(primaryImage.paging);
      expect(primaryImage.item).toBeInstanceOf(ImagePagingItem);
      expectPagingItem(primaryImage.item);
      expectImage(primaryImage.item.properties);

      // Websites
      const websites = relationships.websites;
      expect(websites).toBeInstanceOf(
        CollectionResponseWebsiteRelationshipsData
      );
      expectRelationshipPagingData(websites.paging);
      const website = websites.items.shift();
      if (website) {
        expect(website).toBeInstanceOf(WebsitePagingItem);
        expectPagingItem(website);
        expectWebsite(website.properties);
      }

      // Degrees
      const degrees = relationships.degrees;
      expect(degrees).toBeInstanceOf(CollectionResponseDegreeRelationshipsData);
      expectRelationshipPagingData(websites.paging);
      const degree = degrees.items.shift();
      if (degree) {
        expect(degree).toBeInstanceOf(DegreePagingItem);
        expectPagingItem(degree);
        expectDegree(degree.properties);
      }

      // Jobs
      const jobs = relationships.jobs;
      expect(jobs).toBeInstanceOf(CollectionResponseJobRelationshipsData);
      expectRelationshipPagingData(jobs.paging);
      const job = jobs.items.shift();
      if (job) {
        expect(job).toBeInstanceOf(JobPagingItem);
        expectPagingItem(job);
        expectJob(job.properties);
      }

      // advisory_roles
      const advisoryRoles = relationships.advisory_roles;
      expect(advisoryRoles).toBeInstanceOf(
        CollectionResponseJobRelationshipsData
      );
      expect(advisoryRoles).toBeInstanceOf(
        CollectionResponseJobRelationshipsData
      );
      expectRelationshipPagingData(advisoryRoles.paging);
      const advisoryRole = advisoryRoles.items.shift();
      if (advisoryRole) {
        expect(advisoryRole).toBeInstanceOf(JobPagingItem);
        expectPagingItem(advisoryRole);
        expectJob(advisoryRole.properties);
      }

      // founded_companies
      const foundedCompanies = relationships.founded_companies;
      expect(foundedCompanies).toBeInstanceOf(
        CollectionResponseOrganizationRelationshipsData
      );
      expectRelationshipPagingData(foundedCompanies.paging);
      const foundedCompany = foundedCompanies.items.shift();
      if (foundedCompany) {
        expect(foundedCompany).toBeInstanceOf(OrganizationPagingItem);
        expectPagingItem(foundedCompany);
        expectOrganization(foundedCompany.properties);
      }

      // Investments
      const investments = relationships.investments;
      expect(investments).toBeInstanceOf(
        CollectionResponseInvestmentRelationshipsData
      );
      expectRelationshipPagingData(investments.paging);
      const investment = investments.items.shift();
      if (investment) {
        expect(investment).toBeInstanceOf(InvestmentPagingItem);
        expectPagingItem(investment);
        expectInvestment(investment.properties);
      }

      // Images
      const images = relationships.images;
      expect(images).toBeInstanceOf(CollectionResponseImageRelationshipsData);
      expectRelationshipPagingData(images.paging);
      const image = images.items.shift();
      if (image) {
        expect(image).toBeInstanceOf(ImagePagingItem);
        expectPagingItem(image);
        expectImage(image.properties);
      }

      // News
      const newsItems = relationships.news;
      expect(newsItems).toBeInstanceOf(CollectionResponseNewsRelationshipsData);
      expectRelationshipPagingData(newsItems.paging);
      const newsItem = newsItems.items.shift();
      if (newsItem) {
        expect(newsItem).toBeInstanceOf(NewsPagingItem);
        expectPagingItem(newsItem);
        expectNews(newsItem.properties);
      }
    }
    done();
  });
});
