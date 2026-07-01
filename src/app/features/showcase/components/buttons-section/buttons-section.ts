// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-section',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './buttons-section.html',
  styleUrl: './buttons-section.scss',
})
export class ButtonsSection {}
