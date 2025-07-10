import { useParams, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ArrowLeft, Home, Shield, Search, Play, Download, ExternalLink } from 'lucide-react'

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

const contentData = {
  'videos-hsm': {
    title: 'Videos HSM',
    items: [
      { id: 1, title: 'Einführung in die Nachhaltigkeit', duration: '12:34', type: 'video' },
      { id: 2, title: 'Rechtliche Grundlagen', duration: '18:45', type: 'video' },
      { id: 3, title: 'Praktische Anwendung', duration: '15:23', type: 'video' }
    ]
  },
  'audio-podcasts': {
    title: 'Audio-Podcasts',
    items: [
      { id: 1, title: 'Prozessbeschreibung', filename: 'Podcast PB.mp3', duration: '25:12', type: 'audio' },
      { id: 2, title: 'Nachhaltige Entwicklung', filename: 'Podcast NE.mp3', duration: '32:18', type: 'audio' },
      { id: 3, title: 'Qualitätsmanagement', filename: 'Podcast QM.mp3', duration: '28:45', type: 'audio' }
    ]
  },
  'videos-www': {
    title: 'Videos www',
    items: [
      { id: 1, title: 'BMU Erklärvideo zur Nachhaltigkeit', source: 'YouTube', duration: '8:42', type: 'video' },
      { id: 2, title: 'Nachhaltigkeitsrecht Kompakt', source: 'Vimeo', duration: '12:15', type: 'video' },
      { id: 3, title: 'Praktische Beispiele', source: 'YouTube', duration: '9:33', type: 'video' }
    ]
  },
  'docs': {
    title: 'Docs',
    items: [
      { id: 1, title: 'Nachhaltigkeitsrecht - Grundlagen.pdf', size: '2.1 MB', type: 'pdf' },
      { id: 2, title: 'Gesetzestexte - Kompendium.pdf', size: '4.8 MB', type: 'pdf' },
      { id: 3, title: 'Übungsaufgaben.pdf', size: '1.2 MB', type: 'pdf' }
    ]
  },
  'links': {
    title: 'Links',
    items: [
      { id: 1, title: 'Bundesministerium für Umwelt', url: 'https://www.bmu.de', type: 'link' },
      { id: 2, title: 'Nachhaltigkeitsrat', url: 'https://www.nachhaltigkeitsrat.de', type: 'link' },
      { id: 3, title: 'Umweltbundesamt', url: 'https://www.umweltbundesamt.de', type: 'link' }
    ]
  },
  'quiz': {
    title: 'Fragen | Quiz',
    items: [
      { id: 1, title: 'Grundlagen Quiz', questions: 15, type: 'quiz' },
      { id: 2, title: 'Vertiefung Quiz', questions: 20, type: 'quiz' },
      { id: 3, title: 'Abschluss Test', questions: 25, type: 'quiz' }
    ]
  },
  'ppt': {
    title: 'PPT',
    items: [
      { id: 1, title: 'Einführung Nachhaltigkeit.pptx', slides: 24, type: 'ppt' },
      { id: 2, title: 'Rechtliche Aspekte.pptx', slides: 18, type: 'ppt' },
      { id: 3, title: 'Praxisbeispiele.pptx', slides: 15, type: 'ppt' }
    ]
  }
}

export default function ContentView() {
  const { moduleId, bausteinId, contentType } = useParams<{ moduleId: string; bausteinId: string; contentType: string }>()
  const navigate = useNavigate()

  const module = moduleData[moduleId as keyof typeof moduleData]
  const content = contentData[contentType as keyof typeof contentData]

  if (!module || !content) {
    return <div>Content not found</div>
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderContentItem = (item: any) => {
    
    switch (item.type) {
      case 'video':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.duration} {item.source && `• ${item.source}`}
                  </p>
                </div>
                <Button size="sm" className={module.color}>
                  <Play size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      case 'audio':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    {item.filename} • {item.duration}
                  </p>
                </div>
                <Button size="sm" className={module.color}>
                  <Play size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      case 'pdf':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.size}</p>
                </div>
                <Button size="sm" className={module.color}>
                  <Download size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      case 'link':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.url}</p>
                </div>
                <Button size="sm" className={module.color}>
                  <ExternalLink size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      case 'quiz':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.questions} Fragen</p>
                </div>
                <Button size="sm" className={module.color}>
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      case 'ppt':
        return (
          <Card key={item.id} className="bg-white shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.slides} Slides</p>
                </div>
                <Button size="sm" className={module.color}>
                  <Download size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      
      default:
        return null
    }
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
              onClick={() => navigate(`/module/${moduleId}/baustein/${bausteinId}`)}
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

      {/* Content */}
      <div className="px-4 py-6">
        {/* Baustein Header */}
        <Button className={`w-full h-16 ${module.color} text-white border-0 shadow-lg mb-6`}>
          <span className="text-lg font-medium">
            Baustein {bausteinId}: {bausteinId === '1' ? 'Einführung' : '...'}
          </span>
        </Button>

        {/* Content Type Header */}
        <Button className={`w-full h-16 ${module.color} text-white border-0 shadow-lg mb-6`}>
          <span className="text-lg font-medium">{content.title}</span>
        </Button>

        {/* Content Items */}
        <div className="space-y-4">
          {content.items.map(renderContentItem)}
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