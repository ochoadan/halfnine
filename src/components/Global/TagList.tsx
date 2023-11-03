import clsx from "clsx";

export function TagList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul role="list" className={clsx(className, "flex flex-wrap gap-4")}>
      {children}
    </ul>
  );
}

export function TagListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={clsx(
        "rounded-full bg-neutral-50 border-[1px] border-gray-300 px-4 py-1.5 text-sm text-neutral-600",
        className
      )}
    >
      {children}
    </li>
  );
}
