import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {


  return (
    <Html lang="en">
      <Head >
        <title>Eternal Intern</title>
        <meta name='author' content='Rishav thapliyal' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
