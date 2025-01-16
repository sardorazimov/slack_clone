"use client";

import { SigninFlow } from "@/types/types";
import { useState } from "react";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SigninFlow>("signin");
  return(
    <div className="min-h-screen flex items-center justify-center bg-[#2c1529]">
        <div className="md:h-auto md:w-[420px]">
         {state === 'signin' ? <SignInCard setState={setState} />  : <SignUpCard setState={setState} />}
        </div>
    </div>
  ) ;
};
