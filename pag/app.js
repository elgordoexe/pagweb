// Datos de productos
const galleryData = [
    { title: "Café Espresso", image: "espresso.jpg", description: "Un espresso intenso y aromático, ideal para los amantes del café puro." },
    { title: "Capuchino", image: "capuchino.jpg", description: "Espuma cremosa y un sabor suave, la combinación perfecta." },
    { title: "Tarta de Manzana", image: "tarta.jpg", description: "Tarta de manzana casera con un toque de canela." },
    { title: "Café Latte", image: "latte.jpg", description: "Café suave con leche espumosa, un clásico de la casa." },
    { title: "Macaron de Frambuesa", image: "macaron.jpg", description: "Un dulce delicado con un relleno de frambuesa, simplemente irresistible." },
    { title: "Café Mocha", image: "mocha.jpg", description: "Café con chocolate y un toque de crema batida, para los más golosos." },
    { title: "Café Americano", image: "americano.jpg", description: "El café americano, suave y perfecto para acompañar cualquier momento." },
    { title: "Café Frappé", image: "frappe.jpg", description: "Café helado con hielo picado, ideal para los días calurosos." },
    { title: "Tarta de Limón", image: "tarta-limon.jpg", description: "Una tarta refrescante de limón, con una base crujiente y crema suave." },
    { title: "Croissant de Chocolate", image: "croissant.jpg", description: "Delicioso croissant relleno de chocolate, para disfrutar en cualquier momento." },
    { title: "Café con Leche", image: "cafe-leche.jpg", description: "Un clásico café con leche, suave y cremoso." },
    { title: "Brownie de Chocolate", image: "brownie.jpg", description: "Un brownie de chocolate oscuro, con un toque de nueces." }
  ];
  
  // Renderizar galería
  function renderGallery() {
    const gallery = document.getElementById("gallery");
  
    galleryData.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-card", "shadow-lg", "rounded-lg", "fade-in");
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-dark-brown">${product.title}</h3>
        </div>
      `;
      productDiv.addEventListener("click", () => showProductModal(product));
      gallery.appendChild(productDiv);
    });
  }
  
  // Mostrar modal de producto
  function showProductModal(product) {
    const modalTitle = document.getElementById("productModalLabel");
    const modalImage = document.getElementById("modal-product-image");
    const modalDescription = document.getElementById("product-description-text");
    const addToCartButton = document.getElementById("add-to-cart");
  
    modalTitle.textContent = product.title;
    modalImage.src = product.image;
    modalDescription.textContent = product.description;
  
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
  
    // Añadir al carrito
    addToCartButton.addEventListener("click", () => {
      alert(`${product.title} ha sido añadido al carrito.`);
    });
  }
  
  renderGallery();
  
  