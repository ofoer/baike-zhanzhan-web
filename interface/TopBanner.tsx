export interface TopBannerProps {
  isLoading: boolean
  items: Array<TopBannerItemProps>
}

export interface TopBannerItemProps {
  title: string
  banner: string
}