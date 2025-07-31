import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";

interface FeatureProps {
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    badge: string;
  }[];
}

const Feature = ({ features }: FeatureProps) => {
  return (
    <section
      id="features"
      className="py-24 sm:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight font-mono"
          >
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully curated stack of modern tools and best practices to
            accelerate your development workflow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-lg group w-full md:w-[calc(50%-1rem)] max-w-md"
              role="article"
              aria-labelledby={`feature-flex-${index}-title`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 w-fit group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="font-mono text-xs bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle
                  id={`feature-flex-${index}-title`}
                  className="text-xl font-mono"
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
