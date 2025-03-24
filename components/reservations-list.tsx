import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const reservations = [
  {
    id: "RES-001",
    name: "Thomas Anderson",
    time: "6:30 PM",
    guests: 4,
    table: "12",
    status: "Confirmed",
    avatar: "TA",
    phone: "(555) 123-4567",
  },
  {
    id: "RES-002",
    name: "Emily Parker",
    time: "7:00 PM",
    guests: 2,
    table: "8",
    status: "Confirmed",
    avatar: "EP",
    phone: "(555) 987-6543",
  },
  {
    id: "RES-003",
    name: "Robert Johnson",
    time: "7:30 PM",
    guests: 6,
    table: "15",
    status: "Pending",
    avatar: "RJ",
    phone: "(555) 456-7890",
  },
  {
    id: "RES-004",
    name: "Sophia Martinez",
    time: "8:00 PM",
    guests: 3,
    table: "7",
    status: "Pending",
    avatar: "SM",
    phone: "(555) 234-5678",
  },
]

export function ReservationsList() {
  return (
    <div className="space-y-4">
      {reservations.map((reservation) => (
        <Card key={reservation.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center p-4">
              <Avatar className="h-9 w-9 mr-4">
                <AvatarFallback>{reservation.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{reservation.name}</p>
                  <Badge variant={reservation.status === "Confirmed" ? "default" : "outline"} className="ml-2">
                    {reservation.status}
                  </Badge>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{reservation.time}</span>
                  <span className="mx-1">•</span>
                  <span>{reservation.guests} guests</span>
                  <span className="mx-1">•</span>
                  <span>Table {reservation.table}</span>
                </div>
                <p className="text-xs text-muted-foreground">{reservation.phone}</p>
              </div>
              {reservation.status === "Pending" && (
                <div className="flex space-x-2 ml-4">
                  <Button size="icon" variant="outline" className="h-7 w-7">
                    <Check className="h-4 w-4" />
                    <span className="sr-only">Confirm</span>
                  </Button>
                  <Button size="icon" variant="outline" className="h-7 w-7">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cancel</span>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

