type ImageProps = {
  id: number
  author: string
  width: number
  height: number
  download_url: string
  category?: string
}

type CategoryProps = {
  id: string
  name: string
}

type CategoryButtonsProps = {
  categories: CategoryProps[]
  onClick: (id: string) => void
  activeCategory: string
  loading: boolean
}

type GalleryErrorProps = {
  error: Error
  onClick: () => void
}

export type { CategoryProps, ImageProps, CategoryButtonsProps, GalleryErrorProps }
