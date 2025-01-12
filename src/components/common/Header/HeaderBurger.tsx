import { CircleX, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const HeaderBurger = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.documentElement.classList.add('menu-opened')
		} else {
			document.documentElement.classList.remove('menu-opened')
		}
	}, [isOpen])

	return (
		<button className={`hidden lg:block`} onClick={() => setIsOpen(!isOpen)} type={'button'}>
			{isOpen && <CircleX className={`text-white`} />}
			{!isOpen && <Menu className={`text-white`} />}
		</button>
	)
}

export default HeaderBurger
