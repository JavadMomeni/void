from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import load_data, save_data

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.secret_key = 'mysecretkey'  # برای session

# load datas
db = load_data()

# ------------------ AUTH ------------------
admin_user = {
    "email": "admin@example.com",
    "password": "123456",
    "name": "مدیر سایت"
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if data["email"] == admin_user["email"] and data["password"] == admin_user["password"]:
        session["user"] = admin_user["email"]
        return jsonify({"message": "ورود موفق", "user": admin_user}), 200
    return jsonify({"message": "اطلاعات نادرست است"}), 401

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop("user", None)
    return jsonify({"message": "خروج موفق"}), 200

@app.route('/api/me')
def me():
    if "user" in session:
        return jsonify(admin_user)
    return jsonify({"message": "وارد نشده‌اید"}), 401

# ---------- PRODUCTS ----------
@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(db[products])

@app.route('/api/products', methods=['POST'])
def add_product():
    new = request.json
    new["id"] = max([p["id"] for p in db[products]], default=0) + 1
    db['products'].append(new)
    save_data(db)
    return jsonify(new), 201

@app.route('/api/products/<int:id>', methods=['PUT'])
def update_product(id):
    for p in db[products]:
        if p["id"] == id:
            p.update(request.json)
            save_data(db)
            return jsonify(p)
    return {"error": "Product not found"}, 404

@app.route('/api/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    db[products] = [p for p in db['products'] if p['id'] != id]
    save_data(db)
    return '', 204

# ---------- CUSTOMERS ----------
@app.route('/api/customers', methods=['GET'])
def get_customers():
    return jsonify(db['customers'])

@app.route('/api/customers', methods=['POST'])
def add_customer():
    new = request.json
    new["id"] = max([c["id"] for c in db['customers']], default=0) + 1
    db['customers'].append(new)
    save_data(db)
    return jsonify(new), 201

@app.route('/api/customers/<int:id>', methods=['PUT'])
def update_customer(id):
    for c in db['customers']:
        if c["id"] == id:
            c.update(request.json)
            save_data(db)
            return jsonify(c)
    return {"error": "Customer not found"}, 404

@app.route('/api/customers/<int:id>', methods=['DELETE'])
def delete_customer(id):
    db['customers'] = [c for c in db['customers'] if c["id"] != id]
    save_data(db)
    return '', 204

# ---------- ORDERS ----------
@app.route('/api/orders', methods=['GET'])
def get_orders():
    return jsonify(db['orders'])

@app.route('/api/orders', methods=['POST'])
def add_order():
    new = request.json
    new["id"] = max([o["id"] for o in db['orders']], default=0) + 1
    db['orders'].append(new)
    save_data(db)
    return jsonify(new), 201

@app.route('/api/orders/<int:id>', methods=['PUT'])
def update_order(id):
    for o in db['orders']:
        if o["id"] == id:
            o.update(request.json)
            save_data(db)
            return jsonify(o)
    return {"error": "Order not found"}, 404

@app.route('/api/orders/<int:id>', methods=['DELETE'])
def delete_order(id):    
    db['orders'] = [o for o in db['orders'] if o["id"] != id]
    save_data(db)
    return '', 204

# ---------- ROOT ----------
@app.route('/')
def home():
    return 'Store Management API (Flask) is running...'

if __name__ == '__main__':
    import os
    port = int(os.environ.get('port', 5000))
    app.run(debug=True, host='0,0,0,0', port=port)
