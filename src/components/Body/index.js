import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log(showContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)
      const contextClassName = !showContent ? 'hideContext' : 'sub-container2'
      const leftNavClassName = !showLeftNavbar
        ? 'hideLeftNav'
        : 'sub-container1'
      const rightNavClassName = !showRightNavbar
        ? 'hideRightNav'
        : 'sub-container3'
      return (
        <div className="body-container">
          <div className={leftNavClassName}>
            <h1 className="heading1">Left Navbar Menu</h1>
            <ul>
              <li className="item">Item1</li>
              <li className="item">Item2</li>
              <li className="item">Item3</li>
              <li className="item">Item4</li>
            </ul>
          </div>
          <div className={contextClassName}>
            <h1 className="heading1">Content</h1>
            <p className="item">
              Lorem ipsum dolr sit amet, consectetur adipiscing elit,sed do
              eiusmod tempor incididunt ut labore et dolore mangna aliqua.Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={rightNavClassName}>
            <h1 className="heading1">Right Navbar</h1>
            <div className="box">
              <p>Ad 1</p>
            </div>
            <div className="box">
              <p>Ad 2</p>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
