import { useRef, useState, useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const FlyoutMenu = ({ menuTitle, subItems, className, current }) => {
  let timeout;
  const timeoutDuration = 200;

  const buttonRef = useRef(null);
  const panelRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const getClassNames = (classes) => {
    return `${className} ${classes}`;
  };

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClickOutside = (event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      panelRef.current &&
      !panelRef.current.contains(event.target)
    ) {
      setOpenState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <div
            onMouseEnter={() => onHover(open, "onMouseEnter")}
            onMouseLeave={() => onHover(open, "onMouseLeave")}
            className="flex flex-col"
          >
            <PopoverButton
              ref={buttonRef}
              className={getClassNames("hover:outline-none focus:outline-none")}
              style={{ marginBottom: "0.8rem" }}
            >
              <span>{menuTitle}</span>
            </PopoverButton>
            <PopoverPanel
              ref={panelRef}
              onMouseEnter={() => clearTimeout(timeout)}
              onMouseLeave={() => onHover(open, "onMouseLeave")}
              transition
              className="absolute left-1/2 z-10 mt-8 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0"
            >
              <div className="shrink rounded-xl bg-white p-2 text-sm font-medium leading-6 shadow-lg ring-1 ring-gray-900/5">
                {subItems.map((item) => (
                  <div className="p-1" key={item.name}>
                    <a
                      key={item.name}
                      href={item.href}
                      target={item?.target || "_self"}
                      className={`${current === item.href ? 'border-yellow-600 text-yellow-600' : ''} inline-block hover:text-yellow-600`}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </div>
        )}
      </Popover>
    </div>
  );
};

export default FlyoutMenu;
