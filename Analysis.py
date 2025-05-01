# Taxi data set: https://www.kaggle.com/datasets/enocknkuya/tax-dropoff
# Team is Dorian, Jidapa, and Himni


import seaborn as sns
import statsmodels.api as sm
import numpy as np
import math 
import pandas as pd
import os
import kaggle
import matplotlib.pyplot as plt



file_path = "taxis.csv"
if not os.path.exists(file_path):
  print("File doesn't currently exist locally. Contacting Kaggle api to create a new csv file...")
  # Fetching data from API:
  kaggle.api.dataset_download_files("enocknkuya/tax-dropoff", unzip=True)
      
print("Ready to work with the data: " + file_path)
taxi_data = pd.read_csv(file_path)

# Clearly defined problem or question related to the dataset:
# When is the optimal time of day to drive to make the most in tips? 
# How can we predict the amount of tips we will receive based on the time of day?

# Cleaning data
taxi_data.dropna()
taxi_data = taxi_data.dropna(subset=["payment"])


# Reshaping data - Creating new columns based on existing data that will help our analysis
taxi_data['pickup'] = pd.to_datetime(taxi_data['pickup'])
taxi_data['hour_of_pickup'] = taxi_data['pickup'].dt.hour
avg_tip_amt_per_hr = taxi_data.groupby('hour_of_pickup')['tip'].mean()
median_tip_amt_per_hr = taxi_data.groupby('hour_of_pickup')['tip'].median()

# convert to counts,
hour_counts_pickup = taxi_data['hour_of_pickup'].value_counts().sort_index()

# Visualization 1
sns.barplot(x=hour_counts_pickup.index, y=avg_tip_amt_per_hr.values)
plt.xlabel('Hour of Day')
plt.ylabel('Average Tip Amount')
plt.title('Average Tip Amounts by Hour')
plt.show()

# Visualization 2
sns.barplot(x=hour_counts_pickup.index, y=hour_counts_pickup.values)
plt.xlabel('Hour of Day')
plt.ylabel('Number of Pickups')
plt.title('Number of Pickups by Hour')
plt.show()

# Visualization 3
# The average tips vs hour of day
sns.scatterplot(x=hour_counts_pickup.index, y=avg_tip_amt_per_hr.values, hue=hour_counts_pickup)
plt.xlabel("Hour of day")
plt.ylabel("Average Tip Amount")
plt.title("Average tip amts by hour vs Hour of day")
plt.xticks(ticks=hour_counts_pickup.index)
plt.ylim(bottom=0)
plt.legend(title="Customer Volume")
plt.show()

# Visualization 4 is included in analysis technique 2.


# Use of at least two analysis techniques such as multiple regression or logistic regression. In
# addition you should highlight the success of such models and briefly explain various iterations

# Analysis Technique 1: Multiple Regression
X = taxi_data[["distance"]]
taxi_data["payment"] = taxi_data["payment"].astype(str).str.strip()
payment_dummies = pd.get_dummies(taxi_data["payment"], drop_first=True).astype(int)
color_dummies = pd.get_dummies(taxi_data["color"], drop_first=True).astype(int)
hour_dummies = pd.get_dummies(taxi_data["hour_of_pickup"], drop_first=True).astype(int)

X = pd.concat([X, payment_dummies, color_dummies, hour_dummies], axis=1)
X = sm.add_constant(X)
y = taxi_data['tip']

model = sm.OLS(y, X).fit()

print(model.summary())



# Analysis Technique 2: Logistic regression model: Distance x Fare
# We chose this one because it's the only one that looks remotely nonlinear but not all over the place.

taxi_data['fare_square'] = taxi_data['fare'] ** 2
taxi_data['fare_sqrt'] = np.sqrt(taxi_data['fare'])

# Visualization 4
plt.scatter(x=taxi_data['distance'], y=taxi_data['fare_square'])
plt.xlabel('Distance')
plt.ylabel('Fare squared')
plt.show()

plt.scatter(x=taxi_data['distance'], y=taxi_data['fare_sqrt'])
plt.xlabel('Distance')
plt.ylabel('Fare square rooted')
plt.show()