interface IHeaderMenu {
	id: number
	text: string
	href: string
}

export const headerMenuItems: IHeaderMenu[] = [
	{
		id: 1,
		text: 'Обо мне',
		href: '#about',
	},
	{
		id: 2,
		text: 'Навыки',
		href: '#skills',
	},
	{
		id: 3,
		text: 'Услуги',
		href: '#services',
	},
	{
		id: 4,
		text: 'Портфолио',
		href: '#portfolio',
	},
	{
		id: 5,
		text: 'Отзывы',
		href: '#reviews',
	},
	{
		id: 6,
		text: 'Контакты',
		href: '#contacts',
	},
]