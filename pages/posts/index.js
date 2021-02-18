import next from "next";
import React from "react";
import Link from "next/link";
import axios from "axios";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h3>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default Posts;
