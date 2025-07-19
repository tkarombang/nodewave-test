import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@radix-ui/react-checkbox";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 px-6 py-8 bg-white rounded-xl shadow">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold text-stone-600">Sign In</h1>
          <p className="text-muted-foreground mt-2">Just sign in if you have an account in here. Enjoy our Website 😋</p>
        </div>

        <div className="space-y-4">
          <div className="text-stone-600">
            {/* <h3>Your Email / Username</h3> */}
            <Input type="email" id="email" placeholder="Enter your email / username" />
          </div>

          <div>
            <Input type="password" id="password" placeholder="Enter your password"></Input>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <h3>Remember me</h3>
            </div>
            <Link href="#" className="text-blue-500 hover:underline">
              Forgot Password
            </Link>
          </div>

          <Button className="w-full">Login Button</Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
