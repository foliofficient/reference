export async function fetchGetJSON(url) {
  try {
    const data = await fetch(url).then((res) => res.json())
    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
}

export async function fetchPostRedirect(url, data) {
  console.log('fetchPostRedirect')
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data || {}),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}

export async function fetchPost(url, data, headers = {}) {
  console.log('fetchPost: url', url)
  console.log('fetchPost: enter', data)
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors', // no-cors, *cors, same-origin
    body: JSON.stringify(data || {}),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  })
  console.log('fetchPost.response: ', response)

  const jsonResult = response.json()
  console.log('fetchPost.jsonResult: ', jsonResult)
  return jsonResult
}

export async function fetchPostJSON(url, data) {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
    })
    return await response.json() // parses JSON response into native JavaScript objects
    // return await response
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
    throw err
  }
}
