import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

const contactSchema = zod.object({
  name: zod.string().min(2, "Name is required"),
  phone: zod.string().min(10, "Valid phone number is required"),
  email: zod.string().email("Valid email address is required"),
  message: zod.string().min(10, "Please provide a brief description of your situation"),
});

type ContactFormData = zod.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Thank you! Your free case consultation request has been sent. Robert Hickey will contact you shortly.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-dark-card border border-dark-border p-8 md:p-10 shadow-2xl relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold"></div>

      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold tracking-wide text-foreground">
          Request a Free Case Review
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Confidential & No Obligation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Full Name <span className="text-gold">*</span>
          </label>
          <Input
            id="name"
            placeholder="John Doe"
            className="bg-neutral-900 border-dark-border text-foreground focus-visible:ring-gold rounded-none h-12"
            {...register("name")}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone Number <span className="text-gold">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="(714) 525-4457"
            className="bg-neutral-900 border-dark-border text-foreground focus-visible:ring-gold rounded-none h-12"
            {...register("phone")}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Email Address <span className="text-gold">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="johndoe@example.com"
          className="bg-neutral-900 border-dark-border text-foreground focus-visible:ring-gold rounded-none h-12"
          {...register("email")}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Describe Your Case <span className="text-gold">*</span>
        </label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Please provide details about the charges or incident. All communications are 100% confidential."
          className="bg-neutral-900 border-dark-border text-foreground focus-visible:ring-gold rounded-none resize-none"
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-dark-bg font-bold uppercase tracking-widest hover:bg-gold-hover rounded-none py-6 transition-all active:scale-98 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message — It's Free</span>
          </>
        )}
      </Button>

      <p className="text-[10px] text-center text-muted-foreground leading-relaxed">
        <strong>Privacy Guarantee:</strong> Your information is fully protected by attorney-client privilege and will never be shared with third parties.
      </p>
    </form>
  );
}
