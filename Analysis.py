# import matplotlib as plt
import seaborn as sns
# import statsmodels.api as Stats
# import numpy as np
# import math 
import pandas as pd
import os
from bs4 import BeautifulSoup
import requests
import kaggle

file_path = "taxis.csv"
if not os.path.exists(file_path):
  print("File doesn't currently exist locally. Contacting Kaggle api to create a new csv file...")
  kaggle.api.dataset_download_files("enocknkuya/tax-dropoff", unzip=True)
      
print("Ready to work with the data: " + file_path)
taxi_data = pd.read_csv(file_path).dropna()
print(taxi_data.head())

