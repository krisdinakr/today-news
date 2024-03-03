import ArticleResult from '@/domain/entity/article/structures/ArticleResult';
import ArticleRepository, {
  GetArticleParams,
} from '@/domain/repository/article/ArticleRepository';

export default class ArticleUseCase {
  private articleRepository: ArticleRepository;

  public constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  public async get(params: GetArticleParams): Promise<ArticleResult> {
    const articleResult = await this.articleRepository.getArticle(params);

    return articleResult;
  }
}
