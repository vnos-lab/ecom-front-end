"use client";

import React, { memo, useCallback, useMemo } from "react";
import * as Icons from "lucide-react";
import { useRouter } from "next/navigation";
import querystring from "querystring";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import routes from "@/constants/routes";

import { defaultFormValues, formSchema } from "./formSchema";

import styles from "./SearchForm.module.scss";

function SearchForm() {
  const router = useRouter();
  const urlQuery = useMemo(
    () =>
      querystring.parse(
        (typeof window !== "undefined" &&
          window.location.search.replace("?", "")) ||
          "",
      ),
    [],
  );

  const { toast } = useToast();

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      // NOTE: This is just for testing
      const formData = {
        ...defaultFormValues,
        ...Object.fromEntries(new FormData(event.target as HTMLFormElement)),
      };

      const formValid = formSchema.safeParse(formData);

      if (formValid.success) {
        /**
         * TODO: Handle search
         */
        router.push(routes.SEARCH(formData.search));
      } else {
        const errorMessages = formValid.error.issues.map(
          (issue) => issue.message,
        );

        toast({
          description: errorMessages.join("\n"),
          variant: "destructive",
          duration: 3000,
        });
      }
    },
    [router, toast],
  );

  return (
    <form className="relative" onSubmit={onSubmit}>
      <Input
        placeholder="What are you looking for?"
        className={styles.Input}
        name="search"
        defaultValue={urlQuery.search as string}
      />

      <button type="submit" className={styles.Icon}>
        <Icons.Search size={24} />
      </button>
    </form>
  );
}

export default memo(SearchForm);
