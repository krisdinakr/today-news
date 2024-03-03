import { FC } from 'react';
import { Typography } from 'antd';

import { ArticleResult } from '@/domain/entity/article/structures/ArticleResult';
import ArticleList from './ArticleList';

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

      <ArticleList
        article={article}
        activePage={activePage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default HeadlineSection;
