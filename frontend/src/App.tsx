import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'

type AppProps = {
    router: ReturnType<typeof createRouter>
}

const App = ({router} : Readonly<AppProps>) => {
  return (
    <RouterProvider router={router} />
  )
}

export default App