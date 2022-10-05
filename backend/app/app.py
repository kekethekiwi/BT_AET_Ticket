from typing import List, Dict
from flask import Flask
import mysql.connector
import json

app = Flask(__name__)

def open_connection():
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'knights'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    return connection, cursor

def close_connection(cursor, connection):
    cursor.close()
    connection.close()


def locations() -> List[Dict]:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'knights'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM locations') # SQL QUERY (google)
    results = [{city_name: state} for (city_name, state, id) in cursor]
    cursor.close()
    connection.close()

    return results

def get_state(id) -> str:
    config = {
        'user': 'root',
        'password': 'root',
        'host': 'db',
        'port': '3306',
        'database': 'knights'
    }
    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    query = "SELECT * FROM locations WHERE id = '{id}'" # SQL QUERY
    result = dict()
    for row in cursor:
        result[id] = row

    cursor.close()
    connection.close()

    return result
   
    cursor.execute(query)

    results = [] # create new list
    for location in cursor: # for loop: through the cursor (list of results)
        results.append(location[id])


    cursor.close()
    connection.close()

    if(len(results) > 0):
        return results[0]

    return 'Oops'
    
        


@app.route('/')
def index() -> str:
    return json.dumps({'places': locations()})


@app.route('/state/<id>')
def test(id) -> str:
    return get_state(id)



if __name__ == '__main__':
    app.run(host='0.0.0.0')


#cursor: 