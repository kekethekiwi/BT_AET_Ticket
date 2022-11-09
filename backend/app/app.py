import re
from typing import List, Dict
from collections import OrderedDict
from flask import Flask
import mysql.connector
import json
from flask_cors import CORS
from flask import request
# from datetime import datetime

app = Flask(__name__)
CORS((app))

def open_connection():
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'aet_tickets'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    return connection, cursor

def close_connection(cursor, connection):
    cursor.close()
    connection.close()

# Function to get ALL values in a table from our database
# Pass in either "locations" or "attractions" as the value
# for our table argument


def get_all(table):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'aet_tickets'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute(f'SELECT * FROM {table}') # SQL QUERY (google)
    result = OrderedDict() # use an ordered dict so the order stays the same as we add each row
    result["num_entries"] = 0  # add this first since to keep spot in OrderedDict
    for row in cursor: 
        result[row[0]] = row # add each row of the SQL Database result to our dictionary
    result["num_entries"] = len(result) - 1 
    cursor.close()
    connection.close()

    return result

# function to get data on a specific location or attraction
# using its location ID or attraction ID
# @table parameter tells us which table
# @id parameter corresponds to which feature we are getting

def get_from_id(table, id):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'aet_tickets'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    query = f"SELECT * FROM {table} WHERE id = '{id}'" # SQL QUERY
    cursor.execute(query)
    result = dict()
    for row in cursor:
        result[id] = row
    cursor.close()
    connection.close()
    return result 

def get_from_city(table, cid):
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'aet_tickets'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    query = f"SELECT * FROM {table} WHERE cid = '{cid}'" # SQL QUERY
    cursor.execute(query)

    result = dict()
    counter = 0
    for row in cursor: # so cursor might be a matrix (list within list)
        # check each col?
        result[counter] = row
        counter+=1
    
        # result["counter"] = counter
        
    cursor.close()
    connection.close()
    return result 

def get_attractions_filters():
    filter_list = [
        "price_low",
        "price_high",
        "age_low",
        "age_high",
        "activity_type",
        "time_spent",
        "date",
        "time_of_day"
    ]
    filters = {}
    for f in filter_list:
        filter = request.args.get(f, "None")
        if filter != "None":
            filters[f] = filter
    return filters


def run_query(table, request_params):
    # query = build_query(table, request_params)
    query = build_query(table, request_params)
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'aet_tickets'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    cursor.execute(query)
    result = dict()
    counter = 0
    for row in cursor:
        result[counter] = row # id used to be in place of counter
        counter += 1

    cursor.close()
    connection.close()
    return result 


def build_query(table, request_params) -> str: 
    # get from front end
    requests = { 
        "id" : 1,
        "cid" : 0, 
        "age_low" : 10,
        "activity_type" : "Indoor"
    }
    # take this line out
    request_params = requests 
    # "SELECT * FROM {table} WHERE cid = '{cid}' AND id = '{id}' AND activity_type = 'Outdoor'"
    filters = {
        "price_low",
        "price_high",
        "age_low",
        "age_high",
        "activity_type",
        "time_spent",
        "date",
        "time_of_day"
    }
    
    low_limit_filters = {
        "price_low",
        "age_low"
    }

    high_limit_filters = {
        "price_high",
        "age_high"
    }

    query = f"SELECT * FROM {table}"
    count = 0
    # "SELECT * FROM {table} WHERE cid = '{cid}' AND id = '{id}' AND activity_type = 'Outdoor'"

    for key in request_params : 
        if(count == 0): 
            query += " WHERE "
        else:
            query += " AND " 

        operator = "="
        quotes = "'"
        if key in low_limit_filters:
            query += ">="
            quotes = ""
        elif key in high_limit_filters:
            query += "<=" 
            quotes = ""
         
        query += (f"{key} + {operator} + {quotes} + {request_params[key]} + {quotes}") #id = '1'cid = '0'activity_type = 'Outdoor'
        
        count += 1
    return query

@app.route('/')
def get_all_tables() -> str:
    request_params = requests.args.get()
    return json.dumps({'locations': run_query('attractions', {})})

@app.route('/locations')
def get_locations() -> str:
    return json.dumps({'locations': get_all('locations')})


@app.route('/location/<id>')
def get_location(id) -> str:
    return json.dumps(get_from_id('locations', id))

@app.route('/attractions')
def get_attractions() -> str:
    return json.dumps({'attractions': get_all('attractions')})

@app.route('/attractions/bycity/<cid>')
# get attractions from one city id
def get_attractions_from_city(cid) -> str:
    return json.dumps(get_from_city('attractions', cid))

@app.route('/attractions/<id>')
def get_attraction(id) -> str:
    return json.dumps(get_from_id('attractions', id))


if __name__ == '__main__':
    app.run(host='0.0.0.0')


#cursor: 