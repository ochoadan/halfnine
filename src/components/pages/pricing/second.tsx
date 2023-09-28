export default function Second() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
      <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            We built our business on great customer service
          </h2>
          <p className="mt-4 text-gray-500">
            At the beginning at least, but then we realized we could make a lot
            more money if we kinda stopped caring about that. Our new strategy
            is to write a bunch of things that look really good in the
            headlines, then clarify in the small print but hope people don't
            actually read it.
          </p>
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
          <img
            src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
            alt=""
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
