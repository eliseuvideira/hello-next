import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
};

export default function Index() {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}
