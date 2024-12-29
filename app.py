from flask import Flask, request, jsonify, render_template

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['nm']
        return render_template('login.html', name=user)
    else:
        return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)