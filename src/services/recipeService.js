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


export { getAllRecipes, createRecipe, updateRecipe }
