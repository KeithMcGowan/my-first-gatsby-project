import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  const { nodes } = data.allMdx;
  
  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((eachNode) => {
        const { id, frontmatter, slug } = eachNode;
        const { title, date } = frontmatter;
        
        return (
          <article key={id}>
            <h2>
              <Link to={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p>Posted: {date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
