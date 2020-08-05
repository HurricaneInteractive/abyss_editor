import React from "react"
import { open } from 'tauri/api/dialog'

const IndexPage = () => {
  const openPickFolder = () => {
    open({
      directory: true
    }).then(res => console.log(res))
  }

  return (
    <>
      <button onClick={openPickFolder}>Open folder dialog</button>
    </>
  )
}

export default IndexPage
