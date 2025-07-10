import { useParams, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ArrowLeft, Home, Shield, Search, Video, Headphones, FileText, Link, HelpCircle, Monitor, Presentation } from 'lucide-react'

const moduleData = {
  nachhaltigkeit: {
    title: 'Nachhaltigkeitsrecht',
    short: 'Recht',
    color: 'bg-green-600',
    icon: '⚖️'
  },
  qm: {
    title: 'Nachhaltiges Qualitätsmanagement',
    short: 'QM',
    color: 'bg-orange-600',
    icon: '🏭'
  },
  et1: {
    title: 'ET 1',
    short: 'ET1',
    color: 'bg-purple-600',
    icon: '🔬'
  },
  et2: {
    title: 'ET 2',
    short: 'ET2',
    color: 'bg-yellow-600',
    icon: '⚡'
  },
  seminar: {
    title: 'Seminar/ Projekt',
    short: 'Projekt Seminar',
    color: 'bg-blue-600',
    icon: '📊'
  }
}

const contentTypes = [
  { id: 'videos-hsm', title: 'Videos HSM', icon: Video },
  { id: 'ppt', title: 'PPT', icon: Presentation },
  { id: 'audio-podcasts', title: 'Audio-Podcasts', icon: Headphones },
  { id: 'docs', title: 'Docs', icon: FileText },
  { id: 'links', title: 'Links', icon: Link },
  { id: 'quiz', title: 'Fragen | Quiz', icon: HelpCircle },
  { id: 'videos-www', title: 'Videos www', icon: Monitor }
]

export default function SubModuleDetail() {
  const { moduleId, bausteinId } = useParams<{ moduleId: string; bausteinId: string }>()
  const navigate = useNavigate()

  const module = moduleData[moduleId as keyof typeof moduleData]

  if (!module) {
    return <div>Module not found</div>
  }

  const handleContentClick = (contentType: string) => {
    navigate(`/module/${moduleId}/baustein/${bausteinId}/content/${contentType}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/module/${moduleId}`)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </Button>
            <div className="bg-blue-800 text-white px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">HSM</span>
                </div>
                <div className="text-sm font-bold">App ThüLeNa</div>
              </div>
            </div>
          </div>
          
          {/* Module Header */}
          <Card className={`${module.color} text-white border-0 shadow-lg`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl mb-2">{module.icon}</div>
                  <h1 className="text-xl font-bold">{module.title}</h1>
                </div>
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">{module.short.slice(0, 2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Image */}
      <div className="px-4 py-6">
        <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">🌱</div>
            <p className="text-sm opacity-90">Learning Materials</p>
          </div>
        </div>

        {/* Baustein Header */}
        <Button className={`w-full h-16 ${module.color} text-white border-0 shadow-lg mb-6`}>
          <span className="text-lg font-medium">
            Baustein {bausteinId}: {bausteinId === '1' ? 'Einführung' : '...'}
          </span>
        </Button>

        {/* Content Types */}
        <div className="space-y-4">
          {contentTypes.map((content) => (
            <Button
              key={content.id}
              className={`w-full h-16 ${module.color} hover:opacity-90 text-white border-0 shadow-lg`}
              onClick={() => handleContentClick(content.id)}
            >
              <div className="flex items-center justify-center space-x-3">
                <content.icon size={20} />
                <span className="text-lg font-medium">{content.title}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Module Icon in corner */}
        <div className="fixed bottom-20 right-4">
          <div className={`w-16 h-16 ${module.color} rounded-full flex items-center justify-center shadow-lg`}>
            <div className="text-white text-center">
              <div className="text-xs font-bold">{module.short}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around items-center">
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
            <ArrowLeft size={20} />
            <span className="text-xs">Back</span>
          </Button>
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