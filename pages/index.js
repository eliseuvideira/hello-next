import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function Index() {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}
