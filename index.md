---
layout: single
title: "Rohit Karmudi"
permalink: /
classes:
  - landing
  - dark-theme
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header-bg.jpg
  actions:
    - label: "Contact Me"
      url: "/contact/"
excerpt: "Research Analyst | Analytics Developer | AI Enthusiast | Blogger"
---

<div class="grid__wrapper">
  <!-- About Me Section -->
  <div class="grid__item">
    <div class="archive__item">
      <div class="archive__item-body">
        <h2 class="archive__item-title">About Me</h2>
        <div class="archive__item-excerpt">
          <p>I'm a data professional with expertise in analytics, machine learning, and data visualization. With a background in [your background], I specialize in turning complex data into actionable insights.</p>
          <a href="/about/" class="btn btn--primary">More About Me</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolio Section -->
  <div class="grid__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <img src="/assets/images/portfolio-preview.jpg" alt="Portfolio">
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Portfolio</h2>
        <div class="archive__item-excerpt">
          <p>View a selection of my professional projects in data analysis, machine learning, and web development.</p>
          <a href="/portfolio/" class="btn btn--primary">View Portfolio</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Blog Section -->
  <div class="grid__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <img src="/assets/images/blog-preview.jpg" alt="Blog">
      </div>
      <div class="archive__item-body">
        <h2 class="archive__item-title">Blog</h2>
        <div class="archive__item-excerpt">
          <p>Read my thoughts on data science, technology trends, and professional development.</p>
          <a href="/blog/" class="btn btn--primary">Read Blog</a>
        </div>
      </div>
    </div>
  </div>
</div>

<h2>Featured Projects</h2>

<div class="grid__wrapper">
  {% for project in site.portfolio limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<h2>Recent Posts</h2>

<div class="grid__wrapper">
  {% for post in site.posts limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>