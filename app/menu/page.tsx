import { ChefHat, Plus, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuItems } from "@/components/menu-items"

export default function MenuPage() {
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
          <Link href="/menu" className="text-sm font-medium">
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Menu Management</h1>
            <p className="text-muted-foreground">Manage your restaurant's menu items and categories</p>
          </div>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add Menu Item
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search menu items..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="appetizers">Appetizers</TabsTrigger>
            <TabsTrigger value="main-courses">Main Courses</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="border-none p-0">
            <MenuItems />
          </TabsContent>
          <TabsContent value="appetizers" className="border-none p-0">
            <MenuItems category="appetizers" />
          </TabsContent>
          <TabsContent value="main-courses" className="border-none p-0">
            <MenuItems category="main-courses" />
          </TabsContent>
          <TabsContent value="desserts" className="border-none p-0">
            <MenuItems category="desserts" />
          </TabsContent>
          <TabsContent value="drinks" className="border-none p-0">
            <MenuItems category="drinks" />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

