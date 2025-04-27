# import matplotlib as plt
# import seaborn as sns
# import statsmodels.api as Stats
# import numpy as np
# import math 
import pandas as pd
import os
from bs4 import BeautifulSoup
import requests

file_path = "taxis.csv"
if not os.path.exists(file_path):
  print("File doesn't currently exist... Scraping the web to create a new csv file...")
  
  url = 'https://github.com/mwaskom/seaborn-data/blob/master/taxis.csv'
  response = requests.get(url)

  if response.status_code == 200:
      soup = BeautifulSoup(response.text, 'html.parser')
      lines = soup.find_all('div', class_='react-file-line html-div')
      csv_content = '\n'.join(line.get_text(strip=True) for line in lines)
      print(csv_content)
      with open(file_path, 'w', encoding='utf-8') as file:
        file.write(csv_content)

      print('CSV data successfully retrieved and saved as taxis.csv')
  else:
      print(f'Failed to retrieve data: {response.status_code}')
      
print("Ready to work with the data: " + file_path)

taxi_data = pd.read_csv(file_path).dropna()
print(taxi_data.head())