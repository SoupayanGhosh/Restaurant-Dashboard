import { ChefHat, Filter, Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ReservationsTable } from "@/components/reservations-table"

export default function ReservationsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <ChefHat className="h-6 w-6" />
          <span>Restaurant Dashboard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground">
            Dashboard
          </Link>
          <Link href="/menu" className="text-sm font-medium text-muted-foreground">
            Menu
          </Link>
          <Link href="/reservations" className="text-sm font-medium">
            Reservations
          </Link>
          <Link href="/staff" className="text-sm font-medium text-muted-foreground">
            Staff
          </Link>
          <Link href="/settings" className="text-sm font-medium text-muted-foreground">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Reservations</h1>
            <p className="text-muted-foreground">Manage your restaurant's reservations</p>
          </div>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            New Reservation
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-[250px_1fr]">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent className="p-4">
                <Calendar mode="single" className="w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Filter by Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="confirmed" defaultChecked />
                      <label htmlFor="confirmed" className="text-sm">
                        Confirmed
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="pending" defaultChecked />
                      <label htmlFor="pending" className="text-sm">
                        Pending
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="cancelled" />
                      <label htmlFor="cancelled" className="text-sm">
                        Cancelled
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Filter by Time</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="lunch" defaultChecked />
                      <label htmlFor="lunch" className="text-sm">
                        Lunch (11am-3pm)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="dinner" defaultChecked />
                      <label htmlFor="dinner" className="text-sm">
                        Dinner (5pm-10pm)
                      </label>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search reservations..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
              </div>
            </div>
            <Tabs defaultValue="today" className="w-full">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              <TabsContent value="today" className="border-none p-0 pt-4">
                <ReservationsTable timeframe="today" />
              </TabsContent>
              <TabsContent value="upcoming" className="border-none p-0 pt-4">
                <ReservationsTable timeframe="upcoming" />
              </TabsContent>
              <TabsContent value="past" className="border-none p-0 pt-4">
                <ReservationsTable timeframe="past" />
              </TabsContent>
              <TabsContent value="all" className="border-none p-0 pt-4">
                <ReservationsTable timeframe="all" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

