"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  "Utility Functions",
  "Components",
  "Hooks",
  "Algorithms",
  "Data Structures",
  "API",
  "Database",
  "Authentication",
  "Testing",
  "DevOps",
];

export default function CategoriesPage() {
  return (
    <div className="container py-6">
      <div className="mb-6 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground">
          Browse snippets by category.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <Link
            key={category}
            href={`/snippets?category=${encodeURIComponent(category)}`}
          >
            <Card className="group transition-colors hover:border-primary/50 hover:bg-muted/40">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-base">
                  <span>{category}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">View snippets</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
