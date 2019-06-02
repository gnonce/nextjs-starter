import Head from 'next/head';
import siteConfig from '../../site.config';

interface IHeadProps {
  title?: string;
  description?: string;
  thumbnail?: string;
  article?: boolean;
  pathname: string;
}

export default ({
  title,
  description,
  thumbnail,
  pathname,
  article
}: IHeadProps) => {
  const {
    site,
    defaultTitle,
    defaultDescription,
    siteUrl,
    language,
    color,
    twitter
  } = siteConfig;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: thumbnail || `${siteUrl}/static/thumbnail.png`,
    url: `${siteUrl}${pathname}`,
    twitter
  };
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="theme-color" content={color} />
      <meta name="application-name" content={site} />
      <link rel="canonical" href={seo.url} />
      <link rel="manifest" href="/_next/static/manifest.json" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {article && <meta property="og:type" content="article" />}

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={site} />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta name="twitter:creator" content={seo.twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
    </Head>
  );
};
