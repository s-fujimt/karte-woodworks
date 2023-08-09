import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { urlForImage } from "@/lib/sanity/image";
import { cx } from "@/utils/all";
// import defaultOG from "../public/img/og-default.jpg";

import Footer from "@/components/footer";
// import PopupWidget from "../components/popupWidget";

export default function Layout(props) {
  const { children } = props;
  const ogimage = urlForImage(props?.openGraphImage) ?? "";
  return (
    <>
      <Head></Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
      />

      <div
        className={cx(props?.fontStyle, "text-gray-800 antialiased")}>
        <div>{children}</div>

        <Footer {...props} />
      </div>
    </>
  );
}
