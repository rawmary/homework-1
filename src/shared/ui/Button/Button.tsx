interface ButtonProps {
  type?: "button";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ type = "button", className, children, onClick }: ButtonProps) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
