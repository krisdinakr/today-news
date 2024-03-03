import { FC } from 'react';
import { Typography, Row, Col, Empty, Flex, Pagination } from 'antd';

import ArticleCard from './ArticleCard';
import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';

type Props = {
  article: ArticleResult | null;
  activePage: number;
  onChangePage: (page: number) => void;
};

const { Title } = Typography;

const HeadlineSection: FC<Props> = ({
  article,
  activePage,
  onChangePage,
}: Props) => {
  return (
    <div>
      <Title level={2} style={{ letterSpacing: 0.8 }}>
        Headlines
      </Title>

      {article && article.articles.length > 0 && (
        <>
          <Row gutter={[24, 24]} justify="center" align="middle">
            {article.articles.map((article) => (
              <Col key={article.title} xs={24} sm={24 / 2} lg={24 / 3}>
                <ArticleCard article={article} />
              </Col>
            ))}
          </Row>
          <Flex justify="center" style={{ marginTop: 16 }}>
            <Pagination
              defaultCurrent={1}
              current={activePage}
              total={article.totalResults}
              defaultPageSize={6}
              onChange={onChangePage}
            />
          </Flex>
        </>
      )}

      {article && article.articles.length === 0 && (
        <Flex
          align="center"
          justify="center"
          style={{
            background: 'white',
            padding: 6,
            borderRadius: 6,
            minHeight: '20vh',
          }}
        >
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Flex>
      )}
    </div>
  );
};

export default HeadlineSection;
