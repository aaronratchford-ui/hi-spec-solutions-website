'use client'

import { useEffect } from 'react'

// Tracks whether the app has already done its first (cold) page load.
let appLoaded = false

/**
 * On the very first load of the site, if the URL still has a stale section
 * hash (e.g. "#testimonials" left over from tapping the Reviews link), clear
 * it and start at the top of the page. In-app navigations that happen later
 * (such as tapping "Reviews") are left untouched, so those jumps still work.
 */
export function ScrollTopOnLoad() {
  useEffect(() => {
    if (appLoaded) return
    appLoaded = true

    if (window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search,
      )
      window.scrollTo(0, 0)
    }
  }, [])

  return null
}
