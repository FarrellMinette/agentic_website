import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-residential-contact',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header>
    <nav class="top-nav">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/commercial">Commercial</a></li>
        <li><a routerLink="/residential" class="active">Residential</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="container">
      <h1>Residential Contact Information</h1>
      <nav class="sub-page-nav">
        <a routerLink="/residential/about-us">About Us</a>
        <a routerLink="/residential/gallery">Gallery</a>
        <a routerLink="/residential/contact-info" class="active">Contact Info</a>
      </nav>

      <div class="contact-info">
        <h2>Key Contacts</h2>
        <div class="contact-grid">
          <div class="contact-card">
            <h3>Managing Agents</h3>
            <p><strong>Company:</strong> Propergation Estates</p>
            <p><strong>Phone:</strong> <a href="tel:0219146444">021-914 6444</a></p>
            <p><strong>Email:</strong> <a href="mailto:management&#64;bellarosa.co.za">management&#64;bellarosa.co.za</a></p>
            <p><strong>Website:</strong> <a href="http://www.propergation.co.za" target="_blank" rel="noopener noreferrer">www.propergation.co.za</a></p>
          </div>

          <div class="contact-card">
            <h3>Residential Agent</h3>
            <p><strong>Name:</strong> Deon Arp</p>
            <p><strong>Phone:</strong> <a href="tel:0826515856">082 651 5856</a></p>
          </div>

          <div class="contact-card">
            <h3>Residential Agent</h3>
            <p><strong>Name:</strong> Herman Stemmet</p>
            <p><strong>Phone:</strong> <a href="tel:0822570201">082 257 0201</a></p>
          </div>

          <div class="contact-card">
            <h3>Residential Agent (General)</h3>
            <p><strong>Email:</strong> <a href="mailto:info&#64;elementsrealestate.co.za">info&#64;elementsrealestate.co.za</a></p>
          </div>

          <div class="contact-card">
            <h3>Caretaker</h3>
            <p><strong>Name:</strong> Leon Dekker</p>
            <p><strong>Phone:</strong> <a href="tel:0219148347">021-914 8347</a> / <a href="tel:0847492000">084 749 2000</a></p>
          </div>

          <div class="contact-card">
            <h3>Security</h3>
            <p><strong>Phone:</strong> <a href="tel:0219144947">021-914 4947</a></p>
          </div>

        </div>
      </div>
    </section>
  </main>
  `,
})
export class ResidentialContactComponent {}
