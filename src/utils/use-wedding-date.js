import { useContext } from 'react'
import { DateContext } from "../components/layout"

const useWeddingDate = () => {
    return useContext(DateContext)
}

export default useWeddingDate
