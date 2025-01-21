import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function NotFoundView() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Page Not Found!
      </h1>
      <Button variant="link" asChild size="lg">
        <Link to="/">
          Go Home
        </Link>
      </Button>
    </div>
  )
}