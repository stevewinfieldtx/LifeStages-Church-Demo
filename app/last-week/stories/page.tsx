"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FIELDER_LAST_WEEK_SERMON, FIELDER_SERMON_STORIES } from "@/lib/fielder-dummy-data"

export default function SermonStoriesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(0)
  const sermon = FIELDER_LAST_WEEK_SERMON

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] shadow-2xl">
      {/* Header */}
      <div className="sticky top-0 z-50 flex items-center bg-[#0c1929]/95 backdrop-blur-md p-4 justify-between border-b border-white/10">
        <button
          onClick={() => router.back()}
          className="flex size-10 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-base font-bold text-amber-400">Stories</h2>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-4 border-b border-white/10">
        {FIELDER_SERMON_STORIES.map((story, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === idx
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-white/5 text-white/70 border border-transparent hover:bg-white/10"
            }`}
          >
            {story.setting}
          </button>
        ))}
      </div>

      <main className="flex-1 pb-10">
        {/* Sermon Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-amber-300/70 text-sm">Based on "{sermon.title}"</p>
          <p className="text-blue-200/50 text-xs mt-1">{sermon.scriptures.join(", ")}</p>
        </div>

        {/* Story Content */}
        <div className="px-5 py-4">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{FIELDER_SERMON_STORIES[activeTab].title}</h2>
            <div className="prose prose-invert">
              {FIELDER_SERMON_STORIES[activeTab].text.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-blue-100/80 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Reflection Prompt */}
        <div className="px-5 py-4">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-400/20">
            <span className="material-symbols-outlined text-amber-400 text-xl mb-2 block">lightbulb</span>
            <p className="text-white font-medium mb-1">Reflect</p>
            <p className="text-amber-100/70 text-sm">
              Where in your life have you been trying to produce fruit apart from the vine? What would it look like to simply stay connected?
            </p>
          </div>
        </div>

        {/* Back to Sermon */}
        <div className="px-5 pt-4">
          <button
            onClick={() => router.push('/last-week')}
            className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Sermon
          </button>
        </div>
      </main>
    </div>
  )
}
