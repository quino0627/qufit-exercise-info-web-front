import * as React from 'react';
import { Row, Col, Divider, Menu } from 'antd';

interface ICategoriesProps {}

function Categories(): React.ReactElement {
  return (
    <>
      <Divider>운동 찾는 방법</Divider>
      <Menu className="category__menu" mode="horizontal">
        <Menu.Item className="menu__item">머신 사용법 알기</Menu.Item>
        <Menu.Item className="menu__item">타격 부위로 찾기</Menu.Item>
        <Menu.Item className="menu__item">전체 운동 보기</Menu.Item>
      </Menu>
    </>
  );
}

export default Categories;
