import Layout from "@/components/layout";
import "../styles/globals.css";


export const metadata = {
  title: 'Builder.io - Visual Headless CMS',
  description: 'Build digital experiences for any tech stack, visually.',
}

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
