import Link from 'next/link'

import { Icon } from '@/components/Icon'
import Image from 'next/image'

// export function QuickLinks({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
//       {children}
//     </div>
//   )
// }

export function BlogHero({
  title,
  imagedescription,
  image,
  icon,
}: {
  title: string
  imagedescription: string
  image: string
  icon: React.ComponentProps<typeof Icon>['icon']
}) {
  return (
    <>
      <div className="relative h-96 overflow-hidden rounded-md">
        {/* <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"> */}
        {/* <div className="mx-auto max-w-2xl p-2 lg:p-4 bg-gray-50 rounded-xl ring-gray-900/10 ring-1"> */}

        <Image
          src={image}
          alt={imagedescription}
          width={940}
          height={400}
          objectFit="cover"
          className="m-0 ring-gray-900/10"
        />
      </div>
      <p className="text-lg font-semibold text-gray-900 sm:text-xl mt-2 mb-8">
        Need Help with this topic? <span>Get expert help! </span><span>
          <Link href="/contact">
            Contact us
          </Link>
        </span>
      </p>

    </>
  )
}
