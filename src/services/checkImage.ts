const checkImage = (path: string): Promise<boolean> =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)

    img.src = path
  })

export default checkImage