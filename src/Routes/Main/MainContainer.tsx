import * as React from 'react';
import MainPresenter from './MainPresenter';

interface IMainContainerProps {}

const MainContainer: React.FunctionComponent<IMainContainerProps> = props => {
  return <MainPresenter />;
};

export default MainContainer;
