import { Project } from "./projectTypes";

export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type ProjectsResponse = {
  data: Project[];
  meta: {
    pagination: PaginationMeta;
  };
};

export type ApiResponse<T> = Promise<{
  data: T;
  meta: Record<string, PaginationMeta | {}>;
}>;
