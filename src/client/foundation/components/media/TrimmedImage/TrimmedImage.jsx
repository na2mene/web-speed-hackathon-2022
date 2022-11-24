import React, { useEffect, useState } from "react";

const convertFilePath = (src, width) => {
  const paths = src.split('/')
  // (e.g.) 100_001.webp
  const converted = `${width}_${paths.pop().replace('jpg', 'webp')}`
  paths.push(converted);
  return paths.join('/');
}

/**
 * @typedef Props
 * @property {string} src
 * @property {number} width
 * @property {number} height
 */

/** @type {React.VFC<Props>} */
export const TrimmedImage = ({ height, src, width }) => {
  return <img src={convertFilePath(src, width)} height={height} width={width} loading="lazy" />;
};
