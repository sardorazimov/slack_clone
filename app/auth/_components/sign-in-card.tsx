import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SigninFlow } from "@/types/types";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SigninCardProps{
    setState: (state:SigninFlow) => void;
}
export const SignInCard = ({setState}:SigninCardProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Login to Contune</CardTitle>
      </CardHeader>
      <CardDescription>
        Use yout email to login to another to account
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            required
          />
          <Button className="w-full">Contune</Button>
        </form>
        <Separator/>
        <div className="flex flex-col gap-y-2.5">
          <Button 
            disabled={false}
            onClick={() => {}}
            size={'lg'}
            variant={'outline'}
            className="w-full relative hover:bg-white/10">
                <FcGoogle className="absolute top-2.5 left-2.5"/>
             Contune with Google
            </Button>
          <Button 
            disabled={false}
            onClick={() => {}}
            size={'lg'}
            variant={'outline'}
            className="w-full relative hover:bg-white/10">
                <FaGithub className="absolute top-2.5 left-2.5"/>
             Contune with Google
            </Button>
        </div>
        <p className="text-xs text-muted-foreground">
        Don&apos;t have account ? 
        <span
         onClick={() => setState('signup')}
         className="text-sky-700 hover:underline cursor-pointer">
            Sign Up
        </span>
        </p>
      </CardContent>
    </Card>
  );
};
