import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface WelcomeScreenProps {
  onContinue: () => void
}

export default function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContinue()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            ThüLeNa@HSM
          </h1>
          <p className="text-lg text-gray-600">Willkommen!</p>
        </div>

        {/* University Image Placeholder */}
        <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🏫</div>
            <p className="text-sm opacity-90">Hochschule Schmalkalden</p>
          </div>
        </div>

        {/* Input Form */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-center text-xl">Eingabefeld</CardTitle>
            <CardDescription className="text-center">
              Bitte geben Sie einen Wert ein und klicken Sie auf Weiter.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Eingabe"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="text-center text-lg h-14 border-2 border-gray-300 focus:border-blue-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700"
                disabled={inputValue.trim() === ''}
              >
                Weiter
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* HSM App Logo */}
        <div className="flex justify-center">
          <div className="bg-blue-800 text-white px-6 py-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">HSM</span>
              </div>
              <div>
                <div className="text-xs opacity-80">App</div>
                <div className="text-sm font-bold">ThüLeNa</div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center bg-orange-100 p-6 rounded-lg">
          <p className="text-orange-800 font-medium">
            Vielen Dank für Ihr Interesse!
          </p>
        </div>

        {/* Landscape Image */}
        <div className="w-full h-32 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🌅</div>
            <p className="text-sm opacity-90">Thüringen Landscape</p>
          </div>
        </div>
      </div>
    </div>
  )
}