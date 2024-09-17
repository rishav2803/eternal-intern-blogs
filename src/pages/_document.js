import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {


  return (
    <Html lang="en">
      <Head >
        <title>Eternal Intern</title>
        <meta name='author' content='Rishav thapliyal' />
        <link rel='icon' href='/logo.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="gkZahdsaYiK41oDLh9jVaLm4T60Vq7gPzAZ9_lReS6s" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
