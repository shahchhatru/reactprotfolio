import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row gap-4">
        <NavigationMenuItem className="flex md:flex-col">
        <div className="group/menuitem cursor-pointer flex flex-col relative">
  <span>Home</span>
  <span className="absolute bottom-0 left-0 w-full border-b-2 border-black transition-transform duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></span>
</div>


        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
           <ul className="grid gap-3 p-6 min-w-[100px] md:w-[400px] lg:w-[500px]">
        
           </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
           <ul className="grid gap-3 p-6 min-w-[100px] md:w-[400px] lg:w-[500px]">
        
           </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
