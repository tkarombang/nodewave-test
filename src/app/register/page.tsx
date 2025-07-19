// import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-stone-600">Sign UP</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Let's Sign up first for enter Square Website. Uh She Up</p>

        <form className="space-y-4 text-stone-600">
          <div className="flex gap-2">
            <Input id="firstName" name="firstName" type="text" required placeholder="First Name" />
            <Input id="lastName" name="lastName" type="text" required placeholder="Last Name" />
          </div>

          <div className="flex gap-2">
            <Input id="codeState" name="codeState" type="number" placeholder="+62" className="w-10 text-left p-1" />
            <Input id="noHp" name="noHp" type="number" required placeholder="Phone Number" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indonesia">Indonesia</SelectItem>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="singapura">Singapure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center">
            <Input id="email" name="email" type="email" required placeholder="Mail Address" className="border-r-0 h-10 rounded-r-none border-gray-200" />
            <span className="inline-flex items-center px-3 text-sm border border-l-0 bg-white rounded-r-md h-10 text-gray-500 shadow-sm">@squareteam.com</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="password" name="password" type="password" required placeholder="Password" />
              <button type="button" className="absolute right-1/2 -translate-x-3.5 text-gray-500 hover:text-gray-7">
                <Eye className="h-5 w-5" />
              </button>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input id="confirmPassword" name="confirmPassword" type="confirmPassword" required placeholder="Confirm Password" />
              <button type="button" className="absolute right-1/3 -translate-x-11 text-gray-500 hover:text-gray-7">
                <EyeOff className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full mt-4">
            Register
          </Button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
