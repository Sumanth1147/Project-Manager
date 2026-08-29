type ClassValue = string | false | undefined | null

export function cn(...classes: ClassValue[]) {
  // filter(Boolean) is shorthand for “keep only truthy values.”
  return classes.filter(Boolean).join(' ')
}
