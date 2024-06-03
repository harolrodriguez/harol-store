import { Link } from "@nextui-org/link";

import { ThemeSwitch } from "./navbar/theme-switch";

import { siteConfig } from "@/presentation/config/site";
import {
  TwitterIcon,
  DiscordIcon,
  GithubIcon,
} from "@/shared/components/icons";

const SocialList = () => {
  return (
    <>
      <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
        <TwitterIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
        <DiscordIcon className="text-default-500" />
      </Link>
      <Link isExternal aria-label="Github" href={siteConfig.links.github}>
        <GithubIcon className="text-default-500" />
      </Link>
      <ThemeSwitch />
    </>
  );
};

export default SocialList;
