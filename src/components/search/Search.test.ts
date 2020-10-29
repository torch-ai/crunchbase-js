import { expectIdentifier, getService } from "../../../tests/utils";
import Search from "./Search";
import { CurrencyCode } from "../components.types";

const service = getService();

describe("service.search", () => {
  it("should be an instance of Search", () => {
    expect(service.search).toBeInstanceOf(Search);
  });

  // Based on https://app.swaggerhub.com/apis-docs/Crunchbase/crunchbase-enterprise_api/1.0.3#/Search/post_searches_organizations
  it("should search organizations", async (done) => {
    const limit = 4;
    const results = await service.search.organizations({
      field_ids: ["identifier", "short_description"],
      order: [
        {
          field_id: "rank_org",
          sort: "asc",
        },
      ],
      query: [
        {
          type: "predicate",
          field_id: "funding_total",
          operator_id: "between",
          values: [
            {
              value: 25000000,
              currency: CurrencyCode.USD,
            },
            {
              value: 100000000,
              currency: CurrencyCode.USD,
            },
          ],
        },
        {
          type: "predicate",
          field_id: "location_identifiers",
          operator_id: "includes",
          values: ["6106f5dc-823e-5da8-40d7-51612c0b2c4e"],
        },
        {
          type: "predicate",
          field_id: "facet_ids",
          operator_id: "includes",
          values: ["company"],
        },
      ],
      limit,
    });

    expect(results.count).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(results.entities)).toBeTruthy();
    expect(results.entities.length).toBe(limit);
    results.entities.forEach(({ uuid, properties }) => {
      expect(uuid).toBeTruthy();
      expect(properties.identifier.uuid).toBe(uuid);
      expect(properties.identifier.permalink).toBeTruthy();
      expect(properties.identifier.value).toBeTruthy();
      expect(properties.short_description).toBeTruthy();
    });

    done();
  });

  it("should search people", async (done) => {
    const limit = 4;
    const results = await service.search.people({
      field_ids: ["name", "identifier", "short_description"],
      order: [
        {
          field_id: "rank_person",
          sort: "asc",
        },
      ],
      query: [
        {
          type: "predicate",
          field_id: "num_exits",
          operator_id: "between",
          values: [1, 3],
        },
        {
          type: "predicate",
          field_id: "location_identifiers",
          operator_id: "includes",
          values: ["6106f5dc-823e-5da8-40d7-51612c0b2c4e"],
        },
      ],
      limit,
    });

    expect(results.count).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(results.entities)).toBeTruthy();
    expect(results.entities.length).toBe(limit);
    results.entities.forEach(({ uuid, properties }) => {
      expect(uuid).toBeTruthy();
      expectIdentifier(properties);
      expect(properties.identifier.uuid).toBe(uuid);
      expect(properties.identifier.permalink).toBeTruthy();
      expect(properties.identifier.value).toBeTruthy();
      expect(properties.short_description).toBeTruthy();
      expect(properties.name).toBeTruthy();
    });

    done();
  });

  it("should search principals", async (done) => {
    const limit = 4;
    const results = await service.search.people({
      field_ids: ["name", "identifier", "short_description"],
      order: [
        {
          field_id: "rank_principal",
          sort: "asc",
        },
      ],
      query: [
        {
          type: "predicate",
          field_id: "num_exits",
          operator_id: "between",
          values: [1, 3],
        },
      ],
      limit,
    });

    expect(results.count).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(results.entities)).toBeTruthy();
    expect(results.entities.length).toBe(limit);
    results.entities.forEach(({ uuid, properties }) => {
      expect(uuid).toBeTruthy();
      expectIdentifier(properties);
      expect(properties.identifier.uuid).toBe(uuid);
      expect(properties.identifier.permalink).toBeTruthy();
      expect(properties.identifier.value).toBeTruthy();
      expect(properties.short_description).toBeTruthy();
      expect(properties.name).toBeTruthy();
    });

    done();
  });
});
