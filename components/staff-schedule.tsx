import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, Filter, Printer } from "lucide-react"

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const shifts = {
  Monday: [
    { name: "Michael Rodriguez", position: "Head Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Jessica Lee", position: "Sous Chef", time: "11:00 AM - 9:00 PM" },
    { name: "Daniel Smith", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
  ],
  Tuesday: [
    { name: "Michael Rodriguez", position: "Head Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Sarah Johnson", position: "Pastry Chef", time: "9:00 AM - 5:00 PM" },
    { name: "David Chen", position: "Line Cook", time: "11:00 AM - 9:00 PM" },
    { name: "Emily Wilson", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
  ],
  Wednesday: [
    { name: "Jessica Lee", position: "Sous Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Sarah Johnson", position: "Pastry Chef", time: "9:00 AM - 5:00 PM" },
    { name: "Daniel Smith", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
    { name: "David Chen", position: "Line Cook", time: "11:00 AM - 9:00 PM" },
  ],
  Thursday: [
    { name: "Michael Rodriguez", position: "Head Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Jessica Lee", position: "Sous Chef", time: "11:00 AM - 9:00 PM" },
    { name: "Emily Wilson", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
  ],
  Friday: [
    { name: "Michael Rodriguez", position: "Head Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Jessica Lee", position: "Sous Chef", time: "11:00 AM - 9:00 PM" },
    { name: "Daniel Smith", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
    { name: "Sarah Johnson", position: "Pastry Chef", time: "9:00 AM - 5:00 PM" },
    { name: "David Chen", position: "Line Cook", time: "11:00 AM - 9:00 PM" },
    { name: "Emily Wilson", position: "Server", time: "4:00 PM - 12:00 AM" },
  ],
  Saturday: [
    { name: "Michael Rodriguez", position: "Head Chef", time: "10:00 AM - 8:00 PM" },
    { name: "Jessica Lee", position: "Sous Chef", time: "11:00 AM - 9:00 PM" },
    { name: "Daniel Smith", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
    { name: "Sarah Johnson", position: "Pastry Chef", time: "9:00 AM - 5:00 PM" },
    { name: "David Chen", position: "Line Cook", time: "11:00 AM - 9:00 PM" },
    { name: "Emily Wilson", position: "Server", time: "4:00 PM - 12:00 AM" },
  ],
  Sunday: [
    { name: "Jessica Lee", position: "Sous Chef", time: "11:00 AM - 9:00 PM" },
    { name: "Daniel Smith", position: "Server", time: "4:00 PM - 12:00 AM" },
    { name: "Amanda White", position: "Bartender", time: "4:00 PM - 12:00 AM" },
    { name: "Kevin Brown", position: "Host", time: "5:00 PM - 11:00 PM" },
    { name: "David Chen", position: "Line Cook", time: "11:00 AM - 9:00 PM" },
  ],
}

export function StaffSchedule() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Mar 20 - Mar 26, 2023
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {weekDays.map((day) => (
          <Card key={day}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{day}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {shifts[day as keyof typeof shifts].map((shift, index) => (
                  <div key={index} className="rounded-md border p-2">
                    <div className="font-medium">{shift.name}</div>
                    <div className="text-xs text-muted-foreground">{shift.position}</div>
                    <Badge variant="outline" className="mt-1">
                      {shift.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

