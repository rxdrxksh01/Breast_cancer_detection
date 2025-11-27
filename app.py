from flask import Flask, request, render_template
import numpy as np
import pickle

model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    features = request.form['feature']
    features_list = features.split(',')
    final_features = np.asarray(features_list, dtype=np.float32)
    pred = model.predict(final_features.reshape(1, -1))

    message = 'Cancer Detected' if pred[0] == 1 else 'No Cancer Detected'
    return render_template('index.html', message=message)

if __name__ == '__main__':

    app.run(debug=True)
