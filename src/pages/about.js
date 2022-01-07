import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        // Local image file
        src="../images/Dragon Ball Super.jpeg"
        alt="Dragon Ball Super cartoon."
      />
    </Layout>
  );
};

export default AboutPage;
