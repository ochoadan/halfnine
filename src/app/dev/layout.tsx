export default function MDXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose">{children}</div>;
}
