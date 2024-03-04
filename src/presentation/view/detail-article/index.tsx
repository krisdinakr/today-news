import { FC, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Space, Typography, Image, Empty, Flex } from 'antd';

import {
  Article,
  ArticleResult,
} from '@/domain/entity/article/structures/ArticleResult';
import ArticleUseCase from '@/domain/interactors/article/ArticleUseCase';
import ArticleApi from '@/data/article/ArticleApi';
import { formatDate } from '@/presentation/utils/utils';
import SkeletonDetailView from '@/presentation/components/skeleton/SkeletonDetailView';

const { Title, Text, Paragraph } = Typography;

const DetailArticle: FC = () => {
  const { query, source, author } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<ArticleResult | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      const articleRepository = new ArticleApi();
      const articleUseCase = new ArticleUseCase(articleRepository);

      const payload = {
        q: String(query),
        source: String(source),
        pageSize: 10,
        page: 1,
        sortBy: 'publishedDate',
      };

      const articles = await articleUseCase.getArticles(payload);

      setIsLoading(false);
      setArticles(articles);
    };

    if (query && source) fetchArticle();
  }, [query, source]);

  const article: Article | null = useMemo(() => {
    if (articles && articles.articles.length > 1 && author) {
      const targetedArticle = articles.articles.find(
        (i) => i.author === author
      );
      return targetedArticle || null;
    } else if (articles && articles.articles[0]) {
      return articles.articles[0];
    }
    return null;
  }, [articles, author]);

  return (
    <section>
      {!isLoading && article && (
        <Space size={32} direction="vertical">
          <Space size="small" direction="vertical" style={{ width: '100%' }}>
            <Title>{article.title}</Title>
            <Title level={3} style={{ margin: 0 }} ellipsis>
              {article.author || '-'} &middot; {article.source.name}
            </Title>
            <Text style={{ color: '#595959', fontSize: 16 }}>
              {formatDate(article.publishedAt)}
            </Text>
          </Space>

          <Image
            src={article.urlToImage}
            alt={article.title}
            preview={false}
            style={{ objectFit: 'cover' }}
            fallback="/fallback-img.webp"
            width={'100%'}
          />

          <Space size="small" direction="vertical">
            <Paragraph style={{ marginBottom: 0, fontSize: 20 }}>
              {article.content}
            </Paragraph>
            <Link to={article.url} target="_blank" rel="noopener noreferrer">
              <Text underline style={{ fontSize: 16 }}>
                Read more
              </Text>
            </Link>
          </Space>
        </Space>
      )}

      {!isLoading && !article && (
        <Flex
          align="center"
          justify="center"
          style={{
            width: '100%',
            background: 'white',
            borderRadius: 6,
            padding: 32,
          }}
        >
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            description={<span>Sorry, detail article not found.</span>}
          />
        </Flex>
      )}

      {isLoading && <SkeletonDetailView />}
    </section>
  );
};

export default DetailArticle;
