"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { 
  FIELDER_CHURCH_CONFIG, 
  FIELDER_LAST_WEEK_SERMON, 
  FIELDER_SERMON_INTERPRETATION,
  LIFELINE_CATEGORIES 
} from "@/lib/fielder-dummy-data"

export default function LastWeekPage() {
  const router = useRouter()
  const [showLifelineModal, setShowLifelineModal] = useState(false)
  const [userAgeGroup, setUserAgeGroup] = useState<string>("adult")
  
  const sermon = FIELDER_LAST_WEEK_SERMON
  const interpretation = FIELDER_SERMON_INTERPRETATION[userAgeGroup as keyof typeof FIELDER_SERMON_INTERPRETATION] 
    || FIELDER_SERMON_INTERPRETATION.default

  const ageGroups = [
    { id: "teen", label: "Teen", icon: "school" },
    { id: "young-adult", label: "Young Adult", icon: "person" },
    { id: "adult", label: "Adult", icon: "groups" },
    { id: "senior", label: "Senior", icon: "elderly" },
  ]

  const contentSections = [
    { title: "Stories", icon: "auto_stories", path: "/last-week/stories", color: "from-amber-500 to-orange-500" },
    { title: "Poetry", icon: "edit_note", path: "/last-week/poetry", color: "from-rose-500 to-pink-500" },
    { title: "Imagery", icon: "palette", path: "/last-week/imagery", color: "from-emerald-500 to-teal-500" },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] shadow-2xl">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-[#0c1929]/95 backdrop-blur-md p-4 justify-between border-b border-white/10">
        <button
          onClick={() => router.push('/')}
          className="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-base font-bold text-violet-400">Last Week's Sermon</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-24">
        {/* Sermon Header */}
        <div className="px-6 pt-6 pb-4">
          <p className="text-violet-300/70 text-sm">{sermon.series} • {sermon.date}</p>
          <h1 className="text-2xl font-bold text-white mt-1">{sermon.title}</h1>
          <p className="text-blue-200/70 text-sm mt-1">Pastor {sermon.pastor}</p>
        </div>

        {/* Scripture Card */}
        <div className="px-5 py-4">
          <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl p-5 border border-violet-500/30">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-violet-400 text-2xl mt-1">menu_book</span>
              <div>
                <p className="text-violet-300 font-semibold mb-2">{sermon.scriptures.join(", ")}</p>
                <p className="text-white text-sm font-serif italic leading-relaxed">
                  "{sermon.scriptureText}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Age Group Selector */}
        <div className="px-5 py-4">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">tune</span>
            Personalize for Your Stage
          </h3>
          <div className="flex gap-2">
            {ageGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setUserAgeGroup(group.id)}
                className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all flex flex-col items-center gap-1 ${
                  userAgeGroup === group.id
                    ? "bg-violet-500/30 text-violet-300 border border-violet-500/50"
                    : "bg-white/5 text-white/70 border border-transparent hover:bg-white/10"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{group.icon}</span>
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interpretation */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-400">psychology</span>
            What It Means For You
          </h2>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            {interpretation.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-blue-100/80 leading-relaxed mb-3 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-400">checklist</span>
            Key Takeaways
          </h2>
          <div className="space-y-2">
            {sermon.keyPoints.map((point, idx) => (
              <div key={idx} className="flex gap-3 bg-white/5 rounded-xl p-3 border border-white/10">
                <div className="size-6 shrink-0 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-blue-100/80 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull Quote */}
        <div className="px-5 py-4">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-5 border border-amber-400/20">
            <span className="material-symbols-outlined text-amber-400 text-3xl mb-2 block">format_quote</span>
            <p className="text-white italic font-serif text-lg leading-relaxed">
              "{sermon.pullQuotes[0]}"
            </p>
            <p className="text-amber-300/70 text-sm mt-3">— Pastor {sermon.pastor}</p>
          </div>
        </div>

        {/* Go Deeper Section */}
        <div className="px-5 py-4">
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400">explore</span>
            Go Deeper
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {contentSections.map((section) => (
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
            Apply this sermon to your life situation
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
                Select what you're going through, and we'll show you how "{sermon.title}" speaks to your situation.
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
                          router.push(`/last-week/lifelines?topic=${encodeURIComponent(topic)}`)
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
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
