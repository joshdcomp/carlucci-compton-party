import React from 'react'
import GithubSlugger from "github-slugger"
import classnames from "classnames"

import { Href } from "./icons"

const SlugHeader = ({title, header='h3'}) => {
  const getSlug = new GithubSlugger()

  const sizes = {
    'h1': {
      icon: 'cc-slug_header-size-30',
      header: 'cc-text-header-30',
    },
    'h2': {
      icon: 'cc-slug_header-size-20',
      header: 'cc-text-header-20'
    },
    'h3': {
      icon: 'cc-slug_header-size-10',
      header: 'cc-text-header-10'
    },
    'h4': {
      icon: 'cc-slug_header-size-10',
      header: 'cc-text-header-5'
    },
    'h5': {
      icon: 'cc-slug_header-size-10',
      header: 'cc-text-header-1'
    },
  }
  
  const slug = getSlug.slug(title)

  const headerClasses = classnames(
    sizes[header].header,
    sizes[header].icon,
    'cc-slug_header'
  )
  const Component = header
  return (
    <Component className={headerClasses}>
      <a
        href={`#${slug}`}
        id={slug}
        className="cc-slug_header--link"
      >
        <Href />
      </a>

      {title}
    </Component>
  )
}
export default SlugHeader