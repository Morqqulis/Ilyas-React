interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className?: string
  onClick?: () => void
}

const CustomButton = ({ className, type = 'button', text = 'Кнопка', onClick }: CustomButtonProps) => {
  return (
    <button
      className={`px-6 py-3 text-lg font-semibold text-white border duration-300 ease-in-out disabled:bg-gray-500 border-blue bg-blue hover:bg-white hover:text-blue ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomButton
