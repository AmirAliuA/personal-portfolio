import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "styles/app.scss";
import "styles/blog.scss";
import MainLayout from "layouts/main";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    `https://amiraliu.vercel.app` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(
        "Message received from the child: " + event?.data,
        event?.data?.message,
        event?.data?.blob
      ); // Message received from child
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem={true}>
      <>
        <DefaultSeo
          title="Amir Aliu - Portfolio"
          description="I'm a full-stack developer based in Kosovo with a passion for web & software development. On the side, I have huge interests in game development, cybersecurity, and networking."
          canonical={canonicalUrl}
          openGraph={{
            site_name: "Amir Aliu - Portfolio",
            title: "Amir Aliu - Portfolio",
            description:
              "I'm a full-stack developer based in Kosovo with a passion for web & software development. On the side, I have huge interests in game development, cybersecurity, and networking.",
            images: [
              {
                url: "https://amiraliu.vercel.app/images/site/meta.jpg",
                width: 800,
                height: 600,
                alt: "Amir Aliu",
              },
            ],
          }}
          twitter={{
            handle: "@amiraliudev",
            site: "@amiraliudev",
            cardType: "summary_large_image",
            title: "Amir Aliu - Portfolio",
            description: "I'm a full-stack developer based in Kosovo with a passion for web & software development. On the side, I have huge interests in game development, cybersecurity, and networking.",
            image: "https://amiraliu.vercel.app/images/site/meta.jpg",
          }}
          additionalLinkTags={[
            {
              rel: "apple-touch-icon",
              href: "/touch-icons/main-icon.png",
            },
          ]}
        />

        <Analytics />

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;