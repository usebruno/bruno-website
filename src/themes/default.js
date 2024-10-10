const BLACK1 = 'rgb(47, 48, 55)';
const BLACK2 = 'rgb(76 76 76)';
const BLACK3 = 'rgb(79 79 79)';
const BLACK4 = 'rgb(55 55 55)';
const BLACK5 = 'rgb(92 92 92)';

const GRAY1 = 'rgb(150 150 150)';
const GRAY2 = 'rgb(117 117 117)';
const GRAY3 = 'rgb(101 101 101)';

// https://coolors.co/1c4586
const defaultTheme = {
  colors: {
    black1: BLACK1,
    black2: BLACK2,
    black3: BLACK3,
    black4: BLACK4,
    black5: BLACK5,
    gray1: GRAY1,
    gray2: GRAY2,
    gray3: GRAY3,
    background: '#fff',
    color: 'rgb(47 48 55)',
  },
  editor: {
    text: 'rgb(55 55 55)',
  },
  icon: {
    color: BLACK2,
  },
  navbar: {
    text: BLACK1,
    active: BLACK1,
    inactive: GRAY1,
    inactive2: GRAY2,
    text: 'var(--color-text-navbar)',
    icons: {
      defaultColor: 'var(--color-text-navbar)',
      onHoverColor: 'black',
    },
  },
  block: {
    text: {
      normal: 'rgb(31 35 30)',
      bold: 'rgb(49 55 47)',
    },
    bullet: 'rgb(179 179 179)',
  },
  allNotes: {
    title: 'rgb(42, 42, 42)',
    noteTitle: 'var(--color-text-blue)',
    ul: {
      pagination: 'rgb(107, 114, 128)',
    },
  },
  sidebar: {
    background: '#EDEDED',
    defaultColor: '#101010',
    defaultMenuItemColor: 'rgb(107 107 107 / 80%)',
    activeMenuItemColor: '#2b2b2b',
    logoColor: {
      note: '#464646',
      base: 'rgb(114 114 114)',
    },
  },
};

export default defaultTheme;
