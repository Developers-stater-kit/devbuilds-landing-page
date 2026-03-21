"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

// ─── Schema ───────────────────────────────────────────────────────────────────

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  message: z.string()
});

type FormValues = z.infer<typeof formSchema>;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    try {
      console.log(values);
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Message sent! We'll get back to you within 24 hours.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">

        {/* ── Name + Email ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="text"
                  placeholder="John Doe"
                  aria-invalid={fieldState.invalid}
                  className="h-12 rounded-xl bg-card border-border px-4 text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="john@example.com"
                  aria-invalid={fieldState.invalid}
                  className="h-12 rounded-xl bg-card border-border px-4 text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* ── Service ── */}
        <Controller
          name="service"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>What do you need?</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className="py-5 rounded-xl bg-card border-border px-4 text-sm w-full"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border shadow-xl">
                  <SelectItem value="mvp" className="py-3 px-4 cursor-pointer text-sm">MVP Development</SelectItem>
                  <SelectItem value="landing_page" className="py-3 px-4 cursor-pointer text-sm">Landing Page / Template</SelectItem>
                  <SelectItem value="full_stack" className="py-3 px-4 cursor-pointer text-sm">Full Stack Web App</SelectItem>
                  <SelectItem value="saas" className="py-3 px-4 cursor-pointer text-sm">SaaS Product</SelectItem>
                  <SelectItem value="customization" className="py-3 px-4 cursor-pointer text-sm">Template Customization</SelectItem>
                  <SelectItem value="exploring" className="py-3 px-4 cursor-pointer text-sm">Just exploring</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Budget ── */}
        <Controller
          name="budget"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Budget range</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className="py-5 rounded-xl bg-card border-border px-4 text-sm w-full"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select a budget..." />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-border shadow-xl">
                  <SelectItem value="under_50k" className="py-3 px-4 cursor-pointer text-sm">Under ₹50,000</SelectItem>
                  <SelectItem value="50k_150k" className="py-3 px-4 cursor-pointer text-sm">₹50,000 – ₹1,50,000</SelectItem>
                  <SelectItem value="150k_300k" className="py-3 px-4 cursor-pointer text-sm">₹1,50,000 – ₹3,00,000</SelectItem>
                  <SelectItem value="over_300k" className="py-3 px-4 cursor-pointer text-sm">₹3,00,000+</SelectItem>
                  <SelectItem value="not_sure" className="py-3 px-4 cursor-pointer text-sm">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Message ── */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Message</FieldLabel>
              <Textarea
                {...field}
                id={field.name}
                placeholder="Tell us a bit more about what you want to build..."
                aria-invalid={fieldState.invalid}
                className="min-h-[140px] resize-none p-4 rounded-xl bg-card border-border text-sm placeholder:text-muted-foreground/60"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* ── Submit ── */}
        <Button
          type="submit"
          className="h-12 w-full md:w-auto self-start px-8 rounded-xl text-sm font-bold text-black "
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Sending..." : "Send Message"}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>

      </form>
    </div>
  );
}