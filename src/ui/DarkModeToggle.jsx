import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <BsSun /> : <BsMoon />}
      <div>
        Dark theme
        <br />
        <span>
          <em>{isDarkMode ? "On" : "Off"}</em>
        </span>
      </div>
    </ButtonIcon>
  );
}

export default DarkModeToggle;
