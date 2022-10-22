from typing import List, Dict
from collections import OrderedDict
from flask import Flask
import mysql.connector
import json
from flask_cors import CORS
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
    for row in cursor:
        result[id] = row
    cursor.close()
    connection.close()
    return result 

@app.route('/')
def get_all_tables() -> str:
    return json.dumps({'locations': get_all('locations')})

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
def get_attractionsfromcity(cid) -> str:
    return json.dumps(get_from_city('attractions', cid))

@app.route('/attractions/<id>')
def get_attraction(id) -> str:
    return json.dumps(get_from_id('attractions', id))


if __name__ == '__main__':
    app.run(host='0.0.0.0')


#cursor: 