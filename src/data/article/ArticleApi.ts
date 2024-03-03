import ArticleResult from '@/domain/entity/article/structures/ArticleResult';
import ArticleRepository, {
  GetArticleParams,
} from '@/domain/repository/article/ArticleRepository';
import { BaseApi } from '../base';
import { ArticleEndpoint } from '../constants';

export default class ArticleApi extends BaseApi implements ArticleRepository {
  async getArticle(params: GetArticleParams): Promise<ArticleResult> {
    const response: ArticleResult = await this.get(
      ArticleEndpoint.everything,
      params
    );

    return response;
  }
}
