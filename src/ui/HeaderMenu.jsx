import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContext";

import { BsFillBookmarkStarFill, BsMoon, BsSun } from "react-icons/bs";
import { VscSignOut, VscSettingsGear } from "react-icons/vsc";
import { FcAbout } from "react-icons/fc";

import UserAvatar from "../features/authentication/UserAvatar";
import Menu from "./Menu";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
  z-index: 10;

  align-self: stretch;
`;

const Li = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1.2rem 2.4rem;
  cursor: pointer;

  &:hover {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.7rem;
    height: 2.7rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 0.8rem;
    height: 100%;
    align-items: center;

    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey-800);
      background-color: var(--color-grey-50);
      border-radius: var(--border-radius-sm);
    }
  }
`;

const Notification = styled.span`
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--color-red-300);
  color: var(--color-grey-100);

  position: absolute;
  top: 1.7rem;
  right: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function HeaderMenu() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const numBookmarks = 2;

  return (
    <StyledHeaderMenu>
      <Li>
        <StyledNavLink to="/bookmarks">
          <BsFillBookmarkStarFill />
          <Notification>{numBookmarks}</Notification>
          <span>Bookmarks</span>
        </StyledNavLink>
      </Li>

      <Li>
        <StyledNavLink to="/account">
          <UserAvatar />
        </StyledNavLink>
      </Li>

      <Li>
        <Menu>
          <Menu.Toggle menuName="openMenu" />

          <Menu.List name="openMenu">
            <Menu.Button icon={<FcAbout />}>About us</Menu.Button>

            <Menu.Button
              icon={isDarkMode ? <BsSun /> : <BsMoon />}
              onClick={toggleDarkMode}
            >
              Dark theme
              <br />
              <span>
                <i>{isDarkMode ? "On" : "Off"}</i>
              </span>
            </Menu.Button>

            <Menu.Button
              icon={<VscSettingsGear />}
              onClick={() => navigate("/settings")}
            >
              Settings
            </Menu.Button>
            <Menu.Button icon={<VscSignOut />}>Sign out</Menu.Button>
          </Menu.List>
        </Menu>
      </Li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
