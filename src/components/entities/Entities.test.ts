import { expectIdentifier, getService } from "../../../tests/utils";
import Entities from "./Entities";
import { IAutocompleteResult } from "../autocomplete/Autocomplete.types";

const service = getService();

describe("service.entities", () => {
  it("should be an instance of Search", () => {
    expect(service.entities).toBeInstanceOf(Entities);
  });

  describe("organizations", () => {
    let entities: IAutocompleteResult["entities"] = undefined;
    type TWithOrganizationsContext = (context: {
      entities: IAutocompleteResult["entities"];
      entity: IAutocompleteResult["entities"][0];
    }) => Promise<void>;
    const organizationName = "Microsoft";
    const withOrganizationsContext = async (fn: TWithOrganizationsContext) => {
      if (!entities) {
        const result = await service.autocomplete.search(
          organizationName,
          ["organizations"],
          1
        );
        entities = result.entities;
      }

      const entity = entities.slice().shift();
      await fn({ entities, entity });
    };

    it("should get an organization", async (done) => {
      await withOrganizationsContext(async ({ entity }) => {
        const organization = await service.entities.organization({
          entity_id: entity.identifier.uuid,
          field_ids: ["identifier", "name", "uuid"],
          card_ids: ["investors", "event_appearances", "founders"],
        });
        expectIdentifier(organization.properties);
        expect(organization.properties.identifier.uuid).toBe(
          entity.identifier.uuid
        );
        expect(organization.properties.identifier.permalink).toBeTruthy();
        expect(organization.properties.identifier.value).toBeTruthy();
        expect(organization.properties.name).toContain(organizationName);
        expect(organization.properties.uuid).toBeTruthy();
        expect(organization.cards.investors).toBeTruthy();
        expect(organization.cards.event_appearances).toBeTruthy();
        expect(organization.cards.founders).toBeTruthy();

        done();
      });
    });

    it("should get a organization cards", async (done) => {
      await withOrganizationsContext(async ({ entity }) => {
        const organization = await service.entities.organizationCard({
          entity_id: entity.identifier.uuid,
          card_id: "investors",
        });
        expectIdentifier(organization.properties);
        expect(organization.properties.identifier.uuid).toBe(
          entity.identifier.uuid
        );
        expect(organization.properties.identifier.permalink).toBeTruthy();
        expect(organization.properties.identifier.value).toBeTruthy();
        expect(organization.cards.investors).toBeTruthy();

        done();
      });
    });
  });

  it.skip("should get a person", async (done) => {
    // expect(uuid).toBeTruthy();
    // expect(properties.identifier.uuid).toBe(uuid);
    // expect(properties.identifier.permalink).toBeTruthy();
    // expect(properties.identifier.value).toBeTruthy();
    // expect(properties.short_description).toBeTruthy();

    done();
  });
});
