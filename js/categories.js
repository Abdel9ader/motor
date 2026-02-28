// Categories page functionality
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    updateFavoriteCount();
    setupMobileMenu();
    loadCategories();
});

// Load categories
function loadCategories() {
    const categories = [
        {
            id: 1,
            name: "زيوت المحركات",
            description: "زيوت محركات صناعية وطبيعية بجميع درجات اللزوجة",
            image: "../assets/images/car-ford-2-removebg-preview.png",
            count: 45,
            link: "products.html?category=oils"
        },
        {
            id: 2,
            name: "البطاريات والكهرباء",
            description: "بطاريات سيارات وأنظمة كهربائية وشواحن",
            image: "../assets/images/car-ford-3-removebg-preview.png",
            count: 32,
            link: "products.html?category=batteries"
        },
        {
            id: 3,
            name: "الإطارات والفرامل",
            description: "إطارات سيارات وقطع فرامل وأقراص",
            image: "../assets/images/car-kia-3-removebg-preview.png",
            count: 28,
            link: "products.html?category=tires"
        },
        {
            id: 4,
            name: "قطع المحرك",
            description: "أجزاء المحرك الرئيسية والملحقات",
            image: "../assets/images/car-mg-4-removebg-preview.png",
            count: 67,
            link: "products.html?category=engine"
        },
        {
            id: 5,
            name: "الفلاتر والزيوت",
            description: "فلاتر هواء وزيت ووقود وسوائل تبريد",
            image: "../assets/images/car-kia-3-removebg-preview.png",
            count: 53,
            link: "products.html?category=filters"
        },
        {
            id: 7,
            name: "نظام التبريد",
            description: "راديترات ومراوح ومضخات ماء",
            image: "../assets/images/car-ford-2-removebg-preview.png",
            count: 19,
            link: "products.html?category=cooling"
        }
    ];

    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    container.innerHTML = categories.map(category => `
        <div class="category-card-large">
            <div class="category-image">
                <img src="${category.image}" alt="${category.name}">
            </div>
            <div class="category-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <div class="category-stats">
                    <span class="product-count">${category.count} منتج</span>
                    <a href="${category.link}" class="btn btn-primary btn-category">تصفح المنتجات</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = cartCount;
    });
}

// Update favorite count
function updateFavoriteCount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    document.querySelectorAll(".favorite-count").forEach(element => {
        element.textContent = favorites.length;
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: var(--primary-color);
        color: var(--light-color);
        padding: 15px 25px;
        border-radius: 4px;
        z-index: 10000;
        box-shadow: var(--shadow);
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
}
