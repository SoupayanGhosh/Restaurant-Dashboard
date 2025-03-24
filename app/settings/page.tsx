import { ChefHat, Save } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
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
          <Link href="/staff" className="text-sm font-medium text-muted-foreground">
            Staff
          </Link>
          <Link href="/settings" className="text-sm font-medium">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your restaurant settings and preferences</p>
        </div>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="hours">Business Hours</TabsTrigger>
            <TabsTrigger value="reservations">Reservation Settings</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="border-none p-0 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Information</CardTitle>
                <CardDescription>Update your restaurant's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="restaurant-name">Restaurant Name</Label>
                    <Input id="restaurant-name" defaultValue="Fine Dining Restaurant" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="contact@finedining.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://finedining.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Gourmet Street, Culinary District, Food City, FC 12345" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Restaurant Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="An elegant fine dining experience with a focus on seasonal ingredients and innovative cooking techniques."
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="hours" className="border-none p-0 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
                <CardDescription>Set your restaurant's operating hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center space-x-4">
                        <Switch id={`${day.toLowerCase()}-open`} defaultChecked={day !== "Sunday"} />
                        <Label htmlFor={`${day.toLowerCase()}-open`} className="min-w-[100px]">
                          {day}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                          <Input
                            type="time"
                            defaultValue={day !== "Sunday" ? "11:00" : ""}
                            className="w-[120px]"
                            disabled={day === "Sunday"}
                          />
                          <span>to</span>
                          <Input
                            type="time"
                            defaultValue={day !== "Sunday" ? "22:00" : ""}
                            className="w-[120px]"
                            disabled={day === "Sunday"}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Hours
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="reservations" className="border-none p-0 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reservation Settings</CardTitle>
                <CardDescription>Configure how customers can make reservations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Accept Online Reservations</Label>
                      <p className="text-sm text-muted-foreground">Allow customers to book tables online</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Require Deposit</Label>
                      <p className="text-sm text-muted-foreground">Require a deposit for reservations</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="min-notice">Minimum Notice (hours)</Label>
                      <Input id="min-notice" type="number" defaultValue="2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-advance">Maximum Advance Booking (days)</Label>
                      <Input id="max-advance" type="number" defaultValue="30" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="table-turnover">Table Turnover Time (minutes)</Label>
                      <Input id="table-turnover" type="number" defaultValue="120" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="party-size">Maximum Party Size</Label>
                      <Input id="party-size" type="number" defaultValue="10" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="border-none p-0 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive push notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="pt-4">
                    <h3 className="mb-2 font-medium">Notification Events</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-reservation">New Reservation</Label>
                        <Switch id="new-reservation" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="cancelled-reservation">Cancelled Reservation</Label>
                        <Switch id="cancelled-reservation" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="modified-reservation">Modified Reservation</Label>
                        <Switch id="modified-reservation" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="low-inventory">Low Inventory Alert</Label>
                        <Switch id="low-inventory" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="integrations" className="border-none p-0 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect with third-party services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email Marketing</p>
                        <p className="text-sm text-muted-foreground">Connect with your email marketing platform</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">SMS Service</p>
                        <p className="text-sm text-muted-foreground">Connect with your SMS service provider</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">POS System</p>
                        <p className="text-sm text-muted-foreground">Connect with your point of sale system</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                          <line x1="7" y1="7" x2="7.01" y2="7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Delivery Services</p>
                        <p className="text-sm text-muted-foreground">Connect with food delivery platforms</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Integrations
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

