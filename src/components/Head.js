import React from "react";
import { Helmet } from "react-helmet";

const Head = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:image" content={props.ogfImage} />
      <meta property="twitter:image" content={props.ogtImage} />
    </Helmet>
  );
};

export default Head;
