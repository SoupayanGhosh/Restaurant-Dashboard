import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "ORD-001",
    customer: "Alex Johnson",
    items: "Pasta Carbonara, Tiramisu",
    status: "Completed",
    total: "$42.80",
    time: "12:30 PM",
    avatar: "AJ",
  },
  {
    id: "ORD-002",
    customer: "Maria Garcia",
    items: "Margherita Pizza, Caesar Salad",
    status: "In Progress",
    total: "$31.50",
    time: "12:45 PM",
    avatar: "MG",
  },
  {
    id: "ORD-003",
    customer: "James Wilson",
    items: "Steak, Mashed Potatoes, Red Wine",
    status: "In Progress",
    total: "$78.90",
    time: "1:15 PM",
    avatar: "JW",
  },
  {
    id: "ORD-004",
    customer: "Sarah Chen",
    items: "Sushi Platter, Green Tea",
    status: "Preparing",
    total: "$54.20",
    time: "1:30 PM",
    avatar: "SC",
  },
  {
    id: "ORD-005",
    customer: "David Kim",
    items: "Burger, Fries, Milkshake",
    status: "Preparing",
    total: "$28.75",
    time: "1:45 PM",
    avatar: "DK",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{order.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{order.customer}</p>
              <p className="text-sm text-muted-foreground">{order.items}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              variant={
                order.status === "Completed" ? "default" : order.status === "In Progress" ? "secondary" : "outline"
              }
              className="whitespace-nowrap"
            >
              {order.status}
            </Badge>
            <div className="text-right">
              <p className="text-sm font-medium">{order.total}</p>
              <p className="text-xs text-muted-foreground">{order.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

