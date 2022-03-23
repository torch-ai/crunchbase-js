import { getService } from "../../../tests/utils";
import Autocomplete from "./Autocomplete";
import { IAutocompleteEntity } from "./Autocomplete.types";

const service = getService();

describe("service.autocomplete", () => {
  it("should be an instance of Autocomplete", () => {
    expect(service.autocomplete).toBeInstanceOf(Autocomplete);
  });

  it("should return", async () => {
    const { entities } = await service.autocomplete.search("Microsoft", [
      "organizations",
    ]);

    expect(Array.isArray(entities)).toBeTruthy();
    entities.forEach(expectAutocompleteEntity);
  });

  it("should filter by collection sub ids", async () => {
    // const collectionId: AutocompleteCollectionId = "organization.companies";
    const name = "Howard";
    const { entities: schools } = await service.autocomplete.search(name, [
      "organization.schools",
    ]);
    const { entities: investors } = await service.autocomplete.search(name, [
      "organization.investors",
    ]);

    expect(Array.isArray(schools)).toBeTruthy();
    schools.forEach((school) => {
      expectAutocompleteEntity(school);
      expect(school.facet_ids.includes("school")).toBeTruthy();
    });
    expect(Array.isArray(investors)).toBeTruthy();
    investors.forEach((investors) => {
      expectAutocompleteEntity(investors);
      expect(investors.facet_ids.includes("investor")).toBeTruthy();
      expect(investors.facet_ids.includes("school")).toBeFalsy();
    });
  });
});

const expectAutocompleteEntity = (entity: IAutocompleteEntity): void => {
  expect(entity.short_description).toBeTruthy();
  expect(Array.isArray(entity.facet_ids)).toBeTruthy();
  expect(entity.identifier.permalink).toBeTruthy();
  expect(entity.identifier.value).toBeTruthy();
};
