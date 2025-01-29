import { html, css, LitElement } from 'lit';

class ComponentAddProduct extends LitElement {
  static styles = css`
    #formProduct {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      font-size: 14px;
      color: #333;
    }

    .form-group input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 14px;
    }

    .btn {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    .btn:hover {
      background-color: #45a049;
    }
  `;

  render() {
    return html`
      <form id="formProduct" @submit="${this.handleSubmit}">
        <div class="form-group">
          <label for="codigoProd">Código del Producto</label>
          <input type="number" class="form-control" name="codigoProd" id="codigoProd" required />
        </div>
        <div class="form-group">
          <label for="nombreProd">Nombre del Producto</label>
          <input type="text" class="form-control" name="nombreProd" id="nombreProd" required />
        </div>
        <div class="form-group">
          <label for="valor">Valor Unitario</label>
          <input type="number" class="form-control" name="valor" id="valor" required />
        </div>
        <div class="form-group">
          <label for="cantidad">Cantidad</label>
          <input type="number" class="form-control" name="cantidad" id="cantidad" required />
        </div>
        <button type="submit" class="btn">Añadir Producto</button>
      </form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const data = new FormData(event.target);
    const product = {
      codigoProd: data.get("codigoProd"),
      nombreProd: data.get("nombreProd"),
      valor: parseFloat(data.get("valor")),
      cantidad: parseInt(data.get("cantidad")),
      subTotal: parseFloat(data.get("valor")) * parseInt(data.get("cantidad")),
    };

    // Emitir evento con los datos del producto
    this.dispatchEvent(new CustomEvent('product-added', {
      detail: { product },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('product-component', ComponentAddProduct);
