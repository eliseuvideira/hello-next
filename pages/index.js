import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import PropTypes from 'prop-types';

const getPosts = () => {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
  ];
};

const PostLink = ({ post }) => (
  <>
    <li key={post.id}>
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </>
);

PostLink.propTypes = {
  post: PropTypes.object.isRequired,
};

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
  </Layout>
);

export default Blog;
