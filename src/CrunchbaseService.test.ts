import dotenv from "dotenv";
import CrunchbaseService from "./CrunchbaseService";
import {
  Organization,
  OrganizationResponsePagingItem,
  OrganizationsPagedResponseData,
  OrganizationsResponse,
  ResponseMetaData,
  ResponsePagingData
} from "./CrunchbaseServiceTypes";

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

const expectPagingItem = (item: Record<string, any>) => {
  expect(item.type).toBeTruthy();
  expect(item.uuid).toBeTruthy();
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

  it("should return a companies response", async done => {
    const response = await crunchbaseService.getOrganizations({
      name: "Tesla"
    });

    expect(response).toBeInstanceOf(OrganizationsResponse);
    expectMetaData(response.metadata);
    expect(response.data).toBeInstanceOf(OrganizationsPagedResponseData);
    expectPagingData(response.data.paging);
    expect(response.data.items.length).toBeGreaterThan(0);

    const item = response.data.items.shift();
    expect(item).toBeInstanceOf(OrganizationResponsePagingItem);
    expectPagingItem(item);
    const organization = item.properties;
    expect(organization).toBeInstanceOf(Organization);
    expect(organization.name).toBeTruthy();
    done();
  });
});
