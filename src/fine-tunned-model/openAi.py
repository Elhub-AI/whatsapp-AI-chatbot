from dotenv import load_dotenv
import os
import openai

# Load environment variables from .env file
load_dotenv()

# Access the environment variable
api_key = os.getenv('OPENAI_API_KEY')

# Set up OpenAI API credentials
openai.api_key = api_key

# Collect and prepare training data
training_data = [
    {
        "prompt": "¿Qué es El Hub?",
        "completion": "El Hub es un espacio de coworking en Armenia, donde se promueve la creación de nuevas oportunidades a través de la colaboración en equipo."
    },
    # Add more training data prompts and completions here...
]

# Format and upload the training data
formatted_data = []
for data in training_data:
    formatted_data.append(data['prompt'] + '\n' + data['completion'])

with open('training_data.txt', 'w') as file:
    file.write('\n'.join(formatted_data))

# Initialize the fine-tuning process
openai.FineTune.create(
    training_file='training_data.txt',
    model='gpt-3.5-turbo',
    base_model='gpt-3.5-turbo',
    epochs=3,
    batch_size=4
)
