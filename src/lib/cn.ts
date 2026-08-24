type ClassValue = string | false | undefined | null

export function cn(...classes: ClassValue[]) {
    return classes.filter(Boolean).join(' ')
}