import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="flex justify-end items-center p-4 gap-2 h-16">
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="cursor-pointer">Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button className="cursor-pointer" variant={"outline"}>
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </header>
  );
}
