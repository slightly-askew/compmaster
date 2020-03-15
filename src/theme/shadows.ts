export default {
  low: (theme: any) =>
    `0px 1px 32px ${theme.colors.shadows.primary_dark['30']}, 1px 2px 8px ${theme.colors.shadows.primary_dark['60']}, 0px 2px 6px ${theme.colors.shadows.primary}`,
  medium: (theme: any) =>
    `1px 2px 40px ${theme.colors.shadows.primary_dark['40']}, 2px 5px 24px ${theme.colors.shadows.primary_dark['80']}, 0px 2px 8px ${theme.colors.shadows.primary}`,
  high: (theme: any) =>
    `1px 6px 48px ${theme.colors.shadows.primary_dark['50']}, 1px 8px 30px black, 0px 3px 10px ${theme.colors.shadows.primary}`,
  test: `3px 3px 48px rgba(28, 25, 61, 0.04), 2px 5px 30px rgba(28, 25, 61, 0.07), 0px 3px 8px rgba(82, 138, 200, 0.12)`,
}
