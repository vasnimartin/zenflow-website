import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BillingComponent } from './pages/billing/billing.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { PricingComponent } from './pages/pricing/pricing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Zenflow.ai | Modern Retail ERP' },
  { path: 'billing', component: BillingComponent, title: 'Billing Software | Zenflow.ai' },
  { path: 'inventory', component: InventoryComponent, title: 'Inventory Management | Zenflow.ai' },
  { path: 'accounting', component: AccountingComponent, title: 'Retail Accounting | Zenflow.ai' },
  { path: 'pricing', component: PricingComponent, title: 'Pricing | Zenflow.ai' },
  { path: 'about', component: AboutComponent, title: 'About Us | Zenflow.ai' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Zenflow.ai' },
  { path: '**', redirectTo: '' }
];
