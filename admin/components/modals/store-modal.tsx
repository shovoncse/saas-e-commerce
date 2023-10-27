"use client";

import * as z from "zod";
import { useStoreModel } from "@/hooks/use-store-model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Modal } from "@/components/ui/modal";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(3).max(255),
});

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModel();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // TODO: create store
  };

  return (
    <div>
      <Modal
        title="Create a new store"
        description="Add a new store to manage products and orders."
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: E-Commerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end">
                  <Button
                    variant="outline"
                    onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit">Continue</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  )
};