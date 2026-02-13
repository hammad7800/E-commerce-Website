if (!localStorage.getItem('visited')) {
    alert('Welcome to NOVA ATTIRE! Enjoy your shopping experience.');
    localStorage.setItem('visited', 'true');
}

window.addEventListener('scroll', function() {
  const floatingCart = document.getElementById('floatingCart');
  if (window.scrollY > 200) {
    floatingCart.classList.add('show');
  } else {
    floatingCart.classList.remove('show');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.add('slide-in');
    card.classList.add(`delay-${index + 1}`);
  });

  const otherElements = document.querySelectorAll('.heading, .para, .head, .head1');
  otherElements.forEach((el, index) => {
    el.classList.add('fade-in');
    if (index < 3) {
      el.classList.add(`delay-${index + 1}`);
    }
  });
});

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.name + ' added to cart!');
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
