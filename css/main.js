const images = [
    {
        src: 'image/design-features.jpg',
    },
    {
        src: 'image/s.jfif',
    },
    {
        src: 'image/d.jfif',
    },
    {
        src: 'image/a.webp',
    },
    {
        src: 'image/2.jfif',
    },
    
];

let currentIndex = 0;

const landingElement = document.querySelector('.landing');
const textElement = landingElement.querySelector('.text'); // العنصر الذي يحتوي على النصوص
const bullets = document.querySelectorAll('.bullets li');

// دالة لتحديث محتوى الصورة
function updateContent() {
    const { src } = images[currentIndex];

    // تغيير صورة الخلفية لعنصر .landing
    landingElement.style.backgroundImage = `url(${src})`;
    landingElement.style.backgroundSize = 'cover';
    landingElement.style.backgroundPosition = 'center';

    // إظهار أو إخفاء النصوص حسب الصورة الحالية
    if (currentIndex === 0) {
        textElement.style.display = 'block'; // إظهار النصوص عند الصورة الأولى
    } else {
        textElement.style.display = 'none'; // إخفاء النصوص عند باقي الصور
    }

    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentIndex);
    });
}

// دالة لعرض الصورة السابقة
function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent();
}

// دالة لعرض الصورة التالية
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent();
}

// إضافة مستمعي الأحداث للأسهم
document.querySelector('.fa-angle-left').addEventListener('click', showPrevious);
document.querySelector('.fa-angle-right').addEventListener('click', showNext);

// إضافة مستمعي الأحداث للدوائر
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentIndex = index;
        updateContent();
    });
});

// تهيئة المحتوى عند تحميل الصفحة
updateContent();

