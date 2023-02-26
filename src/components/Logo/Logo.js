import styles from './Logo.module.css'

/**
 * Logo of the web application
 *
 * @returns {React.ReactComponent}
 */
export default function Logo() {
  return (
    <img src="/assets/logo/logo-text.svg" alt="" className={ styles.logo } />
  )
}
