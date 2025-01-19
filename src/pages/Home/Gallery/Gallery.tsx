import CustomButton from '@components/ui/CustomButton'
import CustomSection from '@components/ui/CustomSection'
import CustomTitle from '@components/ui/CustomTitle'
import useFetchData from '@hooks/useFetchData'
import { CategoryProps, ImageProps } from '@type/gallery'
import { memo, useMemo, useState } from 'react'
import ContentLoader from 'react-content-loader'
import CategoryButtons from './CategoryButtons'
import GalleryError from './GalleryError'

const categories: CategoryProps[] = [
  { id: 'all', name: 'Все работы' },
  { id: 'landings', name: 'Лендинги' },
  { id: 'corporate', name: 'Корпоративные' },
  { id: 'ecommerce', name: 'E-commerce' },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [animate, setAnimate] = useState(true)
  const [limit, setLimit] = useState(6)
  const { data, loading, error, refetch } = useFetchData<ImageProps[]>(import.meta.env.VITE_IMAGES_URL)

  const categorizedImages = useMemo(() => {
    if (!data) return []
    if (activeCategory === 'all') return data.slice(0, limit)
    return data
      .slice(0, limit)
      .map((img, index) => ({ ...img, category: categories[(index % (categories.length - 1)) + 1].id }))
      .filter((img) => img.category === activeCategory)
  }, [data, limit, activeCategory])

  const handleClickToCategory = (categoryId: string) => {
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
    <CustomSection id={'portfolio'}>
      <div className={`flex flex-col gap-60px`}>
        <CustomTitle className={`text-center`} text="Мои Работы" />

        <CategoryButtons
          categories={categories}
          activeCategory={activeCategory}
          onClick={handleClickToCategory}
          loading={loading}
        />

        {error && <GalleryError error={error} onClick={refetch} />}

        {/* {loading && <div className="text-3xl font-bold text-center">Загрузка...</div>} */}
        {/* {loading && <HashLoader className={`mx-auto`} size={200} color={'#2352de'} />} */}

        {!loading && categorizedImages.length === 0 && (
          <div className="text-2xl text-center text-gray-600">Нет изображений в данной категории</div>
        )}

        <div className="flex flex-wrap justify-center gap-45px lg:gap-5">
          {loading &&
            Array.from({ length: limit }).map((_, index) => (
              <ContentLoader key={index} width={360} height={360} speed={1} color={'#2352de'}>
                <rect x="0" y="0" rx="5" ry="5" width="360" height="360" />
              </ContentLoader>
            ))}

          {!loading && categorizedImages.length === 0 && (
            <div className="text-2xl text-center text-gray-600">Нет изображений в данной категории</div>
          )}

          {!loading &&
            categorizedImages.length > 0 &&
            categorizedImages.map((img) => (
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

        {!error && limit < 100 && (
          <CustomButton
            className={`mx-auto w-fit disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-400 disabled:opacity-50 disabled:hover:bg-gray-400 disabled:hover:text-white`}
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
