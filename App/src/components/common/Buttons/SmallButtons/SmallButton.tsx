import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";
import SmallButtonLogic from "./SmallButtonLogic";

interface ISmallButton {
  text: string;
  onClick: () => void;
  color: AvailableIntensiveColors;
  isLoading?: boolean;
  width?: string;
  uppercase?: boolean;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
}

const SmallButton = ({
  width,
  height,
  isLoading,
  marginTop,
  marginBottom,
  uppercase = false,
  text,
  color,
  onClick,
}: ISmallButton) => {
  //TODO IInstalled spinners just implement loading for button..
  const { handleGetColorHoverClass } = SmallButtonLogic();
  return (
    <div
      onClick={onClick}
      style={{
        width: width,
        height: height,
        marginTop: marginTop,
        marginBottom: marginBottom,
        background: `#${color}`,
        textTransform: uppercase ? "uppercase" : "none",
      }}
      className={handleGetColorHoverClass(color)}
    >
      {isLoading ? <div>Loading...</div> : text}
    </div>
  );
};
export default SmallButton;
