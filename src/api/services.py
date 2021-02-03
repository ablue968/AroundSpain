import requests


def do_a_quest():
    URL = "https://www.geeksforgeeks.org/data-structures/"
    r = requests.get(URL) 
    print(r.content) 