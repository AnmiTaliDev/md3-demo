// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

export interface SeedTheme {
  id: string;
  label: string;
}

export const SEED_THEMES: readonly SeedTheme[] = [
  { id: 'azure', label: 'Azure' },
  { id: 'violet', label: 'Violet' },
  { id: 'rose', label: 'Rose' },
  { id: 'green', label: 'Green' },
  { id: 'orange', label: 'Orange' },
  { id: 'magenta', label: 'Magenta' },
];

export const DEFAULT_SEED_THEME_ID = SEED_THEMES[0].id;
