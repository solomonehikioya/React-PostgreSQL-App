from fastapi import FastAPI
import psycopg2
import os
from fastapi.middleware.cors import CORSMiddleware
import time
import psycopg2
import os

app = FastAPI()

# Allow React to talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection details
DB_NAME = os.getenv("POSTGRES_DB", "mydb")
DB_USER = os.getenv("POSTGRES_USER", "user")
DB_PASS = os.getenv("POSTGRES_PASSWORD", "pass")
DB_HOST = "db" # This matches the service name in docker-compose


def get_db_connection():
    retries = 10  # Increased to 10 for safety
    while retries > 0:
        try:
            conn = psycopg2.connect(
                dbname=os.getenv("POSTGRES_DB", "mydb"),
                user=os.getenv("POSTGRES_USER", "user"),
                password=os.getenv("POSTGRES_PASSWORD", "pass"),
                host="db" # Must match service name in docker-compose
            )
            return conn
        except (psycopg2.OperationalError, psycopg2.InterfaceError) as e:
            retries -= 1
            print(f"Waiting for database... {retries} retries left. Error: {e}")
            time.sleep(3)
    raise Exception("Could not connect to the database")

@app.get("/")
def read_root():
    return {"message": "FastAPI is running!"}

@app.get("/tasks")
def get_tasks():
    conn = get_db_connection()
    cur = conn.cursor()
    # 1. Update the SQL query to include 'progress'
    cur.execute("SELECT id, title, progress FROM tasks;") 
    tasks = cur.fetchall()
    cur.close()
    conn.close()
    # 2. Add 'progress' to the dictionary return
    return [{"id": t[0], "title": t[1], "progress": t[2]} for t in tasks]