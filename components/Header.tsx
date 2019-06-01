import React from 'react';
import styled from 'styled-components';

interface IHeaderProps {}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Logo = styled.img`
  height: 64px;
`;

export default (props: IHeaderProps) => {
  return (
    <Wrapper>
      <Logo src="/static/nextjs-logo.png" alt="next.js logo" />
    </Wrapper>
  );
};
