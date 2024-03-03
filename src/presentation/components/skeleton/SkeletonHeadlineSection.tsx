import { Col, Row, Skeleton } from 'antd';

const SkeletonHeadlineSection = () => {
  return (
    <div>
      <Skeleton.Input active size="large" style={{ height: 38 }} />

      <Row
        gutter={[24, 24]}
        justify="center"
        align="middle"
        style={{ marginTop: 15 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Col key={i} xs={24} sm={24 / 2} lg={24 / 3}>
            <Skeleton.Input active block style={{ height: 400 }} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkeletonHeadlineSection;
