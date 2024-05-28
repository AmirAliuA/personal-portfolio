import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllProjects } from "pages/api/projects";
import { ContentWrapper } from "ui";

export default function Home({ allProjects }) {
  return (
    <>
      <NextSeo
        title="Projects – Amir Aliu"
        description="A list of all my projects, mostly written in Next.js, TailwindCSS or C#."
        openGraph={{
          site_name: "Projects – Amir Aliu",
          title: "Projects – Amir Aliu",
          description:
            "A list of all my projects, mostly written in Next.js, TailwindCSS or C#.",
        }}
        twitter={{
          handle: "@amiraliudev",
          site: "@amiraliudev",
          cardType: "summary_large_image",
        }}
      />
      <ContentWrapper width="620px">
        <WorkList allPosts={allProjects} />
      </ContentWrapper>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
  ]);

  return {
    props: { allProjects },
  };
}
