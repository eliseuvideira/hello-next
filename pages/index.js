import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};

const Index = () => {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher,
  );
  const author = data && data.author;
  let quote = data && data.quote;

  if (!data) {
    quote = 'Loading...';
  }

  if (error) {
    quote = 'Failed to fetch the quote.';
  }

  return (
    <main className="center">
      <div className="quote">{quote}</div>
      {author && <span className="author">- {author}</span>}

      <style jsx>
        {`
          main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
          }
          .quote {
            font-family: cursive;
            color: #e243de;
            font-size: 24px;
            padding-bottom: 10px;
          }
          .author {
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
          }
        `}
      </style>
    </main>
  );
};

export default Index;
