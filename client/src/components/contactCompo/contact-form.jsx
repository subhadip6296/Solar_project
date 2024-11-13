import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";
import { images } from "../../assets/Assets";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid contact number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  query: z.string().min(10, {
    message: "Query must be at least 10 characters.",
  }),
});

export function ContactFormComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contactNo: "",
      email: "",
      subject: "",
      query: "",
    },
  });

  function onSubmit(values) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Message Sent",
        description:
          "We've received your message and will get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 2000);
  }

  return (
    <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
      <div>
        <img className="rounded-md" src={images.contact} alt="" />
      </div>
      <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-pcolor">
          Contact Us
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Your contact number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Message subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Query</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your query"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-pcolor hover:bg-pcolor/90"
              disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
