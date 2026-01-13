"use client"

import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"

const VERSE_CONTEXT = {
  historical: {
    title: "Historical Setting",
    content: `Psalm 46 was written during a time of national crisis for Israel. While scholars debate the exact occasion—whether it was the Assyrian threat under Sennacherib, an earthquake, or another calamity—the context is clearly one of chaos and fear.

The ancient world had no shortage of terrifying forces: invading armies, natural disasters, political upheaval. The nations "raged," kingdoms "tottered," and the earth itself seemed unstable. Into this chaos, the psalmist declares something audacious: God is our refuge and strength.

The phrase "Be still" (Hebrew: raphah) was not a gentle suggestion for quiet meditation. It was a command to stop fighting, to cease striving, to lay down weapons—both literal and figurative. In a culture where survival often meant constant vigilance, this was radical trust.`
  },
  cultural: {
    title: "Cultural Background",
    content: `In ancient Near Eastern thought, gods were territorial. Each nation had its gods, and military victory was seen as one god defeating another. Against this backdrop, Israel's God makes a stunning claim: "I will be exalted among the nations, I will be exalted in the earth."

This wasn't just national pride. It was a declaration of universal sovereignty. While other gods were limited to their territories, Israel's God claimed the whole earth. The invitation to "be still and know" was an invitation to trust this cosmic God with local problems.

The "waters" and "mountains" mentioned earlier in the psalm weren't just geography. They represented the forces of chaos that threatened ordered life. When the psalmist says God is our refuge even when mountains fall into the sea, he's saying God is bigger than the worst we can imagine.`
  },
  literary: {
    title: "Literary Context",
    content: `Psalm 46 belongs to a collection known as the "Songs of Zion" (Psalms 46-48), which celebrate God's presence in Jerusalem and His protection of His people. The refrain "The LORD of hosts is with us; the God of Jacob is our fortress" appears twice, emphasizing God's covenant faithfulness.

The structure moves from cosmic chaos (vv. 1-3) to political chaos (vv. 4-7) to divine resolution (vv. 8-11). "Be still and know" comes as the climax—after God has demonstrated His power over both nature and nations, we're invited to stop striving and simply recognize who He is.

The word "know" (Hebrew: yada) means more than intellectual understanding. It implies intimate, experiential knowledge—the kind of knowing that changes how you live. To "know that I am God" is to have your entire orientation shifted.`
  },
  theological: {
    title: "Theological Significance",
    content: `Martin Luther famously based his hymn "A Mighty Fortress Is Our God" on this psalm. For Luther, Psalm 46 wasn't just ancient poetry—it was present truth. God was still a fortress, still a refuge, still worthy of trust in the chaos of the Reformation.

The theological heart of "Be still and know that I am God" is this: God's sovereignty isn't threatened by your circumstances. When it says God "will be exalted," it's not expressing hope—it's stating certainty. God's exaltation doesn't depend on our efforts or the cooperation of nations.

This frees us from the burden of cosmic responsibility. We don't have to make God's kingdom succeed. We don't have to defend God's reputation. We don't have to ensure good triumphs over evil. Our job is to trust. His job is everything else.`
  }
}

export default function ContextPage() {
  const router = useRouter()
  const { verse } = useDevotional()

  const sections = [
    { key: "historical", icon: "history", color: "amber" },
    { key: "cultural", icon: "public", color: "blue" },
    { key: "literary", icon: "menu_book", color: "emerald" },
    { key: "theological", icon: "church", color: "violet" }
  ]

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
        <h2 className="text-base font-bold text-blue-400">Context</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-10">
        {/* Verse Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-blue-300/70 text-sm">{verse.reference}</p>
          <h1 className="text-xl font-bold text-white mt-1">Historical & Cultural Background</h1>
        </div>

        {/* Content Sections */}
        <div className="px-5 py-4 space-y-6">
          {sections.map(({ key, icon, color }) => {
            const section = VERSE_CONTEXT[key as keyof typeof VERSE_CONTEXT]
            return (
              <div key={key} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`material-symbols-outlined text-${color}-400`}>{icon}</span>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                {section.content.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-blue-100/80 leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
