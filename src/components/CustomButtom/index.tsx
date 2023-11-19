import { ReactNode } from "react";
import { Button } from "react-bootstrap";

interface CustomButtonProps {
  children: ReactNode;
  backgroundColor: string;
  onClick: () => void;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Button
      style={{
        backgroundColor: props.backgroundColor,
        border: "none",
        outline: "none",
        marginLeft: 8,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
