/**
 * An instance of the service
 */
import Service from "../src";
import { EntityDefId, IIdentifier } from "../src/components/components.types";

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

export const expectIdentifier = (
  object: Partial<IIdentifier>, // After all, a search may not request it back
  definition?: EntityDefId
) => {
  if (!object) {
    return;
  }
  expect(object.identifier).toBeTruthy();
  expect(object.identifier.uuid).toBeTruthy();
  expect(object.identifier.entity_def_id).toBeTruthy();
  if (definition) {
    expect(object.identifier.entity_def_id).toBe(definition);
  }
};
