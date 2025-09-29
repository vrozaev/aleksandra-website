// Combine classes
export const cc = (...args: Array<string | undefined>) => args.filter(Boolean).join(' ');