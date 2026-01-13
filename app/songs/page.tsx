"use client"

import { useRouter } from "next/navigation"
import { useDevotional } from "@/context/devotional-context"

const VERSE_SONGS = [
  {
    title: "A Mighty Fortress Is Our God",
    artist: "Martin Luther (1529)",
    connection: "Luther wrote this hymn based directly on Psalm 46, often called 'the Battle Hymn of the Reformation.' In the midst of tremendous opposition and danger, Luther found in this psalm the same truth we need today: God is our refuge, and nothing can stand against Him.",
    themes: ["God as fortress", "Victory over evil", "Standing firm in faith"],
    spotifyId: "mighty-fortress",
    color: "amber"
  },
  {
    title: "It Is Well With My Soul",
    artist: "Horatio Spafford (1873)",
    connection: "Written after Spafford lost his four daughters in a shipwreck, this hymn embodies the 'peace that passes understanding' that comes from trusting God in chaos. 'Whatever my lot, You have taught me to say, it is well with my soul' is Psalm 46:10 lived out in tragedy.",
    themes: ["Peace in suffering", "Surrender to God's will", "Hope beyond circumstances"],
    spotifyId: "it-is-well",
    color: "blue"
  },
  {
    title: "Still",
    artist: "Hillsong Worship (2002)",
    connection: "A modern interpretation of Psalm 46:10, this song invites us into the stillness that allows us to know God. The simple lyrics create space for actual stillness—not just singing about it but experiencing it.",
    themes: ["Finding stillness", "Knowing God's presence", "Resting in trust"],
    spotifyId: "still-hillsong",
    color: "violet"
  },
  {
    title: "Lord, I Need You",
    artist: "Matt Maher (2013)",
    connection: "The confession 'Where You are, Lord, I am free' echoes the refuge imagery of Psalm 46. This song captures the daily dependence on God that stillness requires—not a one-time surrender but a moment-by-moment leaning.",
    themes: ["Daily dependence", "Grace for every moment", "Freedom in surrender"],
    spotifyId: "lord-i-need-you",
    color: "emerald"
  },
  {
    title: "Whom Shall I Fear (God of Angel Armies)",
    artist: "Chris Tomlin (2012)",
    connection: "'The Lord of hosts is with us'—this psalm's refrain becomes the anthem of this worship song. When we remember that angel armies surround us, stillness becomes possible. We fight from victory, not for it.",
    themes: ["God's protection", "Courage in battle", "Victory is already won"],
    spotifyId: "whom-shall-i-fear",
    color: "rose"
  }
]

export default function SongsPage() {
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
        <h2 className="text-base font-bold text-violet-400">Songs</h2>
        <div className="w-10"></div>
      </div>

      <main className="flex-1 pb-10">
        {/* Verse Reference */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-violet-300/70 text-sm">{verse.reference}</p>
          <h1 className="text-xl font-bold text-white mt-1">Worship Connections</h1>
          <p className="text-blue-200/60 text-sm mt-2">
            Songs that carry the themes of today's verse
          </p>
        </div>

        {/* Songs List */}
        <div className="px-5 py-4 space-y-4">
          {VERSE_SONGS.map((song) => (
            <div key={song.title} className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                {/* Album Art Placeholder */}
                <div className={`size-16 shrink-0 rounded-xl bg-gradient-to-br from-${song.color}-500/30 to-${song.color}-600/30 flex items-center justify-center border border-${song.color}-500/30`}>
                  <span className="material-symbols-outlined text-white text-2xl">music_note</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold truncate">{song.title}</h3>
                  <p className="text-blue-300/70 text-sm">{song.artist}</p>
                </div>
              </div>
              
              <p className="text-blue-100/80 text-sm leading-relaxed mt-4">
                {song.connection}
              </p>
              
              {/* Themes */}
              <div className="flex flex-wrap gap-2 mt-3">
                {song.themes.map((theme) => (
                  <span
                    key={theme}
                    className={`px-2 py-1 rounded-full text-xs bg-${song.color}-500/20 text-${song.color}-300 border border-${song.color}-500/30`}
                  >
                    {theme}
                  </span>
                ))}
              </div>
              
              {/* Play Button (visual only) */}
              <button className={`mt-4 w-full py-2.5 rounded-xl bg-${song.color}-500/20 border border-${song.color}-500/30 text-${song.color}-300 font-medium text-sm flex items-center justify-center gap-2 hover:bg-${song.color}-500/30 transition-colors`}>
                <span className="material-symbols-outlined text-lg">play_circle</span>
                Listen on Spotify
              </button>
            </div>
          ))}
        </div>

        {/* Create Playlist Button */}
        <div className="px-5 py-4">
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all">
            <span className="material-symbols-outlined">playlist_add</span>
            Open Playlist in Spotify
          </button>
        </div>
      </main>
    </div>
  )
}
