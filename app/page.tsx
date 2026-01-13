"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"
import { FIELDER_CHURCH_CONFIG, LIFELINE_CATEGORIES } from "@/lib/fielder-dummy-data"

export default function HomePage() {
  const router = useRouter()
  const { devotional, verse } = useDevotional()
  const [showLifelineModal, setShowLifelineModal] = useState(false)

  const contentSections = [
    { 
      title: "Context", 
      icon: "menu_book", 
      path: "/context", 
      color: "from-blue-500 to-cyan-500",
      description: "Historical & cultural background"
    },
    { 
      title: "Stories", 
      icon: "auto_stories", 
      path: "/stories", 
      color: "from-amber-500 to-orange-500",
      description: "Modern parables"
    },
    { 
      title: "Poetry", 
      icon: "edit_note", 
      path: "/poetry", 
      color: "from-rose-500 to-pink-500",
      description: "Verse in verse"
    },
    { 
      title: "Imagery", 
      icon: "palette", 
      path: "/imagery", 
      color: "from-emerald-500 to-teal-500",
      description: "Symbols & meaning"
    },
    { 
      title: "Songs", 
      icon: "music_note", 
      path: "/songs", 
      color: "from-violet-500 to-purple-500",
      description: "Worship connections"
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] shadow-2xl">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-[#0c1929]/95 backdrop-blur-md p-4 justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="text-white font-bold">{FIELDER_CHURCH_CONFIG.name}</span>
        </div>
        <button
          onClick={() => router.push('/last-week')}
          className="px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-sm font-medium border border-violet-500/30 hover:bg-violet-500/30 transition-colors"
        >
          Last Week's Sermon
        </button>
      </div>

      <main className="flex-1 pb-24">
        {/* Date Header */}
        <div className="px-6 pt-6 pb-2">
          <p className="text-blue-300/70 text-sm">{devotional.date}</p>
          <h1 className="text-2xl font-bold text-white mt-1">{devotional.title}</h1>
        </div>

        {/* Verse Card */}
        <div className="px-5 py-4">
          <div className="bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-2xl p-5 border border-white/10">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-violet-400 text-2xl mt-1">format_quote</span>
              <div>
                <p className="text-white text-lg font-serif italic leading-relaxed">
                  "{verse.text}"
                </p>
                <p className="text-violet-300 font-semibold mt-3">{verse.reference}</p>
                <p className="text-blue-300/50 text-sm">{verse.translation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interpretation */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">psychology</span>
            Today's Reflection
          </h2>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            {devotional.interpretation.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-blue-100/80 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Application */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400">task_alt</span>
            Today's Practice
          </h2>
          <div className="space-y-3">
            {devotional.application.map((item, idx) => (
              <div key={idx} className="flex gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="size-6 shrink-0 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Go Deeper Section */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400">explore</span>
            Go Deeper
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {contentSections.slice(0, 3).map((section) => (
              <button
                key={section.path}
                onClick={() => router.push(section.path)}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className={`size-10 mx-auto rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center mb-2`}>
                  <span className="material-symbols-outlined text-white text-lg">{section.icon}</span>
                </div>
                <p className="text-white text-sm font-medium">{section.title}</p>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {contentSections.slice(3).map((section) => (
              <button
                key={section.path}
                onClick={() => router.push(section.path)}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors text-center"
              >
                <div className={`size-10 mx-auto rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center mb-2`}>
                  <span className="material-symbols-outlined text-white text-lg">{section.icon}</span>
                </div>
                <p className="text-white text-sm font-medium">{section.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Lifeline Button */}
        <div className="px-5 py-4">
          <button
            onClick={() => setShowLifelineModal(true)}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">support</span>
            Find Your Lifeline
          </button>
          <p className="text-center text-blue-300/50 text-sm mt-2">
            Apply today's verse to your life situation
          </p>
        </div>
      </main>

      {/* Lifeline Modal */}
      {showLifelineModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0c1929] rounded-t-3xl max-h-[85vh] overflow-hidden animate-slide-up">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#0c1929] p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Find Your Lifeline</h2>
              <button
                onClick={() => setShowLifelineModal(false)}
                className="size-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-70px)] p-4">
              <p className="text-blue-200/70 text-sm mb-6">
                Select what you're going through, and we'll show you how {verse.reference} speaks to your situation.
              </p>
              
              {LIFELINE_CATEGORIES.map((category) => (
                <div key={category.name} className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`material-symbols-outlined text-${category.color}-400`}>{category.icon}</span>
                    <h3 className="text-white font-semibold">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => {
                          setShowLifelineModal(false)
                          router.push(`/deep-dive?topic=${encodeURIComponent(topic)}`)
                        }}
                        className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-blue-100/80 text-sm hover:bg-white/10 hover:border-white/20 transition-colors"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
