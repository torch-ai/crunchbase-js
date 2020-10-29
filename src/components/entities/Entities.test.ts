import { expectIdentifier, getService } from "../../../tests/utils";
import Entities from "./Entities";
import { IAutocompleteResult } from "../autocomplete/Autocomplete.types";
import { EntityDefId } from "../components.types";

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
        expectIdentifier(organization.properties, EntityDefId.Organization);
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

    it("should get a organization card", async (done) => {
      await withOrganizationsContext(async ({ entity }) => {
        const organization = await service.entities.organizationCard({
          entity_id: entity.identifier.uuid,
          card_id: "investors",
        });
        expectIdentifier(organization.properties, EntityDefId.Organization);
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

  describe("people", () => {
    let entities: IAutocompleteResult["entities"] = undefined;
    type TWithOrganizationsContext = (context: {
      entities: IAutocompleteResult["entities"];
      entity: IAutocompleteResult["entities"][0];
    }) => Promise<void>;
    const firstName = "Warren";
    const lastName = "Buffett";
    const withPersonsContext = async (fn: TWithOrganizationsContext) => {
      if (!entities) {
        const result = await service.autocomplete.search(
          `${firstName} ${lastName}`,
          ["people"],
          1
        );
        entities = result.entities;
      }

      const entity = entities.slice().shift();
      await fn({ entities, entity });
    };

    it("should get a person", async (done) => {
      await withPersonsContext(async ({ entity }) => {
        const person = await service.entities.person({
          entity_id: entity.identifier.uuid,
          field_ids: ["identifier", "first_name", "last_name", "uuid"],
          card_ids: ["event_appearances", "jobs"],
        });
        expectIdentifier(person.properties, EntityDefId.Person);
        expect(person.properties.identifier.uuid).toBe(entity.identifier.uuid);
        expect(person.properties.identifier.permalink).toBeTruthy();
        expect(person.properties.identifier.value).toBeTruthy();
        expect(person.properties.first_name).toBe(firstName);
        expect(person.properties.last_name).toBe(lastName);
        expect(person.properties.uuid).toBeTruthy();
        expect(person.cards.event_appearances).toBeTruthy();
        expect(person.cards.jobs).toBeTruthy();

        done();
      });
    });

    it("should get a person card", async (done) => {
      await withPersonsContext(async ({ entity }) => {
        const organization = await service.entities.personCard({
          entity_id: entity.identifier.uuid,
          card_id: "jobs",
        });
        expectIdentifier(organization.properties, EntityDefId.Person);
        expect(organization.properties.identifier.uuid).toBe(
          entity.identifier.uuid
        );
        expect(organization.properties.identifier.permalink).toBeTruthy();
        expect(organization.properties.identifier.value).toBeTruthy();
        expect(organization.cards.jobs).toBeTruthy();

        done();
      });
    });
  });
});
