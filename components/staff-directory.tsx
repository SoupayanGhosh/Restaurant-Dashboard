import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Edit, Mail, Phone } from "lucide-react"

const staffMembers = [
  {
    id: 1,
    name: "Michael Rodriguez",
    position: "Head Chef",
    department: "Kitchen",
    email: "michael.r@restaurant.com",
    phone: "(555) 123-4567",
    avatar: "MR",
    status: "Full-time",
  },
  {
    id: 2,
    name: "Jessica Lee",
    position: "Sous Chef",
    department: "Kitchen",
    email: "jessica.l@restaurant.com",
    phone: "(555) 234-5678",
    avatar: "JL",
    status: "Full-time",
  },
  {
    id: 3,
    name: "Daniel Smith",
    position: "Server",
    department: "Front of House",
    email: "daniel.s@restaurant.com",
    phone: "(555) 345-6789",
    avatar: "DS",
    status: "Part-time",
  },
  {
    id: 4,
    name: "Amanda White",
    position: "Bartender",
    department: "Bar",
    email: "amanda.w@restaurant.com",
    phone: "(555) 456-7890",
    avatar: "AW",
    status: "Full-time",
  },
  {
    id: 5,
    name: "Kevin Brown",
    position: "Host",
    department: "Front of House",
    email: "kevin.b@restaurant.com",
    phone: "(555) 567-8901",
    avatar: "KB",
    status: "Part-time",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    position: "Pastry Chef",
    department: "Kitchen",
    email: "sarah.j@restaurant.com",
    phone: "(555) 678-9012",
    avatar: "SJ",
    status: "Full-time",
  },
  {
    id: 7,
    name: "David Chen",
    position: "Line Cook",
    department: "Kitchen",
    email: "david.c@restaurant.com",
    phone: "(555) 789-0123",
    avatar: "DC",
    status: "Full-time",
  },
  {
    id: 8,
    name: "Emily Wilson",
    position: "Server",
    department: "Front of House",
    email: "emily.w@restaurant.com",
    phone: "(555) 890-1234",
    avatar: "EW",
    status: "Part-time",
  },
]

export function StaffDirectory() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {staffMembers.map((staff) => (
        <Card key={staff.id}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{staff.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{staff.name}</p>
                  <p className="text-sm text-muted-foreground">{staff.position}</p>
                </div>
              </div>
              <Badge variant={staff.status === "Full-time" ? "default" : "secondary"} className="ml-auto">
                {staff.status}
              </Badge>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                {staff.email}
              </div>
              <div className="flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                {staff.phone}
              </div>
              <div className="flex items-center text-sm">
                <Badge variant="outline" className="mt-2">
                  {staff.department}
                </Badge>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button size="sm" variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

