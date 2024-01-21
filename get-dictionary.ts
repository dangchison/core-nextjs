import 'server-only'

const dictionaries: Record<string, Function> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default)
}
export const getDictionary = async (locale: string) => dictionaries[locale]?.() ?? dictionaries.en()
