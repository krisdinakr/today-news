import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleRepository, {
  GetArticleParams,
  GetHeadlineArticleParams,
} from '@/domain/repository/article/ArticleRepository';
import { BaseApi } from '../base';
import { ArticleEndpoint } from '../constants';

export default class ArticleApi extends BaseApi implements ArticleRepository {
  constructor() {
    super();
  }

  async getArticle(params: GetArticleParams): Promise<ArticleResult> {
    const response: ArticleResult = await this.get(
      ArticleEndpoint.everything,
      params
    );

    return response;
  }

  async getHeadlineArticle(
    params: GetHeadlineArticleParams
  ): Promise<ArticleResult> {
    const response: ArticleResult = await this.get(
      ArticleEndpoint.headlines,
      params
    );

    return response;
  }
}
