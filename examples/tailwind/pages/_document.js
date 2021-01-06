import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/libre-caslon-text-latin-700-normal.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/wotfard-semibold-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/wotfard-regular-webfont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-white transition-colors duration-300 ease-out bg-white dark:bg-black dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
