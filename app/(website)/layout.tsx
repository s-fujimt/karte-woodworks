import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";

// export async function sharedMetaData() {
//   const settings = await getSettings();
//   return {
//     // metadataBase: new URL(settings.url),
//     title: {
//       default: settings?.title || "Karte woodworks",
//       template: "%s | Karte woodworks"
//     },
//     description: settings?.description || "Karte woodworks",
//     authors: [{ name: "Ryusuke Fujimoto" }],
//     canonical: settings?.url,
//     openGraph: {
//       images: [
//         {
//           url:
//             urlForImage(settings?.openGraphImage)?.src ||
//             "/img/opengraph.jpg",
//           width: 800,
//           height: 600
//         }
//       ]
//     },
//     twitter: {
//       title: settings?.title || "Karte woodworks",
//       card: "summary_large_image"
//     },
//     robots: {
//       index: true,
//       follow: true
//     }
//   };
// }

// export async function generateMetadata() {
//   return await sharedMetaData();
// }

export default async function Layout({ children }) {
  const settings = await getSettings();
  return (
    <>
      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
