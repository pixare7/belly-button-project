# Belly Button Project

## Table of Contents
1. [Overview](#overview)
2. [Project Details](#project-details)
   - [Background](#background)
   - [Goals](#goals)
   - [Methodology](#methodology)
3. [Conclusions](#conclusions)
4. [Future Work](#future-work)

## Overview

### What is this project about?
This project explores the diversity of microbial species, also known as operational taxonomic units (OTUs), found in human navels. It features an interactive dashboard where users can select a test subject's ID number to view demographic information, the top microbial species as a bar chart, and a bubble chart displaying bacterial cultures per sample, showing both the bacteria and their count.

## Project Details

### Background
This project was inspired by the significant role microbes, both beneficial and harmful, play in human health. The dataset reveals that a small group of microbial species (OTUs) were present in over 70% of individuals, while the majority were relatively rare. Understanding patterns in the human navel microbiome could lead to further research into the potential correlation between physical health and microbial diversity.

### Goals
The primary goal is to create an interactive dashboard that:
- Displays a horizontal bar chart with a dropdown menu to show the top 10 OTUs for a selected individual.
- Includes a bubble chart representing bacterial cultures per sample.
- Provides a panel showing metadata (demographic information) about the selected individual.
All charts and data will update dynamically when a new sample is selected. The dashboard will be deployed on a free static web hosting service, making it publicly accessible for research and exploration.

### Methodology
1. **Data Collection:**
   - The data was sourced from `samples.json`, accessed using the D3 library from the URL: `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`.

2. **Exploratory Data Analysis (EDA):**
   - An interactive dashboard was developed where users can select a sample and explore key data points.
   - A bar chart was created to display the top 10 OTUs found in each individual.
   - A bubble chart was designed to visualize bacterial cultures per sample.
   - A panel was included to display the individual's demographic information (metadata).

3. **Visualization:**
   - Bar charts and bubble charts were created using JavaScript, with the D3 library, to visualize the most common OTUs for each individual. The web page was built with HTML and hosted on GitHub Pages.

4. **Tools and Libraries:**
   - The project was built using JavaScript and D3.js for data manipulation and visualization. The dashboard was deployed as a static web page using GitHub Pages.

#### Figure 1: Belly Button Diversity Dashboard
![Figure 1](https://github.com/pixare7/belly-button-project/blob/main/images/fig1.png)

*This figure showcases the dashboard, including a bar chart, bubble chart, and demographic panel, highlighting the top microbes found in a sample's DNA.*

## Conclusions
This project successfully highlights the use of interactive visualizations to explore microbial diversity in human navels. The dashboard allows users to analyze the distribution of operational taxonomic units (OTUs) across individuals, revealing that while a few OTUs are common, most are rare. By making the data easily accessible, this project provides a foundation for future research into potential links between microbial diversity and factors such as health or demographics, demonstrating the value of combining data visualization with biological insights.

## Future Work
Several potential improvements and extensions could further this project:
- Data cleaning, such as removing samples with null values, to improve accuracy.
- Investigating the relationship between microbial diversity in the navel and demographic factors such as ethnicity or health conditions.
