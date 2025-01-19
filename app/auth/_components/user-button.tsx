'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  
import { useCurrentUser } from "@/hooks/use-current-user"
import { useAuthActions } from "@convex-dev/auth/react"
import { Loader, LogOut } from "lucide-react"


export const UserButton = () => {
  const {signOut} = useAuthActions()
  const {data,isLoading} = useCurrentUser();
  if(isLoading){
    return <Loader  className="size-5 animate-spin text-muted-foreground"/>
  }
  if(!data){
    return null; 
    // Show a loading state here or return an error message.
  }
  const { image, name, email} = data;
  const avatarFallBack = name?.charAt(0).toUpperCase();
  return (
    <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-none relative">
          <Avatar className="size-10 hover:opacity-75 transition">
            <AvatarImage alt={name} src={image} />
            <AvatarFallback>
            {avatarFallBack}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" side="right" className="w-68">
            <DropdownMenuItem onClick={() => signOut()} className="h-10">
              <LogOut className="size-4 mr-2"/>
              Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
