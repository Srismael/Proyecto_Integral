from bson import ObjectId 
from flask import Flask, jsonify, request
from flask_cors import CORS 
from pymongo import MongoClient 

# Ejemplo de base de la Api
app = Flask(__name__)
CORS(app)

# Configura la conexión a la base de datos MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mi_base_de_datos']
collection = db['mi_coleccion']

@app.route('/data', methods=['GET'])
def get_data():
    data = list(collection.find())
    for item in data:
        item['_id'] = str(item['_id'])  # Convertir ObjectId a string para JSON
    return jsonify(data)

@app.route('/data', methods=['POST'])
def add_data():
    data = request.json
    inserted_id = collection.insert_one(data).inserted_id
    return jsonify(str(inserted_id)), 201

if __name__ == '__main__':
    app.run(debug=True)