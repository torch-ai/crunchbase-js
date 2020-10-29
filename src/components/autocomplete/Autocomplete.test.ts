import { getService } from "../../../tests/utils";
import Autocomplete from "./Autocomplete";

const service = getService();

describe("service.autocomplete", () => {
  it("should be an instance of Autocomplete", () => {
    expect(service.autocomplete).toBeInstanceOf(Autocomplete);
  });

  it("should return", async (done) => {
    const { entities } = await service.autocomplete.search("Microsoft", [
      "organizations",
    ]);
    expect(Array.isArray(entities)).toBeTruthy();
    entities.forEach((entity) => {
      expect(entity.short_description).toBeTruthy();
      expect(Array.isArray(entity.facet_ids)).toBeTruthy();
      expect(entity.identifier.permalink).toBeTruthy();
      expect(entity.identifier.value).toBeTruthy();
    });

    done();
  });
});
