import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./SideBar";
import Heading from "./Heading";
import UserAvatar from "../features/authentication/UserAvatar";
import Button from "./Button";
import UpdateAccount from "../features/authentication/UpdateAccount";
import AccessAndSecutity from "../features/authentication/AccessAndSecutity";
import ButtonIcon from "./ButtonIcon";

import { FaKey } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import FormRowVertical from "./FormRowVertical";
import Input from "./Input";
import { useUser } from "../features/authentication/useUser";

const StyledAccountSettings = styled.div`
  /* width: 100%;
  height: 100%; */
  display: grid;
  grid-template-columns: 32rem 1fr;
  grid-template-rows: auto auto;

  gap: 3.5rem;
  /* background-color: var(--color-grey-50); */

  padding: 4rem;

  & h2 {
    border-bottom: 2px solid var(--color-grey-200);
    padding-bottom: 1rem;
  }
`;

const AccountDiv = styled.div`
  /* min-width: 50%; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 1.5rem 2.4rem;

  & button {
    width: max-content;
    height: max-content;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  & button {
    align-self: center;
  }

  & img {
    height: 13rem;
    width: 13rem;
  }

  & span {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const AccessDiv = styled.div`
  /* min-width: 50rem; */
  /* width: max-content; */
  height: max-content;
  grid-column: 2 / -1;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 1.5rem 2.4rem;
`;

const StyledForButton = styled.div`
  position: relative;

  & button {
    width: max-content;
    height: max-content;
  }

  & > :last-child {
    position: absolute;
    right: 0;
    bottom: 1.3rem;
  }
`;

function AccountSettingsLayout() {
  const { user } = useUser();

  const email = user?.email;
  const currentFullName = user?.user_metadata?.fullName;

  const [isCliked, setIsCliked] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  function handleClick() {
    setIsCliked((click) => !click);
  }

  function handleEditProfile() {
    setShowEditProfile((show) => !show);
  }

  return (
    <StyledAccountSettings>
      <Sidebar />

      <AccountDiv>
        <Heading as="h2">Account</Heading>

        <Profile>
          <UserAvatar />

          <Button $variation="secondary" onClick={handleEditProfile}>
            {showEditProfile ? "Cancel" : "Edit Profile"}
          </Button>
        </Profile>

        <div>
          <Heading as="h2">General</Heading>
          {showEditProfile ? (
            <UpdateAccount />
          ) : (
            <>
              <FormRowVertical label="Full name">
                <Input value={currentFullName} disabled />
              </FormRowVertical>

              <FormRowVertical label="Email address">
                <Input value={email} disabled />
              </FormRowVertical>
            </>
          )}
        </div>
      </AccountDiv>

      <AccessDiv>
        <Heading as="h2">Access</Heading>

        {!isCliked ? (
          <ButtonIcon onClick={handleClick}>
            <FaKey />
            <span>Change your password</span>
            <i>
              <BiChevronRight />
            </i>
          </ButtonIcon>
        ) : (
          <StyledForButton>
            <AccessAndSecutity />
            <Button $variation="danger" onClick={handleClick}>
              Close
            </Button>
          </StyledForButton>
        )}

        <ButtonIcon>
          <FiUserX />
          <span>Desactivate Account</span>

          <i>
            <BiChevronRight />
          </i>
        </ButtonIcon>
      </AccessDiv>
    </StyledAccountSettings>
  );
}

export default AccountSettingsLayout;
