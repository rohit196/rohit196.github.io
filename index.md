---
layout: home
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
    - label: "Portfolio"
      url: "/portfolio/"
excerpt: "Research Analyst | Analytics Developer | AI Enthusiast | Blogger"
---

## Welcome to My Personal Website

I'm a research analyst and analytics developer specializing in transforming complex data into actionable insights. My expertise includes data analysis, machine learning, and building analytics solutions.

## Areas of Expertise

- **Data Analysis & Visualization**
- **Machine Learning & AI Applications**
- **Analytics Development**
- **API & Web Development**

## Recent Projects

{% for post in site.portfolio limit:3 %}
  {% include archive-single.html %}
{% endfor %}

[View All Projects](/portfolio/){: .btn .btn--primary}

## Latest Blog Posts

{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

[View All Posts](/blog/){: .btn .btn--primary}

---
layout: splash
permalink: /
header:
  overlay_color: "#5e616c"
  overlay_image: /assets/images/header-bg.jpg
  actions:
    - label: "View Portfolio"
      url: "/portfolio/"
excerpt: >
  Research Analyst | Analytics Developer | AI Enthusiast | Blogger<br />
  <small>Turning data into meaningful insights</small>
feature_row:
  - image_path: /assets/images/portfolio-thumb.jpg
    alt: "Portfolio"
    title: "Portfolio"
    excerpt: "View my work across data analysis, machine learning, and web development projects."
    url: "/portfolio/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
  - image_path: /assets/images/blog-thumb.jpg
    alt: "Blog"
    title: "Blog"
    excerpt: "Read my thoughts on data science, analytics, and technology trends."
    url: "/blog/"
    btn_label: "Read Posts"
    btn_class: "btn--primary"
  - image_path: /assets/images/about-thumb.jpg
    alt: "About"
    title: "About Me"
    excerpt: "Learn more about my background, skills, and professional experience."
    url: "/about/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
---

{% include feature_row %}

## Professional Summary

I'm a data professional with expertise in analytics and machine learning. I help organizations leverage data to make better decisions through advanced analytics and visualization.

## Featured Projects

<div class="grid__wrapper">
  {% for post in site.portfolio limit:2 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<a href="/portfolio/" class="btn btn--primary">View All Projects</a>

## Recent Posts

<div class="grid__wrapper">
  {% for post in site.posts limit:2 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<a href="/blog/" class="btn btn--primary">View All Posts</a>

## Recommended Books

<div class="grid__wrapper">
  {% for book in site.books limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<a href="/books/" class="btn btn--primary">See All Books</a>