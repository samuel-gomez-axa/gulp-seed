import Layout from 'components/Layout/MarkdownPage';
import Head from 'components/Layout/Head';

const GetStarted = ({ content, meta, title }) => (
  <Layout title={title} content={content}>
    <Head meta={meta} />
  </Layout>
);

GetStarted.getInitialProps = async ({ req }) => {
  const content = await require(`./markdown/content.md`);
  const title = await require(`./markdown/title.md`);
  const meta = await require(`./constants/meta.json`);
  return {
    content,
    meta,
    title
  };
};

export default GetStarted;
