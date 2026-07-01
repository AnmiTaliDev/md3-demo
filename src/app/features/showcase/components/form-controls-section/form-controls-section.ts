// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-controls-section',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form-controls-section.html',
  styleUrl: './form-controls-section.scss',
})
export class FormControlsSection {
  protected readonly name = signal('');
  protected readonly bio = signal('');
  protected readonly role = signal('designer');
}
