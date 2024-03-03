import { FC, useEffect, useState } from 'react';
import { Flex, Typography, Input } from 'antd';

import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleUseCase from '@/domain/interactors/article/ArticleUseCase';
import ArticleApi from '@/data/article/ArticleApi';
import HeadlineSection from '@/presentation/components/HeadlineSection';
import SkeletonHeadlineSection from '@/presentation/components/skeleton/SkeletonHeadlineSection';

const { Title, Paragraph } = Typography;

const Home: FC = () => {
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

  return (
    <section>
      <Flex style={{ width: '100%' }} vertical justify="center" align="center">
        <Title>Discover & Search Worldwide News</Title>
        <Paragraph style={{ fontSize: 18, color: '#595959' }}>
          Global Insights at Your Fingertips: Navigate and Discover News
        </Paragraph>

        <Flex style={{ maxWidth: 600, width: '100%', marginTop: 24 }}>
          <Input size="large" placeholder="Search news" />
        </Flex>
      </Flex>

      <section style={{ marginTop: 36, marginBottom: 36 }}>
        {isLoading ? (
          <SkeletonHeadlineSection />
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
