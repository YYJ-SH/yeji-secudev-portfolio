export type ThemeName = 'retro' | 'dark' | 'modern';

export interface Theme {
  colors: {
    primary: {
      light: string;
      main: string;
      dark: string;
      gradient: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    background: string;
    text: string;
  };
  effects: {
    scanline: boolean;
    glow: boolean;
  };
}

export const themes: Record<ThemeName, Theme> = {
    retro: {
        colors: {
            primary: {
                light: 'purple-200',
                main: 'purple-600',
                dark: 'purple-800',
                gradient: 'from-purple-600 to-cyan-600'
            },
            secondary: {
                light: 'cyan-200',
                main: 'cyan-600',
                dark: 'cyan-800'
            },
            background: 'gray-50',
            text: 'gray-900'
        },
        effects: {
            scanline: true,
            glow: true
        }
    },
    dark: {
        colors: {
            primary: {
                light: 'purple-200',
                main: 'purple-600',
                dark: 'purple-800',
                gradient: 'from-purple-600 to-cyan-600'
            },
            secondary: {
                light: 'cyan-200',
                main: 'cyan-600',
                dark: 'cyan-800'
            },
            background: 'gray-900',
            text: 'gray-50'
        },
        effects: {
            scanline: true,
            glow: true
        }
    },
    modern: {
        colors: {
            primary: {
                light: 'purple-200',
                main: 'purple-600',
                dark: 'purple-800',
                gradient: 'from-purple-600 to-cyan-600'
            },
            secondary: {
                light: 'cyan-200',
                main: 'cyan-600',
                dark: 'cyan-800'
            },
            background: 'gray-50',
            text: 'gray-900'
        },
        effects: {
            scanline: true,
            glow: true
    }
}
};
