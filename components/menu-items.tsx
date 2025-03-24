import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Trash2 } from "lucide-react"

// Sample menu data
const menuItems = {
  all: [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle and Parmesan",
      price: "$24.99",
      category: "main-courses",
      dietary: ["vegetarian"],
      popular: true,
    },
    {
      id: 2,
      name: "Beef Carpaccio",
      description: "Thinly sliced raw beef with arugula and Parmesan",
      price: "$18.50",
      category: "appetizers",
      dietary: [],
      popular: true,
    },
    {
      id: 3,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla ice cream",
      price: "$12.99",
      category: "desserts",
      dietary: ["vegetarian"],
      popular: true,
    },
    {
      id: 4,
      name: "Lobster Bisque",
      description: "Creamy lobster soup with a touch of brandy",
      price: "$16.99",
      category: "appetizers",
      dietary: [],
      popular: false,
    },
    {
      id: 5,
      name: "Filet Mignon",
      description: "8oz grass-fed beef tenderloin with red wine reduction",
      price: "$42.99",
      category: "main-courses",
      dietary: ["gluten-free"],
      popular: true,
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Classic Italian dessert with mascarpone and espresso",
      price: "$10.99",
      category: "desserts",
      dietary: ["vegetarian"],
      popular: false,
    },
    {
      id: 7,
      name: "Craft Mojito",
      description: "Fresh mint, lime, rum and soda water",
      price: "$14.99",
      category: "drinks",
      dietary: ["vegan", "gluten-free"],
      popular: true,
    },
    {
      id: 8,
      name: "Aged Cabernet",
      description: "Full-bodied red wine with notes of blackberry and oak",
      price: "$12.99",
      category: "drinks",
      dietary: ["vegan", "gluten-free"],
      popular: false,
    },
  ],
  appetizers: [],
  "main-courses": [],
  desserts: [],
  drinks: [],
}

// Populate category-specific arrays
menuItems.appetizers = menuItems.all.filter((item) => item.category === "appetizers")
menuItems["main-courses"] = menuItems.all.filter((item) => item.category === "main-courses")
menuItems.desserts = menuItems.all.filter((item) => item.category === "desserts")
menuItems.drinks = menuItems.all.filter((item) => item.category === "drinks")

export function MenuItems({ category = "all" }: { category?: string }) {
  const items = menuItems[category as keyof typeof menuItems]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className="text-base font-medium">{item.price}</div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.popular && <Badge variant="default">Popular</Badge>}
                  {item.dietary.map((diet) => (
                    <Badge key={diet} variant="outline">
                      {diet.charAt(0).toUpperCase() + diet.slice(1)}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

