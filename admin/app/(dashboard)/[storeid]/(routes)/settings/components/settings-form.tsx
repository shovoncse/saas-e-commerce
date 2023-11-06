"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface SettingsFormProps {
  initialData: Store;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

const SettingsForm: React.FC<SettingsFormProps> = ({
  initialData
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // onSubmit is a function that takes the form values as an argument
  const onSubmit = async (values: SettingsFormValues) => {
    console.log(values);
  }

  // useForm is a custom hook that returns a bunch of stuff
  const form = useForm<SettingsFormValues>({
    defaultValues: {
      name: initialData.name,
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Settings"
          description="Manage your store settings."
        />
        <Button
        disabled={loading}
          variant="destructive"
          size="icon"
          onClick={() => setOpen(true)}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>
      <Separator />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Store name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="ml-auto"
          >Save changes</Button>
        </form>
      </Form>

    </>
  );
}

export default SettingsForm;