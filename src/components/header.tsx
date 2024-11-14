"use client";

import Image from "next/image";
import { Avatar, AvatarImage } from "./layout/avatar";
import { useAuth } from "@/pages/auth";
import { cn } from "@/pages/utils";

export const Header = () => {
  const { user, handleSignIn, handleSignOut } = useAuth();

  function handleClick() {
    if (user) {
      handleSignOut();
    } else {
      handleSignIn();
    }
  }

  return (
    <header className="flex w-full items-center justify-between lg:h-24 h-16 border-b-2 lg:p-8 p-4 border-slate-100">
      <div className="relative aspect-[254/45] lg:min-w-48 min-w-28">
        <Image src="/logo.png" alt="logo" fill className="absolute" />
      </div>
      <button
        onClick={handleClick}
        className="flex w-fit items-center justify-between gap-2 ring-2 ring-slate-200 rounded-md md:p-2 p-1"
      >
        {user?.photoURL ? (
          <Avatar
            className={cn(
              user ? "p-0" : "p-1",
              "h-8 w-8 lg:block hidden aspect-square m-0"
            )}
          >
            <AvatarImage
              src={user.photoURL}
              alt="profile-picture"
              className="rounded-full"
            />
          </Avatar>
        ) : (
          <h1 className="text-3xl font-bold px-1">G</h1>
        )}
        <div className="flex flex-col items-start pr-2">
          <h1 className="text-black lg:text-lg lg:m-0 m-2 text-xs tracking-tight lg:font-bold font-medium ">
            {user ? user.displayName : "Sign In"}
          </h1>
          {user && (
            <p className="lg:block hidden tracking-tight text-xs font-mono font-normal text-slate-600">
              {user.email}
            </p>
          )}
        </div>
      </button>
    </header>
  );
};
