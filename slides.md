---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Introduction Web
info: |
  ##  Web engineering course introduction @Univ Rennes
  Master @istic

  Learn more at [istic](https://istic.univ-rennes.fr/)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
addons:
  - slidev-component-poll
  - slidev-addon-ws-syncho
  - slidev-addon-qrcodecurrentslide
pollSettings:
  server: wss://ws.barais.fr
  autoConnect: true
  anonymous: true
wsSettings:
  server: wss://slidevsynchro.barais.fr
  updateCursor: true # To send cursor update notification
---


# WEB Engineering

<div align="center">
<img src="/image_1.png" width="30%">
</div>


<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/barais/web.intro" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---

#  Plan

- Un peu d’histoire
- JavaScript : le langage d’action du Web (mais pas que …)
- Outillage
- TypeScript
- Utilisation de frameworks : Angular
- Utilisation de frameworks : VueJS
- Utilisation de frameworks : React
- Conclusion

----

#  Contexte historique

- Internet (~1980) et le Web (~1990)
 - Repose sur Internet, TCP/IP, modèle OSI
 - Un des services de l'Internet (port 80)

- 3 piliers : HTML, URI, HTTP

- Plusieurs évolutions
  - Séparation mise en forme (CSS), pages
  - Statiques vers interactions dynamiques
  - Cloud computing, Web sémantique, Web embarqué, systèmes pervasifs...
  - HTML5 (Conteneur d’applications complexes)

---

#  Évolutions du Web

- Évolutions du Web => Web 2.0
  - Utilisateur proactif (wikipedia, blogs, etc.)
  - Interfaces riches, intégration d'applications

- Moyens techniques
  - Langage de scripts
  - côté serveur (PHP, ASP, C#...)
  - côté client (Javascript, flash...)

- Services Web (HTML => XML,JSON)
  - Échange de données entre applications

---

# Ingénierie Web


- Availability
- Performance
- Reliability
- Scalability
- Manageability
- Cost

<p class="current-visible"
style="position:absolute; left:300px; top:100px;">
<img src="/framework/img1.png" width="75%"></p>


---

# Element au coeur d'une application Web

<p class="current-visible"
style="position:absolute; left:70px; top:150px;">
<img src="/framework/img2.png" width="90%"></p>


---
layout: center
---
#  Use of Frameworks?


---

# What is a Framework?

- Designed to reduce overhead in web development
- Types of Framework Architectures
  - Model-View-Controller (MVC)
  - **Push** vs **Pull** Based
    - Most MVC Frameworks user push-based architecture “action based” (Django, Ruby on Rails, Symfony)
    - Pull-based or “component based” (Vue, Angular2, React)
  - Three Tier Organization
    - Client (Browser running HTML/Javascipt/CSS)
    - Application (Running the Business Logic)
Database (Data Storage)


---

# Types of Frameworks
- Server Side: Django, symfony, Ruby on Rails
<img src="/framework/img2.png" width="90%">

---

# Types of Frameworks and Single Page Application

- Server Side: Spring Boot, Express, api-platform
- Client Side: Angular, React, Vue
<img src="/framework/img8.png" width="90%">

---
layout: center
---

#  Frontend development


---

# Front End Runtime Languages

- HTML/CSS
- Javascript

> Javascript/HTML/CSS is the only real option for front-end native languages and is basically the standard. But there are many variations on JavaScript that are used.

<p class="current-visible"
style="position:absolute; left:350px; top:200px;">
<img src="/framework/img3.png" width="40%"></p>

---
layout: center
---

# Emerging solutions

> WebAssembly or wasm is a new portable, size- and load-time-efficient format suitable for compilation to the web.

> WebAssembly is currently being designed as an open standard by a W3C Community Group that includes representatives from all major browsers.


---

# Runtime platform

- DOM (Document Object Model)
- Document Object Model makes every addressable item in a web application an Object that can be manipulated for color, transparency, position, sound and behaviors.
  - Every HTML Tag is a DOM object

<p class="current-visible"
style="position:absolute; left:160px; top:200px;">
<img src="/framework/img4.png" width="80%"></p>

---

# DOM (Document Object Model)

<p class="current-visible"
style="position:absolute; left:300px; top:100px;">
<img src="/framework/img5.png" width="90%"></p>

---

# How to create Web Applications

<p class="current-visible"
style="position:absolute; left:250px; top:100px;">
<img src="/framework/img6.png" width="52%"></p>

---


<div class="grid grid-cols-3 gap-4 w-full">
  <div class="col-span-2">

<Poll question="Est il toujours nécessaire de développer votre application Web à l'aide de JS/CSS/Html" 
:correctAnswer="[0]"
:controlled="true"
 :clearable="true" 
 displayResults="poll">

**Oui**

**Non**

**Cela dépend du navigateur visé**

**Oui pour les applications hybrides**


</Poll>

  
  </div>


  <div class="col-span-1">
<QrCodeCurrentSlide
    :width="300"
    :height="300"
    color="blue"
/>
  
  
  </div>

</div>