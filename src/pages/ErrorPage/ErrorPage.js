import classes from './ErrorPage.module.css'

/**
 * Error page
 *
 * @returns <ErrorPage />
 */
export default function ErrorPage() {
  return (
    <div className={ classes.content }>
      <h1 className={ classes.statusCode }>404</h1>
      <p className={ classes.statusMessage }>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  )
}