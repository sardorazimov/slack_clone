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
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface SigninCardProps {
  setState: (state: SigninFlow) => void;
}

export const SignUpCard = ({ setState }: SigninCardProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setCofirmPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const { signIn } = useAuthActions();
  const onProviderSignUp = (value: "github" | "google") => {
      setPending(true);
      signIn(value).finally(() => setPending(false));
    };
  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     if(password !== confirmpassword){
       setError("Passwords do not match");
       return;
     }
     setPending(true);
     signIn('password', {name, email, password, flow: 'signUp'})
     .catch(() => {
      setError("Passwords do not match");
     })
     .finally(() => setPending(false));
    }
  
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign Up to Contune</CardTitle>
        <CardDescription>
          Use yout email to login to another to account
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive  mb-6">
          <TriangleAlert className="sizw-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={onPasswordSignUp} className="space-y-2.5">
        <Input
            disabled={pending}
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="FullName"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={confirmpassword}
            onChange={(e) => setCofirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="check"
            required
          />

          <Button className="w-full">Contune</Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => onProviderSignUp('google')}
            size={"lg"}
            className="w-full relative bg-emerald-800"
          >
            <FcGoogle className="absolute top-2.5 left-2.5" />
            Contune with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => onProviderSignUp('github')}
            size={"lg"}
            className="w-full relative bg-emerald-800"
          >
            <FaGithub className="absolute top-2.5 left-2.5" />
            Contune with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Alerdy have account ?
          <span
            onClick={() => setState("signin")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
