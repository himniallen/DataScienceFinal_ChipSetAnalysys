import pandas as pd
import matplotlib as plt
import seaborn as sns
import statsmodels.api as Stats
import numpy as np
import math 
import os
from bs4 import BeautifulSoup
import requests

# url = "https://chip-dataset.vercel.app/"
# response = requests.get(url)
# print(response.text)


chip_data = pd.read_csv('chip_dataset.csv')
chip_data = chip_data.dropna()
print(chip_data.head())