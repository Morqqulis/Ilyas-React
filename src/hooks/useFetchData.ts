import { useEffect, useState } from 'react'

const useFetchData = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP Ошибка! статус: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('Произошла ошибка при загрузке данных'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error, setData, refetch: fetchData }
}

export default useFetchData
