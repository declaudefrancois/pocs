import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const components: {
  section: string;
  children: {
    attribution: string;
    title: string;
    href: string;
    image: string;
  }[];
}[] = [
  {
    section: "Optimize",
    children: [
      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/compress" title="compress icons">Compress icons created by Creatype - Flaticon</a>',
        title: "Compress",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },

      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/resize" title="resize icons">Resize icons created by Secret Studio - Flaticon</a>',
        title: "Resize",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },

      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/transparency" title="transparency icons">Transparency icons created by Material_Icon - Flaticon</a>',
        title: "Remove background",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
    ],
  },
  {
    section: "Modify",
    children: [
      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/zoom-out" title="zoom out icons">Zoom out icons created by Fantasyou - Flaticon</a>',
        title: "Upscale",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/resize" title="resize icons">Resize icons created by icon_small - Flaticon</a>',
        title: "Resize",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/photo-editing" title="photo editing icons">Photo editing icons created by Secret Studio - Flaticon</a>',
        title: "Crop",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },

      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/rotate" title="rotate icons">Rotate icons created by Creatype - Flaticon</a>',
        title: "Rotate",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
    ],
  },
  {
    section: "Convert",
    children: [
      {
        attribution: "",
        title: "Convert to JPEG",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
      {
        attribution: "",
        title: "Convert to PNG",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
      {
        attribution: "",
        title: "Convert to WebP",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
      {
        attribution:
          '<a href="https://www.flaticon.com/free-icons/blur" title="blur icons">Blur icons created by Icon mania - Flaticon</a>',
        // https://github.com/woltapp/blurhash/issues/43
        title: "Blurhash",
        href: "/docs/primitives/alert-dialog",
        image: "/images/compress.png",
      },
    ],
  },
];

export default function NavigationMenuDemo() {
  return (
    <div className="h-[60px] bg-white shadow w-full flex items-center gap-3 px-8">
      <a href="" className="text-lg text-primary font-medium">
        IMAN
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid sm:w-[400px] sm:grid-cols-2 gap-3 p-4 md:w-[600px] md:grid-cols-3">
                {components.map((component) => (
                  <li className="space-y-1">
                    <h3 className="pl-3 font-medium text-black/50">
                      {component.section}
                    </h3>
                    <ul>
                      {component.children.map(
                        ({ image, href, attribution, title }) => (
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href={href}
                                title={attribution}
                                className={cn(
                                  "flex gap-3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                <img
                                  src={image}
                                  alt={title}
                                  title={attribution}
                                  className="w-6 h-6"
                                />
                                <div className="text-sm font-medium leading-none">
                                  {title}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Menubar className="sm:flex-1 flex justify-end border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <img
              src="/images/hamburger.png"
              alt="Menu"
              className="w-6 h-6"
              title="<a href='https://www.flaticon.com/free-icons/hamburger' title='hamburger icons'>Hamburger icons created by azmianshori - Flaticon</a>"
            />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
