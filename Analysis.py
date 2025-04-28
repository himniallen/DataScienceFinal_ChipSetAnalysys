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
taxi_data['dropoff'] = pd.to_datetime(taxi_data['dropoff'])
taxi_data['duration'] = taxi_data['dropoff'] - taxi_data['pickup']
taxi_data['duration_minutes'] = taxi_data['duration'].dt.total_seconds() / 60
taxi_data['is_yellow'] = (taxi_data['color'] == 'yellow').astype(int)  
taxi_data['hour_of_pickup'] = taxi_data['pickup'].dt.hour
taxi_data['hour_of_dropoff'] = taxi_data['dropoff'].dt.hour
tips_hour_average = taxi_data.groupby('hour_of_pickup')['tip'].mean()
print(tips_hour_average)

def time_to_seconds(t):
    return t.hour * 3600 + t.minute * 60 + t.second
taxi_data['pickup_seconds'] = taxi_data['pickup'].apply(time_to_seconds)
taxi_data['dropoff_seconds'] = taxi_data['dropoff'].apply(time_to_seconds)


# Exploratory Analysis and Visualizations

# 1
plt.scatter(taxi_data['pickup_seconds'], taxi_data['dropoff_seconds'])
plt.xlabel('Pickup Time (seconds since midnight)')
plt.ylabel('Dropoff Time (seconds since midnight)')
plt.title('Pickup vs Dropoff Times (in seconds)')
#plt.show()


# hour visualization

# convert to counts,
hour_counts_pickup = taxi_data['hour_of_pickup'].value_counts().sort_index()

# 2
sns.barplot(x=hour_counts_pickup.index, y=hour_counts_pickup.values)
plt.xlabel('Hour of Day')
plt.ylabel('Number of Pickups')
plt.title('Number of Pickups by Hour')
#plt.show()

# now for dropoff
hour_counts_dropoff = taxi_data['hour_of_dropoff'].value_counts().sort_index()

# 2
sns.barplot(x=hour_counts_dropoff.index, y=hour_counts_dropoff.values)
plt.xlabel('Hour of Day')
plt.ylabel('Number of Dropoffs')
plt.title('Number of Dropoffs by Hour')
#plt.show()

# 3
sns.barplot(x=hour_counts_pickup.index, y=tips_hour_average.values)
plt.xlabel('Hour of Day')
plt.ylabel('Average Tips')
plt.title('Average Tips by Hour')
plt.legend()
#plt.show()

# 4
# the average tips vs hour of day
hour_average_tips = tips_hour_average.values
plt.scatter(hour_counts_pickup, hour_average_tips)
plt.xlabel("#pickups")
plt.ylabel("Average Tips")
plt.title("Average tips at time of day vs pickup numbers")
plt.legend()
#plt.show()


# plt.plot(x=hour_counts_pickup.index, y=tips_hour_average.values)
# plt.xlabel('Hour of Day')
# plt.ylabel('Average Tips')
# plt.title('Average tips by Hour of Day')
# plt.grid(True)
# plt.show()


# Use of at least two analysis techniques such as multiple regression or logistic regression. In
# addition you should highlight the success of such models and briefly explain various iterations
X = taxi_data[["distance", 'fare']]
Y = taxi_data['tip']

X = sm.add_constant(X)
modelofDurationVTip = sm.OLS(Y, X).fit()

print(modelofDurationVTip.summary())


# if not yellow, it's green based off of data
X= taxi_data['tip']
Y= taxi_data['is_yellow']
LogitModelof_Color_to_tip = sm.Logit(Y,X)
LogitModelof_Color_To_tip_Fit = LogitModelof_Color_to_tip.fit()
print(LogitModelof_Color_To_tip_Fit.summary())
odds_ratio = np.exp(LogitModelof_Color_To_tip_Fit.params)
print(odds_ratio)