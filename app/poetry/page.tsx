"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"

const VERSE_POETRY = [
  {
    id: "free",
    style: "Free Verse",
    title: "Stillness",
    text: `I have been running
for as long as I can remember.
Running from silence,
running toward control,
running because stopping
felt like dying.

The world never stops.
The emails never stop.
The worry never stops.
So why should I?

Be still, He says.
And I laugh—
a desperate sound
that might be crying.

Be still?
When the bills are due
and the diagnosis is pending
and the relationship is crumbling
and the future is uncertain
and the past won't stay buried
and the present is on fire?

Be still.

Not because it's easy.
Not because the chaos pauses.
Not because stillness fixes anything.

But because in the stillness
I might remember
what I keep forgetting
in all this running:

I am not God.
I was never meant to be.
The world doesn't spin
on my effort.

He will be exalted.
He will be.
Not might be.
Not could be if I help.
Will be.

So I stop.
Not because I'm strong enough
but because I'm finally
weak enough
to admit
I was never holding it together.

It was always Him.
It was always grace.
It was always the God of Jacob
being a fortress
for someone
too stubborn to stand still.

Be still, He says.
And this time
I listen.`
  },
  {
    id: "structured",
    style: "Structured Verse",
    title: "When Mountains Fall",
    text: `When mountains fall into the heart of seas,
When all the world seems shaking at its core,
When kingdoms rage and certainty flees—
There is a refuge, steady as before.

The waters roar and foam with fury vast,
The nations plot and humans scheme in vain,
But He who spoke and made all time to last
Sits still enthroned, forever to remain.

Be still, He whispers through the chaos loud,
Be still and know—not guess, or hope, or try—
But know with certainty beyond the crowd
That I am God. That I will never die.

The Lord of hosts has set His dwelling here,
The God of Jacob guards us as a tower,
And those who know Him have no cause for fear:
His stillness is our refuge and our power.

So let the earth give way, let mountains quake,
Let every prop we trusted fall apart—
There is one rock that nothing else can shake,
And He makes stillness possible in heart.

Not stillness of the fool who will not fight,
But stillness of the soldier standing fast,
Who knows his Captain wins the final fight,
And trusts the dawn will break beyond the night at last.`
  },
  {
    id: "haiku",
    style: "Haiku Series",
    title: "Stillness in Fragments",
    text: `I.
News notifications—
endless stream of urgency.
Phone down. Breathe. He reigns.

II.
"Be still" sounds like death
to one who survives through motion—
until it gives life.

III.
Know that I am God.
Not might be, could be, should be.
Am. Present tense. Now.

IV.
Mountains into sea,
kingdoms shaking, earth dissolving—
still He is fortress.

V.
I carry the world
until my shoulders collapse.
He never asked me to.

VI.
Stillness is not weak.
Stillness is the strength to trust
what I cannot see.

VII.
Lord of hosts is near.
God of Jacob is our refuge.
This is enough. Rest.

VIII.
I thought peace was absence—
no problems, no stress, no fear.
Peace is presence. His.

IX.
Exalted among
nations—He will be. Will. Be.
My striving's not required.

X.
Be still. Know. Trust. Rest.
Four verbs that undo my life
and rebuild it whole.`
  }
]

export default function PoetryPage() {
  const router = useRouter()
  const { verse } = useDevotional()
  const [activeTab, setActiveTab] = useState(0)

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
        {VERSE_POETRY.map((poem, idx) => (
          <button
            key={poem.id}
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
        {/* Verse Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-rose-300/70 text-sm">Inspired by {verse.reference}</p>
        </div>

        {/* Poetry Content */}
        <div className="px-5 py-4">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-1">{VERSE_POETRY[activeTab].title}</h2>
            <p className="text-rose-300/70 text-sm mb-4">{VERSE_POETRY[activeTab].style}</p>
            <div className="poetry-text text-blue-100/80 leading-relaxed whitespace-pre-wrap font-serif">
              {VERSE_POETRY[activeTab].text}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 py-4">
          {VERSE_POETRY.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`size-2 rounded-full transition-all ${
                activeTab === idx ? "bg-rose-400 w-6" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
