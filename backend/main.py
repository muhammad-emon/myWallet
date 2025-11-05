from flask import Flask, render_template, request, jsonify
from datetime import datetime
import os

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key')

# =========================================
# 🧩 Dummy In-Memory Database
# =========================================
USERS = []

# =========================================
# 🧾 Pricing Plans
# =========================================
PRICING_PLANS = [
    {
        "name": "Starter",
        "price": "Free",
        "description": "Perfect for getting started",
        "features": [
            "Track income & expenses",
            "Basic budget creation",
            "Monthly reports",
            "Up to 3 budgets"
        ],
        "cta": "Get Started",
        "highlighted": False
    },
    {
        "name": "Pro",
        "price": "$9.99",
        "period": "/month",
        "description": "For serious savers",
        "features": [
            "Everything in Starter",
            "Unlimited budgets",
            "Advanced analytics",
            "Goal tracking",
            "Investment tracking",
            "Priority support"
        ],
        "cta": "Start Free Trial",
        "highlighted": True
    },
    {
        "name": "Premium",
        "price": "$19.99",
        "period": "/month",
        "description": "For wealth builders",
        "features": [
            "Everything in Pro",
            "Multi-account sync",
            "Tax optimization",
            "Financial advisor chat",
            "Custom reports",
            "API access"
        ],
        "cta": "Start Free Trial",
        "highlighted": False
    }
]

# =========================================
# 💬 FAQ Section
# =========================================
FAQ_ITEMS = [
    {
        "question": "How secure is my financial data?",
        "answer": "We use bank-level encryption (256-bit SSL) and comply with PCI DSS standards."
    },
    {
        "question": "Can I import my data from other apps?",
        "answer": "Yes! We support importing from Mint, YNAB, and other finance tools easily."
    },
    {
        "question": "Is there a mobile app?",
        "answer": "Yes! MyWallet is available on iOS and Android with full feature parity."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept all major credit cards, PayPal, and Apple Pay."
    },
    {
        "question": "Do you offer customer support?",
        "answer": "Yes! 24/7 email support for all users, plus live chat for Pro & Premium."
    }
]

# =========================================
# 📋 Routes
# =========================================

@app.route('/')
def index():
    """Landing page"""
    return render_template('index.html', pricing_plans=PRICING_PLANS, faq_items=FAQ_ITEMS)


@app.route('/register')
def register_page():
    """Signup page"""
    return render_template('get_started.html')

@app.route('/register')
def register_page():
    """Signup page"""
    return render_template('get_started.html')

@app.route('/login')
def login_page():
    """Login page"""
    return render_template('sign_in.html')



# =========================================
# 📨 Newsletter Subscription API
# =========================================
@app.route('/api/newsletter', methods=['POST'])
def subscribe_newsletter():
    data = request.get_json()
    email = data.get('email', '').strip()

    if not email:
        return jsonify({'success': False, 'message': 'Email is required'}), 400
    if '@' not in email:
        return jsonify({'success': False, 'message': 'Invalid email address'}), 400

    print(f"[NEWSLETTER] {email} subscribed at {datetime.now()}")
    return jsonify({'success': True, 'message': 'Successfully subscribed!'})


# =========================================
# 📬 Contact Form API
# =========================================
@app.route('/api/contact', methods=['POST'])
def contact_form():
    data = request.get_json()
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    message = data.get('message', '').strip()

    if not all([name, email, message]):
        return jsonify({'success': False, 'message': 'All fields are required'}), 400

    print(f"[CONTACT] {name} ({email}) - {message}")
    return jsonify({'success': True, 'message': 'Message received! We will contact you soon.'})


# =========================================
# 🧍 User Registration API
# =========================================
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    password = data.get('password', '').strip()

    if not all([name, email, password]):
        return jsonify({'success': False, 'message': 'All fields are required'}), 400

    # Check if user already exists
    for user in USERS:
        if user['email'] == email:
            return jsonify({'success': False, 'message': 'Email already registered'}), 409

    # Save user (temporary in-memory storage)
    USERS.append({
        'name': name,
        'email': email,
        'password_hash': f'HASHED_{password}'  # placeholder for hashed password
    })

    print(f"[REGISTER] {name} ({email}) registered at {datetime.now()}")
    return jsonify({'success': True, 'message': 'Registration successful!'})


# =========================================
# 🏁 Run Flask App
# =========================================
if __name__ == '__main__':
    app.run(debug=True, port
