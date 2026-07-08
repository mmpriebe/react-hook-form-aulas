

interface ToastProps {
    message: string;
    type: "success" | "error";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    );
};

export default Toast;
