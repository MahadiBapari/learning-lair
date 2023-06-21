import { TuitionsContext } from "../Context/TuitionsContext"
import { useContext } from "react"

export const useTuitionsContext = () => {
  const context = useContext(TuitionsContext)

  if(!context) {
    throw Error('useTuitionsContext must be used inside an TuitionsContextProvider')
  }

  return context
}