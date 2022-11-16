import app
import json

def parse_list(list_string) ->list():
    # function to take a string version of a list and extract values
    newlist = list_string.strip('][').split(', ')
    return newlist

def build_schedule(attractions, criteria):
    print("hi")