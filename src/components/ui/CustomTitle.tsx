const CustomTitle = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`${className}`}>
      <h2 className={`text-5xl font-bold capitalize lg:text-4xl`}>{text}</h2>
    </div>
  )
}

export default CustomTitle
