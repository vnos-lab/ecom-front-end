"use client";

import React, { memo, useCallback } from "react";
import * as Icons from "lucide-react";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { defaultFormValues, formSchema } from "./formSchema";

function SendEmailForm() {
  const { toast } = useToast();

  const onSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    let formData = {
      ...defaultFormValues, ...Object.fromEntries(new FormData(event.target as HTMLFormElement))
    };
    const formValid = formSchema.safeParse(formData);
    if (formValid.success) {
      /**
       * TODO: Handle search
       */
      console.log(formData);
    } else {
      const errorMessages = formValid.error.issues.map((issue) => issue.message);

      toast({
        description: errorMessages.join("\n"), variant: "destructive", duration: 3000
      });
    }
  }, [toast]);

  return (<form
    className=" flex gap-x-8 w-[217px] h-12 py-3 pr-[15px] pl-4 border-[1.5px] border-[#FAFAFA] rounded"
    onSubmit={onSubmit}
  >
    <Input
      placeholder="Enter your email"
      className="h-6 w-full rounded-none bg-black border-none p-0 outline-none focus-visible:outline-none focus-visible:ring-0"
      name="email"
      defaultValue=""
    />
    <button type="submit" className="flex items-center justify-center w-[24px] h-[24px]">
      <Icons.SendHorizonal size={24} />
    </button>
  </form>);
}

export default memo(SendEmailForm);
