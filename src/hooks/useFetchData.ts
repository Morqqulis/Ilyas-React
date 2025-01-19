import { useEffect, useState } from 'react'

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        setError(new Error(`HTTP Ошибка! статус: ${response.status}`))
        throw new Error(`HTTP Ошибка! статус: ${response.status}`)
      }
      setData(await response.json())
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Произошла ошибка при загрузке данных'))
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 0)
    }
  }

  useEffect(() => {
    fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error, setData, refetch: fetchData }
}

export default useFetchData
