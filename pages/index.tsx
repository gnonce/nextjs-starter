import { withRouter, SingletonRouter } from 'next/router';
import styled from 'styled-components';

import Layout from '../layout/index';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background: white;
`;

const Title = styled.p`
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
`;

export default withRouter(({ router }: { router: SingletonRouter }) => (
  <Layout pathname={router.pathname}>
    <Wrapper>
      <Title>Gnonce next.js starter</Title>
    </Wrapper>
  </Layout>
));
