from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import pandas as pd

app = FastAPI()

# Define the data shape expecting from Node.js
class Employee(BaseModel):
    department: str
    gender: str
    performance_score: int
    promoted: int

class EmployeeList(BaseModel):
    employees: List[Employee]

@app.post("/analyze_bias")
async def analyze_bias(data: EmployeeList):
    # Convert JSON to DataFrame
    df = pd.DataFrame([e.dict() for e in data.employees])
    
    # 1. Calculate Disparate Impact (Simulated logic)
    # Selection Rate: Promotions / Total
    promo_rates = df.groupby('gender')['promoted'].mean().to_dict()
    
    # 2. Simple Rule-based Bias Detection
    bias_alert = False
    details = "Promotion rates look balanced."
    
    # Example: If Male rate > Female rate by 20%
    if promo_rates.get('Male', 0) > (promo_rates.get('Female', 0) * 1.25):
        bias_alert = True
        details = "Warning: Female promotion rate is significantly lower than Male rate."

    return {
        "bias_detected": bias_alert,
        "promotion_rates": promo_rates,
        "ai_recommendation": details
    }

# Run with: uvicorn main:app --reload --port 8000