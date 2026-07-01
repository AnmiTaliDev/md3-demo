// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemePicker } from './features/showcase/components/theme-picker/theme-picker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, ThemePicker],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'Material You (MD3) — Demo';
}
