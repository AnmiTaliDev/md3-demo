// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-selection-controls-section',
  imports: [FormsModule, MatChipsModule, MatSlideToggleModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './selection-controls-section.html',
  styleUrl: './selection-controls-section.scss',
})
export class SelectionControlsSection {
  protected readonly tags = ['Material You', 'HCT', 'Dynamic color', 'Tokens'];
  protected readonly notificationsEnabled = signal(true);
  protected readonly termsAccepted = signal(false);
  protected readonly density = signal('comfortable');
}
