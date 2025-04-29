# Taxi's data set,
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
  kaggle.api.dataset_download_files("enocknkuya/tax-dropoff", unzip=True)
      
print("Ready to work with the data: " + file_path)
taxi_data = pd.read_csv(file_path)

# Clearly defined problem or question related to the dataset:
# When is the optimal time of day to drive to make the most in tips? 
# How can we predict the amount of tips we will receive based on the time of day?

# Cleaning data
taxi_data.dropna()

# Reshaping data - Creating new columns based on existing data that will help our analysis
taxi_data['pickup'] = pd.to_datetime(taxi_data['pickup'])
taxi_data['hour_of_pickup'] = taxi_data['pickup'].dt.hour
avg_tip_per_ride_per_hr = taxi_data.groupby('hour_of_pickup')['tip'].mean()

# convert to counts,
hour_counts_pickup = taxi_data['hour_of_pickup'].value_counts().sort_index()

plt.plot(hour_counts_pickup.index, avg_tip_per_ride_per_hr.values)
plt.xlabel('Hour of Day')
plt.ylabel('Average Tip Amount') 
plt.title('Average Tips by Hour')
plt.grid(True)
plt.legend()
plt.show()

sns.barplot(x=hour_counts_pickup.index, y=avg_tip_per_ride_per_hr.values)
plt.xlabel('Hour of Day')
plt.ylabel('Average Tip Amount')
plt.title('Average Tips by Hour')
plt.grid(True)
plt.legend()
plt.show()







# Use of at least two analysis techniques such as multiple regression or logistic regression. In
# addition you should highlight the success of such models and briefly explain various iterations