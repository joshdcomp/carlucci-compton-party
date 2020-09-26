import React from 'react'
import { Link } from 'gatsby'

import { Home } from "./icons"

const PageTitle = ({ title }) => {
  return (
    <h1 className="cc-text-header-30 cc-layout--title">
      <Link to="/" className="cc-layout--title_home_link"><Home /></Link>
      {title}
    </h1>
  )
}
export default PageTitle