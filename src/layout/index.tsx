import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import Head from '../components/Head';
import Header from '../components/Header';

interface ILayoutProps {
  children: any;
  pathname: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  article?: boolean;
}

export default ({
  children,
  pathname,
  title,
  description,
  thumbnail,
  article
}: ILayoutProps) => {
  return (
    <Fragment>
      <Head
        title={title}
        description={description}
        thumbnail={thumbnail}
        article={article}
        pathname={pathname}
      />
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header />
          {children}
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};
