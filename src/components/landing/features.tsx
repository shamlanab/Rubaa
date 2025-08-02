import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Briefcase, Leaf } from "lucide-react";

const features = [
    {
        icon: <AreaChart className="h-8 w-8 text-primary" />,
        title: "Heatmap Visualization",
        description: "Instantly identify high-potential zones for tourism and agriculture with our dynamic heatmap overlays.",
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Detailed Parcel Data",
        description: "Access in-depth information on individual land parcels, including investment scores and viability ratings.",
    },
    {
        icon: <Leaf className="h-8 w-8 text-primary" />,
        title: "Dual-Sector Focus",
        description: "Explore opportunities in both the burgeoning tourism industry and the foundational agriculture sector of Asir.",
    },
];

export const Features = () => {
    return (
        <section id="features" className="w-full py-20 md:py-28 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Unlock Asir's Potential</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform provides the tools and data you need to make informed investment decisions in one of Saudi Arabia's most promising regions.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-sm gap-6 py-12 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-3">
                    {features.map((feature, index) => (
                         <Card key={index} className="flex flex-col text-center">
                            <CardHeader className="flex-grow">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    {feature.icon}
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
