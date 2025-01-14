import Link from "next/link";
import clsx from "clsx";

export default function CertificationList({ data, activeSlug }) {
  return (
    <div
      className={clsx(
        "w-full text-sm",
        activeSlug != undefined && "hidden lg:flex flex-col"
      )}
    >
      <div className="last:!border-b-0">
        {data?.map((post) => (
          <div key={post.slug} className="">
            <Link href={`/certifications/${post.slug}`}>
              <article
                className={clsx(
                  "flex  border-dashed font-medium w-full py-3 md:py-[12px] dark:text-white border-b border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 flex-row",
                  activeSlug == post.slug ? "text-black" : "text-gray-800 "
                )}
                >
                {post?.icon ? (
                  <img
                    src={post?.icon}
                    alt={post.title}
                    className="w-6 h-6 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:border-gray-800"
                  />
                ) : (
                  <div className="flex items-center justify-center w-6 h-6 text-lg font-bold text-white bg-black border border-gray-100 rounded-full dark:border-gray-800">
                    {post?.title?.slice(0, 1)}
                  </div>
                )}
                
                <h2 className={clsx("font-semibold ml-3")}>{post.title}</h2>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}