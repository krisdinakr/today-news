import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Typography } from 'antd';

import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleUseCase from '@/domain/interactors/article/ArticleUseCase';
import ArticleApi from '@/data/article/ArticleApi';
import ArticleList from '@/presentation/components/ArticleList';
import SkeletonArticleList from '@/presentation/components/skeleton/SkeletonArticleList';

const { Title } = Typography;

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [articles, setArticles] = useState<ArticleResult | null>(null);

  useEffect(() => {
    const fetchSearch = async () => {
      setIsLoading(true);
      const articleRepository = new ArticleApi();
      const articleUseCase = new ArticleUseCase(articleRepository);

      const payload = {
        q: String(query),
        sortBy: 'relevancy',
        pageSize,
        page,
      };

      const articles = await articleUseCase.getArticles(payload);
      setIsLoading(false);
      setArticles(articles);
    };

    if (query) fetchSearch();
  }, [page, query, pageSize]);

  const onChangePage = (page: number) => setPage(page);

  const onChangePageSize = (_: number, size: number) => setPageSize(size);

  return (
    <section style={{ minHeight: '50vh' }}>
      <Title level={2} style={{ letterSpacing: 0.8 }}>
        Search Result: {query}
      </Title>

      {isLoading ? (
        <SkeletonArticleList />
      ) : (
        <ArticleList
          article={articles}
          activePage={page}
          pageSize={pageSize}
          onChangePage={onChangePage}
          onChangePageSize={onChangePageSize}
        />
      )}
    </section>
  );
};

export default Search;
