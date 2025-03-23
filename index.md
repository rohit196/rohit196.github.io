---
<!--
layout: splash
permalink: /
classes:
  - landing
  - dark-theme
header:
  overlay_color: "#000"
  overlay_filter: "0.4"
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
  <p class="large-text">Specialized in Machine Learning, predective modeling, NLP, and data-driven decision making</p>
</div>

{% include skills.html %}

## Recent Data Science Projects
{: .text-center .with-underline}

{% include case-studies.html %}

<div class="text-center">
  <a href="/portfolio/" class="btn btn--primary btn--large"><i class="fas fa-arrow-right"></i> View All Projects</a>
</div>

{% include github-activity.html %}

<!--
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
-->


## Book Recommendations
{: .text-center .with-underline}

<div class="grid__wrapper">
  {% for book in site.books limit:3 %}
    <div class="grid__item">
      <div class="archive__item">
        <div class="archive__item-teaser">
          <img src="{{ book.cover_image | relative_url }}" alt="{{ book.title }}">
        </div>
        <div class="archive__item-content">
          <h3 class="archive__item-title">{{ book.title }}</h3>
          <p class="archive__item-excerpt">{{ book.excerpt | truncate: 100 }}</p>
          <a href="{{ book.url | relative_url }}" class="btn btn--primary">Read Review</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<div class="text-center">
  <a href="/books/" class="btn btn--primary btn--large">View All Book Reviews</a>
</div>

<!--
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
-->

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


## My Analytics Journey
{: .text-center .with-underline}

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-content">
    <h3 class="with-icon"><i class="fas fa-graduation-cap"></i> Educational Background</h3>
    <p>Master's in Management Analytics</p>
    </div>
  </div>
<div class="timeline-item">
    <div class="timeline-content">
      <h3 class="with-icon"><i class="fas fa-briefcase"></i> Professional Experience</h3>
      <p>5+ years of experience delivering analytics solutions across finance, healthcare, and technology sectors.</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-content">
      <h3 class="with-icon"><i class="fas fa-certificate"></i> Certifications</h3>
      <p>AWS Certified Data Analytics, Google Professional Data Engineer, and Microsoft Azure Data Scientist.</p>
    </div>
  </div>
</div>


## Let's Connect
{: .text-center .with-underline}

<div class="social-links-container">
  <a href="https://github.com/rohit196" class="social-btn" aria-label="GitHub">
    <i class="fab fa-github fa-2x"></i>
    <span>GitHub</span>
  </a>
  
  <a href="https://linkedin.com/in/rohitkarmudi" class="social-btn" aria-label="LinkedIn">
    <i class="fab fa-linkedin fa-2x"></i>
    <span>LinkedIn</span>
  </a>
  
  <a href="https://twitter.com/rohitkarmudi" class="social-btn" aria-label="Twitter">
    <i class="fab fa-twitter fa-2x"></i>
    <span>Twitter</span>
  </a>
  
  <a href="mailto:rohitkarmudi1996@gmail.com" class="social-btn" aria-label="Email">
    <i class="fas fa-envelope fa-2x"></i>
    <span>Email</span>
  </a>
</div>

