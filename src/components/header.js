import PropTypes from "prop-types"
import React from "react"
import LogoSVG from "../images/theboothfairy-logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex items-center justify-center">
      <LogoSVG className="m-12" />
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
