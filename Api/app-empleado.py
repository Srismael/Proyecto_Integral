from bson import ObjectId 
from flask import Flask, jsonify, request
from flask_cors import CORS 
from pymongo import MongoClient 

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['Clean_Squad']
collection = db['Employes']

#Get all Employees
@app.route('/employees', methods=['GET'])
def get_employees():
    employees = list(collection.find())
    for item in employees:
        item['_id'] = str(item['_id'])  
    return jsonify(employees)

#Get Employee by ID
@app.route('/employee/<id>', methods=['GET'])
def get_employee(id):
    employee = list(collection.find({"_id": ObjectId(id)}))
    employee['_id'] = str(employee['_id'])  
    return jsonify(employee)

#Insert Employee
@app.route('/employee/', methods=['POST'])
def post_employee():
    employeeData = request.json
    inserted_id = collection.insert_one(employeeData).inserted_id
    return jsonify(str(inserted_id)), 201

if __name__ == '__main__':
    app.run(debug=True)