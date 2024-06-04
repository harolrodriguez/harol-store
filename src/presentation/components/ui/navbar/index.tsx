"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { ThemeSwitch } from "./theme-switch";
import SearchInput from "./search-input";

import { siteConfig } from "@/presentation/config/site";
import SocialList from "@/presentation/components/ui/social";
import { GithubIcon, Logo } from "@/shared/components/icons";

const MenuList = () => {
  return (
    <ul className="hidden lg:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium",
            )}
            color="foreground"
            href={item.href}
          >
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const show = setTimeout(() => {
      setIsLoading(false);
    // }, 10);

    return () => {
      // clearTimeout(show);
    };
  }, []);

  return (
    <NextUINavbar
      className={"transition-transform duration-1000"}
      maxWidth="full"
      position="sticky"
      style={{
        transform: isLoading ? "translateY(-100%)" : "none",
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>

        <MenuList />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <SocialList />
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <SearchInput />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <SearchInput />
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
