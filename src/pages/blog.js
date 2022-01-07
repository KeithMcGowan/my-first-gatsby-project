import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  const { nodes } = data.allFile;
  console.log(nodes);
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {nodes.map((eachNode) => {
          const { name } = eachNode;

          return <li key={name}>{name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
