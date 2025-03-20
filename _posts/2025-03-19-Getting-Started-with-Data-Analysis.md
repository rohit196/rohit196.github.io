---
title: "Getting Started with Data Analysis in Python"
date: 2025-03-20
categories:
  - Data Science
tags:
  - python
  - pandas
  - data analysis
header:
  image: /assets/images/posts/data-analysis-python.jpg
  teaser: /assets/images/posts/data-analysis-python-th.jpg
excerpt: "A beginner's guide to data analysis using Python and Pandas."
---

## Introduction

Data analysis is the process of inspecting, cleaning, transforming, and modeling data to discover useful information and support decision-making.

## Setting Up Your Environment

```python
# Install required packages
pip install pandas numpy matplotlib seaborn

# Import packages
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data from CSV
df = pd.read_csv('data.csv')

# View first few rows
print(df.head())

# Get summary statistics
print(df.describe())
```


