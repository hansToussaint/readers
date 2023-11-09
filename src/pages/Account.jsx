import styled from "styled-components";
import AccountSettingsLayout from "../ui/AccountSettingsLayout";

const StyledAccount = styled.div`
  /* width: 100vw; */
  /* height: 100dvh; */
  min-height: 100dvh;
  max-height: auto;

  background-color: var(--color-grey-50);
  /* background-color: red; */
`;

function Account() {
  return (
    <StyledAccount>
      <AccountSettingsLayout />
    </StyledAccount>
  );
}

export default Account;
