// SPDX-FileCopyrightText: AnmiTaliDev <anmitalidev@nuros.org>

import { Component } from '@angular/core';
import { ButtonsSection } from './components/buttons-section/buttons-section';
import { FormControlsSection } from './components/form-controls-section/form-controls-section';
import { SelectionControlsSection } from './components/selection-controls-section/selection-controls-section';
import { CardsSection } from './components/cards-section/cards-section';
import { NavigationSection } from './components/navigation-section/navigation-section';

@Component({
  selector: 'app-showcase',
  imports: [
    ButtonsSection,
    FormControlsSection,
    SelectionControlsSection,
    CardsSection,
    NavigationSection,
  ],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
})
export class Showcase {}
