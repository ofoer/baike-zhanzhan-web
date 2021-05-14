export interface EntryProps {
  title: string
  bn: string
}
export interface CardEntryProps {
  isLoading: boolean
  className?: string
  item: EntryProps
}