"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"
import { VERSE_LIFELINES } from "@/lib/verse-lifelines"

function DeepDiveContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { devotional } = useDevotional()
  
  const topic = searchParams.get("topic") || ""
  const verseReference = devotional.verse?.reference || "Today's Verse"
  const verseText = devotional.verse?.text || ""
  
  const [lifeline, setLifeline] = useState<{ title: string; content: string; application: string[] } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadLifeline()
  }, [topic, verseReference])

  const loadLifeline = () => {
    // Get lifeline from our verse-based data
    const lifelineData = VERSE_LIFELINES[topic]
    
    if (lifelineData) {
      setLifeline(lifelineData)
    } else {
      // Fallback for any topic not specifically covered
      setLifeline({
        title: topic,
        content: `Today's Scripture meets you exactly where you are with "${topic}". The God who inspired these words sees your situation, knows your struggles, and speaks into your circumstances.

Whatever you're walking through, this verse wasn't given by accident. The same Scripture that has sustained believers through every imaginable hardship is available to you right now. It doesn't promise easy answers or quick fixes. It offers something better: the presence of God meeting you in the hard place.

Don't rush past today's verse. Let it soak in. Return to it throughout the day. The Word of God is living and active—it does work in you that you can't always see or feel in the moment.

Your situation is unique, but you're not alone. Generations of believers have faced similar struggles and found Scripture sufficient. Let today's verse be one more link in that chain of faithfulness.`,
        application: [
          "Read today's verse slowly three times. What word or phrase stands out to you? Why might that be significant for your situation?",
          "Write the verse somewhere you'll see it throughout the day—your phone background, a sticky note, your mirror.",
          "Share this verse with one person who knows what you're facing. Let them pray it over you.",
          "Before bed tonight, read the verse one more time. Thank God for speaking into your specific situation."
        ]
      })
    }
    
    setIsLoading(false)
  }

  const getTopicIcon = (topicName: string): string => {
    const icons: Record<string, string> = {
      "Fighting Cancer": "healing",
      "Supporting Someone Sick": "volunteer_activism",
      "Grieving a Death": "sentiment_very_dissatisfied",
      "Going Through Divorce": "heart_broken",
      "Depression": "cloud",
      "Anxiety & Worry": "psychology",
      "Loneliness & Isolation": "person_off",
      "Financial Crisis": "money_off",
      "Burnout & Exhaustion": "battery_0_bar",
      "New Baby at Home": "child_care",
      "Newly Married": "favorite",
      "Starting a New Job": "work",
      "Entering Retirement": "elderly",
      "Job Loss": "work_off",
      "Marriage Struggles": "heart_broken",
      "Single Parenting": "escalator_warning",
      "Wayward Child": "directions_walk",
      "Infertility Journey": "fertility",
      "Blended Family": "family_restroom",
      "Caring for Aging Parents": "elderly_woman",
      "Empty Nest": "nest_cam_wired_stand",
      "Chronic Illness": "medical_services",
      "Miscarriage or Loss of Child": "sentiment_very_dissatisfied",
      "Addiction Struggle": "psychology_alt",
      "Toxic Work Environment": "warning",
      "Career Uncertainty": "help",
      "Doubting My Faith": "quiz",
      "Feeling Far from God": "cloud_off",
      "Unanswered Prayer": "hourglass_empty",
      "Finding My Purpose": "lightbulb",
      "Struggling to Forgive": "handshake",
      "New Believer": "celebration",
    }
    return icons[topicName] || "explore"
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] items-center justify-center">
        <div className="size-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white">Finding your lifeline...</p>
      </div>
    )
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
        <h2 className="text-base font-bold text-purple-400">Lifelines</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-10">
        {/* Topic Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">{getTopicIcon(topic)}</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{lifeline?.title || topic}</h1>
              {verseReference && <p className="text-sm text-blue-200/70">{verseReference}</p>}
            </div>
          </div>
        </div>

        {/* Verse Card - only show if we have verse text */}
        {verseText && (
          <div className="px-5 mb-6">
            <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
              <p className="text-sm text-purple-200 italic leading-relaxed">"{verseText}"</p>
              <p className="text-xs text-purple-400 font-semibold mt-2">{verseReference}</p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="px-5 mb-6">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">For You</h3>
            {lifeline?.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-blue-100/80 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Application Steps */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-5 border border-purple-400/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-purple-400">task_alt</span>
              This Week
            </h3>
            <div className="space-y-4">
              {lifeline?.application.map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="size-6 shrink-0 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-blue-100/80 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encouragement Card */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-5 border border-emerald-400/20">
            <span className="material-symbols-outlined text-emerald-400 text-2xl mb-2 block">spa</span>
            <p className="text-white font-medium mb-2">Remember</p>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Scripture wasn't given in a vacuum—it was given to real people facing real struggles. The same God who met them meets you today. You're not alone in this.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="px-5">
          <button
            onClick={() => router.push('/')}
            className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Today's Verse
          </button>
        </div>
      </main>
    </div>
  )
}

export default function DeepDivePage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] items-center justify-center">
        <div className="size-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <DeepDiveContent />
    </Suspense>
  )
}
