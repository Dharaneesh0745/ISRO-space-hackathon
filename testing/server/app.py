from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/get_json_data', methods=['GET'])
def get_json_data():
    data = {
        'sales': [
            {'category': 'Electronics', 'amount': 1500},
            {'category': 'Clothing', 'amount': 1200},
            {'category': 'Books', 'amount': 800},
            {'category': 'Toys', 'amount': 500},
            {'category': 'Home Decor', 'amount': 1000}
        ]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
