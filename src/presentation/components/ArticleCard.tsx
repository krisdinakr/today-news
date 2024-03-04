import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Space, Typography, Image } from 'antd';

import { Article } from '@/domain/entity/article/structures/ArticleResult';
import { formatDate } from '../utils/utils';

interface Props {
  article: Article;
}

const { Text, Title } = Typography;

const CoverCard: FC<{ img: string; title: string }> = ({
  img,
  title,
}: {
  img: string;
  title: string;
}) => {
  return (
    <Image
      src={img}
      alt={title}
      preview={false}
      height={250}
      style={{ objectFit: 'cover' }}
      fallback="/fallback-img.webp"
    />
  );
};

const ArticleCard: FC<Props> = ({ article }: Props) => {
  return (
    <Link
      to={`/article/${encodeURI(article.title)}/${encodeURI(
        article.source.id || article.source.name
      )}/${encodeURI(article.author)}`}
    >
      <Card
        cover={<CoverCard img={article.urlToImage} title={article.title} />}
        styles={{ body: { padding: 16, height: 180 } }}
        hoverable
      >
        <Space direction="vertical" size={4} style={{ width: '100%' }}>
          <Title level={5} style={{ margin: 0 }} ellipsis>
            {article.author || '-'} &middot;
            <span style={{ color: '#595959', fontSize: 14 }}>
              {' '}
              {article.source.name}
            </span>
          </Title>
          <Title level={4} className="article__title">
            {article.title}
          </Title>
          <Text style={{ fontSize: 12, color: '#595959' }}>
            {formatDate(article.publishedAt)}
          </Text>
        </Space>
      </Card>
    </Link>
  );
};

export default ArticleCard;
