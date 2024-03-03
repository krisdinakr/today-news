import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';

export interface GetArticleParams {
  q: string;
  source: string;
  from: string;
  to: string;
  sortBy: string;
  pageSize: number;
  page: number;
}

export interface GetHeadlineArticleParams {
  country: string;
  pageSize: number;
  page: number;
}

export default interface ArticleRepository {
  getArticle: (params: GetArticleParams) => Promise<ArticleResult>;
  getHeadlineArticle: (
    params: GetHeadlineArticleParams
  ) => Promise<ArticleResult>;
}
