import axios from "axios";

const BASE = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const apiGet = async (path) => {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export const apiPost = async (path, body) => {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};


const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const getProducts = () => API.get("/products");