import { CalendarDays, ChefHat, Clock, DollarSign, ShoppingBag } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentOrders } from "@/components/recent-orders"
import { ReservationsList } from "@/components/reservations-list"
import { StaffList } from "@/components/staff-list"
import { InventoryStatus } from "@/components/inventory-status"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <ChefHat className="h-6 w-6" />
          <span>Restaurant Dashboard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/menu" className="text-sm font-medium text-muted-foreground">
            Menu
          </Link>
          <Link href="/reservations" className="text-sm font-medium text-muted-foreground">
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$15,231.89</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders Today</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+73</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reservations</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">For today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Serving Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32 min</div>
              <p className="text-xs text-muted-foreground">-3 min from last week</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Daily revenue for the past 30 days</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest orders from customers</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentOrders />
            </CardContent>
            <CardFooter>
              <Link href="/menu" className="text-sm text-primary hover:underline">
                View all orders
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Today's Reservations</CardTitle>
              <CardDescription>Upcoming reservations for today</CardDescription>
            </CardHeader>
            <CardContent>
              <ReservationsList />
            </CardContent>
            <CardFooter>
              <Link href="/reservations" className="text-sm text-primary hover:underline">
                Manage reservations
              </Link>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Staff on Duty</CardTitle>
              <CardDescription>Current staff working today</CardDescription>
            </CardHeader>
            <CardContent>
              <StaffList />
            </CardContent>
            <CardFooter>
              <Link href="/staff" className="text-sm text-primary hover:underline">
                Staff schedule
              </Link>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
              <CardDescription>Low stock items that need attention</CardDescription>
            </CardHeader>
            <CardContent>
              <InventoryStatus />
            </CardContent>
            <CardFooter>
              <Link href="/settings" className="text-sm text-primary hover:underline">
                View inventory
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

