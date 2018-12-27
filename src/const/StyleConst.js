const FONT_FAMILY = {
  DEFAULT: 'Ubuntu, sans-serif',
}

export default {
  FONT: {
    DEFAULT: `
      font-family: ${FONT_FAMILY.DEFAULT};
      font-weight: 400;
      `,
      BOLD: `
      font-family: ${FONT_FAMILY.DEFAULT};
      font-weight: 700;
    `,
  },
  FONT_SIZES: {
    XXS: '10px',
    XS: '12px',
    S: '15px',
    M: '16px',
    L: '18px',
    XL: '24px',
    XXL: '132px'
  },
  ICON_SIZES: {
    XS: '8px',
    S: '12px',
    M: '14px',
    L: '16px',
    XL: '18px'
  },
  COLORS: {
    PRIMARY: '#00AEEF',
    SECONDARY: '#E8E8E8',
    BACKGROUND: '#F2F2F2',
    TEXT_DARK: '#333333',
    TEXT_GREY: '#A8A8A8',
    BACKGROUND_GREY: '#e8e8e8',
    TEXT_BRIGHT: '#FFFFFF',
    ICONS: '#8C8C8C',
    CARD_BACKGROUND: '#f9f9f9',
    USER_ACTIVE: '#12ce12',
    USER_INACTIVE: '#e8e8e8',
    SIGNAL: {
      SUCCESS: '#12CE12',
      WARN: '#FF0000',
    },
    LOGOCHARACTERS: ['#85CE00', '#F967CA', '#B555FF', '#1CBAF1', '#FF9F1F', '#FFE300'],
    THEME: {
      THEME01: '#7D6AF1',
      THEME02: '#EC1F45',
      THEME03: '#19C46D',
      THEME04: '#E64626',
      THEME05: '#3BA4B4',
      THEME06: '#2E3192',
      THEME07: '#632C8D',
      THEME08: '#24AF6C',
      THEME09: '#4B0049',
      THEME10: '#523EC5',
      THEME11: '#2390FF',
      THEME12: '#39B54A',
    },
  },
  TRANSITION: {
    EASING: 'ease-in-out',
    DURATION: '.15s',
  }
}
