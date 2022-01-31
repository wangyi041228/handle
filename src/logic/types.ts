export type MatchType = 'exact' | 'misplaced' | 'none'

export interface ParsedChar {
  char: string
  _1: string
  _2?: string
  _3?: string
  parts: string[]
  yin: string
  tone: number
}

export interface MatchResult {
  char: MatchType
  _1: MatchType
  _2: MatchType
  _3: MatchType
  tone: MatchType
}

export interface TriesMeta {
  hint?: boolean
  answer?: boolean
  start?: number
  end?: number
  failed?: boolean
  passed?: boolean
  tries?: string[]
}
