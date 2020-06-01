import * as React from 'react';
import { PageHeader } from 'antd';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return <PageHeader className="header" title="운동의 큐피트" />;
};

export default Header;
