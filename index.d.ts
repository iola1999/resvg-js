/// <reference types="node" />

export type ResvgRenderOptions = {
  font?: {
    loadSystemFonts?: boolean
    fontFiles?: string[]
    fontDirs?: string[]
    defaultFontFamily?: string
    defaultFontSize?: number
    serifFamily?: string
    sansSerifFamily?: string
    cursiveFamily?: string
    fantasyFamily?: string
    monospaceFamily?: string
  }
  dpi?: number
  languages?: string[]
  shapeRendering?:
    | 0 // optimizeSpeed
    | 1 // crispEdges
    | 2 // geometricPrecision
  textRendering?:
    | 0 // optimizeSpeed
    | 1 // optimizeLegibility
    | 2 // geometricPrecision'
  imageRendering?:
    | 0 // optimizeQuality
    | 1 // optimizeSpeed
  fitTo?:
    | { mode: 'original' }
    | { mode: 'width'; value: number }
    | { mode: 'height'; value: number }
    | { mode: 'zoom'; value: number }
  background?: string // Support CSS3 color, e.g. rgba(255, 255, 255, .8)
  crop?: {
    left: number
    top: number
    right?: number
    bottom?: number
  }
  logLevel?: 'off' | 'error' | 'warn' | 'info' | 'debug' | 'trace'
}

export function renderAsync(
  svg: string | Buffer,
  options?: ResvgRenderOptions | null,
  signal?: AbortSignal | null,
): Promise<RenderedImage>
export class Resvg {
  constructor(svg: Buffer | string, options?: ResvgRenderOptions | null)
  toString(): string
  render(): RenderedImage

  /** Get the SVG width */
  get width(): number

  /** Get the SVG height */
  get height(): number
}
export class RenderedImage {
  /** Write the image data to Buffer */
  asPng(): Buffer

  /** Get the PNG width */
  get width(): number

  /** Get the PNG height */
  get height(): number
}
