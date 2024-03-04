import { FC } from 'react';
import { Row, Col, Empty, Flex, Pagination } from 'antd';

import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleCard from './ArticleCard';

type Props = {
  article: ArticleResult | null;
  pageSize?: number;
  activePage: number;
  onChangePage: (page: number) => void;
  onChangePageSize?: (current: number, size: number) => void;
};

const ArticleList: FC<Props> = ({
  article,
  pageSize = 6,
  activePage,
  onChangePage,
  onChangePageSize,
}: Props) => {
  return (
    <>
      {article && article.articles.length > 0 && (
        <>
          <Row gutter={[24, 24]} justify="center" align="middle">
            {article.articles.map((article) => (
              <Col
                key={`${article.title}-${article.author}`}
                xs={24}
                sm={24 / 2}
                lg={24 / 3}
              >
                <ArticleCard article={article} />
              </Col>
            ))}
          </Row>
          <Flex justify="center" style={{ marginTop: 24 }}>
            <Pagination
              defaultCurrent={1}
              current={activePage}
              total={article.totalResults}
              defaultPageSize={pageSize}
              pageSizeOptions={[12, 24, 60, 99]}
              onChange={onChangePage}
              onShowSizeChange={onChangePageSize}
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
    </>
  );
};

export default ArticleList;
