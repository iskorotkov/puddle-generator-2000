export interface LogicPosition {
  left: number
  top: number
}

export interface RenderPosition {
  left: string
  top: string
  rotation?: number
}

export interface Image {
  src: string
  alt?: string
  width?: string
  height?: string
}

export interface DialogLine {
  text?: string
  duration: number
}

export interface Dialog {
  lines: DialogLine[]
}

export interface Limits {
  top: number
  bottom: number
  left: number
  right: number
}
