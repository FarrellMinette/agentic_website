import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-commercial-contact',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header>
    <nav class="top-nav">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/commercial" class="active">Commercial</a></li>
        <li><a routerLink="/residential">Residential</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="container">
      <h1>Commercial Contact Information</h1>
      <nav class="sub-page-navigation">
        <a routerLink="/commercial/about-us">About Us</a>
        <a routerLink="/commercial/gallery">Gallery</a>
        <a routerLink="/commercial/rates">Rates</a>
        <a routerLink="/commercial/contact-info" class="active">Contact Info</a>
      </nav>

      <div class="contact-info">
        <h2>Get in Touch</h2>
        <div class="contact-grid">

          <div class="contact-card">
            <h3>Managing Agents</h3>
            <p><strong>Company:</strong> Propergation Estates</p>
            <p><strong>Phone:</strong> <a href="tel:021-914 6444">021-914 6444</a></p>
            <p><strong>Email:</strong> <a href="mailto:management&#64;bellarosa.co.za">management&#64;bellarosa.co.za</a></p>
            <p><strong>Website:</strong> <a href="http://www.propergation.co.za" target="_blank" rel="noopener noreferrer">www.propergation.co.za</a></p>
          </div>

          <div class="contact-card">
            <h3>Commercial Agent</h3>
            <p><strong>Name:</strong> Ryan Hutchinson</p>
            <p><strong>Phone:</strong> <a href="tel:0219146444">021 914 6444</a> / <a href="tel:0837243165">083 724 3165</a></p>
            <p><strong>Email:</strong> <a href="mailto:ryan&#64;propergation.co.za">ryan&#64;propergation.co.za</a></p>
          </div>

          <div class="contact-card">
            <h3>Sales & Leasing Manager</h3>
            <p><strong>Name:</strong> Johan Store</p>
            <p><strong>Phone:</strong> <a href="tel:0837243165">083 724 3165</a> / <a href="tel:0219146444">021 914 6444</a></p>
            <p><strong>Email:</strong> <a href="mailto:johan&#64;propergation.co.za">johan&#64;propergation.co.za</a></p>
          </div>

          <div class="contact-card">
            <h3>Caretaker</h3>
            <p><strong>Name:</strong> Leon Dekker</p>
            <p><strong>Phone:</strong> <a href="tel:021-914 8347">021-914 8347</a> / <a href="tel:0847492000">084 749 2000</a></p>
          </div>

          <div class="contact-card">
            <h3>Security</h3>
            <p><strong>Phone:</strong> <a href="tel:021-914 4947">021-914 4947</a></p>
          </div>

        </div>
      </div>
    </section>
  </main>
  `,
})
export class CommercialContactComponent {}
