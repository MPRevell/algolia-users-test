import type { User } from "../types";

function UserCard({ user }: { user: User }) {
  return (
    <div className="flex flex-col overflow-hidden rounded border bg-white dark:bg-xenon-900 dark:border-grey-700">
      <a
        href="#"
        className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
      >
        <img
          src={`https://source.unsplash.com/random/300×300?random=${user.id}`}
          loading="lazy"
          alt="Random photo generated by Unsplash"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h2 className="mb-2 text-lg font-semibold text-xenon-600 dark:text-white">
          <a
            href="#"
            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600 font-sora text-xenon-600 dark:text-white text-l font-bold mb-4"
          >
            {user.name}
          </a>
        </h2>
        <p className="mb-8 text-grey-700 dark:text-grey-200 font-inter">
          {user.company.catchPhrase}
        </p>
        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                loading="lazy"
                alt="Photo by Brock Wegner"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div>
              <span className="block font-sora text-grey-900 dark:text-white">
                {user.username}
              </span>
              <span className="block text-xs text-gray-400 dark:text-grey-200">
                {user.email}
              </span>
            </div>
          </div>
          <a
            href={`mailto:${user.email}`}
            className="rounded border px-2 py-1 text-sm text-gray-500 dark:border-xenon-400 dark:text-grey-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
