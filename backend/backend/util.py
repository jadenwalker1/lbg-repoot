

import psycopg2

def test_conn():
    cnx = psycopg2.connect(user="jsfcfyymzi", password="P@ssword1", host="homeiswheretheheartis-server.postgres.database.azure.com", port=5432, database="homeiswheretheheartis-database")

if __name__ == "__main__":
    test_conn()