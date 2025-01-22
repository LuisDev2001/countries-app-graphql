import { LoaderIcon } from 'lucide-react'

export interface Props {
  text: string
}

export const LoaderFullScreen = ({ text }: Props) => {
  return (
    <div className="fixed inset-0 flex justify-center flex-col items-center bg-background w-full h-full z-50">
      <LoaderIcon className="w-16 h-16 text-foreground animate-spin" />
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {text}
      </p>
    </div>
  )
}
