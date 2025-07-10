import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './components/WelcomeScreen'
import ModuleOverview from './components/ModuleOverview'
import ModuleDetail from './components/ModuleDetail'
import SubModuleDetail from './components/SubModuleDetail'
import ContentView from './components/ContentView'
import './App.css'

function App() {
  const [continueClicked, setContinueClicked] = useState(false)

  const handleContinue = () => {
    setContinueClicked(true)
  }

  if (!continueClicked) {
    return <WelcomeScreen onContinue={handleContinue} />
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<ModuleOverview />} />
          <Route path="/module/:moduleId" element={<ModuleDetail />} />
          <Route path="/module/:moduleId/baustein/:bausteinId" element={<SubModuleDetail />} />
          <Route path="/module/:moduleId/baustein/:bausteinId/content/:contentType" element={<ContentView />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App