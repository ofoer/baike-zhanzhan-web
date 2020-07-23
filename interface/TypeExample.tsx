import { EntryProps } from "./CardEntry"
export interface TypeExampleProps {
    title: string
    actionRight: React.ReactElement
    isLoading: boolean
    isReady: boolean
    items: Array<EntryProps>
}