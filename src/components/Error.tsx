
/**
 * 
 * @component <Error/>
 * @param {Object} props - React props
 * @example <Error>There was a problem processing your request.</Error>
 * @returns {JSX.Element} A styled error message paragraph
 */

export default function Error({children}:{children:React.ReactNode}) {
    
  return (
    <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm">{children}</p>
  )
}
