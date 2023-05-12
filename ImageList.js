/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable arrow-body-style */
import './index.css'

const ImageList = props => {
  const {details, toClickTheImage} = props
  const {id, imageUrl, thumbnailUrl, category} = details

  const matchingImage = () => {
    toClickTheImage(id)
  }
  return (
    <li>
      <button className="b-image" onClick={matchingImage}>
        <img className="small-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageList
