import CustomButton from '@components/ui/CustomButton'
import { GalleryErrorProps } from 'src/type/gallery'

const GalleryError = ({ error, onClick }: GalleryErrorProps) => {
  return (
    <div className="text-center">
      <p className="mb-4 text-red-500">Error: {(error as Error).message}</p>
      <CustomButton
        className={`rounded bg-blue px-4 py-2 text-white hover:bg-white hover:text-blue`}
        text={'Попробовать снова'}
        onClick={() => onClick()}
      />
    </div>
  )
}

export default GalleryError
