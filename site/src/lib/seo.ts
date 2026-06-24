import type { Metadata } from "next";
import { SITE } from "./site";

type SeoArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/services/" with trailing slash
  keywords?: string[];
  ogTitle?: string;
  ogEyebrow?: string;
};

function ogImagePath(title: string, eyebrow: string) {
  const params = new URLSearchParams({ title, eyebrow });
  return `/og/?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogTitle,
  ogEyebrow,
}: SeoArgs): Metadata {
  const canonical = path;
  const ogImage = ogImagePath(ogTitle ?? title, ogEyebrow ?? "Online Reputation Management");
  // Emit a deterministic absolute title so the brand appears exactly once, regardless
  // of whether the layout title template applies to this segment.
  const hasBrand = /Diamond Reputation Management/i.test(title);
  const absoluteTitle = hasBrand ? title : `${title} | Diamond Reputation Management`;
  return {
    title: { absolute: absoluteTitle },
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: absoluteTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [ogImage],
    },
  };
}
