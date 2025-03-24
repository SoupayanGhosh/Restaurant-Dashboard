import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Edit, MoreHorizontal, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample reservations data
const reservationsData = {
  today: [
    {
      id: "RES-001",
      name: "Thomas Anderson",
      date: "Today",
      time: "6:30 PM",
      guests: 4,
      table: "12",
      status: "Confirmed",
      phone: "(555) 123-4567",
      email: "t.anderson@example.com",
    },
    {
      id: "RES-002",
      name: "Emily Parker",
      date: "Today",
      time: "7:00 PM",
      guests: 2,
      table: "8",
      status: "Confirmed",
      phone: "(555) 987-6543",
      email: "emily.p@example.com",
    },
    {
      id: "RES-003",
      name: "Robert Johnson",
      date: "Today",
      time: "7:30 PM",
      guests: 6,
      table: "15",
      status: "Pending",
      phone: "(555) 456-7890",
      email: "robert.j@example.com",
    },
    {
      id: "RES-004",
      name: "Sophia Martinez",
      date: "Today",
      time: "8:00 PM",
      guests: 3,
      table: "7",
      status: "Pending",
      phone: "(555) 234-5678",
      email: "sophia.m@example.com",
    },
  ],
  upcoming: [
    {
      id: "RES-005",
      name: "James Wilson",
      date: "Tomorrow",
      time: "6:00 PM",
      guests: 2,
      table: "5",
      status: "Confirmed",
      phone: "(555) 345-6789",
      email: "james.w@example.com",
    },
    {
      id: "RES-006",
      name: "Olivia Brown",
      date: "Tomorrow",
      time: "7:15 PM",
      guests: 4,
      table: "10",
      status: "Confirmed",
      phone: "(555) 456-7890",
      email: "olivia.b@example.com",
    },
    {
      id: "RES-007",
      name: "William Davis",
      date: "Mar 25, 2023",
      time: "8:30 PM",
      guests: 8,
      table: "20",
      status: "Pending",
      phone: "(555) 567-8901",
      email: "william.d@example.com",
    },
  ],
  past: [
    {
      id: "RES-008",
      name: "Emma Taylor",
      date: "Mar 20, 2023",
      time: "7:00 PM",
      guests: 2,
      table: "6",
      status: "Completed",
      phone: "(555) 678-9012",
      email: "emma.t@example.com",
    },
    {
      id: "RES-009",
      name: "Michael Brown",
      date: "Mar 19, 2023",
      time: "6:45 PM",
      guests: 5,
      table: "14",
      status: "Completed",
      phone: "(555) 789-0123",
      email: "michael.b@example.com",
    },
    {
      id: "RES-010",
      name: "Ava Johnson",
      date: "Mar 18, 2023",
      time: "8:15 PM",
      guests: 3,
      table: "9",
      status: "Cancelled",
      phone: "(555) 890-1234",
      email: "ava.j@example.com",
    },
  ],
  all: [],
}

// Combine all reservations for the "all" tab
reservationsData.all = [...reservationsData.today, ...reservationsData.upcoming, ...reservationsData.past]

export function ReservationsTable({ timeframe = "today" }: { timeframe?: string }) {
  const reservations = reservationsData[timeframe as keyof typeof reservationsData]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Guest</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Party Size</TableHead>
            <TableHead>Table</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow key={reservation.id}>
              <TableCell className="font-medium">{reservation.id}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{reservation.name}</div>
                  <div className="text-xs text-muted-foreground">{reservation.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div>{reservation.date}</div>
                  <div className="text-xs text-muted-foreground">{reservation.time}</div>
                </div>
              </TableCell>
              <TableCell>{reservation.guests}</TableCell>
              <TableCell>{reservation.table}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    reservation.status === "Confirmed"
                      ? "default"
                      : reservation.status === "Pending"
                        ? "outline"
                        : reservation.status === "Completed"
                          ? "secondary"
                          : "destructive"
                  }
                >
                  {reservation.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  {reservation.status === "Pending" && (
                    <>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Confirm</span>
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Cancel</span>
                      </Button>
                    </>
                  )}
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

