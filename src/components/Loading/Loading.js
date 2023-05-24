import PropTypes from 'prop-types'
import classes from './Loading.module.css'

/**
 * Display a loader
 *
 * @param {Object} param
 * @param {Boolean} param.isActive
 * @returns <Loading />
 */
export default function Loading({ isActive = true }) {
  const classesHide = isActive === false ? classes.hide : null

  return (
    <div className={ classes.loading+' '+classesHide }>
      <div className={ classes.loadingLevelOne }></div>
      <div className={ classes.loadingLevelTwo }></div>
      <div className={ classes.loadingLevelThree }></div>
    </div>
  )
}

Loading.propTypes = {
  isActive: PropTypes.bool.isRequired
}