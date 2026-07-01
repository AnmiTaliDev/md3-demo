// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface DemoCard {
  title: string;
  subtitle: string;
  body: string;
  icon: string;
}

@Component({
  selector: 'app-cards-section',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './cards-section.html',
  styleUrl: './cards-section.scss',
})
export class CardsSection {
  protected readonly cards: DemoCard[] = [
    {
      title: 'Dynamic color',
      subtitle: 'Seed color',
      body: 'MD3 builds the entire app palette from a single seed color using the HCT system.',
      icon: 'palette',
    },
    {
      title: 'Tonal palettes',
      subtitle: 'Tonal palettes',
      body: 'Each color is split into 13 tones from dark to light for every interface state.',
      icon: 'gradient',
    },
    {
      title: 'Theme tokens',
      subtitle: 'Design tokens',
      body: 'Components read colors through variables like --mat-sys-primary instead of hardcoding values.',
      icon: 'token',
    },
  ];
}
