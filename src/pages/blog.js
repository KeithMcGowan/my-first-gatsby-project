import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  const { nodes } = data.allMdx;

  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((eachNode) => {
        const { id, frontmatter, body } = eachNode;
        const { title, date } = frontmatter;

        return (
          <article key={id}>
            <h2>{title}</h2>
            <p>Posted: {date}</p>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
