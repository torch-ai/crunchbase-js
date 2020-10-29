import { IOrganization } from "./Organization.types";
import { IPerson } from "./Person.types";
import {
  EntityDefId,
  FacetId,
  InvestorType,
  LayoutId,
} from "../../components.types";

// This is a little terrifying, but huge time savings.
// Hopefully I have understood this correctly.
export interface IPrincipal
  extends Omit<
      IOrganization,
      | "entity_def_id"
      | "facet_ids"
      | "investor_type"
      | "layout_id"
      | "override_layout_id"
    >,
    Omit<
      IPerson,
      | "entity_def_id"
      | "facet_ids"
      | "investor_type"
      | "layout_id"
      | "override_layout_id"
    > {
  entity_def_id?: EntityDefId.Organization | EntityDefId.Person;
  facet_ids?: (FacetId.Company | FacetId.Investor | FacetId.School)[];
  investor_type?: InvestorType;
  layout_id?: LayoutId;
  override_layout_id?: LayoutId;
}
