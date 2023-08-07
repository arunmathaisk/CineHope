import mysql.connector

# Replace with your database connection details
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "apple",
    "database": "cinehope_db"
}

# Values to insert
start_value = 5
end_value = 10

# Connect to the database
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# Generate and execute INSERT statements
for i in range(start_value, end_value + 1):
    seat_name = f'L{i}'
    insert_query = f"INSERT INTO seats (name,price) VALUES ('{seat_name}','400')"
    cursor.execute(insert_query)

# Commit changes and close connections
conn.commit()
cursor.close()
conn.close()