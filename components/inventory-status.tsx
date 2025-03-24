import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const inventory = [
  {
    id: 1,
    item: "Fresh Salmon",
    stock: 15,
    unit: "kg",
    threshold: 20,
    status: "Low",
  },
  {
    id: 2,
    item: "Ribeye Steak",
    stock: 8,
    unit: "kg",
    threshold: 15,
    status: "Critical",
  },
  {
    id: 3,
    item: "White Wine",
    stock: 12,
    unit: "bottles",
    threshold: 20,
    status: "Low",
  },
  {
    id: 4,
    item: "Olive Oil",
    stock: 5,
    unit: "liters",
    threshold: 10,
    status: "Critical",
  },
  {
    id: 5,
    item: "Fresh Basil",
    stock: 3,
    unit: "bunches",
    threshold: 10,
    status: "Critical",
  },
]

export function InventoryStatus() {
  return (
    <div className="space-y-4">
      {inventory.map((item) => {
        const percentage = (item.stock / item.threshold) * 100

        return (
          <div key={item.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{item.item}</p>
              <Badge variant={item.status === "Critical" ? "destructive" : "outline"} className="whitespace-nowrap">
                {item.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>
                {item.stock} {item.unit} left
              </span>
              <span className="text-muted-foreground">
                Min: {item.threshold} {item.unit}
              </span>
            </div>
            <Progress value={percentage} className={percentage < 30 ? "text-destructive" : ""} />
          </div>
        )
      })}
    </div>
  )
}

