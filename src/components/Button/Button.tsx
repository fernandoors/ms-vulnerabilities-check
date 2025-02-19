import { twMerge } from "tailwind-merge";

type ButtonRootProps = React.ComponentProps<"button"> & {
    loading?: boolean;
    disabled?: boolean;
};
export const ButtonField = ({
    loading = false,
    disabled = false,
    className = "",
    ...props
}: ButtonRootProps) => {
    return (
        <button
            disabled={loading || disabled}
            data-loading={loading}
            className={twMerge(
                "flex gap-2 justify-center items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer w-full hover:bg-gray-300 hover:text-purple transition-colors duration-300 data-[loading=true]:bg-gray-300 data-[loading=true]:text-gray-800 data-[loading=true]:cursor-wait disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        />
    );
};
