     // الحصول على جميع الروابط داخل قائمة التنقل
    const navLinks = document.querySelectorAll('.nav-link');

    // إضافة حدث النقر لكل رابط
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // إزالة الفئة "active" من جميع الروابط
            navLinks.forEach(nav => nav.classList.remove('active'));

            // إضافة الفئة "active" للعنصر الذي تم النقر عليه
            this.classList.add('active');
        });
    });
 
