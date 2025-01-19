import { CategoryButtonsProps } from '../../../type/gallery'

const CategoryButtons = ({ categories, activeCategory, onClick, loading }: CategoryButtonsProps) => {
  return (
    <div className="flex items-center justify-center gap-9 md:flex-col md:items-start lg:flex-wrap xl:gap-6">
      {categories.map((category) => (
        <button
          className={`text-2xl font-semibold md:w-full xl:text-xl ${activeCategory === category.id && 'text-blue'} ${loading && 'pointer-events-none cursor-not-allowed text-gray-400'}`.trim()}
          key={category.id}
          onClick={() => onClick(category.id)}
          type={'button'}
          disabled={loading}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryButtons
