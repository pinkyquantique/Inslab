import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './select-plan.component.html',
  styleUrl: './select-plan.component.css'
})
export class SelectPlanComponent {
  minValue = 463239;
  maxValue = 959898;
  currentValue = this.minValue;

  
  isaccessoriesCollapsed = false;
  isgeographicalCollapsed = false;
  isaddonsCollapsed = false
  accessories=[
    {name:'Accessories', checked: true},
    {name: 'Deductibles', checked: true},
    {name: 'PA Covers', checked: true}
  ];
  geographical=[
    {country:'Bangladesh', checked: true},
    {country:'Maldives', checked: true},
    {country:'Bhutan', checked: true},
    {country:'Nepal', checked: true},
    {country:'Pakistan', checked: true},
    {country:'Sri Lanka', checked: true},
  ];
  addons = [
    {add:'Engine Protection',checked:true},
    {add:'Return Invoice',checked:true},
    {add:'Consumables',checked:true},
    {add:'Key Protect',checked:true},
    {add:'Tyre Protect',checked:true},
    {add:'Extra Towing',checked:true},
    {add:'Roadside Assistance',checked:true},
    {add:'EMI Protector',checked:true},
    {add:'Loss of Personal Belongings',checked:true},
    {add:'Protection of NCB',checked:true},
    {add:'Inconvenience allowance',checked:true},
    {add:'Loss of Income',checked:true},
    {add:'Enhanced PA Cover - Owner driver',checked:true},
    {add:'DRIVE ASSURE PRIME',checked:true},
    {add:'DRIVE ASSURE PRIME',checked:true},
    {add:'DRIVE ASSURE ECONOMY',checked:true},
    {add:'DRIVE ASSURE ECONOMY PLUS',checked:true},
  ];
  constructor(private router: Router){
     
    }
    onSliderChange(){
      console.log('Current IDV Value:', this.currentValue);
    }
  toggleaccessoryCollapse(): void{
    this.isaccessoriesCollapsed = !this.isaccessoriesCollapsed;
  }
  toggelgeographyCollapse(): void{
    this.isgeographicalCollapsed = !this.isgeographicalCollapsed;
  }
  toggeladdonCollapse(): void{
    this.isaddonsCollapsed = !this.isaddonsCollapsed;
  }
  selectedOption: string = 'lowToHigh';
  isOpen: boolean =false;
  
  toggleDropDown() : void{
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  selectOption(option:string){
    this.selectedOption = option;
    this.isOpen = false;
    }
  onFilterChange(event : Event){
    this.isOpen = false;
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Sorted value',selectedValue);
  }
  onFormSubmit() {
   
   
      this.router.navigate(['/pages/motor/two-wheeler/personal-detail'])
   
  }
}
