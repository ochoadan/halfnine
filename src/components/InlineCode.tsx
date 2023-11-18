export function InlineCode({ children }: { children: string }) {
  return (
    <span className="inline-block bg-gray-200 px-2 py-1 rounded">
      {children}
    </span>
  );
}
