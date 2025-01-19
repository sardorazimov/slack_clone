'use client'
import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"
import { UserButton } from "./auth/_components/user-button"

const page = () => {
  const { signOut } = useAuthActions()
  return (
    <div>
      <UserButton />Login Succefull
      Login
    </div>
  )
}

export default page