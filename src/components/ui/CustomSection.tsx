const CustomSection = ({
  className,
  children,
  style,
  id,
}: {
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  id?: string
}) => {
  return (
    <section className={`py-[140px] md:py-14 xl:py-20 ${className}`} style={style} id={id}>
      <div className={`container h-full`}>{children}</div>
    </section>
  )
}

export default CustomSection
