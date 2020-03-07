import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/theboothfairy-logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex justify-center">
      <Logo className="m-12" />
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
