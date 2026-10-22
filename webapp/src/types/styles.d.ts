declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}

declare module '*.scss' {
  const stylesheet: string
  export default stylesheet
}

declare module '*.jpg' {
  const src: string
  export default src
}
