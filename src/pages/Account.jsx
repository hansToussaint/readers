import styled from "styled-components";
import AccountSettingsLayout from "../ui/AccountSettingsLayout";

const StyledAccount = styled.div`
  /* width: 100vw;
  height: 100vh; */
`;

function Account() {
  return (
    <StyledAccount>
      <AccountSettingsLayout />
    </StyledAccount>
  );
}

export default Account;
