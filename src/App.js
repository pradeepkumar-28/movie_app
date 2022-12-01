import React from 'react'
import ExtraMovies from './layout/ExtraMovies/ExtraMovies'
import Langauge from './layout/langauge/Langauge'
import OriginalMovies from './layout/origional/OriginalMovies'
import TrandingMovies from './layout/Tranding/TrandingMovies'



function App() {
  return (
      <>
        <TrandingMovies/>
        <OriginalMovies/>
        <Langauge/>
        <ExtraMovies/>
      </>
  )
}

export default App