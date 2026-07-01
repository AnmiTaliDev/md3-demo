// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../../../core/theme/theme.service';
import { SEED_THEMES } from '../../../../core/theme/seed-theme';

@Component({
  selector: 'app-theme-picker',
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './theme-picker.html',
  styleUrl: './theme-picker.scss',
})
export class ThemePicker {
  protected readonly theme = inject(ThemeService);
  protected readonly seedThemes = SEED_THEMES;
}
