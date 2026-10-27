const products = [
  {id:1,name:"Sony WH-CH720N Wireless Headphones",short:"WH-CH720N Headphones",category:"Tech",price:8490,oldPrice:9990,rating:4.7,reviews:218,tag:"BESTSELLER",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkWziTV1lM0b4Mcj4xWGjY4-59PDnoMHVKFnHd4u-Z2g&s=10",alt:"Black over-ear wireless headphones"},
  {id:2,name:"Apple Watch Series 9",short:"Apple Watch Series 9",category:"Tech",price:32900,oldPrice:35900,rating:4.8,reviews:146,tag:"POPULAR",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgup_VPO-ODqBiLvMphYd_YFp7q1fLMWu-VCvE6OOo4Z8jIMx5P59nASA&s=10",alt:"Black smartwatch with sport band"},
  {id:3,name:"Nike Air Force 1 '07 Sneakers",short:"Air Force 1 '07 Sneakers",category:"Style",price:7495,oldPrice:0,rating:4.6,reviews:305,tag:"ICONIC",image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbwk2e28K66h2XUxcBgXWg0_BQzXsiH6Kimj6LRkMb9TheGUJRl9xVMipb2oxofH_dH5-8-sHvxTJp0zg6iCJg8IxjaydABTnoNZkKDXorszJedngzVwIYpippb6N6a9W8evE05BE&usqp=CAc",alt:"Red and white athletic sneaker"},
  {id:4,name:"Herschel Classic Backpack",short:"Classic Backpack",category:"Carry",price:3999,oldPrice:4499,rating:4.5,reviews:92,tag:"EVERYDAY",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQqrFm7vEIBW6LgqdSsk7RkoTyQi6BtOPKdzOW4Moe65gBRse8rnM5Ld0&s=10",alt:"Dark everyday backpack"},
  {id:5,name:"IKEA SINNLIG Scented Candle",short:"SINNLIG Scented Candle",category:"Home",price:499,oldPrice:0,rating:4.4,reviews:84,tag:"UNDER ₹500",image:"https://digitalshoppy.in/cdn/shop/products/51Ab6QGoh0L._SL1100_1100x1100.jpg?v=1740663211",alt:"Lit scented candle in a glass jar"},
  {id:6,name:"The Ordinary Daily Skincare Set",short:"Daily Skincare Set",category:"Style",price:1899,oldPrice:2199,rating:4.5,reviews:117,tag:"SELF CARE",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vz49eKJbseT1wCPwWpYf_0iKtEzIFOzDXWfKAhdCuMwNHlLSaqsnD1Pc&s=10",alt:"Minimal skincare bottles and jars"},
  {id:7,name:"Bellroy Laptop Sleeve 14-inch",short:"Laptop Sleeve 14-inch",category:"Carry",price:3299,oldPrice:0,rating:4.6,reviews:61,tag:"WORKDAY",image:"https://modernquests.com/cdn/shop/files/LiteLaptopSleeve14inch-Black-12.jpg?v=1774435187&width=800",alt:"Minimal neutral laptop sleeve and stationery"},
  {id:8,name:"Milton Thermosteel Water Bottle 750 ml",short:"Thermosteel Bottle 750 ml",category:"Home",price:899,oldPrice:1099,rating:4.3,reviews:173,tag:"DAILY USE",image:"https://www.milton.in/cdn/shop/files/Gemini_Generated_Image_r89isor89isor89i.png?v=1783059349&width=1620",alt:"Reusable stainless steel water bottle"},
  {id:9,name:"JBL Flip 6 Portable Bluetooth Speaker",short:"JBL Flip 6 Speaker",category:"Tech",price:9999,oldPrice:11999,rating:4.7,reviews:204,tag:"SOUND PICK",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",alt:"Portable Bluetooth speaker"},
  {id:10,name:"Logitech Pebble Wireless Mouse 2 M350s",short:"Pebble Wireless Mouse",category:"Tech",price:2495,oldPrice:2995,rating:4.5,reviews:188,tag:"DESK ESSENTIAL",image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=85",alt:"Wireless computer mouse"},
  {id:11,name:"Minimal Adjustable Desk Lamp",short:"Adjustable Desk Lamp",category:"Home",price:1799,oldPrice:2199,rating:4.4,reviews:76,tag:"WORKSPACE",image:"https://rukmini1.flixcart.com/image/1500/1500/xif0q/table-lamp/1/y/a/nordic-style-metal-desk-lamp-modern-minimalist-lamp-with-solid-original-imahm6hh4cykapxr.jpeg?q=70",alt:"Minimal desk lamp"},
  {id:12,name:"Stoneware Ceramic Coffee Mug 350 ml",short:"Ceramic Coffee Mug",category:"Home",price:599,oldPrice:0,rating:4.6,reviews:132,tag:"SLOW MORNINGS",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7xhzlQ5_HTAftY64YNK4XSII4s489ILL-LqaHsrNhNZs77CmDyNHgjE&s=10",alt:"Ceramic coffee mug"},
  {id:13,name:"Classic UV400 Black Sunglasses",short:"Classic Black Sunglasses",category:"Style",price:1299,oldPrice:1599,rating:4.3,reviews:94,tag:"SUN READY",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",alt:"Black sunglasses"},
  {id:14,name:"Casio Vintage Digital Watch A168",short:"Casio Vintage Digital Watch",category:"Style",price:3495,oldPrice:0,rating:4.7,reviews:245,tag:"RETRO CLASSIC",image:"https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/A/A1/A16/A168WG-9W/assets/A168WG-9.png",alt:"Classic wristwatch"},
  {id:15,name:"Textured Cotton Throw Blanket",short:"Cotton Throw Blanket",category:"Home",price:2299,oldPrice:2699,rating:4.5,reviews:57,tag:"COZY PICK",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH0q39hyyVUsX75RKtHImSugAUDl5OxfmRKfuLiThikmvuR_T2jh52kST&s=10",alt:"Soft neutral throw blanket on a sofa"},
  {id:16,name:"Heavyweight Canvas Everyday Tote",short:"Canvas Everyday Tote",category:"Carry",price:999,oldPrice:0,rating:4.4,reviews:88,tag:"GRAB & GO",image:"https://lucienbags.com/cdn/shop/files/IMG_7386.jpg?v=1773137879&width=1600",alt:"Canvas everyday tote bag"}
];

const $ = (selector) => document.querySelector(selector);
const money = (amount) => new Intl.NumberFormat("en-IN", {style:"currency",currency:"INR",maximumFractionDigits:0}).format(amount);
const state = {cart: {}, category:"All", maxPrice:40000, sort:"featured", coupon:false};
let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function getVisibleProducts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  let result = products.filter(product => {
    const matchesQuery = `${product.name} ${product.category} ${product.short}`.toLowerCase().includes(query);
    const matchesCategory = state.category === "All" || product.category === state.category;
    return matchesQuery && matchesCategory && product.price <= state.maxPrice;
  });
  if (state.sort === "price-low") result.sort((a,b) => a.price-b.price);
  if (state.sort === "price-high") result.sort((a,b) => b.price-a.price);
  if (state.sort === "rating") result.sort((a,b) => b.rating-a.rating);
  return result;
}

function renderProducts() {
  const visible = getVisibleProducts();
  $("#resultsCount").textContent = visible.length;
  $("#allCount").textContent = products.length;
  $("#emptyState").hidden = visible.length !== 0;
  $("#productGrid").innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x760/eeece5/20231f?text=Product+Image';">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-details"><div><h3 class="product-name">${product.name}</h3><p class="product-category">${product.category}</p><p class="product-price">${money(product.price)} ${product.oldPrice ? `<span style="font-size:10px;color:#999;text-decoration:line-through;font-weight:400">${money(product.oldPrice)}</span>` : ""}</p><div class="product-rating"><span>★</span>${product.rating.toFixed(1)} (${product.reviews} reviews)</div></div></div>
      <button class="add-button" data-add="${product.id}">Add to bag +</button>
    </article>`).join("");
}

function cartSubtotal() {
  return Object.entries(state.cart).reduce((sum,[id,qty]) => sum + products.find(p=>p.id===Number(id)).price*qty,0);
}
function cartQuantity() {
  return Object.values(state.cart).reduce((sum,qty)=>sum+qty,0);
}
function getDiscount(subtotal) {
  return state.coupon ? Math.round(subtotal*0.10) : 0;
}
function getShipping(subtotal) {
  if (subtotal === 0 || subtotal >= 1499) return 0;
  return 99;
}

function renderCart() {
  const entries = Object.entries(state.cart).filter(([,qty])=>qty>0);
  const subtotal = cartSubtotal();
  const discount = getDiscount(subtotal);
  const shipping = getShipping(subtotal);
  const total = Math.max(0,subtotal-discount+shipping);
  $("#cartCount").textContent = cartQuantity();
  $("#cartItems").innerHTML = entries.length ? entries.map(([id,qty]) => {
    const product = products.find(p=>p.id===Number(id));
    return `<article class="cart-item"><img src="${product.image}" alt="${product.alt}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/eeece5/20231f?text=Item';"><div><h4>${product.name}</h4><p>${product.category}</p><span class="line-price">${money(product.price)}</span><div class="quantity-control"><button data-qty="${id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${qty}</span><button data-qty="${id}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${id}" aria-label="Remove ${product.name}">×</button></article>`;
  }).join("") : `<div class="cart-empty">Your bag is waiting for something good.<br><a href="#shop">Explore the collection →</a></div>`;
  $("#subtotal").textContent = money(subtotal);
  $("#discount").textContent = `−${money(discount)}`;
  $("#shipping").textContent = shipping === 0 ? (subtotal === 0 ? money(0) : "FREE") : money(shipping);
  $("#total").textContent = money(total);
  $("#checkoutTotal").textContent = money(total);
  $("#checkoutButton").disabled = entries.length === 0;
  $("#checkoutButton").style.opacity = entries.length === 0 ? ".55" : "1";
}

function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  renderCart();
  showToast(`${products.find(p=>p.id===id).short} added to your bag.`);
}
function changeQuantity(id, change) {
  state.cart[id] = (state.cart[id] || 0) + change;
  if (state.cart[id] <= 0) delete state.cart[id];
  renderCart();
}
function resetFilters() {
  state.category = "All";
  state.maxPrice = 40000;
  state.sort = "featured";
  $("#searchInput").value = "";
  $('input[name="category"][value="All"]').checked = true;
  $("#priceRange").value = "40000";
  $("#priceValue").textContent = "40,000";
  $("#sortSelect").value = "featured";
  renderProducts();
}

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(Number(addButton.dataset.add));
  const quantityButton = event.target.closest("[data-qty]");
  if (quantityButton) changeQuantity(Number(quantityButton.dataset.qty), Number(quantityButton.dataset.change));
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    delete state.cart[removeButton.dataset.remove];
    renderCart();
    showToast("Item removed from your bag.");
  }
  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    state.category = categoryLink.dataset.categoryLink;
    const radio = document.querySelector(`input[name="category"][value="${state.category}"]`);
    if (radio) radio.checked = true;
    renderProducts();
  }
});

$("#searchInput").addEventListener("input", renderProducts);
document.querySelectorAll('input[name="category"]').forEach(radio => radio.addEventListener("change", event => {
  state.category = event.target.value;
  renderProducts();
}));
$("#priceRange").addEventListener("input", event => {
  state.maxPrice = Number(event.target.value);
  $("#priceValue").textContent = state.maxPrice.toLocaleString("en-IN");
  renderProducts();
});
$("#sortSelect").addEventListener("change", event => {
  state.sort = event.target.value;
  renderProducts();
});
$("#clearFilters").addEventListener("click", resetFilters);
$("#cartJump").addEventListener("click", () => $("#bag").scrollIntoView({behavior:"smooth"}));
$("#clearCart").addEventListener("click", () => {
  state.cart = {};
  state.coupon = false;
  $("#couponInput").value = "";
  $("#couponMessage").innerHTML = 'Try code <strong>WELCOME10</strong> for 10% off.';
  renderCart();
  showToast("Your bag has been cleared.");
});
$("#applyCoupon").addEventListener("click", () => {
  const code = $("#couponInput").value.trim().toUpperCase();
  if (code === "WELCOME10") {
    state.coupon = true;
    $("#couponMessage").textContent = "Welcome! 10% discount applied.";
    renderCart();
    showToast("Coupon applied: 10% off.");
  } else {
    state.coupon = false;
    $("#couponMessage").textContent = code ? "That code isn't valid. Try WELCOME10." : "Enter a coupon code first.";
    renderCart();
  }
});
$("#checkoutButton").addEventListener("click", () => {
  if (cartQuantity() === 0) return;
  $("#checkout").hidden = false;
  $("#successMessage").hidden = true;
  $("#checkout").scrollIntoView({behavior:"smooth",block:"start"});
});
$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!event.target.reportValidity()) return;
  const orderNumber = `DC${Math.floor(100000 + Math.random()*900000)}`;
  $("#orderNumber").textContent = orderNumber;
  $("#checkout").hidden = true;
  $("#successMessage").hidden = false;
  $("#successMessage").scrollIntoView({behavior:"smooth",block:"center"});
  state.cart = {};
  state.coupon = false;
  $("#couponInput").value = "";
  $("#couponMessage").innerHTML = 'Try code <strong>WELCOME10</strong> for 10% off.';
  renderCart();
  event.target.reset();
});
$("#continueShopping").addEventListener("click", () => {
  $("#successMessage").hidden = true;
  $("#shop").scrollIntoView({behavior:"smooth"});
});
$("#year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
