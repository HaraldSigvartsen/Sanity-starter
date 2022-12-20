import React from 'react';
import Header from '../components/header';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-screen w-screen scrollbar-hide">
    <Header />
    <main>{children}</main>
  </div>
);
Layout.defaultProps = {
  children: null,
};

export default Layout;
