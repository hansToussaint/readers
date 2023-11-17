import { createContext, useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useClickOutside";

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0;
  border-radius: var(--border-radius-sm);
  transition: all 0.8s;

  &:focus {
    outline: none;
  }

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-grey-400);
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  width: 100%;
  height: 100%;

  /* right: ; */
  top: 0;
  left: 10%;

  background-color: var(--color-grey-50);
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-md);

  & > :last-child {
    border-top: 1px solid var(--color-grey-200);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.8rem 2.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-0);
  }

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  & span {
    display: block;
    float: left;
  }
`;

const LiWithBorder = styled.li`
  width: 100%;
  font-size: 1.9rem;

  & i {
    font-size: 1.6rem;
  }

  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const MenuContext = createContext();

/*eslint-disable react/prop-types */
function Menu({ children }) {
  const [openName, setOpenName] = useState("");
  // const [position, setPosition] = useState(null);

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <MenuContext.Provider value={{ openName, close, open }}>
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ menuName }) {
  const { open, openName, close } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();

    // const clickPosition = e.target.closest("button").getBoundingClientRect();

    // setPosition({
    //   x: window.innerWidth - clickPosition.width - clickPosition.x,
    //   y: clickPosition.y + clickPosition.height + 8,
    // });

    openName === "" ? open(menuName) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <AiOutlineMenu />
    </StyledToggle>
  );
}

function List({ name, children }) {
  const { openName, close } = useContext(MenuContext);
  const ref = useOutsideClick(close, false);

  if (name !== openName) return null;

  return <StyledList ref={ref}>{children}</StyledList>;
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <LiWithBorder>
      <StyledButton onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </LiWithBorder>
  );
}

// props
Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
