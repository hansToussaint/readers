import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import Heading from "./Heading";
import DarkModeToggle from "./DarkModeToggle";
import ButtonIcon from "./ButtonIcon";

import { BiChevronRight } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiOutlineSecurityScan } from "react-icons/ai";

const StyledSidebar = styled.aside`
  /* height: 20rem; */
  grid-row: 1 / -1;
  max-height: 87rem;

  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;

  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  & img {
    height: 8rem;
    width: 8rem;
  }

  & span {
    font-weight: 300;
  }
`;

const StyledAvatar = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-grey-600);

    gap: 1.2rem;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <StyledAvatar>
        <UserAvatar />
      </StyledAvatar>
      <Heading as="h2">Settings</Heading>

      <ul>
        <li>
          <ButtonIcon>
            <RiAccountCircleLine />
            <span>Account</span>
            <i>
              <BiChevronRight />
            </i>
          </ButtonIcon>
        </li>

        <li>
          <ButtonIcon>
            <AiOutlineSecurityScan />
            <span>Security and Access</span>
            <i>
              <BiChevronRight />
            </i>
          </ButtonIcon>
        </li>
      </ul>

      <Heading as="h2">Appearance</Heading>
      <DarkModeToggle />
    </StyledSidebar>
  );
}

export default Sidebar;
