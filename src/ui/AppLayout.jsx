import { Outlet } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: grid;
  /* grid-template-rows: ${window.location.pathname !== "/"
    ? "auto 1fr"
    : "0"}; */
  grid-template-rows: auto 1fr;
  height: 100dvh;

  ${(props) =>
    props.$type === "root" &&
    css`
      grid-template-rows: ${window.location.pathname !== "/"
        ? "auto 1fr"
        : "0"};
    `}
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2.4rem;

  ${(props) =>
    props.$type === "root" &&
    css`
      padding: 0;
    `}/* overflow-y: scroll; */
`;

function AppLayout() {
  return (
    <StyledAppLayout $type={window.location.pathname !== "/" ? "" : "root"}>
      <Header />

      {window.location.pathname !== "/" ? (
        <Main>
          <Outlet />
        </Main>
      ) : (
        <Main $type="root">
          <Outlet />
        </Main>
      )}

      {/* <Main $type="root">
        <Outlet />
      </Main> */}
    </StyledAppLayout>
  );
}

export default AppLayout;
