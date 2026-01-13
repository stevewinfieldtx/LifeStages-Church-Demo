"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FIELDER_LAST_WEEK_SERMON, SERMON_LIFELINES, LIFELINE_CATEGORIES } from "@/lib/fielder-dummy-data"

function LifelinesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const topic = searchParams.get("topic") || ""
  
  const [lifeline, setLifeline] = useState<{ title: string; content: string; application: string[] } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadLifeline()
  }, [topic])

  const loadLifeline = () => {
    // Get lifeline from our complete sermon data
    const lifelineData = SERMON_LIFELINES[topic]
    
    if (lifelineData) {
      setLifeline(lifelineData)
    } else {
      // Fallback for any topic not specifically covered
      setLifeline({
        title: topic,
        content: `Pastor Jason's message about "${FIELDER_LAST_WEEK_SERMON.mainTheme}" speaks directly to what you're facing with "${topic}" right now. The invitation to abide in the vine isn't just for easy seasons—it's especially for hard ones.

Whatever you're walking through, remember this core truth from Sunday's sermon: branches don't produce fruit by trying harder. They produce fruit by staying connected. Your situation doesn't disqualify you from fruitfulness—it's actually an invitation to deeper connection with Christ.

The same vine that nourished the disciples the night before Jesus' crucifixion is available to you right now. The same promise—that apart from Him you can do nothing, but connected to Him you bear much fruit—applies to your exact circumstances.

Don't let what you're going through push you away from the Source. Let it drive you closer. The Gardener sees you. He knows what you're carrying. And His invitation stands: remain in Me.`,
        application: [
          "Identify one way you've been 'striving' instead of 'abiding' in this season. What would it look like to stay connected rather than work harder?",
          "What does remaining in Christ look like practically this week, given what you're facing? Name one specific step.",
          "Who in your life models 'abiding' well? Consider reaching out to them this week for encouragement.",
          "Spend 10 minutes each morning simply sitting with Jesus—no agenda, no requests. Just connection."
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
        <div className="size-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin mb-4"></div>
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
        <h2 className="text-base font-bold text-violet-400">Lifelines</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-10">
        {/* Topic Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="size-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white">
              <span className="material-symbols-outlined">{getTopicIcon(topic)}</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{lifeline?.title || topic}</h1>
              <p className="text-sm text-violet-300/70">Based on "{FIELDER_LAST_WEEK_SERMON.title}"</p>
            </div>
          </div>
        </div>

        {/* Sermon Reference Card */}
        <div className="px-5 mb-6">
          <div className="bg-violet-500/20 rounded-xl p-4 border border-violet-500/30">
            <p className="text-xs text-violet-300 font-semibold mb-1">THIS WEEK'S SERMON</p>
            <p className="text-white font-medium">{FIELDER_LAST_WEEK_SERMON.title}</p>
            <p className="text-violet-200/70 text-sm mt-1">{FIELDER_LAST_WEEK_SERMON.scriptures.join(", ")}</p>
          </div>
        </div>

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
          <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl p-5 border border-violet-400/20">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-violet-400">task_alt</span>
              This Week
            </h3>
            <div className="space-y-4">
              {lifeline?.application.map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="size-6 shrink-0 rounded-full bg-violet-500/30 flex items-center justify-center text-violet-300 text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-blue-100/80 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Quote from Sermon */}
        <div className="px-5 mb-6">
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-5 border border-amber-400/20">
            <span className="material-symbols-outlined text-amber-400 text-3xl mb-2 block">format_quote</span>
            <p className="text-white italic font-serif text-lg leading-relaxed">
              "{FIELDER_LAST_WEEK_SERMON.pullQuotes[Math.floor(Math.random() * FIELDER_LAST_WEEK_SERMON.pullQuotes.length)]}"
            </p>
            <p className="text-amber-300/70 text-sm mt-3">— Pastor {FIELDER_LAST_WEEK_SERMON.pastor}</p>
          </div>
        </div>

        {/* Back to Sermon Button */}
        <div className="px-5">
          <button
            onClick={() => router.push('/last-week')}
            className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Sermon
          </button>
        </div>
      </main>
    </div>
  )
}

export default function SermonLifelinesPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen w-full flex-col max-w-md mx-auto bg-[#0c1929] items-center justify-center">
        <div className="size-16 border-4 border-violet-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <LifelinesContent />
    </Suspense>
  )
}
