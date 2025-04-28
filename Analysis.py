# Taxi's data set,
# team is Dorian, Jidapa, and Himni


import seaborn as sns
import statsmodels.api as Stats
import numpy as np
import math 
import pandas as pd
import os
from bs4 import BeautifulSoup
import requests
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

# Cleaning data
taxi_data.dropna()
#sns.pairplot(taxi_data)
#plt.show()

# Extracts time of day.
taxi_data['pickup'] = pd.to_datetime(taxi_data['pickup'])
taxi_data['dropoff'] = pd.to_datetime(taxi_data['dropoff'])
taxi_data['duration'] = taxi_data['dropoff'] - taxi_data['pickup']

# taxi_data = taxi_data.sort_values(by = 'pickup', ascending=True)
# Used that to check output

# Create our own column called average earnings that calculates the average earnings of someone who works during a given timeframe
# maybe we could make our own dataframe that has one column of times of day by hour, and average earnings for that hour
# 1am, 2am, 3am, ... 11pm, 12am

taxi_data['hour_of_pickup'] = taxi_data['pickup'].dt.hour
taxi_data['hour_of_dropoff'] = taxi_data['dropoff'].dt.hour
hour_average = taxi_data.groupby('hour_of_pickup')['tip'].mean()
print(hour_average)

def time_to_seconds(t):
    return t.hour * 3600 + t.minute * 60 + t.second

taxi_data['pickup_seconds'] = taxi_data['pickup'].apply(time_to_seconds)
taxi_data['dropoff_seconds'] = taxi_data['dropoff'].apply(time_to_seconds)

plt.scatter(taxi_data['pickup_seconds'], taxi_data['dropoff_seconds'])
plt.xlabel('Pickup Time (seconds since midnight)')
plt.ylabel('Dropoff Time (seconds since midnight)')
plt.title('Pickup vs Dropoff Times (in seconds)')
# plt.show()


# hour visualization

#convert to counts,
hour_counts_pickup = taxi_data['hour_of_pickup'].value_counts().sort_index()

# sns.barplot(x=hour_counts_pickup.index, y=hour_counts_pickup.values)
# plt.xlabel('Hour of Day')
# plt.ylabel('Number of Pickups')
# plt.title('Number of Pickups by Hour')
#plt.show()

# now for dropoff
hour_counts_dropoff = taxi_data['hour_of_dropoff'].value_counts().sort_index()

# sns.barplot(x=hour_counts_dropoff.index, y=hour_counts_dropoff.values)
# plt.xlabel('Hour of Day')
# plt.ylabel('Number of Dropoffs')
# plt.title('Number of Dropoffs by Hour')
# plt.show()

sns.barplot(x=hour_counts_pickup.index, y=hour_average.values)
plt.xlabel('Hour of Day')
plt.ylabel('Average Tips')
plt.title('Average Tips by Hour')
plt.legend()
plt.show()