import axios from "axios";

const BASE = process.env.REACT_APP_API_URL || 'https://bagg-backend-qxx4.vercel.app/api';

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


const API = axios.create({ baseURL: BASE });

export const getProducts = () => API.get("/products");