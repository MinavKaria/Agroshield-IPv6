import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from PIL import Image
import json
import requests
import io
import os
from flask import Flask, request, jsonify
import google.generativeai as genai
genai.configure(api_key="AIzaSyBZEzIEI6dlzUVCAQN8jaVxRZxrGXb2YPg")

app = Flask(__name__)

# Load the model from TensorFlow Hub
model = hub.load("https://www.kaggle.com/models/rishitdagli/plant-disease/TensorFlow2/plant-disease/1")
print("Model loaded successfully.")


def checkyesno():
    sample_file = genai.upload_file(path="non-leaf.jpg",
                            display_name="grape_disea.png",)

    print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")
    model = genai.GenerativeModel(model_name="gemini-1.5-pro")

    # Prompt the model with text and the previously uploaded image.
    response = model.generate_content([sample_file, "is this a leaf or not ? answer it in only yes or no only"])

    print(response.text)
    return response.text

# Function to preprocess the image
def preprocess_image(image_file):
    image = Image.open(image_file).convert('RGB').resize((224, 224))
    image_array = np.array(image) / 255.0  # Normalize to [0, 1]
    return tf.convert_to_tensor(np.expand_dims(image_array, axis=0), dtype=tf.float32)

# Download class indices JSON file
class_indices_url = "https://github.com/Rishit-dagli/Greenathon-Plant-AI/releases/download/v0.1.0/class_indices.json"
response = requests.get(class_indices_url)
class_indices = response.json()

# Convert the class indices to a mapping of {index: label}
index_to_label = {int(key): value for key, value in class_indices.items()}

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Preprocess the image
        processed_image = preprocess_image(file)

        # Make predictions using the model
        predictions = model(processed_image)
        predictions = predictions[0]

        # Get the predicted class index
        pred_ind = tf.argmax(predictions).numpy()

        # Get the corresponding class label
        predicted_label = index_to_label[pred_ind]

        return jsonify({'predicted_label': predicted_label}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
