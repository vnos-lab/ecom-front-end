import { z } from "zod";

export interface FormValues {
  search: string;
}

export const defaultFormValues: FormValues = {
  search: "",
};

export const formSchema = z.object({
  search: z.string().nonempty({ message: "Search cannot be empty" }),
});
