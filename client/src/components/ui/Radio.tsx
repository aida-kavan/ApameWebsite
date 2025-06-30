import {
  createContext,
  useContext,
  useMemo,
  
} from "react"
import type {ReactNode, InputHTMLAttributes,ChangeEvent } from "react"


interface RadioContextType {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioContext = createContext<RadioContextType | null>(null)


interface RadioGroupProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  children: ReactNode
}


export function RadioGroup({ value, onChange, children }: RadioGroupProps) {

  const contextValue = useMemo(() => ({ value, onChange }), [value, onChange])

  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </RadioContext.Provider>
  )
}


type RadioProps = {
  children: ReactNode
} & InputHTMLAttributes<HTMLInputElement>


export default function Radio({ children, ...props }: RadioProps) {
  const context = useContext(RadioContext)

  if (!context) {
    throw new Error("Radio must be used inside a RadioGroup")
  }

  const { value, onChange } = context

  return (
    <label
      className={`
        px-4 py-2 min-w-[80px] iransans-ExtraBold flex items-center text-sm justify-center shadow rounded-lg cursor-pointer
        transition-all ${
          value === props.value
            ? "bg-gradient-to-t border-1 border-blue-400 from-blue-50 to-blue-100 text-blue-800 shadow-blue-500 scale-105"
            : "bg-sky-100 border border-blue-200 hover:shadow-md shadow-gray-300"
        }
      `}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  )
}
