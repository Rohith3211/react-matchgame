/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import './index.css'

// eslint-disable-next-line arrow-body-style
const TabList = props => {
  const {nameList, onClickToChangeImages, isActive} = props
  const {tabId, displayText} = nameList

  const toChangeImage = () => {
    onClickToChangeImages(tabId)
  }

  const addStyle = isActive ? 'color' : ''

  return (
    <li>
      <button onClick={toChangeImage} className={`btn-items ${addStyle}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabList
