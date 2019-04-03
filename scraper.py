import requests
import bs4  
import csv
 
res = requests.get('https://www.livepopulation.com/country/malaysia.html')
soup = bs4.BeautifulSoup(res.text,'lxml')
pop = soup.select('b')
print(pop)
