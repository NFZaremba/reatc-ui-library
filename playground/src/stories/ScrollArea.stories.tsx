import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
  render: (args) => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={`https://picsum.photos/300/400?random=${i}`}
                alt={`Photo ${i + 1}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                Artist {i + 1}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const TextContent: Story = {
  render: (args) => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Lorem Ipsum</h4>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-sm text-muted-foreground">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="text-sm text-muted-foreground">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p className="text-sm text-muted-foreground">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p className="text-sm text-muted-foreground">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </ScrollArea>
  ),
};

export const List: Story = {
  render: (args) => (
    <ScrollArea className="h-[300px] w-[250px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Framework Versions
        </h4>
        {[
          "React 18.2.0",
          "Next.js 13.4.0",
          "Vue.js 3.3.0",
          "Angular 16.0.0",
          "Svelte 4.0.0",
          "Nuxt.js 3.5.0",
          "Gatsby 5.10.0",
          "Remix 1.17.0",
          "Vite 4.3.0",
          "Webpack 5.88.0",
          "TypeScript 5.1.0",
          "Tailwind CSS 3.3.0",
          "Storybook 7.0.0",
          "Jest 29.5.0",
          "Cypress 12.14.0",
          "Playwright 1.35.0",
          "ESLint 8.43.0",
          "Prettier 2.8.8",
          "Husky 8.0.3",
          "Lint-staged 13.2.2",
        ].map((item, index) => (
          <div key={index}>
            <div className="text-sm py-2">{item}</div>
            {index < 19 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
