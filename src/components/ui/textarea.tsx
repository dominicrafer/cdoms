import clsx from "clsx";

const Textarea = ({
  label,
  className,
  ...properties
}: {
  label?: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="relative">
      <textarea
        id={label}
        rows={6}
        className={clsx(
          "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none dark:text-white dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer transition-all duration-300 resize-none",
          className
        )}
        placeholder=" "
        {...properties}
      />
      <label
        htmlFor={label}
        className="absolute text-sm text-gray-300 cursor-text duration-300 transform -translate-y-4 scale-90 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Textarea;
