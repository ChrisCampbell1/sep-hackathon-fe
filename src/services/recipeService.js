// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/recipes`

async function getAllRecipes() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function createRecipe(data) {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function updateRecipe(data, id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      method: 'PUT',
      body: JSON.stringify(data)
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addImage(image, id) {
  try {
    const imageData = new FormData()
    imageData.append('image', image)
    const recipe = await fetch(`${BASE_URL}/${id}/add-image`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: imageData
    })
    return await recipe.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addVideo(video, id) {
  try {
    const videoData = new FormData()
    videoData.append('video', video)
    const recipe = await fetch(`${BASE_URL}/${id}/add-video`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: videoData
    })
    return await recipe.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addAudio(audio, id) {
  try {
    const audioData = new FormData()
    audioData.append('audio', audio)
    const recipe = await fetch(`${BASE_URL}/${id}/add-audio`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: audioData
    })
    return await recipe.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function showRecipe(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export { getAllRecipes, createRecipe, updateRecipe, addImage, addVideo, addAudio, showRecipe }
