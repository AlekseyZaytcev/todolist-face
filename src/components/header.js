import { navigate } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { connect } from "react-redux"
import { destroyAuthToken } from "../store/auth/actions"
import { Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

class Header extends React.Component {
  handleLogoutClick = () => {
    this.props.destroyAuthToken()
    navigate("/sign_in")
  }
  render() {
    return (
      <header className="header__background_color">
        <div className="header__content_wrapper">
          <Image src="icons/ruby-garage.svg" height="70" />
          <div className="header__content">
            <h1>
              <Link to="/">{this.props.siteTitle}</Link>
            </h1>
            <div className="header__control_buttons">
              {this.props.authToken ? (
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="header__btn header__sign-out"
                  onClick={this.handleLogoutClick}
                />
              ) : (
                <div>
                  <a
                    variant="dark"
                    className="btn btn-secondary header__btn"
                    href="/sign_in"
                  >
                    Sign In
                  </a>
                  <a
                    variant="dark"
                    className="btn btn-secondary header__btn"
                    href="/sign_up"
                  >
                    Sign Up
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const mapStateToProps = state => {
  return { authToken: state.auth.token }
}

const mapDispatchToProps = { destroyAuthToken }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
