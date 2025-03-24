import { ChefHat, Search, UserPlus } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StaffDirectory } from "@/components/staff-directory"
import { StaffSchedule } from "@/components/staff-schedule"

export default function StaffPage() {
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
          <Link href="/reservations" className="text-sm font-medium text-muted-foreground">
            Reservations
          </Link>
          <Link href="/staff" className="text-sm font-medium">
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
            <h1 className="text-2xl font-bold tracking-tight">Staff Management</h1>
            <p className="text-muted-foreground">Manage your restaurant's staff and schedules</p>
          </div>
          <Button className="flex items-center gap-1">
            <UserPlus className="h-4 w-4" />
            Add Staff Member
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search staff..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </div>
        <Tabs defaultValue="directory" className="w-full">
          <TabsList>
            <TabsTrigger value="directory">Staff Directory</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="directory" className="border-none p-0 pt-4">
            <StaffDirectory />
          </TabsContent>
          <TabsContent value="schedule" className="border-none p-0 pt-4">
            <StaffSchedule />
          </TabsContent>
          <TabsContent value="performance" className="border-none p-0 pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Staff with highest customer ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">JL</div>
                        <div>
                          <p className="text-sm font-medium">Jessica Lee</p>
                          <p className="text-xs text-muted-foreground">Sous Chef</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">4.9/5</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">AW</div>
                        <div>
                          <p className="text-sm font-medium">Amanda White</p>
                          <p className="text-xs text-muted-foreground">Bartender</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">4.8/5</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">DS</div>
                        <div>
                          <p className="text-sm font-medium">Daniel Smith</p>
                          <p className="text-xs text-muted-foreground">Server</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">4.7/5</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Attendance</CardTitle>
                  <CardDescription>Staff attendance this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[120px] items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">98%</div>
                      <p className="text-xs text-muted-foreground">Overall attendance rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Training Status</CardTitle>
                  <CardDescription>Staff training completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[120px] items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">85%</div>
                      <p className="text-xs text-muted-foreground">Training completion rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Staff Turnover</CardTitle>
                  <CardDescription>Annual turnover rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[120px] items-center justify-center">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">12%</div>
                      <p className="text-xs text-muted-foreground">Lower than industry average</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

