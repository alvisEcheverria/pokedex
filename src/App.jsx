import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import UserInput from './components/UserInput'
import Pokemon from './components/Pokemon'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import './App.css'
import './styles.css'

function App() {

  return (
    
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<UserInput/>}/>

            <Route element={<ProtectedRoutes/>}>
              <Route path='/pokemon' element={<Pokemon/>}/>
              <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
            </Route>
            
          </Routes>
        </div>
      </HashRouter>
    
  )
}

export default App
