import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Bot, MessageCircle, Users, BookOpen, Search, Home, Shield, User } from 'lucide-react'

const modules = [
  {
    id: 'nachhaltigkeit',
    title: 'Nachhaltigkeitsrecht',
    short: 'Recht',
    color: 'bg-green-600',
    icon: '⚖️'
  },
  {
    id: 'qm',
    title: 'Nachhaltiges Qualitätsmanagement',
    short: 'QM',
    color: 'bg-orange-600',
    icon: '🏭'
  },
  {
    id: 'et1',
    title: 'ET 1',
    short: 'ET1',
    color: 'bg-purple-600',
    icon: '🔬'
  },
  {
    id: 'et2',
    title: 'ET 2',
    short: 'ET2',
    color: 'bg-yellow-600',
    icon: '⚡'
  },
  {
    id: 'seminar',
    title: 'Seminar/ Projekt',
    short: 'Projekt Seminar',
    color: 'bg-blue-600',
    icon: '📊'
  }
]

const additionalFeatures = [
  {
    id: 'ki-bot',
    title: 'KI-BOT',
    color: 'bg-orange-500',
    icon: Bot
  },
  {
    id: 'contact',
    title: '... contact Profs',
    color: 'bg-blue-700',
    icon: Users
  },
  {
    id: 'about',
    title: '... about ThüLeNa@HSM',
    color: 'bg-purple-700',
    icon: BookOpen
  },
  {
    id: 'forum',
    title: 'Forum',
    color: 'bg-yellow-700',
    icon: MessageCircle
  },
  {
    id: 'blog',
    title: 'Blog',
    color: 'bg-red-700',
    icon: User
  }
]

export default function ModuleOverview() {
  const navigate = useNavigate()

  const handleModuleClick = (moduleId: string) => {
    navigate(`/module/${moduleId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ThüLeNa</h1>
              <p className="text-gray-600">Module</p>
            </div>
            <div className="bg-blue-800 text-white px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">HSM</span>
                </div>
                <div className="text-sm font-bold">App ThüLeNa</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        {/* Module Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {modules.map((module) => (
            <Card 
              key={module.id} 
              className={`${module.color} text-white border-0 shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200`}
              onClick={() => handleModuleClick(module.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl mb-2">{module.icon}</div>
                    <h3 className="font-bold text-lg leading-tight">{module.short}</h3>
                  </div>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{module.short.slice(0, 2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="space-y-4">
          {additionalFeatures.map((feature) => (
            <Button
              key={feature.id}
              className={`w-full h-16 ${feature.color} hover:opacity-90 text-white border-0 shadow-lg`}
              onClick={() => console.log(`Navigate to ${feature.id}`)}
            >
              <div className="flex items-center justify-center space-x-3">
                <feature.icon size={24} />
                <span className="text-lg font-medium">{feature.title}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around items-center">
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
            <Home size={20} />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
            <Shield size={20} />
            <span className="text-xs">Privacy</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
            <Search size={20} />
            <span className="text-xs">Suche</span>
          </Button>
        </div>
      </div>
    </div>
  )
}