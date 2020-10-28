import {
  CurrencyCode,
  InterfaceKeys,
  Operator,
  Order,
  uuid,
} from "../components.types";

export type IEntitySearchReturn<T> = Promise<IEntityResult<T>>;

export interface IEntitySearch<T> {
  field_ids: (InterfaceKeys<T> | string)[];
  order?: IOrder<T>[];
  /** each search filter within "query" are AND'ed together; if you would like to use OR, please use multiple search calls */
  query: IPredicate<T>[];
  /** Number of rows to return. Default is 100, min is 1, max is 2000. */
  limit?: number;
  /** Used to paginate search results to the next page. after_id should be the uuid of the last item in the current page. May not be provided simultaneously with before_id. */
  after_id?: string;
  /** Used to paginate search results to the previous page. before_id should be the uuid of the first item in the current page. May not be provided simultaneously with after_id. */
  before_id?: string;
}

interface IOrder<T> {
  field_id: InterfaceKeys<T> | string;
  sort: Order;
  nulls?: "first" | "last";
}

interface IPredicate<T> {
  type: "predicate";
  field_id: InterfaceKeys<T> | string;
  operator_id: Operator;
  values?: (boolean | string | ISearchParamsQueryCurrencyValue)[];
}

interface ISearchParamsQueryCurrencyValue {
  currency: CurrencyCode;
  value: number;
}

interface IEntityResult<T> {
  count: number;
  entities: {
    uuid: uuid;
    properties: Partial<T>;
  }[];
}
