
type PatientDetailItemProps = {
    label: string,
    data: string
}


/**
 *
 * @component
 * @example
 * <PatientDetailItem label="Email:" data="john@example.com" />
 *
 * @description
 * Displays a single labeled detail about a patient.
 * The label appears in bold and uppercase, followed by the data in normal case.
 * Commonly used in patient detail views.
 *
 * @param {string} props.label - The label or title for the data (e.g., "Email:")
 * @param {string} props.data - The value associated with the label (e.g., "john@example.com")
 *
 */
export default function PatientDetailItem({label,data}: PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label} {''}
        <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
