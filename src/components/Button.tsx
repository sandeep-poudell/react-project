import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode
    color?: 'primary' | 'secondary' | 'success'
    onClick: () => void
}
const Button = ({children, onClick, color = 'primary'}: ButtonProps) => {
    return (
        <div>
            <button className={"btn btn-" + color} onClick={onClick} >
                {children}
            </button>
        </div>
    );
};

export default Button;