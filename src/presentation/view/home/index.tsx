import { FC, useEffect, useState, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Typography, Input, Skeleton } from 'antd';

import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleUseCase from '@/domain/interactors/article/ArticleUseCase';
import ArticleApi from '@/data/article/ArticleApi';
import HeadlineSection from '@/presentation/components/HeadlineSection';
import SkeletonArticleList from '@/presentation/components/skeleton/SkeletonArticleList';

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [headlineArticle, setHeadlineArticle] = useState<ArticleResult | null>(
    null
  );

  useEffect(() => {
    const fetchHeadline = async () => {
      setIsLoading(true);
      const articleRepository = new ArticleApi();
      const articleUseCase = new ArticleUseCase(articleRepository);

      const payload = {
        pageSize: 6,
        page,
        country: 'us',
      };

      const articles = await articleUseCase.getHeadlineArticles(payload);
      setIsLoading(false);
      setHeadlineArticle(articles);
    };

    fetchHeadline();
  }, [page]);

  const onChangePage = (page: number) => setPage(page);

  const navigateToSearch = (event: KeyboardEvent) => {
    navigate({
      pathname: '/search',
      search: `query=${(event.target as HTMLInputElement)?.value}`,
    });
  };

  return (
    <section>
      <Flex style={{ width: '100%' }} vertical justify="center" align="center">
        <Title>Discover & Search Worldwide News</Title>
        <Paragraph style={{ fontSize: 18, color: '#595959' }}>
          Global Insights at Your Fingertips: Navigate and Discover News
        </Paragraph>

        <Flex style={{ maxWidth: 600, width: '100%', marginTop: 24 }}>
          <Input
            size="large"
            placeholder="Search news"
            onPressEnter={(e) => navigateToSearch(e)}
          />
        </Flex>
      </Flex>

      <section style={{ marginTop: 36 }}>
        {isLoading ? (
          <div>
            <Skeleton.Input active size="large" style={{ height: 38 }} />
            <SkeletonArticleList />
          </div>
        ) : (
          <HeadlineSection
            article={headlineArticle}
            activePage={page}
            onChangePage={onChangePage}
          />
        )}
      </section>
    </section>
  );
};

export default Home;
