import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/fortstar-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fort-Star Energy Resources Nigeria Limited" },
      { name: "description", content: "Reliable lubricant supply and energy solutions for industries across Nigeria. Request a quote for engine oils, hydraulic fluids, greases, and more." },
      { property: "og:title", content: "Fort-Star Energy Resources Nigeria Limited" },
      { property: "og:description", content: "Reliable lubricant supply and energy solutions for industries across Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
                Quality lubricants for Nigerian industry
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Powering industry with <span className="text-primary">premium lubricants</span>
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Fort-Star Energy Resources Nigeria Limited supplies high-performance engine oils, hydraulic fluids, greases, and industrial lubricants to keep your operations running smoothly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/quote">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/lubricants">Explore Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center rounded-2xl bg-accent p-8 lg:p-12">
              <img
                src={logoAsset.url}
                alt="Fort-Star Energy Resources Nigeria Limited logo"
                className="h-auto w-full max-w-md rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="border-y border-border bg-card px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <TrustCard icon={Award} title="Certified Products" description="Meeting international quality standards." />
            <TrustCard icon={Truck} title="Reliable Delivery" description="Timely supply across Nigeria." />
            <TrustCard icon={ShieldCheck} title="Quality Assured" description="Tested and trusted lubricants." />
            <TrustCard icon={Droplets} title="Wide Range" description="Oils, greases, fluids, and more." />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Lubricants
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Engineered for performance, durability, and protection across automotive, industrial, and marine applications.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Engine Oils"
              description="High-quality motor oils formulated for petrol, diesel, and heavy-duty engines."
            />
            <ProductCard
              title="Hydraulic Oils"
              description="Premium anti-wear hydraulic fluids for industrial machinery and mobile equipment."
            />
            <ProductCard
              title="Industrial Greases"
              description="Multi-purpose greases designed for bearings, chassis, and heavy-load applications."
            />
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/lubricants">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need a bulk lubricant supply?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Tell us what you need and our team will prepare a competitive quote tailored to your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/quote">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function TrustCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function ProductCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
          <Droplets className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
