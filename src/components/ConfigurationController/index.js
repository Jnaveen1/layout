import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleShowContent = () => {
        onToggleShowContent()
      }
      const toggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const toggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }
      const getContentCheckbox = () => (
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="content"
            id="content"
            onChange={toggleShowContent}
            defaultChecked={showContent}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
        </div>
      )

      const getLeftbarCheckbox = () => (
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="LeftNavbar"
            id="LeftNavbar"
            defaultChecked={showLeftNavbar}
            onChange={toggleShowLeftNavbar}
          />
          <label htmlFor="content" className="label">
            Left Navbar
          </label>
        </div>
      )

      const getRightbarCheckbox = () => (
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="LeftNavbar"
            id="LeftNavbar"
            defaultChecked={showRightNavbar}
            onChange={toggleShowRightNavbar}
          />
          <label htmlFor="content" className="label">
            Right Navbar
          </label>
        </div>
      )

      return (
        <div className="layout-container1">
          <h1>Layout</h1>
          {getContentCheckbox()}
          {getLeftbarCheckbox()}
          {getRightbarCheckbox()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
