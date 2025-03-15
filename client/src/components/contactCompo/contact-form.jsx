// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { images } from "../../assets/Assets";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
//     message: "Please enter a valid contact number.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   query: z.string().min(10, {
//     message: "Query must be at least 10 characters.",
//   }),
// });

// export function ContactFormComponent() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       contactNo: "",
//       email: "",
//       subject: "",
//       query: "",
//     },
//   });

//   function onSubmit(values) {
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       console.log(values);
//       toast({
//         title: "Message Sent",
//         description:
//           "We've received your message and will get back to you soon.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     }, 2000);
//   }

//   return (
//     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
//       <div>
//         <img className="rounded-md" src={images.contact} alt="" />
//       </div>
//       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
//         <h2 className=" text-2xl font-bold mb-6 text-center ">
//           Contact Us
//         </h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="contactNo"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="tel"
//                       placeholder="Your contact number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Message subject" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="query"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your query"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               type="submit"
//               className="w-full bg-[#118B50] hover:bg-pcolor/90"
//               disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Button } from "../ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { useToast } from "../ui/use-toast";
// import { images } from "../../assets/Assets";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   contactNo: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
//     message: "Please enter a valid contact number.",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address.",
//   }),
//   subject: z.string().min(5, {
//     message: "Subject must be at least 5 characters.",
//   }),
//   query: z.string().min(10, {
//     message: "Query must be at least 10 characters.",
//   }),
//   category: z.string().nonempty({ message: "Please select a category." }),
// });

// export function ContactFormComponent() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       contactNo: "",
//       email: "",
//       subject: "",
//       query: "",
//       category: "",
//     },
//   });

//   function onSubmit(values) {
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       console.log(values);
//       toast({
//         title: "Message Sent",
//         description:
//           "We've received your message and will get back to you soon.",
//       });
//       form.reset();
//       setIsSubmitting(false);
//     }, 2000);
//   }

//   return (
//     <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
//       <div>
//         <img className="rounded-md" src='https://solariumenergy.in/wp-content/uploads/2022/01/service01-1-1024x1024.jpg' alt="" />
//       </div>
//       <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
//         <h2 className=" text-2xl font-bold mb-6 text-center ">
//           Contact Us
//         </h2>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="contactNo"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Contact Number</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="tel"
//                       placeholder="Your contact number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="Your email" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Subject</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Message subject" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* 🆕 Category Dropdown */}
//             <FormField
//               control={form.control}
//               name="category"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Category</FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a category" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
//                       <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
//                       <SelectItem value="Student Support">Student Support</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="query"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Query</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your query"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button
//               type="submit"
//               className="w-full bg-[#118B50] hover:bg-pcolor/90"
//               disabled={isSubmitting}>
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }




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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import emailjs from '@emailjs/browser';

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
    category: z.string().nonempty({ message: "Please select a category." }),
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
            category: "",
        },
    });

    const onSubmit = (values) => {
        setIsSubmitting(true);

        const serviceId = 'service_p39zzgh'; // Replace with your Service ID
        const templateId = 'template_yshb1bh'; // Replace with your Template ID
        const publicKey = 'Z62XFgVGkaSYUqmp0'; // Replace with your Public Key

        emailjs.send(serviceId, templateId, values, publicKey)
            .then(() => {
                toast({
                    title: "Message Sentt",
                    description: "We've received your message and will get back to you soon.",
                });
                form.reset();
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again.",
                });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="grid md:grid-cols-2 mt-16 mb-16 gap-y-8">
            {/* ... (rest of your component code) */}
            <div className="max-w-md w-full mx-auto px-4 bg-card rounded-lg">
                <h2 className=" text-2xl font-bold mb-6 text-center ">
                    Contact Us
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* ... (form fields) */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Solar Energy Solutions">Solar Energy Solutions</SelectItem>
                                            <SelectItem value="E-Bikes & Electric Mobility">E-Bikes & Electric Mobility</SelectItem>
                                            <SelectItem value="Student Support">Student Support</SelectItem>
                                        </SelectContent>
                                    </Select>
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
                            className="w-full bg-[#118B50] hover:bg-pcolor/90"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}