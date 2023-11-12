import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { useDarkMode } from "../context/DarkModeContext";

import { BsFillBookmarkStarFill } from "react-icons/bs";

import UserAvatar from "../features/authentication/UserAvatar";

import { useSignOut } from "../features/authentication/useSignOut";
import SpinnerMini from "./SpinnerMini";
import { useUser } from "../features/authentication/useUser";
import Button from "./Button";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
  z-index: 10;

  align-self: stretch;

  & p,
  span {
    font-weight: 500;
    color: var(--color-grey-500);
  }
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

  &:hover:not(:last-child) {
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

  & button {
    font-size: inherit;
    font-weight: 500;
    color: var(--color-grey-500);
  }
`;

const StyledNavLink = styled(NavLink)`
  & img {
    height: 4.5rem;
    width: 4.5rem;
  }

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
      /* background-color: var(--color-grey-50); */
      border-radius: var(--border-radius-sm);
    }
  }
`;

const Notification = styled.em`
  font-style: normal;
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--color-red-300);
  color: var(--color-grey-100);

  position: absolute;
  top: 0.7rem;
  right: 12.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled.div`
  & > * {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    color: var(--color-grey-600);
  }
`;

function HeaderMenu() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { signOut, isLoading } = useSignOut();
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();

  const numBookmarks = 2;

  return (
    <StyledHeaderMenu>
      <Li>
        <StyledNavLink to="/about">
          <p>About us</p>
        </StyledNavLink>
      </Li>

      {isAuthenticated && (
        <Li>
          <StyledNavLink to="/bookmarks">
            <BsFillBookmarkStarFill />
            <Notification>{numBookmarks}</Notification>
            <span>Bookmarks</span>
          </StyledNavLink>
        </Li>
      )}

      <Li>
        {isAuthenticated ? (
          <StyledNavLink to="/account">
            <StyledAvatar>
              <UserAvatar />
            </StyledAvatar>
          </StyledNavLink>
        ) : (
          <StyledNavLink to="/signin">
            <p>Sign in</p>
          </StyledNavLink>
        )}
      </Li>

      {isAuthenticated ? (
        <Li>
          <Button $variation="secondary" onClick={signOut}>
            Sign out
          </Button>
        </Li>
      ) : (
        <Li>
          <Button $variation="secondary" onClick={() => navigate("/signup")}>
            {isLoading ? <SpinnerMini /> : "Sign up"}
          </Button>
        </Li>
      )}

      {/* <Li>
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

            {isAuthenticated ? (
              <Menu.Button
                icon={!isLoading ? <VscSignOut /> : <SpinnerMini />}
                onClick={signOut}
              >
                Sign out
              </Menu.Button>
            ) : (
              <Menu.Button
                icon={<VscSignIn />}
                onClick={() => navigate("/signIn")}
              >
                Sign in
              </Menu.Button>
            )}
          </Menu.List>
        </Menu>
      </Li>  */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
