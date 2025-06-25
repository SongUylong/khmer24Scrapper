import { z } from "zod";

export const linkSchema = z.object({
  url: z
    .string()
    .url("Enter a valid URL")
    .refine(
      (val) => {
        try {
          const parsed = new URL(val);
          return (
            parsed.hostname.includes("khmer24.com") ||
            parsed.hostname.includes("khmer24") ||
            parsed.hostname.includes("khmer24.")
          );
        } catch {
          return false;
        }
      },
      {
        message: "URL must be from khmer24.com",
      },
    ),
});

export type LinkSchema = z.infer<typeof linkSchema>;
