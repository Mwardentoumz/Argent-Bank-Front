// IMPORTS // ______________________________________________________________

import React from 'react'
// datas imports
import features from '../datas/features'
// components imports
import Feature from './Feature'
// styles imports
import { FeaturesStyle } from '../styles/components/features'

// JSX // _________________________________________________________________

/**
 * Features component to display bank's features
 * @name Features
 * @returns {?JSX}
 */

export default function Features () {
  return (
    <FeaturesStyle>
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          content={feature.content}
        />
      ))}
    </FeaturesStyle>
  )
}

// EXPORT // ______________________________________________________________

