import React, { useState } from 'react';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons';
import FlyoutMenu from '../FlyoutMenu';

const Dropdown = ({ menuTitle, dropdownItems, isSmallSCreen, current }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  if(!isSmallSCreen) {
    return (
      <div>
        <FlyoutMenu className="font-medium mr-3 hover:text-yellow-600" menuTitle={menuTitle} subItems={dropdownItems} current={current} />
      </div>
    );
  }

  return (
    <div>
      {isSmallSCreen && (
        <div className="cursor-pointer mb-4 hover:none" onClick={toggleDropdown}>
          <div className="flex items-center">
            <span>{menuTitle}</span>
            <IconChevronRight
              size={18}
              className={`ml-1 transition-transform duration-300 ${dropdownOpen ? 'rotate-90' : ''}`}
            />
          </div>
          {dropdownOpen && (
            <div className="p-2">
              {dropdownItems.map((item) => (
                <div className="py-2" key={item.name}>
                  <Link href={item.href} legacyBehavior className="menu-item">
                    <a
                      target={item.target}
                      className={`${current === item.href ? 'text-yellow-600' : ''} transition`}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown;