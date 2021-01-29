from bs4 import BeautifulSoup
import requests


@api.route('/scraper', methods=['GET'])
def do_a_quest():
    URL = "https://www.spain.info/es/agenda/cabalgata-reyes-magos/"
    r = requests.get(URL).text
    soup = BeautifulSoup(r, 'lxml')
    date = soup.find_all('time', class_='date text-white')
    print(date)
    print("hello")
    return 200 