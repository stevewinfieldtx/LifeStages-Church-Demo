"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FIELDER_LAST_WEEK_SERMON, FIELDER_SERMON_POETRY } from "@/lib/fielder-dummy-data"

export default function SermonPoetryPage() {
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
        <h2 className="text-base font-bold text-rose-400">Poetry</h2>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-4 border-b border-white/10 overflow-x-auto">
        {FIELDER_SERMON_POETRY.map((poem, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`py-2 px-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === idx
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                : "bg-white/5 text-white/70 border border-transparent hover:bg-white/10"
            }`}
          >
            {poem.style}
          </button>
        ))}
      </div>

      <main className="flex-1 pb-10">
        {/* Sermon Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-rose-300/70 text-sm">Inspired by "{sermon.title}"</p>
        </div>

        {/* Poetry Content */}
        <div className="px-5 py-4">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-1">{FIELDER_SERMON_POETRY[activeTab].title}</h2>
            <p className="text-rose-300/70 text-sm mb-4">{FIELDER_SERMON_POETRY[activeTab].style}</p>
            <div className="poetry-text text-blue-100/80 leading-relaxed whitespace-pre-wrap font-serif">
              {FIELDER_SERMON_POETRY[activeTab].text}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 py-4">
          {FIELDER_SERMON_POETRY.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`size-2 rounded-full transition-all ${
                activeTab === idx ? "bg-rose-400 w-6" : "bg-white/30"
              }`}
            />
          ))}
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
