import "./Slide.css"

type SlideProps = {
  children?: React.ReactNode
  className?: string
  contentKey?: string
}

export default function Slide({ children, className }: SlideProps) {
  return (
    <div className={["Slide", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  )
}
