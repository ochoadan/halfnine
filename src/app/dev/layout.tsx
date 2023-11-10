import clsx from 'clsx'
import Hero1 from "@/components/Global/Hero-1";

export default function MDXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero1 />
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <Prose className="flex-1 w-full">
          {children}
        </Prose>
        <aside className="sticky top-32 hidden w-60 shrink-0 lg:block skate bg-gray-200 rounded-lg p-2 min-h-[100px]">
          {/* <TableOfContents /> */}
        </aside>
      </div>
    </>
  );
}


function Prose({ as, className, ...props }: any) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert dark:text-slate-400',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-bold lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-sky-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // hr
        'dark:prose-hr:border-slate-800',
      )}
      {...props}
    />
  )
}

function TableOfContents({ headings }: any) {
  const items = headings.filter((item: any) => [2, 3].includes(item.level));

  return (
    <nav>
      <ul>
        {items.map((item: any) => (
          <li key={item.title}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}