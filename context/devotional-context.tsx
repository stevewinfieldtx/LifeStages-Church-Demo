"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

// Today's verse data (simulates daily changing verse)
const TODAY_VERSE = {
  reference: "Psalm 46:10",
  text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
  translation: "NIV"
}

const TODAY_DEVOTIONAL = {
  title: "Finding Peace in Stillness",
  date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  verse: TODAY_VERSE,
  interpretation: `In a world that never stops moving, God invites us to something countercultural: stillness. Not the stillness of giving up, but the stillness of trust. The stillness that comes from knowing Who is actually in control.

The Hebrew word for "be still" carries the sense of "let go" or "cease striving." It's an invitation to stop fighting, stop worrying, stop trying to control what you cannot control. And in that release, something powerful happens—you create space to know God more deeply.

This isn't passive resignation. It's active trust. It's the confidence that allows you to breathe when chaos swirls, to remain grounded when everything shakes. Because the God who will be exalted among the nations is the same God who is with you right now, in whatever you're facing.

What would it look like to practice this stillness today? Not just the absence of noise, but the presence of trust. To let go of what you've been gripping so tightly and remember that God is still God, even when nothing makes sense.`,
  application: [
    "Set a timer for 5 minutes today. Sit in silence. When anxious thoughts come, simply whisper 'You are God' and release them.",
    "Identify one thing you've been trying to control that you need to surrender. Write it down and physically set it aside.",
    "Before responding to today's stressful situation, pause. Take three breaths. Remember who is actually in control."
  ]
}

interface DevotionalContextType {
  devotional: typeof TODAY_DEVOTIONAL
  verse: typeof TODAY_VERSE
  userAge: string
  setUserAge: (age: string) => void
}

const DevotionalContext = createContext<DevotionalContextType | undefined>(undefined)

export function DevotionalProvider({ children }: { children: ReactNode }) {
  const [userAge, setUserAge] = useState("adult")

  return (
    <DevotionalContext.Provider
      value={{
        devotional: TODAY_DEVOTIONAL,
        verse: TODAY_VERSE,
        userAge,
        setUserAge
      }}
    >
      {children}
    </DevotionalContext.Provider>
  )
}

export function useDevotional() {
  const context = useContext(DevotionalContext)
  if (context === undefined) {
    throw new Error("useDevotional must be used within a DevotionalProvider")
  }
  return context
}
