// Built once at module level - constructing a formatter per call is costly
const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso))
}
