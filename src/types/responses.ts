import { Project } from "./projectTypes";

export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ProjectsResponse = Project[];

export type ApiResponse<T> = Promise<{
  data: T;
  meta: Record<string, PaginationMeta | {}>;
}>;
