import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { NextSeo } from "next-seo";
import { ContentWrapper } from "ui";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - Amir Aliu"
        description="Sharing insights, updates, and thoughts on the projects I'm working on, plus a bit of everything else."
        openGraph={{
          site_name: "Blog - Amir Aliu",
          title: "Blog - Amir Aliu",
          description:
            "Sharing insights, updates, and thoughts on the projects I'm working on, plus a bit of everything else.",
        }}
        twitter={{
          handle: "@amiraliudev",
          site: "@amiraliudev",
          cardType: "summary_large_image",
        }}
      />

      <ContentWrapper width="620px">
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">Blog</h2>
        <BlogList data={allPosts} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "external",
  ]);

  return {
    props: { allPosts },
  };
}