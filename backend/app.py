from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
import asyncio
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from transformers import pipeline

app = FastAPI()

class TopicRequest(BaseModel):
    topics: List[str]

class TopicResponse(BaseModel):
    topic_maps: Dict[str, List[str]]

@app.post("/generate_topic_map", response_model=TopicResponse)
async def generate_topic_map(request: TopicRequest):
    if not request.topics:
        raise HTTPException(status_code=400, detail="No topics provided")

    # Data science and LLM logic to generate topic maps
    topic_maps = {}
    for topic in request.topics:
        # Example data science logic: TF-IDF and KMeans clustering
        documents = [f"Document about {topic} {i}" for i in range(10)]
        vectorizer = TfidfVectorizer()
        X = vectorizer.fit_transform(documents)
        kmeans = KMeans(n_clusters=3)
        kmeans.fit(X)
        clusters = kmeans.predict(X)
        cluster_map = {i: [] for i in range(3)}
        for doc, cluster in zip(documents, clusters):
            cluster_map[cluster].append(doc)
        
        # Example LLM logic: Summarization
        summarizer = pipeline("summarization")
        summaries = [summarizer(doc, max_length=50, min_length=25, do_sample=False)[0]['summary_text'] for doc in documents]
        
        topic_maps[topic] = summaries

    return TopicResponse(topic_maps=topic_maps)
