"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { useAuthStore } from "@/store/useAuthStore";
import { loginSchema } from "@/validators/authSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: loginSchema) => {
    setLoading(true);
    try {
      const res = await api.post("auth/login", data);
      const token = res.data?.token;
      setToken(token);
      toast.success("LOGIN BERHASIL");
      router.push("/todos");
    } catch (err: any) {
      toast.error("EMAIL ATAU PASSWORD SALAH");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold  text-center">Login</h1>

        <div>
          <Input {...register("email")} placeholder="Email" />
        </div>

        <div>
          <Input type="password" {...register("password")} placeholder="Password" />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}
