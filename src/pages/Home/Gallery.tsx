import { memo, useMemo, useState } from 'react'
import CustomButton from '../../components/ui/CustomButton'
import CustomSection from '../../components/ui/CustomSection'
import CustomTitle from '../../components/ui/CustomTitle'
import useFetchData from '../../hooks/useFetchData'

const categories = [
  { id: 'all', name: 'Все работы' },
  { id: 'landings', name: 'Лендинги' },
  { id: 'corporate', name: 'Корпоративные' },
  { id: 'ecommerce', name: 'E-commerce' },
]

type ImageProps = {
  id: number
  author: string
  width: number
  height: number
  download_url: string
  category?: string
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [animate, setAnimate] = useState(true)
  const [limit, setLimit] = useState(6)
  const { data, loading, error, refetch } = useFetchData<ImageProps[]>(`https://picsum.photos/v2/list?page=2&limit=100`)

  const categorizedImages = useMemo(() => {
    if (!data) return []
    return data.map((img, index) => ({ ...img, category: categories[(index % (categories.length - 1)) + 1].id }))
  }, [data])

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return categorizedImages.slice(0, limit)
    return categorizedImages.slice(0, limit).filter((img) => img.category === activeCategory)
  }, [categorizedImages, activeCategory, limit])

  const handleCategoryClick = (categoryId: string) => {
    setAnimate(false)
    setTimeout(() => {
      setActiveCategory(categoryId)
      setAnimate(true)
    }, 300)
  }

  const handleLoadMore = () => {
    if (limit < 100) {
      setLimit((prevLimit) => prevLimit + 6)
    }
  }

  return (
    <CustomSection id={'gallery'}>
      <div className={`flex flex-col gap-60px`}>
        <CustomTitle className={`text-center`} text="Мои Работы" />

        <div className="flex items-center justify-center gap-9 md:flex-col md:items-start lg:flex-wrap xl:gap-6">
          {categories.map((category) => (
            <button
              className={`text-2xl font-semibold md:w-full xl:text-xl ${activeCategory === category.id && 'text-blue'}`}
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              type={'button'}
            >
              {category.name}
            </button>
          ))}
        </div>

        {error && (
          <div className="text-center">
            <p className="mb-4 text-red-500">Error: {(error as Error).message}</p>
            <CustomButton
              className={`rounded bg-blue px-4 py-2 text-white hover:bg-white hover:text-blue`}
              text={'Попробовать снова'}
              onClick={() => refetch()}
            />
          </div>
        )}

        {loading && <div className="text-center text-3xl font-bold">Загрузка...</div>}

        {!loading && filteredImages.length === 0 && (
          <div className="text-center text-2xl text-gray-600">Нет изображений в данной категории</div>
        )}

        {!loading && filteredImages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-45px lg:gap-5">
            {filteredImages.map((img) => (
              <img
                className={`h-[360px] w-full max-w-[360px] rounded-lg object-cover transition-all duration-300 lg:h-auto lg:max-w-full ${
                  animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                src={img.download_url}
                alt={img.author}
                width={img.width}
                height={img.height}
                key={img.id}
                loading="lazy"
              />
            ))}
          </div>
        )}

        {!error && limit < 100 && (
          <CustomButton
            className={`mx-auto w-fit`}
            text={loading ? 'Загрузка...' : 'Загрузить ещё'}
            onClick={handleLoadMore}
            disabled={loading}
          />
        )}
      </div>
    </CustomSection>
  )
}

export default memo(Gallery)
