export const transitions = {
  duration: {
    fastest: '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    slowest: '500ms',
  },
  timing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  fadeOut: `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `,
  slideInFromRight: `
    @keyframes slideInFromRight {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
  `,
  slideInFromLeft: `
    @keyframes slideInFromLeft {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
  `,
  slideInFromTop: `
    @keyframes slideInFromTop {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
  `,
  slideInFromBottom: `
    @keyframes slideInFromBottom {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
  `,
  pulse: `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `,
  spin: `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
};
