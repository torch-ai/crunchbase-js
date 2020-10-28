/**
 * An instance of the service
 */
import Service from "../src";

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
