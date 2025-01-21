import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"

export const Route = createLazyFileRoute('/')({
  component: HomeView,
})

function HomeView() {
  return <div>Hello "/"! <Button>Hola mundo</Button></div>
}
