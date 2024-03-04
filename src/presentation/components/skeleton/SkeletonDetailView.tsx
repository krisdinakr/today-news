import { Skeleton, Space } from 'antd';

const SkeletonDetailView = () => {
  return (
    <Space size={32} direction="vertical" style={{ width: '100%' }}>
      <Space size="small" direction="vertical" style={{ width: '100%' }}>
        <Skeleton.Input active block style={{ height: 90 }} />
        <Skeleton.Input active style={{ width: '45vw', height: 32 }} />
        <Skeleton.Input active style={{ height: 19 }} />
      </Space>

      <Skeleton.Input active block style={{ height: 700 }} />

      <Space size="small" direction="vertical" style={{ width: '100%' }}>
        <Skeleton active />
        <Skeleton.Input active style={{ height: 19 }} />
      </Space>
    </Space>
  );
};

export default SkeletonDetailView;
