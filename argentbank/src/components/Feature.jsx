// IMPORTS // ______________________________________________________________

import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
// styles imports
import {
  FeatureItemStyle,
  FeatureImage,
  FeatureText,
  FeatureTitle,
} from '../styles/components/feature'

// JSX // _________________________________________________________________

/**
 * Feature component to display feature
 * @name Feature
 * @param {string} icon
 * @param {string} alt
 * @param {string} title
 * @param {string} content
 * @returns {?JSX}
 */

export default function Feature ({ icon, alt, title, content }){
  const selectTheme = (state) => state.theme
  const theme = useSelector(selectTheme)

  return (
    <FeatureItemStyle>
      <FeatureImage theme={theme} src={icon} alt={alt} />
      <FeatureTitle theme={theme}>{title}</FeatureTitle>
      <FeatureText theme={theme}>{content}</FeatureText>
    </FeatureItemStyle>
  )
}

// PROPTYPES // ___________________________________________________________

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

FeatureImage.propTypes = {
  theme: PropTypes.string.isRequired,
}

// EXPORT // ______________________________________________________________

