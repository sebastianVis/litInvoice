import { css } from 'lit';
export const styles = css`body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 20px;
  }
  
  /* Estilo para el formulario */
  #myFormProduct {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  #myFormProduct input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
  
  #myFormProduct button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  #myFormProduct button:hover {
    background-color: #45a049;
  }
  
  /* Estilo para la tabla */
  #table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  #table th, #table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }
  
  #table th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  #table td {
    background-color: #fff;
  }
  
  .deleteButton {
    background-color: #f44336;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .deleteButton:hover {
    background-color: #e53935;
  }
  
  /* Estilo para el resumen (Subtotal, IVA, Total) */
  .summary {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
  }
  
  .summary p {
    font-size: 16px;
    margin: 10px 0;
  }
  
  .summary span {
    font-weight: bold;
  }
  
  #subtotal, #iva, #total {
    color: #4CAF50;
  }
  
  #iva {
    color: #FF9800;
  }
  
  #total {
    color: #f44336;
    font-size: 18px;
  }`;