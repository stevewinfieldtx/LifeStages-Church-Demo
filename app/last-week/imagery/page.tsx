"use client"

import { useRouter } from "next/navigation"
import { FIELDER_LAST_WEEK_SERMON, FIELDER_SERMON_IMAGERY } from "@/lib/fielder-dummy-data"

export default function SermonImageryPage() {
  const router = useRouter()
  const sermon = FIELDER_LAST_WEEK_SERMON

  const getIconForSymbol = (symbol: string): string => {
    const icons: Record<string, string> = {
      "The Vine": "psychiatry",
      "The Branches": "nature",
      "The Gardener (Vinedresser)": "agriculture",
      "The Fruit": "nutrition",
      "Abiding (Remaining)": "home"
    }
    return icons[symbol] || "explore"
  }

  const getColorForIndex = (idx: number): string => {
    const colors = ["violet", "blue", "emerald", "amber", "rose"]
    return colors[idx % colors.length]
  }

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
        <h2 className="text-base font-bold text-emerald-400">Imagery</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-10">
        {/* Sermon Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-emerald-300/70 text-sm">"{sermon.title}" • {sermon.scriptures.join(", ")}</p>
          <h1 className="text-xl font-bold text-white mt-1">Symbols & Meaning</h1>
        </div>

        {/* Imagery Cards */}
        <div className="px-5 py-4 space-y-4">
          {FIELDER_SERMON_IMAGERY.map((item, idx) => {
            const color = getColorForIndex(idx)
            return (
              <div key={item.symbol} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-12 rounded-full bg-${color}-500/20 flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>
                      {getIconForSymbol(item.symbol)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.symbol}</h3>
                </div>
                
                {item.meaning.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="text-blue-100/80 leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
                
                {/* Application */}
                <div className={`mt-4 p-3 rounded-lg bg-cyan-500/10 border border-cyan-400/20`}>
                  <p className="text-cyan-300 text-sm font-medium mb-1">Reflect:</p>
                  <p className="text-blue-100/70 text-sm">{item.application}</p>
                </div>
              </div>
            )
          })}
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
