import { NextSeo } from "next-seo";
import { CertificationList } from "components";
import { getAllPosts } from "pages/api/certifications";
import { ContentWrapper } from "ui";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Certifications - Amir Aliu"
        description="A detailed showcase of my professional certifications, reflecting my knowledge and achievements."
        openGraph={{
          site_name: "Certifications - Amir Aliu",
          title: "Certifications - Amir Aliu",
          description:
            "A detailed showcase of my professional certifications, reflecting my knowledge and achievements.",
        }}
        twitter={{
          handle: "@amiraliudev",
          site: "@amiraliudev",
          cardType: "summary_large_image",
        }}
      />

      <ContentWrapper width="620px">
        <h2 className="font-medium text-black text-2xl mb-4 mt-4">Certifications</h2>
        <CertificationList data={allPosts} />
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