import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Fort-Star Energy Resources Nigeria Limited" },
      { name: "description", content: "Learn about Fort-Star Energy Resources Nigeria Limited, a trusted supplier of lubricants and energy solutions for Nigerian industry." },
      { property: "og:title", content: "About Us — Fort-Star Energy Resources Nigeria Limited" },
      { property: "og:description", content: "Learn about Fort-Star Energy Resources Nigeria Limited, a trusted supplier of lubricants and energy solutions for Nigerian industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-accent px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            About Fort-Star
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Fort-Star Energy Resources Nigeria Limited is committed to delivering dependable lubricant and energy solutions that keep Nigerian businesses moving.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Who We Are
              </h2>
              <p className="text-muted-foreground">
                Founded with a vision to support Nigeria's growing industrial and automotive sectors, Fort-Star Energy Resources Nigeria Limited supplies high-quality lubricants that meet the demands of modern machinery and equipment.
              </p>
              <p className="text-muted-foreground">
                We work with manufacturers, fleet operators, logistics companies, agricultural enterprises, and industrial plants to provide the right lubrication products at competitive prices, backed by reliable delivery and professional service.
              </p>
              <p className="text-muted-foreground">
                Our team combines technical knowledge with a deep understanding of the Nigerian market, ensuring our customers receive products that improve performance, extend equipment life, and reduce downtime.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <ValueCard
                icon={Target}
                title="Mission"
                description="To be a trusted partner for lubricant supply in Nigeria, delivering quality products and dependable service that power our customers' success."
              />
              <ValueCard
                icon={Eye}
                title="Vision"
                description="To become a leading name in Nigeria's energy resources sector, recognised for reliability, integrity, and technical excellence."
              />
              <ValueCard
                icon={Shield}
                title="Integrity"
                description="We do business honestly, honour our commitments, and only supply products we can stand behind."
              />
              <ValueCard
                icon={Users}
                title="Customer Focus"
                description="We listen to our customers, understand their needs, and work to deliver solutions that make their operations more efficient."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="10+" label="Years of experience" />
            <Stat value="500+" label="Customers served" />
            <Stat value="50+" label="Product grades" />
            <Stat value="36" label="States reachable" />
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-primary">{value}</div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}
