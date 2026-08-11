import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/lubricants")({
  head: () => ({
    meta: [
      { title: "Lubricants — Fort-Star Energy Resources Nigeria Limited" },
      { name: "description", content: "Browse Fort-Star's range of engine oils, hydraulic fluids, greases, transmission fluids, and industrial lubricants." },
      { property: "og:title", content: "Lubricants — Fort-Star Energy Resources Nigeria Limited" },
      { property: "og:description", content: "Browse Fort-Star's range of engine oils, hydraulic fluids, greases, transmission fluids, and industrial lubricants." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LubricantsPage,
});

const products = [
  {
    title: "Engine Oils",
    description: "Premium motor oils for passenger cars, trucks, buses, and heavy-duty diesel engines. Available in a range of SAE grades and API specifications.",
    specs: ["SAE 5W-30, 10W-40, 15W-40", "API SP/CK-4", "Mineral & synthetic blends"],
  },
  {
    title: "Hydraulic Oils",
    description: "Anti-wear hydraulic fluids engineered to protect pumps, valves, and cylinders in industrial and mobile hydraulic systems.",
    specs: ["ISO VG 32, 46, 68", "Anti-wear additives", "Oxidation stable"],
  },
  {
    title: "Gear Oils",
    description: "High-performance gear lubricants for manual transmissions, differentials, and industrial gearboxes operating under heavy loads.",
    specs: ["API GL-4 / GL-5", "SAE 80W-90, 85W-140", "Extreme pressure protection"],
  },
  {
    title: "Transmission Fluids",
    description: "Automatic and manual transmission fluids formulated for smooth shifting, wear protection, and extended component life.",
    specs: ["ATF & MTF grades", "Friction modified", "Thermal stable"],
  },
  {
    title: "Industrial Greases",
    description: "Multi-purpose lithium and calcium-based greases for bearings, chassis, joints, and heavy-load industrial equipment.",
    specs: ["NLGI 2 & 3", "Water resistant", "High load carrying"],
  },
  {
    title: "Coolants & Antifreeze",
    description: "Engine coolants and antifreeze solutions that prevent overheating, corrosion, and freezing in automotive and stationary engines.",
    specs: ["Ethylene glycol based", "Long-life formula", "Corrosion inhibitors"],
  },
];

function LubricantsPage() {
  return (
    <>
      <section className="bg-accent px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Our Lubricants
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A comprehensive range of lubrication products for automotive, industrial, marine, and agricultural applications.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="flex flex-col transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{product.title}</h2>
                  <p className="mt-2 flex-1 text-muted-foreground">{product.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-primary-foreground sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Looking for a specific product or grade?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/90">
              We can source specialised lubricants and package sizes to match your equipment requirements.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-6">
              <Link to="/quote">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
