// Combine classes
export const cc = (...args: Array<string | undefined | false>) => args.filter(Boolean).join(' ');