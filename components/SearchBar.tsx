"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LinkSchema, linkSchema } from "@/schemas/linkSchema";
import { useState } from "react";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const onSubmit = async (data: LinkSchema) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Submitted:", data.url);
    setSearchTerm(data.url);
  };
  const methods = useForm<LinkSchema>({
    resolver: zodResolver(linkSchema), //validation schema
    defaultValues: {
      url: "",
    },
  });
  const isSubmitting = methods.formState.isSubmitting;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex items-center space-x-2"
      >
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            {...methods.register("url")}
            className="border border-gray-300 rounded px-2 py-1 w-full"
            placeholder="Enter URL"
            disabled={isSubmitting}
          />

          {methods.formState.errors.url && (
            <p className="text-red-500 text-sm">
              {methods.formState.errors.url.message}
            </p>
          )}
          {searchTerm && (
            <p className="text-green-500 text-sm mt-2">
              Search term: {searchTerm}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`${
            isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </form>
    </FormProvider>
  );
};

export default SearchBar;
