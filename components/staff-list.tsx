import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const staff = [
  {
    id: 1,
    name: "Michael Rodriguez",
    position: "Head Chef",
    shift: "10:00 AM - 8:00 PM",
    avatar: "MR",
    status: "On Duty",
  },
  {
    id: 2,
    name: "Jessica Lee",
    position: "Sous Chef",
    shift: "11:00 AM - 9:00 PM",
    avatar: "JL",
    status: "On Duty",
  },
  {
    id: 3,
    name: "Daniel Smith",
    position: "Server",
    shift: "4:00 PM - 12:00 AM",
    avatar: "DS",
    status: "On Break",
  },
  {
    id: 4,
    name: "Amanda White",
    position: "Bartender",
    shift: "4:00 PM - 12:00 AM",
    avatar: "AW",
    status: "On Duty",
  },
  {
    id: 5,
    name: "Kevin Brown",
    position: "Host",
    shift: "5:00 PM - 11:00 PM",
    avatar: "KB",
    status: "On Duty",
  },
]

export function StaffList() {
  return (
    <div className="space-y-4">
      {staff.map((person) => (
        <div key={person.id} className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{person.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{person.name}</p>
            <p className="text-xs text-muted-foreground">{person.position}</p>
          </div>
          <Badge variant={person.status === "On Duty" ? "default" : "secondary"} className="whitespace-nowrap">
            {person.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}

