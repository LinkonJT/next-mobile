"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Zod schema validation for form fields
const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  description: z.string(),
  category: z.enum(["smartphone", "accessories"], {
    message: "Please select a category",
  }),
  photoURL: z.string().min(2, { message: "Photo URL is required." }),

  price: z.coerce
    .number()
    .positive({ message: "Price must be greater than zero" }),

  // Smartphone fields
  brand: z
    .enum(["Apple", "Samsung", "Nokia", "Xiaomi", "Google"], {
      message: "Please select your mobile brand",
    })
    .optional(),

  model: z.string().min(1, { message: "Model is required" }).optional(),
  storage: z.enum(["64GB", "128GB", "256GB", "512GB"]).optional(),
  os: z.enum(["Android", "iOS"], { message: "Please select an OS" }).optional(),
  color: z
    .enum(
      ["Black", "White", "Midnight Green", "Red", "Blue", "Silver", "Gold"],
      { message: "Please select a color" }
    )
    .optional(),

  // Accessory fields
  type: z
    .enum(["Case", "Charger", "Earphones", "Screen Protector", "Stand"])
    .optional(),
});
// // Handle form submission
// const onSubmit = (data) => {
//   console.log("Form submitted:", data);
// };

export default function AddProductForm() {
    // const queryClient = useQueryClient();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      photoURL: "",
      category: "smartphone", // Default category to "smartphone"
      price: 0,
      brand: undefined,
      model: "",
      storage: undefined,
      os: undefined,
      color: undefined,
      type: undefined, // For accessories, set a default type
    },
  });

// const onSubmit = async (data) => {
//   try {
//     const res = await fetch("/api/products", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })

//     const result = await res.json()

//     if (!res.ok) throw new Error(result.message || "Failed to save")

//     console.log("✅ Saved!", result)
//     // Optionally reset or show a success toast
//     toast.success("NewProduct data added to MongoDB")
//     form.reset()
//   } catch (err) {
//     console.error("Error saving product:", err)
//     // show an error toast if you want
//   }
// }


const mutation = useMutation({
  mutationFn: async (data)=>{
    const productData = {
      ...data,
      // createdAt: new Date().toISOString(),
    };

    const res = await axios.post('/api/products', productData);
    console.log(res.data);
    return res.data
  },
  onSuccess: ()=>{
     toast.success("✅ Product posted to DB");
    // refresh any lists that show products
    // queryClient.invalidateQueries({ queryKey: ["products"] });
    // reset your form if needed
    form.reset();
  },
  onError: (error)=>{
const errorMessage = error.response?.data?.message || error.message || "Failed to add Product";
        toast.error(`Error adding product: ${errorMessage}`);
        // toast.error(`Error adding car: ${error.message}`); //or just use this simpler version
        console.error(error); // Keep for debugging
  }
})

const onSubmit = (data)=>{
  mutation.mutate(data)  // Trigger the mutation with the form data
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter product title" {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Photo URL Field */}
        <FormField
          control={form.control}
          name="photoURL"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input placeholder="Enter product Photo URL" {...field} value={field.value ?? ""}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Product Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="smartphone">Smartphone</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter product description" {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field */}
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter product price"
                  {...field} value={field.value ?? ""} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Smartphone Fields */}
        {form.watch("category") === "smartphone" && (
          <>
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Apple">Apple</SelectItem>
                        <SelectItem value="Samsung">Samsung</SelectItem>
                        <SelectItem value="Nokia">Nokia</SelectItem>
                        <SelectItem value="Xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="Google">Google</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter smartphone model" {...field} value={field.value ?? ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="storage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Storage</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Storage Size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="64GB">64GB</SelectItem>
                          <SelectItem value="128GB">128GB</SelectItem>
                          <SelectItem value="256GB">256GB</SelectItem>
                          <SelectItem value="512GB">512GB</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Black">Black</SelectItem>
                        <SelectItem value="White">White</SelectItem>
                        <SelectItem value="Midnight Green">
                          Midnight Green
                        </SelectItem>
                        <SelectItem value="Red">Red</SelectItem>
                        <SelectItem value="Blue">Blue</SelectItem>
                        <SelectItem value="Silver">Silver</SelectItem>
                        <SelectItem value="Gold">Gold</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* Accessory Fields */}
        {form.watch("category") === "accessories" && (
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Accessory Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Case">Case</SelectItem>
                      <SelectItem value="Charger">Charger</SelectItem>
                      <SelectItem value="Earphones">Earphones</SelectItem>
                      <SelectItem value="Screen Protector">
                        Screen Protector
                      </SelectItem>
                      <SelectItem value="Stand">Stand</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Submit Button */}
       <Button type="submit" disabled={mutation.isPending}>
  {mutation.isPending ? "Saving..." : "Add Product"}
</Button>
      </form>
    </Form>
  );
}
