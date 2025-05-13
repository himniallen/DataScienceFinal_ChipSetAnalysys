# Taxi Driving Tips Analysis
  Link to dataset: https://www.kaggle.com/datasets/enocknkuya/tax-dropoff
# Requirements 
### A final-level project in this course should involve:
- A clearly defined problem or question related to the dataset
   - When is the best time of day to drive to get the most tips?
   - Can we predict tip amount based on time of day or other variables?
- Data acquisition (e.g., scraping/API, or strong justification for choosing pre-cleaned open data)
   - We get our data on Kagglehub. enocknkuya/tax-dropoff
- Cleaning and reshaping of the data
   - We will remove nas, and we will create new columns with new data calculated from the existing data, such as the hour of day as discrete values, and the average tip amount for each hour.
- Exploratory analysis and visualizations. (At least 4 visualizations)
   1. Bar chart that shows time of day vs average tip amount per ride by hour. Bar chart because it can easily distinguish the hours of the day since we made those values discrete.
   2. Bar chart showing the number of pickups happen per hour (this helps us gather which times of day are most popular, which helps us because if tips are higher but the work is slow, you won't be making more money).
   3. Scatter plot showing the number of pickups at the time of day vs tip amount
   4. Scatter plots of the logistic regressions of distance and fare
- Use of at least two analysis techniques such as multiple regression or logistic regression. In
addition you should highlight the success of such models and briefly explain various iterations.
   - Multilinear regression (throw in a bunch of variables to predict tip amount)
   - Logistic regression model of distance x fare
- Communication of results using plots, tables in a well-organized report. The report should over
view the data, highlight abnormalities or trends, and summarize iterations of models. This
should be professionally done.
   - Take screenshots of the graphs, summary of our findings, summarize the data in a report.
 - Final submission must also include a clean and organized file with reproducible code. Questions
will be asked regarding the code. Students should be able to explain what each part is doing.
   - Go over the code as a team so we all know what it does. Agree on the things we want to chart and the analyses we want to perform, and put them in the code file.  
