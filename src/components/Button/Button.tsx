import './Button.css';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'link';
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant,rounded, ...props }) => {
  const styles = () => {
    let propStyle = props.style ?? {};
    if(props.disabled) return propStyle;
    if(variant === 'primary') return { borderColor: '#6366F1', backgroundColor: '#6366F1', color: '#FAFAFA', ...propStyle };
    if(variant === 'secondary') return { borderColor: '#6366F1', backgroundColor: '#FAFAFA', color: '#6366F1', ...propStyle };
    if(variant === 'danger') return { borderColor: '#7F1D1D', backgroundColor: '#7F1D1D', color: '#FAFAFA', ...propStyle };
    if(variant === 'outline') return { borderColor: '#FAFAFA', backgroundColor: 'transparent', color: '#FAFAFA', ...propStyle };
    if(variant === 'link') return {textDecoration: 'underline black', borderColor: 'transparent', backgroundColor: 'transparent',border:'none', color: '#FAFAFA', ...propStyle };
    
    if(rounded) return { borderRadius: '100vw', ...propStyle }

    return propStyle;
  };

  return (
    <button {...props} style={styles()}>
      {props.children}
    </button>
  );
};

export default Button;