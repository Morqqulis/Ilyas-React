const CustomTitle = ({ text, className }: { text: string; className?: string }) => {
	return (
		<div className={`${className}`}>
			<h2 className={`font-bold text-5xl`}>{text}</h2>
		</div>
	)
}

export default CustomTitle
