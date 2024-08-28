import { FC, ReactNode } from "react";

interface IButton {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    role?: string;
    id?: string;
}
 
const Button: FC<IButton> = ({
        children,
        onClick,
        disabled,
        className,
        style,
        type = 'button',
        role,
        id,
    }) => {

    return ( 
        <button
            onClick={onClick}
            disabled={disabled}
            className={className}
            style={style}
            type={type}
            role={role}
            id={id}
        >
            {children}
        </button>
    );
}
 
export default Button;