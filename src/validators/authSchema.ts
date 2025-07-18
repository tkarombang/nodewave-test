import z from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Format Email TIDAK valid" }),
  password: z.string().min(6, { message: "Password HARUS 6 Karakter" }),
});

export type loginSchema = z.infer<typeof loginSchema>;
