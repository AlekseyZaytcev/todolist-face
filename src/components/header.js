import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Image } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header className="header__background_color">
    <div className="header__content_wrapper">
      <Image src="icons/ruby-garage.svg" height="70" />
      <div  className="header__content">
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
