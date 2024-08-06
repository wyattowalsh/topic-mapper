# TopicMapper

## Description

TopicMapper is a web application that uses data science and large language models (LLMs) to produce robust and comprehensive topic maps for input topics. The application is built with a Next.js frontend and a Python backend.

## Features

- Input topics and generate topic maps
- Uses data science techniques to analyze and process input topics
- Utilizes LLMs to enhance the quality and comprehensiveness of the topic maps
- Interactive and user-friendly interface

## Technologies Used

### Frontend

- TypeScript
- Next.js
- TailwindCSS
- ShadCN-UI
- Aceternity UI

### Backend

- Python
- Loguru
- Rich
- Asyncio
- Pytest
- Yapf
- FastAPI
- Python-dotenv
- PyYAML

## Setup and Installation

### Prerequisites

- Node.js
- Python 3.8 or higher

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
4. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the backend server:
   ```bash
   uvicorn app:app --reload
   ```

## Contributing

We welcome contributions to TopicMapper! If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes
4. Submit a pull request with a detailed description of your changes

Please make sure to follow the code style and include tests for your changes.

## License

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.
