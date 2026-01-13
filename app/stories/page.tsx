"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"

const VERSE_STORIES = [
  {
    id: "today",
    setting: "Today's World",
    title: "The Overnight Shift",
    text: `Maya's phone lit up at 3:47 AM with another notification. Then another. Then a cascade that wouldn't stop.

The servers were down. Not just down—catastrophically, inexplicably, everything-is-on-fire down. As the lead engineer on call, the next eight hours were hers to manage.

She'd been through outages before. But this one was different. This one came after the layoffs, after her team was cut in half, after she'd already been running on fumes for months. Her hands were shaking as she opened her laptop.

Six hours later, the system was stable but she was not. Sitting in her home office, still in pajamas, she felt the familiar tightness in her chest. The anxiety that had become her constant companion. The voice that said it would never stop, there would always be another crisis, she could never do enough.

Her grandmother's old Bible sat on the corner of her desk—a relic she'd inherited but rarely opened. Her hands moved toward it almost involuntarily.

It fell open to a page with a faded bookmark. Psalm 46. "Be still, and know that I am God."

Be still. The words felt like a foreign language. Her whole life was motion, reaction, constant vigilance. Stillness felt like death. If she stopped moving, everything would fall apart.

But everything was already falling apart. The motion wasn't helping. The anxiety wasn't protecting her. The constant vigilance was killing her.

She closed her laptop. She closed her eyes. She whispered the words like a dare: "Be still."

The notifications kept coming. She didn't look at them. For five minutes—just five minutes—she sat in the stillness. Not fixing, not managing, not controlling. Just existing.

The crisis didn't disappear. The morning's chaos wasn't undone. But something shifted. A tiny crack in the armor of anxiety, letting something else in. Something like peace. Something like trust.

She would have to return to work. The servers needed monitoring, the post-mortem needed writing, the endless stream of problems needed addressing. But she returned differently. Not as someone carrying the weight of the world, but as someone who had, for five minutes, set it down.

And she would set it down again. And again. Learning, slowly, that the God who holds the universe doesn't need her constant panic to keep it spinning.`
  },
  {
    id: "different",
    setting: "Different Time",
    title: "The Siege of Dunmore",
    text: `The castle had been under siege for forty-three days.

Margaret, Lady of Dunmore, stood on the parapet watching the enemy campfires flicker in the darkness below. Her husband was dead—killed in the first assault. Her son was seven years old and now technically the lord of this crumbling fortress. The provisions were running low. The well was nearly dry. The men who remained were exhausted and losing hope.

She should be down there rallying them. She should be checking the stores, inspecting the walls, planning the defense. She should be doing something. Every moment of stillness felt like betrayal, like surrender, like the slow opening of gates to the enemy below.

But her body would not move. Her mind would not strategize. Something in her had broken, or perhaps finally opened.

"My lady." The old chaplain had found her, as he often did, in her moments of collapse. Father Thomas had served three generations of her family. He had baptized her, married her, buried her husband. He would probably bury her too, if the siege didn't do it first.

"I cannot do this," she said. The first time she had spoken those words aloud. "I am not strong enough. I am not wise enough. I am not enough."

The chaplain stood beside her, looking out at the same fires she watched. He did not offer platitudes or rally her spirits. He simply said: "Good."

"Good?"

"The Psalm says 'Be still, and know that I am God.' Not 'be still, and know that you are sufficient.' The stillness is not resignation. It is recognition. Recognition that the battle belongs to another."

"The battle is at our gates, Father. If I do not fight it, who will?"

"You will fight it. But not as one who carries the outcome. You will fight as one who has already laid the outcome at other feet." He paused. "The Lord Almighty is with us. The God of Jacob is our fortress. Do you believe that?"

She wanted to say yes. The words had been spoken over her since childhood, sung in the chapel, inscribed on the family crest. But believing them now, with fires burning below and walls crumbling and everything depending on her—that required something beyond what she had.

"I want to believe it."

"Then be still. For one moment, stop fighting. Stop planning. Stop carrying. Let Him carry you."

She closed her eyes. The sounds of the siege continued—shouts from the walls, the crackle of fires, the groan of stressed stone. But something in her stopped. The relentless motion of fear and planning and desperation went quiet.

In the stillness, something else arose. Not a strategy, not a solution, not a burst of supernatural strength. Just the quiet certainty that she was not alone. That she had never been alone. That the God who made mountains and shaped history was aware of one small castle on one small hill, and one exhausted woman on its walls.

She opened her eyes. The siege remained. The fires still burned. Nothing had changed, and everything had changed.

"What do we do now, Father?"

"We fight. But we fight differently. We fight as those who have already surrendered—not to the enemy below, but to the God above. We do what we can. We trust Him with what we cannot."

The siege lasted another nineteen days. They lost men. They lost supplies. They came closer to breaking than Margaret would ever admit. But they did not break.

And when reinforcements finally arrived—help they had not expected, from an ally they thought had forgotten them—Margaret remembered those moments on the parapet. The stillness that had felt like weakness but was actually strength. The surrender that wasn't defeat but faith.

Years later, when her son was grown and the castle rebuilt, she had those words carved above the main gate: "Be still, and know that I am God."

Not as a reminder to be passive. As a reminder that in the worst of times, when everything depends on us, the most important thing we can do is remember that everything actually depends on Him.`
  }
]

export default function StoriesPage() {
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
        <h2 className="text-base font-bold text-amber-400">Stories</h2>
        <div className="w-10"></div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-4 border-b border-white/10">
        {VERSE_STORIES.map((story, idx) => (
          <button
            key={story.id}
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
        {/* Verse Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-amber-300/70 text-sm">Based on {verse.reference}</p>
        </div>

        {/* Story Content */}
        <div className="px-5 py-4">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{VERSE_STORIES[activeTab].title}</h2>
            <div className="prose prose-invert">
              {VERSE_STORIES[activeTab].text.split('\n\n').map((para, idx) => (
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
              Where in your life are you carrying weight that was never meant to be yours? What would stillness look like for you today?
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
