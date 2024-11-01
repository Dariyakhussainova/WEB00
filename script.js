function displayDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString('en-US');
    document.getElementById('dateTimeDisplay').innerHTML = dateString + ' ' + timeString;
}

setInterval(displayDateTime, 1000);

//------------------
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

function showCheckoutModal() {
    const totalAmount = calculateTotal();
    document.getElementById('totalAmount').innerText = totalAmount;
    document.getElementById('checkoutModal').style.display = 'block';
}

function hideCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function confirmOrder() {
    alert('Thank you for your order!');
    cart = [];
    saveCartToStorage();
    updateCartIcon();
    displayCartItems();
    hideCheckoutModal();
}

//------------------
function toggleAccordion(id) {
    const question = document.querySelector(`[onclick="toggleAccordion('${id}')"]`);
    const answer = document.getElementById(id);

    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
        answer.style.maxHeight = "0px";
        question.classList.remove('active');
    } else {
        answer.style.maxHeight = null;

        setTimeout(() => {
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.classList.add('active');
        }, 0);
    }
}

//------------------
function changeBackgroundColor() {
    const colors = ['#cc4233', '#e6e6e6', '#ffebcd', '#fafafa'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

//-------------------
function openPopup(serviceName) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('serviceName').innerText = serviceName;
    }

    function hidePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    function confirmBooking() {
        alert('Your booking has been confirmed for ' + document.getElementById('serviceName').innerText);
        hidePopup();
}

//-------------------
function submitForm(event) {
    event.preventDefault();

    if (!validateForm()) {
        return; 
    }

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('https://127.0.0.1:5500/contact.html', {
        method: 'POST',
        body: formData
    })
    .then(() => {
        const response = { success: true };

        if (response.success) {
            alert('Success!');
            form.reset();
        } else {
            handleFormErrors(response.errors);
        }
    })
    .catch(error => {
        console.error('Error', error);
        alert('An error occurred while sending the form. Please try again.');
    });
}

function handleFormErrors(errors) {
    if (errors.name) {
        document.getElementById('nameError').style.display = 'block';
    }
    if (errors.email) {
        document.getElementById('emailError').style.display = 'block';
    }
    if (errors.message) {
        document.getElementById('messageError').style.display = 'block';
    }
}

function validateForm() {
    let isValid = true;

    const userName = document.getElementById('name').value.trim();
    const userEmail = document.getElementById('email').value.trim();
    const userMessage = document.getElementById('message').value.trim();

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    if (userName === "") {
        nameError.style.display = 'block';
        isValid = false;
    } 

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (userMessage === "") {
        messageError.style.display = 'block';
        isValid = false;
    }

    return isValid; 
}

function showFormPopup() {
    document.getElementById('formPopup').style.display = 'block';
}

function hideFormPopup() {
    document.getElementById('formPopup').style.display = 'none'; 
}


//-------------------

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

//-------------------

function addRatingFunctionality(ratingId, ratingValueId) {
    const stars = document.querySelectorAll(`#${ratingId} .star`);
    const ratingValue = document.getElementById(ratingValueId);

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('selected');
                }
            });
            ratingValue.textContent = `Your rating: ${index + 1} out of 5`;
        });
    });
}

addRatingFunctionality('rating-timber', 'ratingValue-timber');
addRatingFunctionality('rating-cement', 'ratingValue-cement');
addRatingFunctionality('rating-powertools', 'ratingValue-powertools');
addRatingFunctionality('rating-foil', 'ratingValue-foil');
addRatingFunctionality('rating-woodpannels', 'ratingValue-woodpannels');
addRatingFunctionality('rating-steelrods', 'ratingValue-steelrods');
addRatingFunctionality('rating-bricks', 'ratingValue-bricks');
addRatingFunctionality('rating-paint', 'ratingValue-paint');


//-------------------
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);


    const brickWall = document.getElementById('brickWallContainer');

    function checkPosition() {
        const triggerPosition = brickWall.offsetTop - window.innerHeight + 100;

        if (window.scrollY > triggerPosition) {
            brickWall.classList.add('visible');
            window.removeEventListener('scroll', checkPosition); // Убираем 
        }
    }

    window.addEventListener('scroll', checkPosition);
});

//--------------
function toggleTheme() {
    document.body.classList.toggle('night-theme');

    const themeIcon = document.getElementById('themeIcon');
    if (document.body.classList.contains('night-theme')) {
        localStorage.setItem('theme', 'night');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'day');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'night') {
        document.body.classList.add('night-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

//-------------------
const resetFormBtn = document.getElementById('resetFormBtn');


document.addEventListener('DOMContentLoaded', function() {
    const resetFormBtn = document.getElementById('resetFormBtn');
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', function() {
            document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => input.value = '');

            document.getElementById('nameError').style.display = 'none';
            document.getElementById('emailError').style.display = 'none';
            document.getElementById('messageError').style.display = 'none';
        });
    } else {
        console.error('Кнопка сброса не найдена');
    }
});


//-------------------
const navItems = document.querySelectorAll('#navMenu .nav-link');

navItems.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextItem = navItems[index + 1] || navItems[0];
            nextItem.focus();
         }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevItem = navItems[index - 1] || navItems[navItems.length - 1];
             prevItem.focus();
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            item.click();
        }
    });
    });


//-------------------
const products = [
        { name: 'Timber', category: 'building-materials', price: 50, img: 'web_image/brusiya.jpg' },
        { name: 'Cement', category: 'building-materials', price: 25, img: 'web_image/cement.jpg' },
        { name: 'Power Tools', category: 'tools', price: 120, img: 'web_image/drel.jpg' },
        { name: 'Foil', category: 'building-materials', price: 25, img: 'web_image/foil.jpg' },
        { name: 'Wood Panels', category: 'building-materials', price: 60, img: 'web_image/wood.jpeg' },
        { name: 'Steel Rods', category: 'tools', price: 80, img: 'web_image/steel.jpeg' },
        { name: 'Bricks', category: 'building-materials', price: 45, img: 'web_image/kirpich.jpeg' },
        { name: 'Paint', category: 'building-materials', price: 40, img: 'web_image/paint.jpg' }
    ];

    document.addEventListener('DOMContentLoaded', function() {
        const savedFilter = localStorage.getItem('selectedFilter');
        if (savedFilter) {
            filterProducts(savedFilter);
        } else {
            displayProducts(products);
        }
    });

    function filterProducts(filter) {
        localStorage.setItem('selectedFilter', filter);

        let filteredProducts = [];
        switch (filter) {
            case 'building-materials':
            case 'tools':
                filteredProducts = products.filter(product => product.category === filter);
                break;
            case 'low':
                filteredProducts = products.filter(product => product.price < 50);
                break;
            case 'medium':
                filteredProducts = products.filter(product => product.price >= 50 && product.price <= 100);
                break;
            case 'high':
                filteredProducts = products.filter(product => product.price > 100);
                break;
            default:
                filteredProducts = products;
                break;
        }

        displayProducts(filteredProducts);
    }

    function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    if (!productList) {
        console.error('Элемент productList не найден в DOM');
        return;
    }

    productList.innerHTML = '';

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'col-lg-3 col-md-6';
            productItem.innerHTML = `
                <div class="card h-100">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price}</p>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            `;

            productItem.querySelector('.btn').addEventListener('click', () => {
                showPopup(product.name, product.price);
            });

            productList.appendChild(productItem);
        });
    } 
}

    function filterByCategory(category) {
        filterProducts(category);
    }

    function filterByPriceRange(range) {
        filterProducts(range);
    }

//-------------------

let cart = []; 

function showPopup(productName, productPrice) {
    const confirmAdd = confirm(`Are you sure you want to add ${productName} to your cart?`);
    if (confirmAdd) {
        addToCart({ name: productName, price: productPrice });
    }
}

function addToCart(product) {
    cart.push(product);
    saveCartToStorage();
    updateCartIcon();
    displayCartItems();
    alert(`${product.name} has been added to your cart.`);
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartIcon();
        displayCartItems();
    }
}

window.onload = function() {
    loadCartFromStorage();
    updateCartIcon();
};

function updateCartIcon() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = cart.length;
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h5>${item.name}</h5>
                <p>Price: $${item.price}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
}

function toggleCartPopup() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function hideCartPopup() {
    document.getElementById('cartPopup').style.display = 'none';
}

//------------------

document.addEventListener('DOMContentLoaded', function() {
    updateAuthStatus();
});

function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function hideLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function showSignUpPopup() {
    document.getElementById('signUpPopup').style.display = 'block';
}

function hideSignUpPopup() {
    document.getElementById('signUpPopup').style.display = 'none';
}

function validatePasswordStrength(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        alert(`Password should be at least ${minLength} characters.`);
        return false;
    }
    if (!hasUpperCase) {
        alert("Password should include at least one uppercase letter.");
        return false;
    }
    if (!hasLowerCase) {
        alert("Password should include at least one lowercase letter.");
        return false;
    }
    if (!hasNumbers) {
        alert("Password should include at least one number.");
        return false;
    }
    if (!hasSpecialChar) {
        alert("Password should include at least one special character.");
        return false;
    }
    return true;
}

function handleSignUp(event) {
    event.preventDefault();
    
    const username = document.getElementById('signUpUsername').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();
    
    if (username && password) {
        if (!validatePasswordStrength(password)) {
            return;
        }
        
        localStorage.setItem('user_' + username, JSON.stringify({ username, password }));
        alert('Registration successful! Please log in.');
        hideSignUpPopup();
        showLoginPopup();
    } else {
        alert('Please fill in all fields.');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const userData = JSON.parse(localStorage.getItem('user_' + username));

    if (userData && userData.password === password) {
        localStorage.setItem('currentUser', username);
        updateAuthStatus();
        hideLoginPopup();
        alert(`Welcome back, ${username}!`);
    } else {
        alert('Invalid username or password.');
    }
}

function updateAuthStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const loginLink = document.querySelector('a[onclick="showLoginPopup()"]');
    const logoutLink = document.getElementById('logoutLink');

    if (currentUser) {
        loginLink.style.display = 'none';
        logoutLink.style.display = 'block';
        logoutLink.textContent = `Log Out (${currentUser})`;
    } else {
        loginLink.style.display = 'block';
        logoutLink.style.display = 'none';
    }
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    updateAuthStatus();
    alert('You have logged out.');
}


//-------------------
function playClickSound() {
    console.log('Попытка воспроизвести звук'); 
    const audio = new Audio('web_image/click.mp3');
    audio.play().catch(error => console.error('Ошибка воспроизведения звука:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            console.log('Кнопка нажата');
            playClickSound();
        });
    });
});







