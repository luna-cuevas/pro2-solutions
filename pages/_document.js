import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          sizes="16x16 32x32 64x64"
          rel="icon"
          href="/images/pro2-logo-v2.svg"
        />
        <meta
          name="description"
          content="At Pro2 Solutions, we are committed to providing you with the highest quality protective solutions for infection control products."
        />
        <meta
          property="og:image"
          content="/images/pro2-logo-v2.svg"
        />
        <meta
          property="og:description"
          content="At Pro2 Solutions, we are committed to providing you with the highest quality protective solutions for infection control products."
        />
        <meta
          property="og:title"
          content="Pro2 Solutions"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
