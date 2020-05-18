import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={1000}
    viewBox="0 0 922 1000"
    backgroundColor="white" //#c0c1c1
    foregroundColor="#c0c1c1" //#999
  >
    <rect x="30" y="20" rx="8" ry="8" width="200" height="330" />
    <rect x="250" y="20" rx="8" ry="8" width="200" height="330" />
    <rect x="470" y="20" rx="8" ry="8" width="200" height="330" />
    <rect x="690" y="20" rx="8" ry="8" width="200" height="330" />

    <rect x="30" y="370" rx="8" ry="8" width="200" height="330" />
    <rect x="250" y="370" rx="8" ry="8" width="200" height="330" />
    <rect x="470" y="370" rx="8" ry="8" width="200" height="330" />
    <rect x="690" y="370" rx="8" ry="8" width="200" height="330" />
  </ContentLoader>
);

export default MyLoader;