import { Link } from 'react-router-dom';
import { Image } from 'antd';

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <Image
          width={130}
          src="/logo.webp"
          alt="Today News Logo"
          preview={false}
        />
      </Link>
    </nav>
  );
};

export default Header;
