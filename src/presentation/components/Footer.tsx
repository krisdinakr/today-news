import { Flex, Typography } from 'antd';

const { Paragraph } = Typography;

const Footer = () => {
  return (
    <footer>
      <Flex align="center" justify="center">
        <Paragraph>&copy; 2024 Today News. All Rights Reserved.</Paragraph>
      </Flex>
    </footer>
  );
};

export default Footer;
