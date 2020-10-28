import AbstractComponent from "../AbstractComponent";
import { IAutocompleteParams, IAutocompleteResult } from "./Autocomplete.types";
import { ISearchParams } from "../search/Search.types";

export default class Autocomplete extends AbstractComponent {
  private static URI = "autocompletes";

  /**
   * Suggests matching Identifier entities based on the query and entity_def_ids provided.
   * @param query Value to perform the autocomplete search with.
   * @param collection_ids A comma separated list of collection ids to search against. Leaving this blank means it will search across all identifiers. Entity defs can be constrained to specific facets by providing them as facet collections. Relationship collections will resolve to their underlying entity def. Collection ids are: organizations, people, funding_rounds, acquisitions, investments, events, press_references, funds, event_appearances, ipos, ownerships, categories, category_groups, locations, jobs
   * @param limit Number of results to retrieve; default = 10, max = 25
   */
  public async search(
    query: IAutocompleteParams["query"],
    collection_ids?: IAutocompleteParams["collection_ids"],
    limit?: IAutocompleteParams["limit"]
  ): Promise<IAutocompleteResult> {
    const params: IAutocompleteParams = { query };
    if (collection_ids) {
      params.collection_ids = collection_ids;
    }
    if (limit) {
      params.limit = limit;
    }

    return this.client
      .get<IAutocompleteResult>(Autocomplete.URI, {
        params,
      })
      .then((response) => response.data);
  }
}
