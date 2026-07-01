// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-section',
  imports: [MatTabsModule, MatListModule, MatIconModule],
  templateUrl: './navigation-section.html',
  styleUrl: './navigation-section.scss',
})
export class NavigationSection {}
