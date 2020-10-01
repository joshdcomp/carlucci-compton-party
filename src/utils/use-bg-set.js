import { useContext } from 'react'
import { BgContext } from "../components/layout"

const useBgSet = () => {
    return useContext(BgContext)
}

export default useBgSet