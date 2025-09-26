import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-2">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-muted-foreground">
          Get a high-level view of your application&apos;s performance.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-2">
        <h3 className="text-lg font-semibold">Analytics</h3>
        <p className="text-sm text-muted-foreground">
          Detailed analytics and insights about your users.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="space-y-2">
        <h3 className="text-lg font-semibold">Reports</h3>
        <p className="text-sm text-muted-foreground">
          Generate and download comprehensive reports.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <Tabs
      defaultValue="account"
      orientation="vertical"
      className="flex w-[400px] h-[200px]"
    >
      <TabsList className="flex flex-col h-full">
        <TabsTrigger value="account" className="w-full">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="w-full">
          Password
        </TabsTrigger>
        <TabsTrigger value="settings" className="w-full">
          Settings
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="account">
          <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account information.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Update your password and security settings.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <h3 className="text-lg font-semibold mb-2">General Settings</h3>
          <p className="text-sm text-muted-foreground">
            Configure your application preferences.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
