import { z } from "zod";

export const footerFormSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z
    .string()
    .min(1, { message: "E-mail é obrigatório" })
    .email("E-mail inválido"),
  message: z
    .string()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(300, { message: "Mensagem precisa ter no maximo 300 caracteres" }),
});
