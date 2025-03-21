---
<!--
layout: splash
permalink: /
classes:
  - landing
  - dark-theme
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header-bg.jpg
  actions:
    - label: "<i class='fas fa-briefcase'></i> Portfolio"
      url: "/portfolio/" 
    - label: "<i class='fas fa-book'></i> Blog"
      url: "/blog/"   
title: "Rohit Karmudi"
excerpt: "Research Analyst | Analytics Developer | AI Enthusiast | Part-time Philosopher"
---

<div class="text-center">
  <img src="/assets/images/profile-photo.jpg" alt="Rohit Karmudi" class="avatar-round">
  <h2>Hello, I'm Rohit</h2>
  <p class="large-text">I transform complex data into clear, actionable insights</p>
</div>

<div class="feature-section">
  <h2><i class="fas fa-chart-line"></i> What I do</h2>
  <div class="grid__wrapper">
    <div class="feature-box">
      <i class="fas fa-database fa-3x"></i>
      <h3>Data Analysis</h3>
      <p>Extracting meaningful patterns from complex datasets using statistical anslysis and visualization techniques.</p>
      </div>
      <div class="feature-box">
      <i class="fas fa-robot fa-3x"></i>
      <h3>Machine Learning</h3>
      <p>Building predictive models and AI-driven solutions that deliver tangible business value.</p>
    </div>
    <div class="feature-box">
      <i class="fas fa-code fa-3x"></i>
      <h3>Analytics Development</h3>
      <p>Creating custom analytics solutions and dashboards that empower data-driven decision making.</p>
    </div>
  </div>
</div>

## Featured Projects
{: .text-center .with-underline}

<div class="grid__wrapper">
  {% for post in site.portfolio limit:3 %}
    {% include portfolio-card.html %}
  {% endfor %}
</div>

<div class="text-center">
  <a href="/portfolio/" class="btn btn--primary btn--large"><i class="fas fa-arrow-right"></i> View All Projects</a>
</div>

## Latest Insights
{: .text-center .with-underline}

<div class="grid__wrapper">
  {% for post in site.posts limit:3 %}
    {% include blog-card.html %}
  {% endfor %}
</div>

<div class="text-center">
  <a href="/blog/" class="btn btn--primary btn--large"><i class="fas fa-arrow-right"></i> Read More Articles</a>
</div>

/* {% include testimonials.html %} */

## My Analytics Journey
{: .text-center .with-underline}

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"><i class="fas fa-graduation-cap"></i></div>
    <div class="timeline-content">
      <h3>Educational Background</h3>
      <p>Master's degree in Data Science with specialization in advanced analytics and statistical modeling.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-marker"><i class="fas fa-briefcase"></i></div>
    <div class="timeline-content">
      <h3>Professional Experience</h3>
      <p>5+ years of experience delivering analytics solutions across finance, healthcare, and technology sectors.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-marker"><i class="fas fa-certificate"></i></div>
    <div class="timeline-content">
      <h3>Certifications</h3>
      <p>AWS Certified Data Analytics, Google Professional Data Engineer, and Microsoft Azure Data Scientist.</p>
    </div>
  </div>
</div>

## Let's Connect
{: .text-center .with-underline}

<div class="social-links">
  <a href="https://github.com/rohit196" class="social-btn"><i class="fab fa-github fa-2x"></i></a>
  <a href="https://linkedin.com/in/rohitkarmudi" class="social-btn"><i class="fab fa-linkedin fa-2x"></i></a>
  <a href="https://twitter.com/rohitkarmudi" class="social-btn"><i class="fab fa-twitter fa-2x"></i></a>
  <a href="mailto:rohitkarmudi1996@gmail.com" class="social-btn"><i class="fas fa-envelope fa-2x"></i></a>
</div>

<div class="cta-section">
  <h3>Interested in working together?</h3>
  <a href="/contact/" class="btn btn--success btn--large">Get in Touch</a>
</div>


<!--
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
-->