// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Portfolio: category covers -> theme modal -> lightbox =====
// Full image list for every theme. Covers on the homepage link into these.
const categoryData = {
    fashion: {
        title: 'Fashion Design',
        // Grouped by sub-collection; each group's name is its folder name.
        groups: [
            {
                name: 'Mood Board',
                folder: 'Art Works/Fashion Design/Mood Board',
                images: [
                    '微信图片_20250414113846.jpg', '微信图片_20250414113847.jpg', '微信图片_20250414113920.jpg',
                    '微信图片_20250414113921.jpg', '微信图片_202504141139211 - 副本 (2).jpg',
                    '微信图片_202504141139212 - 副本 (2).jpg', '微信图片_20250414113922.jpg'
                ]
            },
            {
                name: 'Toile',
                folder: 'Art Works/Fashion Design/Toile',
                images: [
                    '微信图片_20250423161201.png', '微信图片_20250423161243.png',
                    '微信图片_20250423161329.png', '微信图片_20250423161350.png'
                ]
            },
            {
                name: 'The Gaze',
                folder: 'Art Works/Fashion Design/The Gaze',
                images: [
                    '微信图片_20250414115459 - 副本.jpg', '微信图片_20250414115516 - 副本.jpg',
                    '微信图片_202504141155163.jpg', '微信图片_202504141155164.jpg'
                ]
            },
            {
                name: 'Violet Cloud',
                folder: 'Art Works/Fashion Design/Violet Cloud',
                images: [
                    '微信图片_20250423162153.png', '微信图片_20250423162253.png', '微信图片_202504231622531.png',
                    '微信图片_202504231622532.png', '微信图片_202504231622533.png', '微信图片_202504231622534.png',
                    '微信图片_202504231622535.png', '微信图片_202504231622536.png', '微信图片_202504231622537.png'
                ]
            },
            {
                name: 'Canopy',
                folder: 'Art Works/Fashion Design/Canopy',
                images: [
                    '微信图片_20250423162458.png', '微信图片_202504231624581.png', '微信图片_202504231624582.png',
                    '微信图片_20250423162459.png', '微信图片_202504231624591.png', '微信图片_202504231624592.png',
                    '微信图片_202504231624593.png', '微信图片_202504231624594.png'
                ]
            }
        ]
    },
    illuminations: {
        title: 'Illuminations',
        folder: 'Art Works/Illuminations',
        images: [
            'e59bbee78987_20250327142750-3.jpg', 'e59bbee78987_20250327142727-1.jpg', 'e59bbee78987_20250327142747-1.jpg',
            'e59bbee78987_20250327142748-1.jpg', 'e59bbee78987_20250327142749-1.jpg', 'e59bbee78987_20250327142914-1.jpg',
            'e59bbee78987_20250327142915-2.jpg', 'e59bbee78987_202503271429151-6.jpg', 'e59bbee78987_20250327154626-2.jpg',
            'e59bbee78987_20250327154635-1.jpg', 'e59bbee78987_20250327154645-2.jpg', 'e59bbee78987_20250327165609.jpg',
            'e5beaee4bfa1e59bbee78987_20250408162200.jpg'
        ]
    },
    jewelry: {
        title: 'Jewelry Design',
        folder: 'Art Works/Jewelry Design',
        images: [
            'a6db3a124f0f50c0cc4ad2e0230beab.jpg', '06ec6f389b20d8c3397004734416aaa.png', '1d883eb070ce41693227904c40570ad.jpg',
            '5b75086470b8f79ccd6a974fb227751.jpg', '68c859e3d8fb591e17526a99bac0f1f-1.jpg', '68c859e3d8fb591e17526a99bac0f1f-2.jpg',
            '6f7bccfc221ff66195a351329175a18-1.jpg', '6f7bccfc221ff66195a351329175a18-2.jpg', '79d36b1601fc97d550e1f93f363bfbf-1.jpg',
            '79d36b1601fc97d550e1f93f363bfbf-2.jpg', '996c8316506a095d6b21a8af1c32cad.png', 'a21d37586fb631a766ebc98e125bfbf.jpg',
            'a589f34aac16309d9625646a93c788f.jpg', 'd2ea738ecc26f3a7900f5367256ecbf-1.jpg', 'ddc949c7ccee8a55134adbb5adba964.jpg',
            'f65bdafd704cb1d996953f8561e7532.jpg', 'IMG_4651.JPG', 'IMG_4663.JPG', 'IMG_4673.JPG', 'IMG_4693.jpg', 'IMG_4745.jpg',
            'IMG_8296.jpg', 'IMG_8311.jpg', 'IMG_8313.jpg', 'IMG_8324.jpg', 'IMG_8325.jpg', 'IMG_8355.jpg', 'IMG_8359.jpg',
            '图片_20250326160158.jpg', '图片_202503261601582.jpg', '图片_20250326160201.jpg', '图片_20250326160414.jpg',
            '图片_202503261604141.jpg', '图片_202503261604142.jpg', '图片_202503261604159.jpg', '图片_202503261604161.jpg',
            '图片_202503261604162.jpg', '图片_202503261604163.jpg', '图片_202503261604167.jpg', '图片_202503261604168.jpg',
            '图片_202503261604169.jpg', '图片_20250326160417.jpg', '图片_202503261604171.jpg', '图片_202503261604172.jpg',
            '图片_202503261604173.jpg', '图片_202503261604185.jpg', '图片_202503261604187.jpg', '图片_202503261604188.jpg',
            '图片_202503261604189.jpg', '图片_202503261639391.jpg', '图片_20250326163940.jpg', '图片_20250326163941.jpg',
            '图片_20250326163942.jpg', '图片_20250326163944.jpg', '图片_20250326163945.jpg', '图片_20250327163219.jpg',
            '图片_20250402144746.jpg', '微信图片_20250221161026.jpg', '微信图片_20250221161034.jpg', '微信图片_20250408162200.jpg'
        ]
    },
    leather: {
        title: 'Leather Works',
        folder: 'Art Works/Leather Works',
        images: [
            'e5beaee4bfa1e59bbee78987_20250423163029.png', '2018-10-16-04.30.41-2.jpg', '2018-10-16-04.30.42-1.jpg',
            '2018-10-16-04.30.42-2.jpg', '2018-10-16-04.30.42-3.jpg', '2018-10-16-04.30.43-1.jpg',
            'e59bbee78987_202503261604151.jpg', 'e59bbee78987_2025032616041811.jpg', 'e59bbee78987_2025032616041812.jpg',
            'e5beaee4bfa1e59bbee78987_20250221161038.jpg', 'e5beaee4bfa1e59bbee78987_20250423163039.png',
            'e5beaee4bfa1e59bbee78987_20250423163043.png', 'e5beaee4bfa1e59bbee78987_202504231631271.png',
            'e5beaee4bfa1e59bbee78987_202504231631273.png', 'e5beaee4bfa1e59bbee78987_202504231631551.png',
            'e5beaee4bfa1e59bbee78987_202504231631552.png', 'img_9205-1.jpeg', 'img_9227.jpeg'
        ]
    },
    paintings: {
        title: 'Paintings',
        folder: 'Art Works/Paintings',
        images: [
            '图片_202503261604193.jpg', '图片_20250326160102.jpg', '图片_202503261601561.jpg', '图片_202503261601562.jpg',
            '图片_20250326160157.jpg', '图片_202503261601571.jpg', '图片_2025032616015710.jpg', '图片_2025032616015711.jpg',
            '图片_2025032616015712.jpg', '图片_202503261601572.jpg', '图片_202503261601573.jpg', '图片_202503261601574.jpg',
            '图片_202503261601575.jpg', '图片_202503261601576.jpg', '图片_202503261601577.jpg', '图片_202503261601578.jpg',
            '图片_202503261601579.jpg', '图片_202503261601581.jpg', '图片_20250326160159.jpg', '图片_202503261604144.jpg',
            '图片_202503261604145.jpg', '图片_20250326160415.jpg', '图片_202503261604152.jpg', '图片_202503261604153.jpg',
            '图片_202503261604174.jpg', '图片_202503261604175.jpg', '图片_202503261604176.jpg', '图片_202503261604177.jpg',
            '图片_202503261604178.jpg', '图片_202503261604179.jpg', '图片_20250326160418.jpg', '图片_202503261604181.jpg',
            '图片_202503261604182.jpg', '图片_202503261604183.jpg', '图片_202503261604184.jpg', '图片_20250326160419.jpg',
            '图片_202503261604191.jpg', '图片_202503261604192.jpg', '图片_202503261604194.jpg', '图片_202503261604195.jpg',
            '图片_202503261604196.jpg', '图片_202503261604197.jpg', '图片_202503261604198.jpg', '图片_202503261604199.jpg',
            '图片_20250326160420.jpg', '图片_202503261604201.jpg', '图片_2025032616042010.jpg', '图片_202503261604202.jpg',
            '图片_202503261604203.jpg', '图片_202503261604204.jpg', '图片_202503261604205.jpg', '图片_202503261604206.jpg',
            '图片_202503261604207.jpg', '图片_202503261604208.jpg', '图片_202503261604209.jpg', '图片_20250326160421.jpg',
            '图片_20250326163946.jpg', '图片_20250326163947.jpg', '图片_20250326163949.jpg', '图片_20250327161959.jpg',
            '微信图片_20250221154439.jpg', '微信图片_20250221161031.jpg'
        ]
    },
    photography: {
        title: 'Photography',
        folder: 'Art Works/Photography',
        images: [
            '36f34ba96d6811d68d1a3ba763c3cfce.png', '02c3eae66638bc5f7f05a5e77942ca73.jpg', '11.jpg',
            '11c2f2f56f3ffb74342017ce0e327a20.jpg', '19964de5993b52c53907b1232289acf3.jpg', '1d7cbcd6542a7924a99cfd4ea8da4be8.jpg',
            '21.jpg', '3e4c11cb585f75488cc92735fc2c2104.jpg', '5e896c7899e6ce8a54d6f951456b5529.jpg',
            '73b8fa7fb5c8bd91ee30a06665230786.jpg', '7d44d910b2253b7fa73613170bd2a5ef-3.jpg', '82d4ba8271e2408634c72a253d33eca3.jpg',
            '8d8a0f73ef5389d4122c64b4af63c96f.jpg', '920c0a97811bb878eda4f2b7a62cdab4.jpg', '9d9765b0eb1bf92f481fb266df6822a3-1.jpg',
            'fe629b9fa44d9df55c5301c83626fa01-2.jpg', 'img_0246.jpg', 'img_3395.jpg', 'img_3397.jpg', 'img_3621.jpg',
            'img_3627-3.jpg', 'img_4135.jpg', 'img_4138.jpg'
        ]
    },
    publications: {
        title: 'Publications',
        folder: 'Art Works/Publications',
        images: [
            'img_3948-4.jpg', 'img_3949-3.jpg', 'img_3950-2.jpg', 'img_3951-1.jpg', 'img_3952-1.jpg', 'img_3953-1.jpg',
            'img_3954-1.jpg', 'img_3955-3.jpg', 'img_3956-3.jpg', 'img_3957-3.jpg', 'img_3958-2.jpg', 'img_3959-2.jpg',
            'img_3960-2.jpg', 'img_3962-2.jpg', 'img_3963-2.jpg', 'img_3964-2.jpg', 'img_3965-2.jpg', 'img_3966-2.jpg',
            'img_3967-2.jpg', 'img_3968-2.jpg', 'img_3969-2.jpg', 'img_3970-3.jpg', 'img_3971-3.jpg', 'img_3972-4.jpg',
            'img_3973-2.jpg', 'img_3974-2.jpg', 'img_3975-2.jpg', 'img_3976-2.jpg', 'img_3977-1.jpg'
        ]
    },
    'ai-art': {
        title: 'AI-Generated Artwork',
        folder: 'Art Works/AI-Generated Artwork',
        images: [
            '20250423_131100000_iOS.jpg', '20250423_130746000_iOS.jpg', '20250423_130755000_iOS.jpg',
            '20250423_130757000_iOS.jpg', '20250423_131054000_iOS.jpg', '20250423_131136000_iOS.jpg',
            '20250423_131139000_iOS.jpg', '20250423_131141000_iOS.jpg', '20250423_131144000_iOS.jpg',
            '20250423_131148000_iOS.jpg', '20250423_131528000_iOS.jpg', '20250423_131540000_iOS.jpg',
            'mhaoldrako_An_interior_of_an_old_house_in_Sweden_painted_in_the_1c2903b9-c844-450a-96fb-692a14ea8424.png',
            'mhaoldrako_An_interior_of_an_old_house_in_Sweden_painted_in_the_307bc3bd-3d89-49db-87a9-7eece5ba91df.png',
            'mhaoldrako_An_interior_of_an_old_house_in_Sweden_painted_in_the_d6c0ee69-5531-46ba-838c-29ced8a33517.png',
            'mhaoldrako_An_interior_of_an_old_house_in_Sweden_painted_in_the_f3fef20d-4afa-4c6c-b222-028b5ff3ce4a.png',
            'mhaoldrako_four_fashion_sketches_on_one_page_featuring_exaggera_e376dd16-02fa-4375-9c35-a122536bfaea.webp',
            'mhaoldrako_the_model_is_wearing_a_glowing_dress_with_an_irregul_08f1e06a-f710-4b83-8d22-1798e7600dd8.png',
            'mhaoldrako_the_model_is_wearing_a_glowing_dress_with_an_irregul_60f5a508-16fe-42dd-8f91-5b453a8fd415-1.png',
            'mhaoldrako_Ultra-realistic_photo_of_a_person_sitting_on_a_white_b20e568e-519f-4e77-a42d-f9fffb06bc83.png'
        ]
    }
};

// ===== Category modal =====
const categoryModal = document.getElementById('categoryModal');
const categoryModalTitle = document.getElementById('categoryModalTitle');
const categoryModalGrid = document.getElementById('categoryModalGrid');
const categoryModalClose = document.getElementById('categoryModalClose');
const categoryCards = document.querySelectorAll('.category-card');

// The image list (full src paths) currently loaded in the modal / lightbox
let currentList = [];

// Build one clickable photo tile wired to the lightbox at the given index
function buildPhotoItem(src, alt, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';

    item.appendChild(img);
    item.addEventListener('click', () => openLightbox(index));
    return item;
}

function openCategory(categoryKey) {
    const data = categoryData[categoryKey];
    if (!data) return;

    categoryModalTitle.textContent = data.title;
    categoryModalGrid.innerHTML = '';
    currentList = [];

    // Normalize to a list of groups so grouped and flat categories render the same way
    const groups = data.groups
        ? data.groups
        : [{ name: null, folder: data.folder, images: data.images }];

    const isGrouped = !!data.groups;

    groups.forEach((group, groupIndex) => {
        const section = document.createElement('section');
        section.className = 'category-group';

        // Editorial chapter heading for sub-collections (used by Fashion Design)
        if (group.name) {
            const heading = document.createElement('div');
            heading.className = 'category-group-head';

            const index = document.createElement('span');
            index.className = 'category-group-index';
            index.textContent = `Chapter ${String(groupIndex + 1).padStart(2, '0')}`;

            const title = document.createElement('h4');
            title.className = 'category-group-title';
            title.textContent = group.name;

            const count = document.createElement('span');
            count.className = 'category-group-count';
            count.textContent = `${group.images.length} ${group.images.length === 1 ? 'piece' : 'pieces'}`;

            heading.appendChild(index);
            heading.appendChild(title);
            heading.appendChild(count);
            section.appendChild(heading);
        }

        if (group.name) {
            // Magazine-style layout: first image is a hero, the rest sit in a side grid
            const layout = document.createElement('div');
            layout.className = 'category-group-layout';

            const thumbs = document.createElement('div');
            thumbs.className = 'category-thumbs';

            group.images.forEach((name, i) => {
                const src = `${group.folder}/${name}`;
                const index = currentList.length;
                currentList.push(src);
                const item = buildPhotoItem(src, group.name, index);

                if (i === 0) {
                    item.classList.add('category-hero');
                    layout.appendChild(item);
                } else {
                    item.classList.add('category-thumb');
                    thumbs.appendChild(item);
                }
            });

            layout.appendChild(thumbs);
            section.appendChild(layout);
        } else {
            // Flat categories: plain uniform grid
            const grid = document.createElement('div');
            grid.className = 'category-group-grid';

            group.images.forEach(name => {
                const src = `${group.folder}/${name}`;
                const index = currentList.length;
                currentList.push(src);
                grid.appendChild(buildPhotoItem(src, data.title, index));
            });

            section.appendChild(grid);
        }

        categoryModalGrid.appendChild(section);
    });

    categoryModalGrid.classList.toggle('is-grouped', isGrouped);

    categoryModal.classList.add('active');
    categoryModal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function closeCategory() {
    categoryModal.classList.remove('active');
    if (!lightbox.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

categoryCards.forEach(card => {
    card.addEventListener('click', () => openCategory(card.dataset.category));
});

// Theme nav row opens the same category modal as the covers
document.querySelectorAll('.theme-nav-link').forEach(link => {
    link.addEventListener('click', () => openCategory(link.dataset.category));
});

categoryModalClose.addEventListener('click', closeCategory);
categoryModal.addEventListener('click', (e) => {
    if (e.target === categoryModal) closeCategory();
});

// ===== Lightbox (navigates within the open category) =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;

function showLightboxImage() {
    lightboxImg.src = currentList[currentImageIndex];
    lightboxImg.alt = categoryModalTitle.textContent;
}

function openLightbox(index) {
    if (!currentList.length) return;
    currentImageIndex = index;
    showLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    // Keep scroll locked if the category modal is still open behind it
    if (!categoryModal.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentList.length) % currentList.length;
    showLightboxImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentList.length;
    showLightboxImage();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
        return;
    }
    if (categoryModal.classList.contains('active') && e.key === 'Escape') {
        closeCategory();
    }
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Hero Logo Reveal Interaction =====
(function () {
    const reveal = document.getElementById('heroReveal');
    if (!reveal) return;

    // Radius of the soft reveal circle (px). Tweak to taste.
    const ACTIVE_RADIUS = 120;
    let targetRadius = 0;
    let currentRadius = 0;
    let rafId = null;

    function setCenter(clientX, clientY) {
        const rect = reveal.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        reveal.style.setProperty('--reveal-x', x + 'px');
        reveal.style.setProperty('--reveal-y', y + 'px');
    }

    function animate() {
        // Ease the radius toward the target for a smooth grow/shrink
        currentRadius += (targetRadius - currentRadius) * 0.18;
        if (Math.abs(targetRadius - currentRadius) < 0.5) {
            currentRadius = targetRadius;
        }
        reveal.style.setProperty('--reveal-radius', currentRadius.toFixed(2) + 'px');

        if (currentRadius !== targetRadius) {
            rafId = requestAnimationFrame(animate);
        } else {
            rafId = null;
        }
    }

    function kick() {
        if (rafId === null) {
            rafId = requestAnimationFrame(animate);
        }
    }

    reveal.addEventListener('mouseenter', (e) => {
        setCenter(e.clientX, e.clientY);
        targetRadius = ACTIVE_RADIUS;
        kick();
    });

    reveal.addEventListener('mousemove', (e) => {
        setCenter(e.clientX, e.clientY);
    });

    reveal.addEventListener('mouseleave', () => {
        targetRadius = 0;
        kick();
    });

    // Touch support: reveal around the touch point while pressing
    reveal.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        if (!t) return;
        setCenter(t.clientX, t.clientY);
        targetRadius = ACTIVE_RADIUS;
        kick();
    }, { passive: true });

    reveal.addEventListener('touchmove', (e) => {
        const t = e.touches[0];
        if (!t) return;
        setCenter(t.clientX, t.clientY);
    }, { passive: true });

    reveal.addEventListener('touchend', () => {
        targetRadius = 0;
        kick();
    });
})();
