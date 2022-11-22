import { writable, derived } from 'svelte/store';
import { clamp } from "$lib/tools/functions/maths"

export const vw             = writable(0)
export const vh             = writable(0)
export const y              = writable(0)
export const mouseX         = writable(0)
export const mouseY         = writable(0)
export const scrollHeight   = writable(0)
export const progress       = derived([vh, y, scrollHeight],([$vh, $y, $scrollHeight]) => { return clamp(0, 1, $y / ($scrollHeight - $vh)) })
export const headerHeight   = writable(0)
export const vhMinusHeader  = derived([vh, headerHeight],([$vh, $headerHeight]) => { return ($vh - $headerHeight) })
export const glossaryAll    = writable(0)
export const shopAll        = writable(0)
export const blogAll        = writable(0)
export const projectsAll    = writable(0)
export const pagesAll       = writable(0)
export const headerNavStatus= writable(false)