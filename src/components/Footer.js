import React from "react"
import * as styles from "../styles/footer.module.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

class Footer extends React.PureComponent {
  state = {
    value: "hello@kanami.tech",
    copied: false,
  }

  onCopy = () => {
    this.setState({ copied: true })
  }
  render() {
    return (
      <footer>
        <div className={styles.cta}>
          <h3>Get in touch!</h3>
          <div className={styles.contact}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <span className={styles.email}>hello@kanami.tech</span>
            <div>
              <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
                <button className={styles.btn} onClick={this.onClick}>
                  Click to Copy
                </button>
              </CopyToClipboard>
            </div>

            <div className={styles.copied}>
              {this.state.copied ? <span>Copied!</span> : null}
            </div>
          </div>
        </div>
        <div className={styles.socialIcon}>
          <Link to="https://www.linkedin.com/in/kanami-hidaka-jp/">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </Link>
          <Link to="https://github.com/kanami-h/">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
          <Link to="https://twitter.com/kanami_tomdom">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
        </div>
        <p className={styles.copyRight}>
          Copyright {new Date().getFullYear()} Kanami Hidaka
        </p>
      </footer>
    )
  }
}

export default Footer
