// npm modules
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components


// services
import * as recipeService from '../../services/recipeService'


// styles
import styles from './MediaUploadForm.module.css'

// component


export default function MediaUploadForm({ increaseFormNumber, decreaseFormNumber, profile, recipes, setRecipes, setRecipe, recipe }) {
  const navigate = useNavigate()
  
  // holds the media that will be sent via the recipe service to the back end when the user hits next or back
  const [image, setImage] = useState(null)
  const [video, setVideo] = useState(null)
  const [audio, setAudio] = useState(null)
  const [formData, setFormData] = useState(
    {share: false}
  )

  // updates public based on checkbox
  const handleCheckboxChange = (e) => {
    console.log("check")
    setFormData((prevValue) => {
      console.log(prevValue)
      return {share: !prevValue.share}
    }
    )
  }

  // updates media state
  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }
  const handleVideoChange = (e) => {
    setVideo(e.target.files[0])
  }
  const handleAudioChange = (e) => {
    setAudio(e.target.files[0])
  }

  // calls the service to update the recipe with ingredients stored in form data, increases the form state number
  const handleSubmit = async (e) => {
    e.preventDefault()
    await recipeService.updateRecipe(formData, recipe._id)
    if (image !== null) {
      await recipeService.addImage(image, recipe._id)
    }
    if (video !== null) {
      await recipeService.addVideo(video, recipe._id)
    }
    if (audio !== null) {
      await recipeService.addAudio(audio, recipe._id)
    }
    const updatedRecipe = await recipeService.showRecipe(recipe._id)
    await setRecipe(updatedRecipe)
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id)
    updatedRecipes = [...updatedRecipes, updatedRecipe]
    await setRecipes(updatedRecipes)
    navigate(`/recipes`)
  }

  // calls the service to update the recipe with ingredients stored in form data decreases the form state number
  const handleBack = async (e) => {
    e.preventDefault()
    if (formData.share === true) {
      await recipeService.updateRecipe(formData, recipe._id)
    }
    if (image !== null) {
      await recipeService.addImage(image, recipe._id)
    }
    if (video !== null) {
      await recipeService.addVideo(video, recipe._id)
    }
    if (audio !== null) {
      await recipeService.addAudio(audio, recipe._id)
    }
    const updatedRecipe = await recipeService.showRecipe(recipe._id)
    await setRecipe(updatedRecipe)
    let updatedRecipes = recipes.filter((el) => el._id !== updatedRecipe._id)
    updatedRecipes = [...updatedRecipes, updatedRecipe]
    await setRecipes(updatedRecipes)
    increaseFormNumber()
  }


    return (
      <form className={styles.container}>
        <div className={styles.inputContainerUpload}>
          {image ?
            <label htmlFor="image">Image Selected</label>
            :
            <label htmlFor="image">Select Image</label>
          }

          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <div className={styles.inputContainerUpload}>
          {video ?
            <label htmlFor="video">Video Selected</label>
            :
            <label htmlFor="video">Select Video</label>
          }

          <input
            type="file"
            name="video"
            id="video"
            onChange={handleVideoChange}
            accept="video/*"
            required
          />
        </div>
        <div className={styles.inputContainerUpload}>
          {audio ?
            <label htmlFor="audio">Audio Selected</label>
            :
            <label htmlFor="audio">Select Audio</label>
          }

          <input
            type="file"
            name="audio"
            id="audio"
            onChange={handleAudioChange}
            accept="audio/*"
            required
          />
        </div>
        <div className={styles.inputContainerCheck}>
        <label htmlFor="share">Share Publicly?</label>
        <input
          type="checkbox"
          name="share"
          id="share"
          onChange={handleCheckboxChange}
        />
      </div>

      <div className={styles.bottom}>
          <p></p>
          <div className={styles.buttons}>

          </div>
        </div>

        <button
          type='button'
          onClick={handleSubmit}
        >
          Upload and Save
        </button>
        <button
          type='button'
          onClick={handleBack}
        >
          Upload and Back
        </button>
      </form>
    )
  }
