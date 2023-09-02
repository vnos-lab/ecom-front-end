import { z } from "zod";

export interface FormValues {
  email: string;
}

export const defaultFormValues: FormValues = {
  email: "",
};

export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});
