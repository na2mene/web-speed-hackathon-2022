import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BreakPoint } from "../../../styles/variables";

const Image = styled.img`
  width: '100%';
  height: 'auto';
  @media (max-width: ${BreakPoint.MOBILE}px) {
    width: 361px;
    height: 203.06px;
  }
`;

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
  if (width == 400) {
    return <Image src={convertFilePath(src, width)} height={height} width={width} />;
  }
  return <img src={convertFilePath(src, width)} height={height} width={width} loading="lazy" />;
};
