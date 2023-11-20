import { ReactNode } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CustomButtonProps {
  children: ReactNode;
  backgroundColor: string;
  onClick: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {
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


export const CustomButtonRemove: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        border: "none",
        outline: "none",
        marginLeft: 8,
      }}
      onClick={props.onClick}
    >
      {/* Use o ícone de remoção como conteúdo do botão */}
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default { CustomButton, CustomButtonRemove };

