import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Fort-Star Energy Resources Nigeria Limited" },
      { name: "description", content: "Request a competitive quote for lubricants, engine oils, hydraulic fluids, greases, and industrial supplies from Fort-Star Energy Resources Nigeria Limited." },
      { property: "og:title", content: "Request a Quote — Fort-Star Energy Resources Nigeria Limited" },
      { property: "og:description", content: "Request a competitive quote for lubricants, engine oils, hydraulic fluids, greases, and industrial supplies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuotePage,
});

const productOptions = [
  "Engine Oils",
  "Hydraulic Oils",
  "Gear Oils",
  "Transmission Fluids",
  "Industrial Greases",
  "Coolants & Antifreeze",
  "Multiple Products",
  "Other",
];

function QuotePage() {
  return (
    <>
      <section className="bg-accent px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us what lubricants you need and our team will prepare a tailored quote for your business.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="quote-name">Full name</Label>
                    <Input id="quote-name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-email">Email address</Label>
                    <Input id="quote-email" type="email" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="quote-company">Company name</Label>
                    <Input id="quote-company" placeholder="Your company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-phone">Phone number</Label>
                    <Input id="quote-phone" type="tel" placeholder="+234 ..." />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="quote-product">Product of interest</Label>
                    <Select>
                      <SelectTrigger id="quote-product">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-quantity">Estimated quantity</Label>
                    <Input id="quote-quantity" placeholder="e.g. 100 drums" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quote-details">Additional details</Label>
                  <Textarea
                    id="quote-details"
                    rows={5}
                    placeholder="Tell us about your application, preferred grades, packaging, delivery location, and any other requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <BenefitItem text="Competitive bulk pricing" />
            <BenefitItem text="Fast response within 24 hours" />
            <BenefitItem text="Nationwide delivery options" />
          </div>
        </div>
      </section>
    </>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
}
