import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleRepository, {
  GetArticleParams,
  GetHeadlineArticleParams,
} from '@/domain/repository/article/ArticleRepository';

export default class ArticleUseCase {
  private articleRepository: ArticleRepository;

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  public async getArticles(params: GetArticleParams): Promise<ArticleResult> {
    const articles = await this.articleRepository.getArticle(params);

    return articles;
  }

  public async getHeadlineArticles(
    params: GetHeadlineArticleParams
  ): Promise<ArticleResult> {
    const articles = await this.articleRepository.getHeadlineArticle(params);

    return articles;
  }
}
