export interface IResponseMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: ReadonlyArray<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
  path: string;
  per_page: number;
  to: number;
  total: number;
}
