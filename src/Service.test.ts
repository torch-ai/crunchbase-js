import Service from "./Service";
import { getService } from "../tests/utils";

/**
 * The tests
 */
describe("service", () => {
  const service = getService();

  it("should be an instance of service", () => {
    expect(service).toBeInstanceOf(Service);
  });
});
