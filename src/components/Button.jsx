import { cn } from "../lib/utils";

export default function Button({ className, children, ...otherProps }) {
    return (
        <button
            className={cn(
                "px-4  text-[24px] flex justify-center items-center min-h-[61px] font-bold bg-primary text-white rounded-[10px]",
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
}
