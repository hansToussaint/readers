import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2.4rem;
  /* overflow-y: scroll; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
