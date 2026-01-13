"use client"

import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"

const VERSE_IMAGERY = [
  {
    symbol: "Stillness",
    icon: "self_improvement",
    color: "violet",
    meaning: `The Hebrew word "raphah" translated as "be still" carries a depth that English barely captures. It means to let go, to release your grip, to cease striving. It's the unclenching of fists, the dropping of weapons, the exhale after holding your breath too long.

In a culture that valued action and survival, this was a radical command. To be still wasn't passivity—it was trust so profound it looked like surrender. It was the warrior laying down his sword, not because the battle was over, but because he finally believed someone else was fighting it.

For us, stillness is just as countercultural. We live in the attention economy, where every moment is monetized, where productivity is identity, where rest feels like failure. "Be still" cuts against everything we've been taught about how to succeed, survive, and matter.`,
    application: `What would you have to believe about God to actually be still? What are you gripping so tightly that releasing it feels like death?`
  },
  {
    symbol: "Knowing",
    icon: "psychology",
    color: "blue",
    meaning: `The Hebrew word "yada" means far more than intellectual knowledge. It's the word used for the most intimate human relationship—"Adam knew Eve." It's experiential, relational, whole-person knowing.

To "know that I am God" isn't to assent to a theological proposition. It's to experience God's God-ness so deeply that it reshapes everything. It's the difference between knowing about fire and being warmed by it, between knowing about water and drinking when you're dying of thirst.

This kind of knowing doesn't come from study alone. It comes from encounter. It comes from the moments when you've reached the end of yourself and found Him there. It comes from stillness—because you can't truly know someone while you're running.`,
    application: `What's the difference between knowing about God and knowing God? Where have you experienced His presence in ways that went beyond information?`
  },
  {
    symbol: "Refuge & Fortress",
    icon: "security",
    color: "amber",
    meaning: `In the ancient world, cities had walls for a reason. The countryside was dangerous—bandits, armies, wild animals. To reach a walled city was to reach safety. The gates closing behind you meant survival.

God as refuge isn't a metaphor of comfort—it's a metaphor of life and death. He's not a cozy cabin; He's a fortified city when enemies are at your heels. He's not a spa day; He's the walls that stand between you and destruction.

But here's the twist: ancient fortresses required you to be inside them. You couldn't benefit from the walls while standing in the field. Coming to God as refuge means actually entering—actually trusting, actually resting in His protection instead of trying to protect yourself.`,
    application: `What are you trying to be your own fortress against? What would it mean to actually get inside God's walls and stop defending yourself?`
  },
  {
    symbol: "Waters & Mountains",
    icon: "landscape",
    color: "emerald",
    meaning: `In Hebrew cosmology, water represented chaos—the formless void before creation, the flood that destroyed the world, the sea that swallowed armies. Mountains represented stability—the unchanging landmarks, the high places where gods dwelt.

When the psalmist says "though the waters roar and foam, though the mountains quake," he's describing the worst imaginable scenario. It's like saying "though atoms stop holding together, though gravity reverses." It's the undoing of reality itself.

And yet: we will not fear. Not because the chaos isn't real, but because there's something more real. Not because the mountains can't shake, but because there's a foundation beneath the foundations. God's sovereignty isn't threatened by the collapse of everything else.`,
    application: `What "mountains" in your life have been shaking lately? What would it look like to trust the One who remains stable even when everything else moves?`
  },
  {
    symbol: "Exaltation",
    icon: "trending_up",
    color: "rose",
    meaning: `"I will be exalted among the nations, I will be exalted in the earth." Notice what's not said. God doesn't say "I hope to be exalted" or "I'm trying to be exalted." He doesn't ask for our help in the exaltation project. He simply declares what will be.

This is the ultimate ground of our stillness. God's glory doesn't depend on our effort. His kingdom doesn't advance only when we push it. His reputation doesn't need our defense. The outcome is already settled—we're just living in the time before it's fully revealed.

This doesn't make our action meaningless. It makes our action free. We work not to make God succeed but because He already has. We strive not to earn His victory but to participate in it. The pressure's off. The outcome is certain. Now we can truly rest—and truly work—from that rest.`,
    application: `How would you live differently if you really believed God's exaltation was inevitable? What burdens would you set down?`
  }
]

export default function ImageryPage() {
  const router = useRouter()
  const { verse } = useDevotional()

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
        {/* Verse Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-emerald-300/70 text-sm">{verse.reference}</p>
          <h1 className="text-xl font-bold text-white mt-1">Symbols & Meaning</h1>
        </div>

        {/* Imagery Cards */}
        <div className="px-5 py-4 space-y-4">
          {VERSE_IMAGERY.map((item) => (
            <div key={item.symbol} className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`size-12 rounded-full bg-${item.color}-500/20 flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-${item.color}-400 text-2xl`}>{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.symbol}</h3>
              </div>
              
              {item.meaning.split('\n\n').map((para, idx) => (
                <p key={idx} className="text-blue-100/80 leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
              
              {/* Application */}
              <div className={`mt-4 p-3 rounded-lg bg-${item.color}-500/10 border border-${item.color}-400/20`}>
                <p className={`text-${item.color}-300 text-sm font-medium mb-1`}>Reflect:</p>
                <p className="text-blue-100/70 text-sm">{item.application}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
