import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [ageMode, setAgeMode] = useState(() => {
    return localStorage.getItem('creatureQuest_ageMode') || 'explorer'
  })

  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('creatureQuest_sound') !== 'false'
  })

  useEffect(() => {
    localStorage.setItem('creatureQuest_ageMode', ageMode)
  }, [ageMode])

  useEffect(() => {
    localStorage.setItem('creatureQuest_sound', String(soundEnabled))
  }, [soundEnabled])

  const isLittle = ageMode === 'little'

  return (
    <AppContext.Provider value={{ ageMode, setAgeMode, isLittle, soundEnabled, setSoundEnabled }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
