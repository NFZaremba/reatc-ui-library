import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { UtilityClose } from "../icons/UtilityClose";
import { NavLogo } from "../icons/NavLogo";
import { NavAccount } from "../icons/NavAccount";
import { NavBullet } from "../icons/NavBullet";

export interface NavItem {
  label: string;
  active?: boolean;
}

interface NavigationProps {
  navItems: NavItem[];
  isStrategy?: boolean;
  onLinkClick?: (href: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  navItems,
  isStrategy = false,
  onLinkClick,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<number | null>(null);

  const containerRef = React.useRef<HTMLElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuItemsRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  const handleNavItemMouseEnter = (index: number) => {
    setIsOpen(true);
    setActiveItem(index + 1);
  };

  const handleLink = (href: string) => {
    if (onLinkClick) {
      onLinkClick(href);
    }
  };

  // Link component wrapper (can be replaced with Next.js Link or React Router Link)
  const Link: React.FC<{
    to: string;
    className?: string;
    "aria-label"?: string;
    children: React.ReactNode;
  }> = ({ to, className, "aria-label": ariaLabel, children }) => (
    <a
      href={to}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        handleLink(to);
      }}
    >
      {children}
    </a>
  );

  return (
    <nav
      ref={containerRef}
      className={cn("absolute top-0 left-0 z-50 h-14 w-full")}
      onMouseLeave={handleMouseLeave}
    >
      {!isStrategy && (
        <div
          ref={overlayRef}
          className={cn(
            "absolute top-0 left-0 z-[-1] h-[340px] w-full duration-300 ease-in-out will-change-transform",
            isOpen
              ? "translate-y-0 bg-[rgba(62,64,73,0.90)] backdrop-blur-xl"
              : "-translate-y-[calc(100%-56px)] bg-black/16"
          )}
        />
      )}

      <div className="container-lg flex h-14 items-center justify-between">
        <div className="flex h-full sm:min-w-[200px] items-center">
          <Link
            to="/themes"
            className={cn(
              "group flex items-center mr-6 cursor-pointer hover:rotate-90 hover:shadow-sm rounded-full",
              "opacity-0 scale-50 ease-in-out duration-300",
              {
                "opacity-100 scale-100": isStrategy,
              }
            )}
            aria-label="back to themes"
          >
            <UtilityClose className="size-8 rounded-full bg-white border border-gray-100 hover:border-cyan-300 transition-colors duration-200 ease-in-out" />
          </Link>

          <Link
            to="/"
            className={cn(
              "flex items-center -translate-x-14 ease-in-out duration-300 will-change-transform",
              {
                "translate-x-0": isStrategy,
              }
            )}
            aria-label="Home"
          >
            <NavLogo color={isStrategy ? "#3E4049" : "white"} />
          </Link>
        </div>

        {!isStrategy && (
          <div
            className={cn(
              "relative hidden h-full flex-1 items-center justify-center space-x-12 md:flex"
            )}
          >
            <ul className="flex h-full gap-x-12">
              {navItems.map((item, index) => (
                <li
                  key={index + 1}
                  className={cn(
                    "relative flex h-full flex-col items-center justify-center"
                  )}
                  onMouseEnter={() => handleNavItemMouseEnter(index)}
                >
                  <span className="body-small cursor-pointer font-semibold text-white">
                    {item.label}
                  </span>

                  {/* Underline */}
                  {activeItem === index + 1 && (
                    <motion.div
                      id="underline"
                      className="absolute -bottom-[10px] z-50 h-[10px] w-[10px] rounded-full"
                      layoutId="underline"
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div
                        className="half-circle bg-gradient-to-b from-[#3EECD1] to-[#66FCD9]"
                        style={{
                          width: "10px",
                          height: "5px",
                          borderBottomLeftRadius: "100px",
                          borderBottomRightRadius: "100px",
                          borderBottom: "0",
                          boxSizing: "border-box",
                        }}
                      />
                    </motion.div>
                  )}
                  {index === 0 && (
                    <div
                      className="absolute -bottom-[5px] z-50 h-[10px] w-[10px] rounded-full"
                      style={{ transition: "all 0.2s ease-out" }}
                    >
                      <div
                        className="half-circle bg-white"
                        style={{
                          width: "10px",
                          height: "5px",
                          borderTopLeftRadius: "100px",
                          borderTopRightRadius: "100px",
                          borderBottom: "0",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex h-full sm:min-w-[200px] items-center justify-end gap-4">
          {isStrategy && (
            <Link
              to="/themes"
              className="btn bg-white px-6 min-h-8 border border-gray-100 hover:border-cyan-300"
            >
              <span className="body-small font-semibold text-blue-600">
                Queue
              </span>
            </Link>
          )}

          <Link
            to="/"
            aria-label="Account link"
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full transition-colors btn-icon",
              !isOpen ? "bg-black/8" : "bg-white/12",
              isStrategy ? "bg-white border border-gray-100" : ""
            )}
          >
            <NavAccount
              className={isStrategy ? "text-bronze-500" : "text-bronze-100"}
            />
          </Link>
        </div>
      </div>

      {isOpen && <div className="h-[1px] w-full bg-[rgba(255,255,255,0.08)]" />}

      {/* Tray */}
      <div
        ref={menuRef}
        className={cn(
          "relative max-h-[292px] pointer-events-none",
          isOpen ? "pointer-events-auto" : ""
        )}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <div ref={menuItemsRef} className="relative grid">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem ? activeItem + 1 : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* WELL Tray */}
                {activeItem === 1 && (
                  <div className="col-span-full row-span-full container-lg mx-auto space-y-6 py-6 transition-opacity duration-200 ease-in-out">
                    <h2
                      className="heading-xsmall py-1"
                      style={{
                        background:
                          "linear-gradient(90deg, #41D5F6 0%, #3EECD1 25%, #66FCD9 50%, #66FCD9 75%, #3EECD1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      WELL sets the standard for people-first places
                    </h2>

                    <div className="flex gap-x-20">
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Everything
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Explore WELL
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Enroll in WELL
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              What's new
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          WHY WELL
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Performance
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              ROI
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Impact
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Standard
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Strategies
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Themes
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Milestones
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Network
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Organizations
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              People
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Solutions
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Products
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Services
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Places
                        </h3>
                        <ul className="space-y-5">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Locations
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Portfolios
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pursuits Tray */}
                {activeItem === 2 && (
                  <div className="col-span-full row-span-full container-lg mx-auto space-y-6 py-6 transition-opacity duration-200 ease-in-out">
                    <h2
                      className="heading-xsmall py-1"
                      style={{
                        background:
                          "linear-gradient(99deg, #41D5F6 3.39%, #3EECD1 57.86%, #66FCD9 112.32%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      WELL works everywhere, at any scale
                    </h2>
                    <div className="flex gap-x-20">
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          SUBSCRIBE
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL at scale
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link to="/">
                                <span className="body-small font-medium text-[#F4F5F6]">
                                  Pricing
                                </span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link to="/">
                                <span className="body-small font-medium text-[#F4F5F6]">
                                  Leaderboard
                                </span>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Certify
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL Certification
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="text-[#F4F5F6] hover:text-white flex items-center justify-start body-base font-medium"
                            >
                              WELL Residence
                              <span className="overline-small text-[#F0AA99] ml-1">
                                PILOT
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Get rated
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL Ratings
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#F3E7D8" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Health-Safety Rating
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#0F748A" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Performance Rating
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#17AA8D" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Equity Rating
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Network Tray */}
                {activeItem === 3 && (
                  <div className="col-span-full row-span-full container-lg mx-auto space-y-6 py-6 transition-opacity duration-200 ease-in-out">
                    <h2
                      className="heading-xsmall py-1"
                      style={{
                        background:
                          "linear-gradient(90deg, #41D5F6 0%, #3EECD1 25%, #66FCD9 50%, #66FCD9 75%, #3EECD1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Our network drives our movement
                    </h2>

                    <div className="flex gap-x-20">
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          JOIN
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Membership
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Works with WELL
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#2E74AD" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Enterprise Provider
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#149EBD" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Product Provider
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <NavBullet color="#ED896F" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Performance Testing Provider
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          EARN
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL AP
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL Faculty
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Knowledge Tray */}
                {activeItem === 4 && (
                  <div className="col-span-full row-span-full container-lg mx-auto space-y-6 py-6 transition-opacity duration-200 ease-in-out">
                    <h2
                      className="heading-xsmall py-1"
                      style={{
                        background:
                          "linear-gradient(90deg, #41D5F6 0%, #3EECD1 25%, #66FCD9 50%, #66FCD9 75%, #3EECD1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Learn from the experts on health
                    </h2>

                    <div className="flex gap-x-20">
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          LEARN
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL Forum
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Threads
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Webcasts
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Trainings
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          ATTEND
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              WELL 2025
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Flagship events
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Thematic summits
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Regional summits
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          GUIDANCE
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Knowledge base
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Tutorials
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Guides
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                FAQs
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Resources
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Resource library
                            </Link>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Technical tools
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Sales tools
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-3 pl-[6px]">
                              <div className="h-1 w-1 rounded-full bg-[#717374]" />
                              <Link
                                to="/"
                                className="body-small font-medium text-[#F4F5F6]"
                              >
                                Media
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* IWBI Tray */}
                {activeItem === 5 && (
                  <div className="col-span-full row-span-full container-lg mx-auto space-y-6 py-6 transition-opacity duration-200 ease-in-out">
                    <h2
                      className="heading-xsmall py-1"
                      style={{
                        background:
                          "linear-gradient(90deg, #41D5F6 0%, #3EECD1 25%, #66FCD9 50%, #66FCD9 75%, #3EECD1 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      The International WELL Building Institute (IWBI)
                    </h2>

                    <div className="flex gap-x-20">
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          About
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              IWBI
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Research
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Advocacy
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Meet
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Advisories
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Governance Council
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-5">
                        <h3 className="overline-medium font-semibold text-[#DC9DD2]">
                          Explore
                        </h3>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Newsroom
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Jobs
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/"
                              className="body-base block font-medium text-[#F4F5F6] hover:text-white"
                            >
                              Blog
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
