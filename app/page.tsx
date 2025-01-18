'use client'
import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"

const page = () => {
  const { signOut } = useAuthActions()
  return (
    <div>
      <Button onClick={() => signOut()} ></Button>
    </div>
  )
}

export default page