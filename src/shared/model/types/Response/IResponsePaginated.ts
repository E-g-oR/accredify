import { IResponse } from "./IResponse";
import { IResponseLinks } from "./IResponseLinks";
import { IResponseMeta } from "./IResponseMeta";

export interface IResponsePaginated<T = unknown>
  extends IResponse<ReadonlyArray<T>> {
  links: IResponseLinks;
  meta: IResponseMeta;
}
