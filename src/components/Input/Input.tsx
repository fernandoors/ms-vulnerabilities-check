import { twMerge } from "tailwind-merge";
type InputRootProps = React.ComponentProps<"input"> & {
    error?: boolean;
};

export const InputRoot = ({
    error = false,
    className = "",
    ...props
}: InputRootProps) => {
    return (
        <div
            data-error={error}
            className={twMerge(
                "group bg-gray-600 pt-2 h-12 border border-gray-500 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 hover:border-gray-100 data-[error=true]:border-danger",
                className
            )}
            {...props}
        />
    );
};

export const InputIcon = ({
    className = "",
    ...props
}: React.ComponentProps<"span">) => {
    return (
        <span
            className={twMerge(
                "text-gray-100 group-focus-within:text-gray-100 group-hover:text-gray-100 group-data-[error=true]:text-danger group-[&:not(:has(input:placeholder-shown))]:text-blue",
                className
            )}
            {...props}
        />
    );
};

export const InputField = ({
    className = "",
    ...props
}: React.ComponentProps<"input">) => {
    return (
        <input
            className={twMerge(
                "flex-1 outline-0 placeholder-gray-100 group-hover:placeholder-gray-100 text-blue",
                className
            )}
            {...props}
        />
    );
};

export const InputTextAreaField = ({
    className = "",
    ...props
}: React.ComponentProps<"textarea">) => {
    return (
        <textarea
            className={twMerge(
                "flex-1 h-[100%] resize-none outline-0 placeholder-gray-100 group-hover:placeholder-gray-100 text-blue",
                className
            )}
            {...props}
        />
    );
};
