// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';
import { DEFAULT_SEED_THEME_ID, SEED_THEMES } from './seed-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly seedThemeId = signal(DEFAULT_SEED_THEME_ID);
  readonly darkMode = signal(false);

  constructor() {
    effect(() => {
      const root = this.document.documentElement;
      for (const theme of SEED_THEMES) {
        root.classList.toggle(`theme-${theme.id}`, theme.id === this.seedThemeId());
      }
    });

    effect(() => {
      this.document.body.classList.toggle('dark-mode', this.darkMode());
    });
  }

  selectSeedTheme(id: string): void {
    this.seedThemeId.set(id);
  }

  toggleDarkMode(): void {
    this.darkMode.update((value) => !value);
  }
}
