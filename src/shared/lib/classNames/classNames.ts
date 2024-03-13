export type cnMods = Record<string, boolean | string>;

function classNames(cls: string, mods: cnMods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}

export { classNames as cn };
