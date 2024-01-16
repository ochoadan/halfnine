
export function DocsHeader({ title }: { title?: string }) {
  return (
    <header className="mb-9 space-y-1">
      {title && (
        <h1 className="font-bold text-3xl tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
      )}
    </header>
  )
}
