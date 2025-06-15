const API_URL = './api';

export async function getPrintingServices() {
  const res = await fetch(`${API_URL}/printingServices`);
  return res.json();
}