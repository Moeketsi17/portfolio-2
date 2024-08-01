// src/components/HelmetMetaData.js

import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../assets/images/favicon.png'; // Import the favicon image

const HelmetMetaData = () => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Moeketsi | Portfolio</title>
      <meta
        name="description"
        content="Personal portfolio website of some of the projects I have worked on."
      />
      <meta
        name="keywords"
        content="Portfolio, Web Development, Front-End Developer, HTML, CSS, JavaScript, React"
      />
      <link
        rel="shortcut icon"
        href={favicon}
        type="image/x-icon"
        sizes="34x34"
      />
    </Helmet>
  );
};

export default HelmetMetaData;
