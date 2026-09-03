const cardData = [
  { id: 'SV-0001', name: 'Pikachu & Zekrom GX', set: 'Team Up', number: '33/181', year: 2019, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'TAG TEAM GX', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6077330161', price: 'Consultar', status: 'sold', featured: 1, front: 'assets/pikachu-zekrom-front.webp', back: 'assets/pikachu-zekrom-back.webp' },
  { id: 'SV-0002', name: 'Charmander', set: 'Obsidian Flames PC ETB', number: '044', year: 2023, finish: 'Promo', language: 'English', rarity: 'Black Star Promo', type: 'Pokémon', grader: '', grade: 'RAW', gradeLabel: 'UNGRADED', cert: 'N/A', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Charmander-PC-Front.webp', back: 'assets/Charmander-PC-Back.webp' },
  { id: 'SV-0003', name: 'Entei V', set: 'Crown Zenith', number: 'GG36/GG70', year: 2023, finish: 'Holo', language: 'English', rarity: 'Galarian Gallery', type: 'Pokémon V', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6122935050', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Entei-Front.webp', back: 'assets/Entei-Back.webp' },
  { id: 'SV-0004', name: 'Giratina EX', set: 'Ancient Origins', number: '93/98', year: 2015, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'Pokémon EX', grader: 'CGC', grade: 7.5, gradeLabel: 'NEAR MINT+', cert: '6138340012', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Giratina-Front.webp', back: 'assets/Giratina-Back.webp' },
  { id: 'SV-0005', name: 'Glaceon VSTAR', set: 'VSTAR Universe', number: '210/172', year: 2022, finish: 'Holo', language: 'Japanese', rarity: 'Special Art Rare', type: 'Pokémon VSTAR', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6113633019', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Glaceon-Front.webp', back: 'assets/Glaceon-Back.webp' },
  { id: 'SV-0006', name: 'Jolteon EX', set: 'Generations', number: '28a/83', year: 2017, finish: 'Holo', language: 'English', rarity: 'Promo', type: 'Pokémon EX', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6116251088', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Jolteon-2-Front.webp', back: 'assets/Jolteon-2-Back.webp' },
  { id: 'SV-0007', name: 'Jolteon', set: 'Brilliant Stars', number: 'TG04/TG30', year: 2022, finish: 'Holo', language: 'English', rarity: 'Trainer Gallery', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6120316014', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Jolteon-Front.webp', back: 'assets/Jolteon-Back.webp' },
  { id: 'SV-0008', name: 'Leafeon VSTAR', set: 'VSTAR Universe', number: '210/172', year: 2022, finish: 'Holo', language: 'Japanese', rarity: 'Special Art Rare', type: 'Pokémon VSTAR', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6091514039', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Leafeon-Front.webp', back: 'assets/Leafeon-Back.webp' },
  { id: 'SV-0009', name: 'M Lucario EX', set: 'Furious Fists', number: '55a/111', year: 2017, finish: 'Holo', language: 'English', rarity: 'Promo', type: 'Mega Pokémon EX', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6152805020', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Lucario-Front.webp', back: 'assets/Lucario-Back.webp' },
  { id: 'SV-0010', name: 'Marshadow', set: 'Mega Evolution', number: '146/132', year: 2025, finish: 'Holo', language: 'English', rarity: 'Illustration Rare', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6135704091', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Marshadow-Front.webp', back: 'assets/Marshadow-Back.webp' },
  { id: 'SV-0011', name: 'Oricorio ex', set: 'Black Star Promos', number: '024', year: 2025, finish: 'Holo', language: 'English', rarity: 'Promo', type: 'Pokémon ex', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6111774034', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Oricorio-Front.webp', back: 'assets/Oricorio-Back.webp' },
  { id: 'SV-0012', name: 'Reshiram & Charizard GX', set: 'Unbroken Bonds', number: '194/214', year: 2019, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'TAG TEAM GX', grader: 'CGC', grade: 9.5, gradeLabel: 'MINT+', cert: '6149010008', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Reshiram-Front.webp', back: 'assets/Reshiram-Back.webp' },
  { id: 'SV-0013', name: "Cynthia's Roserade", set: 'Heat Wave Arena', number: '065/063', year: 2025, finish: 'Holo', language: 'Japanese', rarity: 'Art Rare', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6166350022', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Roserade-Front.webp', back: 'assets/Roserade-Back.webp' },
  { id: 'SV-0014', name: 'Suicune V', set: 'Crown Zenith', number: 'GG38/GG70', year: 2023, finish: 'Holo', language: 'English', rarity: 'Galarian Gallery', type: 'Pokémon V', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6113633067', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Suicune-Front.webp', back: 'assets/Suicune-Back.webp' },
  { id: 'SV-0015', name: 'Gardevoir/Sylveon GX', set: 'Unbroken Bonds', number: '130/214', year: 2019, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'TAG TEAM GX', grader: 'PSA', grade: 9, gradeLabel: 'MINT', cert: '138496819', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Sylveon-Gardevoir-Front.webp', back: 'assets/Sylveon-Gardevoir-Back.webp' },
  { id: 'SV-0016', name: 'Umbreon Gold Star', set: 'Celebrations', number: '17/17', year: 2021, finish: 'Holo', language: 'English', rarity: 'Classic Collection', type: 'Pokémon Star', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6146238003', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Umbreon-8,5CGC-Front.webp', back: 'assets/Umbreon-8,5CGC-Back.webp' },
  { id: 'SV-0017', name: 'Umbreon Gold Star', set: 'Celebrations', number: '17/17', year: 2021, finish: 'Holo', language: 'English', rarity: 'Classic Collection', type: 'Pokémon Star', grader: 'PSA', grade: 9, gradeLabel: 'MINT', cert: '138496869', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Umbreon-PSA-Front.webp', back: 'assets/Umbreon-PSA-Back.webp' },
  { id: 'SV-0018', name: 'Umbreon ex', set: 'Prismatic Evolutions', number: '176', year: 2025, finish: 'Holo', language: 'English', rarity: 'Black Star Promo', type: 'Pokémon ex', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6141316014', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Umbreon-Tera-Front.webp', back: 'assets/Umbreon-Tera-Back.webp' },
  { id: 'SV-0019', name: 'Vaporeon', set: 'Brilliant Stars', number: 'TG02/TG30', year: 2022, finish: 'Holo', language: 'English', rarity: 'Trainer Gallery', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6105062079', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/Vaporeon-Front.webp', back: 'assets/Vaporeon-Back.webp' },
  { id: 'SV-0020', name: 'Raikou', set: 'Vivid Voltage', number: '050/185', year: 2020, finish: 'Holo', language: 'English', rarity: 'Amazing Rare', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6093231028', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Raikou-Front.webp', back: 'assets/Raikou-Back.webp' },
  { id: 'SV-0021', name: 'M Charizard EX', set: 'Evolutions', number: '101/108', year: 2016, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'Mega Pokémon EX', grader: 'CGC', grade: 9, gradeLabel: 'MINT', cert: '6162939006', price: 'Consultar', status: 'available', featured: 0, front: 'assets/Charizard-Front.webp', back: 'assets/Charizard-Back.webp' },
  { id: 'SV-0023', name: 'Umbreon Gold Star', set: 'Celebrations', number: '17/17', year: 2021, finish: 'Holo', language: 'English', rarity: 'Classic Collection', type: 'Pokémon Star', grader: 'CGC', grade: 8.5, gradeLabel: 'NM/MINT+', cert: '6162939038', price: 'Consultar', status: 'sold', featured: 0, front: 'assets/UmbreonCGC-front.webp', back: 'assets/UmbreonCGC-back.webp' },
  { id: 'SV-0024', name: 'Floragato', set: 'Gem Pack Vol.5', number: '077/077', year: 2026, finish: 'Holo', language: 'S. Chinese', rarity: 'Art Rare', type: 'Pokémon', grader: 'CGC', grade: 10, gradeLabel: 'GEM MINT', cert: '6191589020', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/Floragato-Front.webp', back: 'assets/Floragato-Back.webp' },
  { id: 'SV-0025', name: 'Vaporeon VMAX', set: 'Eevee Advanced Gift Box', number: '006/009', year: 2024, finish: 'Holo', language: 'S. Chinese', rarity: 'Promo', type: 'Pokémon VMAX', grader: '', grade: 'RAW', gradeLabel: 'UNGRADED', cert: 'N/A', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/Vaporeon-Chinese-Front.webp', back: 'assets/Vaporeon-Chinese-Back.webp' },
  { id: 'SV-0026', name: 'Raikou V', set: 'Crown Zenith', number: 'GG41/GG70', year: 2023, finish: 'Holo', language: 'English', rarity: 'Galarian Gallery', type: 'Pokémon V', grader: 'CGC', grade: 9, gradeLabel: 'MINT', cert: '6195024006', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/RaikouCenit-Front.webp', back: 'assets/RaikouCenit-Back.webp' },
  { id: 'SV-0027', name: 'Pikachu & Zekrom GX', set: 'Black Star Promos', number: 'SM248', year: 2021, finish: 'Holo', language: 'English', rarity: 'Black Star Promo', type: 'TAG TEAM GX', grader: 'CGC', grade: 9, gradeLabel: 'MINT', cert: '6197952045', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/Pikachu-Zekrom-Gold-Front.webp', back: 'assets/Pikachu-Zekrom-Gold-Back.webp' },
  { id: 'SV-0028', name: 'Reshiram & Charizard GX', set: 'Unbroken Bonds', number: '20/214', year: 2019, finish: 'Holo', language: 'English', rarity: 'Ultra Rare', type: 'TAG TEAM GX', grader: '', grade: 'RAW', gradeLabel: 'UNGRADED', cert: 'N/A', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/Reshiram-Charizard-Raw-Front.webp', back: 'assets/Reshiram-Charizard-Raw-Back.webp' },
  { id: 'SV-0029', name: 'Oricorio ex', set: 'Black Star Promos', number: '024', year: 2025, finish: 'Holo', language: 'English', rarity: 'Promo', type: 'Pokémon ex', grader: '', grade: 'RAW', gradeLabel: 'UNGRADED', cert: 'N/A', price: 'Consultar', status: 'incoming', featured: 0, front: 'assets/Oricorio-Raw-Front.webp', back: 'assets/Oricorio-Raw-Back.webp' }
];

let selectedCard = cardData[0];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const normalize = (deg) => ((deg % 360) + 360) % 360;
const shortestTarget = (current, targetNormalized) => {
  const currentNormalized = normalize(current);
  let delta = targetNormalized - currentNormalized;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  return current + delta;
};

const slabScene = $('#slabScene');
const slabObject = $('#slabObject');
const rotateLeft = $('#rotateLeft');
const rotateRight = $('#rotateRight');
const toggleAutoRotate = $('#toggleAutoRotate');
const rotationLabel = $('#rotationLabel');
const viewThumbs = $$('.view-thumb');
const indicatorDot = $('#indicatorDot');
const indicatorFront = $('.indicator-front');
const indicatorBack = $('.indicator-back');

let rotationY = 0;
let rotationX = -1.5;
let pointerActive = false;
let pointerId = null;
let lastPointerX = 0;
let lastPointerY = 0;
let lastMoveTime = 0;
let velocity = 0;
let inertiaFrame = null;
let autoRotateFrame = null;
let autoRotateEnabled = false;
let lastAutoTime = 0;

function updateSlab({ instant = false } = {}) {
  const normalized = normalize(rotationY);
  slabObject.classList.toggle('dragging', instant && pointerActive);
  slabObject.style.setProperty('--ry', `${rotationY}deg`);
  slabObject.style.setProperty('--rx', `${rotationX}deg`);
  slabObject.style.setProperty('--glint-offset', `${((normalized / 360) - 0.5) * 120}%`);
  rotationLabel.textContent = `${Math.round(normalized)}°`;

  const isBack = normalized > 90 && normalized < 270;
  viewThumbs.forEach(btn => btn.classList.toggle('active', btn.dataset.view === (isBack ? 'back' : 'front')));
  indicatorFront.classList.toggle('active', !isBack);
  indicatorBack.classList.toggle('active', isBack);
  indicatorDot.style.left = `${Math.min(normalized, 360 - normalized) / 180 * 100}%`;
}

function animateTo(targetNormalized) {
  stopInertia();
  stopAutoRotate();
  rotationY = shortestTarget(rotationY, targetNormalized);
  rotationX = -1.5;
  slabObject.classList.remove('dragging', 'inertia');
  updateSlab();
}

function stopInertia() {
  if (inertiaFrame) cancelAnimationFrame(inertiaFrame);
  inertiaFrame = null;
  slabObject.classList.remove('inertia');
}

function startInertia(initialVelocity) {
  if (Math.abs(initialVelocity) < 0.05 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stopInertia();
  let v = clamp(initialVelocity, -2.7, 2.7);
  let previous = performance.now();
  slabObject.classList.add('inertia');

  const loop = (now) => {
    const dt = Math.min(24, now - previous);
    previous = now;
    rotationY += v * dt;
    v *= Math.pow(0.94, dt / 16.67);
    rotationX += (-1.5 - rotationX) * 0.08;
    updateSlab({ instant: true });
    if (Math.abs(v) > 0.018) inertiaFrame = requestAnimationFrame(loop);
    else stopInertia();
  };
  inertiaFrame = requestAnimationFrame(loop);
}

slabScene.addEventListener('pointerdown', (event) => {
  if (event.button !== undefined && event.button !== 0) return;
  stopAutoRotate();
  stopInertia();
  pointerActive = true;
  pointerId = event.pointerId;
  lastPointerX = event.clientX;
  lastPointerY = event.clientY;
  lastMoveTime = performance.now();
  velocity = 0;
  slabScene.classList.add('grabbing');
  slabObject.classList.add('dragging');
  slabScene.setPointerCapture(pointerId);
});

slabScene.addEventListener('pointermove', (event) => {
  if (!pointerActive || event.pointerId !== pointerId) return;
  const now = performance.now();
  const dx = event.clientX - lastPointerX;
  const dy = event.clientY - lastPointerY;
  const dt = Math.max(8, now - lastMoveTime);
  rotationY += dx * 0.48;
  rotationX = clamp(rotationX - dy * 0.035, -5.5, 3.5);
  velocity = (dx * 0.48) / dt;
  lastPointerX = event.clientX;
  lastPointerY = event.clientY;
  lastMoveTime = now;
  updateSlab({ instant: true });
});

function releasePointer(event) {
  if (!pointerActive || event.pointerId !== pointerId) return;
  pointerActive = false;
  slabScene.classList.remove('grabbing');
  slabObject.classList.remove('dragging');
  if (slabScene.hasPointerCapture(pointerId)) slabScene.releasePointerCapture(pointerId);
  pointerId = null;
  startInertia(velocity);
}
slabScene.addEventListener('pointerup', releasePointer);
slabScene.addEventListener('pointercancel', releasePointer);

slabObject.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); animateTo(normalize(rotationY - 45)); }
  if (event.key === 'ArrowRight') { event.preventDefault(); animateTo(normalize(rotationY + 45)); }
  if (event.key === 'Home') { event.preventDefault(); animateTo(0); }
  if (event.key === 'End') { event.preventDefault(); animateTo(180); }
});

viewThumbs.forEach(button => button.addEventListener('click', () => animateTo(button.dataset.view === 'back' ? 180 : 0)));
rotateLeft.addEventListener('click', () => { stopAutoRotate(); rotationY -= 45; updateSlab(); });
rotateRight.addEventListener('click', () => { stopAutoRotate(); rotationY += 45; updateSlab(); });

function autoLoop(time) {
  if (!autoRotateEnabled) return;
  const dt = Math.min(32, time - (lastAutoTime || time));
  lastAutoTime = time;
  rotationY += dt * 0.022;
  rotationX += (-1.5 - rotationX) * 0.03;
  slabObject.classList.add('inertia');
  updateSlab({ instant: true });
  autoRotateFrame = requestAnimationFrame(autoLoop);
}

function startAutoRotate() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showToast('La auto rotación está desactivada porque tu sistema prefiere menos movimiento.');
    return;
  }
  stopInertia();
  autoRotateEnabled = true;
  toggleAutoRotate.setAttribute('aria-pressed', 'true');
  lastAutoTime = 0;
  autoRotateFrame = requestAnimationFrame(autoLoop);
}

function stopAutoRotate() {
  autoRotateEnabled = false;
  toggleAutoRotate.setAttribute('aria-pressed', 'false');
  if (autoRotateFrame) cancelAnimationFrame(autoRotateFrame);
  autoRotateFrame = null;
  slabObject.classList.remove('inertia');
}

toggleAutoRotate.addEventListener('click', () => autoRotateEnabled ? stopAutoRotate() : startAutoRotate());

// ====== Favoritos ======
const favoriteButton = $('#favoriteButton');
const favoriteCount = $('#favoriteCount');
let favorite = false;

function updateFavoriteUI() {
  favoriteButton.setAttribute('aria-pressed', String(favorite));
  favoriteButton.querySelector('span').textContent = favorite ? 'Guardada en favoritos' : 'Guardar en favoritos';
  favoriteCount.hidden = !favorite;
  favoriteCount.textContent = favorite ? '1' : '0';
  $$('.card-heart').forEach(btn => btn.classList.toggle('active', favorite));
}

favoriteButton.addEventListener('click', () => {
  favorite = !favorite;
  updateFavoriteUI();
  showToast(favorite ? 'Pikachu & Zekrom GX guardada en favoritos.' : 'Eliminada de favoritos.');
});
$('.favorite-button').addEventListener('click', () => {
  if (!favorite) showToast('Todavía no tienes cartas en favoritos.');
  else document.querySelector('#catalogo').scrollIntoView({ behavior: 'smooth' });
});

// ====== Modales ======
const contactModal = $('#contactModal');
const modalKicker = $('#modalKicker');
const modalText = $('#modalText');
const buyButton = $('#buyButton');
const offerButton = $('#offerButton');

function openContactModal(mode) {
  if (mode === 'offer') {
    modalKicker.textContent = 'HACER UNA OFERTA';
    modalText.textContent = 'El flujo está listo para conectarse a un formulario, WhatsApp o email. En la siguiente fase podemos guardar la oferta y enviarte una notificación.';
  } else {
    modalKicker.textContent = 'SOLICITUD DE COMPRA';
    modalText.textContent = 'El flujo está listo para conectar “Me interesa” con WhatsApp, email o un checkout cuando decidas cómo quieres cerrar las ventas.';
  }
  if (typeof contactModal.showModal === 'function') contactModal.showModal();
}
const TELEGRAM_USERNAME = 'Hxbility'; // Cambia esto por tu usuario real de Telegram

$('#buyButton')?.addEventListener('click', () => {
  if (!selectedCard || selectedCard.status === 'sold' || selectedCard.status === 'incoming') return;
  const msg = `¡Hola! Me interesa comprar la carta ${selectedCard.name} (${selectedCard.grader} ${selectedCard.grade}) - ID: ${selectedCard.id}.`;
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(msg)}`, '_blank');
});

$('#offerButton')?.addEventListener('click', () => {
  if (!selectedCard || selectedCard.status === 'sold' || selectedCard.status === 'incoming') return;
  const msg = `¡Hola! Me gustaría hacer una oferta por la carta ${selectedCard.name} (${selectedCard.grader} ${selectedCard.grade}) - ID: ${selectedCard.id}.`;
  window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(msg)}`, '_blank');
});

contactModal.addEventListener('click', (event) => {
  const rect = $('.modal-card', contactModal).getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) contactModal.close();
});

const photoModal = $('#photoModal');
const photoModalImage = $('#photoModalImage');
const photoCaption = $('#photoCaption');
$('#openPhoto').addEventListener('click', () => {
  const isBack = normalize(rotationY) > 90 && normalize(rotationY) < 270;
  photoModalImage.src = isBack ? selectedCard.back : selectedCard.front;
  photoCaption.textContent = `${isBack ? 'TRASERA' : 'FRONTAL'} · FOTO REAL`;
  if (typeof photoModal.showModal === 'function') photoModal.showModal();
});
photoModal.addEventListener('click', (event) => {
  const rect = $('.photo-dialog-card', photoModal).getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) photoModal.close();
});

function loadCard(card, { scroll = false } = {}) {
  selectedCard = card;
  $('#railFrontImg').src = card.front;
  $('#railBackImg').src = card.back;
  $('#slabFrontImg').src = card.front;
  $('#slabBackImg').src = card.back;
  $('#railFrontImg').alt = `Frontal de ${card.name} ${card.grader} ${card.grade}`;
  $('#railBackImg').alt = `Trasera de ${card.name} ${card.grader} ${card.grade}`;
  $('#slabFrontImg').alt = `${card.name} ${card.grader} ${card.grade}, frontal`;
  $('#slabBackImg').alt = `${card.name} ${card.grader} ${card.grade}, trasera`;

  $('#gradeBadgeGrader').textContent = card.grader || '';
  $('#gradeBadgeValue').textContent = card.grade;
  const gradeBadge = $('#gradeBadgeValue').parentElement;
  if (card.grade === 'RAW') {
    gradeBadge.classList.add('raw');
  } else {
    gradeBadge.classList.remove('raw');
  }

  $('#productTitle').textContent = card.name;
  $('#productSubtitle').innerHTML = `${card.set} <span>${card.number}</span> · ${card.finish} · ${card.year}`;
  $('#certGrader').textContent = card.grader;
  $('#certGrade').innerHTML = `${card.grade} <em>${card.gradeLabel || ''}</em>`;
  $('#certNumber').textContent = card.cert;
  $('#priceDisplay').textContent = card.price;

  const isIncoming = card.status === 'incoming';
  const isSold = card.status === 'sold';
  const buyBtn = $('#buyButton');
  const offerBtn = $('#offerButton');
  const stockBadge = $('#stockBadge');

  if (slabObject) {
    slabObject.classList.toggle('is-sold', isSold);
    slabObject.classList.toggle('is-raw', card.grade === 'RAW');
  }

  if (stockBadge) {
    stockBadge.classList.remove('badge-incoming', 'badge-sold');
    if (isSold) {
      stockBadge.classList.add('badge-sold');
      stockBadge.querySelector('span').textContent = 'Agotado';
    } else if (isIncoming) {
      stockBadge.classList.add('badge-incoming');
      stockBadge.querySelector('span').textContent = 'Próximamente';
    } else {
      stockBadge.querySelector('span').textContent = 'Disponible';
    }
  }

  if (buyBtn && offerBtn) {
    const isUnavailable = isIncoming || isSold;
    buyBtn.disabled = isUnavailable;
    offerBtn.disabled = isUnavailable;
    if (isSold) {
      buyBtn.querySelector('span').textContent = 'AGOTADO';
      offerBtn.textContent = 'NO DISPONIBLE';
      buyBtn.style.opacity = '0.5';
      offerBtn.style.opacity = '0.5';
    } else if (isIncoming) {
      buyBtn.querySelector('span').textContent = 'PRÓXIMAMENTE';
      offerBtn.textContent = 'NO DISPONIBLE';
      buyBtn.style.opacity = '0.5';
      offerBtn.style.opacity = '0.5';
    } else {
      buyBtn.querySelector('span').textContent = 'CONTACTAR (TELEGRAM)';
      offerBtn.textContent = 'OFERTAR (TELEGRAM)';
      buyBtn.style.opacity = '1';
      offerBtn.style.opacity = '1';
    }
  }
  $('#detailId').textContent = `ID #${card.id}`;
  $('#detailSet').textContent = card.set;
  $('#detailNumber').textContent = card.number;
  $('#detailRarity').textContent = card.rarity;
  $('#detailFinish').textContent = card.finish;
  $('#detailLanguage').textContent = card.language;
  $('#detailType').textContent = card.type;

  $('#modalTitle').textContent = card.name;
  $('#modalProductImage').src = card.front;
  $('#modalProductImage').alt = card.name;
  $('#modalProductGrade').textContent = `${card.grader} ${card.grade}`;
  $('#modalProductMeta').textContent = `${card.set} · ${card.number}`;
  $('#modalProductCert').textContent = `Cert. ${card.cert}`;

  rotationY = 0;
  rotationX = -1.5;
  updateSlab();
  renderCatalog();
  if (scroll) document.querySelector('#experiencia').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ====== Catálogo ======
const cardGrid = $('#cardGrid');
const globalSearch = $('#globalSearch');
const sortCards = $('#sortCards');
const graderButtons = $$('#graderFilter button');
const gradeCheckboxes = $$('input[name="grade"]');
const stockCheckboxes = $$('input[name="stock"]');
const resultCount = $('#resultCount');
let graderFilter = 'all';

function cardTemplate(card) {
  const isIncoming = card.status === 'incoming';
  const isSold = card.status === 'sold';
  let badgeHTML = '';
  if (isSold) {
    badgeHTML = '<span class="sold-label">AGOTADO</span>';
  } else if (isIncoming) {
    badgeHTML = '<span class="incoming-label">PRÓXIMAMENTE</span>';
  }
  const cardClass = isSold ? 'sold-card' : (isIncoming ? 'incoming-card' : '');
  return `
    <article class="inventory-card ${cardClass}" data-card-id="${card.id}" tabindex="0" aria-label="Ver ${card.name}">
      <div class="card-visual">
        ${badgeHTML}
        <span class="card-grade">${card.grader} ${card.grade}</span>
        <button class="card-heart ${favorite ? 'active' : ''}" type="button" aria-label="Favorito" data-favorite-card="${card.id}">
          <svg><use href="#i-heart"></use></svg>
        </button>
        <img src="${card.front}" alt="${card.name} ${card.grader} ${card.grade}" loading="lazy" />
      </div>
      <div class="card-info">
        <h3>${card.name}</h3>
        <p>${card.set} · ${card.number} · ${card.year}</p>
        <div class="card-foot"><span class="card-price">${card.price}</span><span class="card-link">VER EN 360° →</span></div>
      </div>
    </article>`;
}

function placeholderTemplate(index) {
  return `<div class="placeholder-card" aria-hidden="true"><div><span class="placeholder-glyph"></span><strong>Próxima slab</strong><small>El catálogo se rellena añadiendo otro objeto en <code>cardData</code>.</small></div></div>`;
}

function updateFilterCounts() {
  const counts = { grade: { '10': 0, '9': 0, '8': 0, '7': 0, 'RAW': 0 }, stock: { available: 0, incoming: 0, sold: 0 } };
  cardData.forEach(card => {
    if (card.grade === 'RAW') {
      counts.grade['RAW']++;
    } else {
      const g = parseFloat(card.grade) || 0;
      if (g >= 10) counts.grade['10']++;
      else if (g >= 9) counts.grade['9']++;
      else if (g >= 8) counts.grade['8']++;
      else if (g >= 7) counts.grade['7']++;
    }
    if (counts.stock[card.status] !== undefined) {
      counts.stock[card.status]++;
    }
  });

  gradeCheckboxes.forEach(cb => {
    const countSpan = cb.nextElementSibling?.nextElementSibling;
    if (countSpan) countSpan.textContent = counts.grade[cb.value] || 0;
  });

  stockCheckboxes.forEach(cb => {
    const countSpan = cb.nextElementSibling?.nextElementSibling;
    if (countSpan) countSpan.textContent = counts.stock[cb.value] || 0;
  });

  const heroStat = $('#statCountHero');
  if (heroStat) heroStat.textContent = `${cardData.length}+`;
}

function renderCatalog() {
  const query = globalSearch.value.trim().toLocaleLowerCase('es');
  const activeGrades = gradeCheckboxes.filter(cb => cb.checked).map(cb => cb.value);
  const activeStock = stockCheckboxes.filter(cb => cb.checked).map(cb => cb.value);

  let result = cardData.filter(card => {
    const haystack = `${card.name} ${card.set} ${card.number} ${card.grader} ${card.grade} ${card.cert}`.toLocaleLowerCase('es');
    const matchesQuery = !query || haystack.includes(query);
    const matchesGrader = graderFilter === 'all' || card.grader === graderFilter;
    
    let matchesGrade = activeGrades.length === 0;
    if (activeGrades.length > 0) {
      if (card.grade === 'RAW') {
        matchesGrade = activeGrades.includes('RAW');
      } else {
        const g = parseFloat(card.grade) || 0;
        if (g >= 10 && activeGrades.includes('10')) matchesGrade = true;
        else if (g >= 9 && g < 10 && activeGrades.includes('9')) matchesGrade = true;
        else if (g >= 8 && g < 9 && activeGrades.includes('8')) matchesGrade = true;
        else if (g >= 7 && g < 8 && activeGrades.includes('7')) matchesGrade = true;
      }
    }

    const matchesStock = activeStock.length === 0 || activeStock.includes(card.status);
    return matchesQuery && matchesGrader && matchesGrade && matchesStock;
  });

  result.sort((a, b) => {
    const isSoldA = a.status === 'sold' ? 1 : 0;
    const isSoldB = b.status === 'sold' ? 1 : 0;
    if (isSoldA !== isSoldB) {
      return isSoldA - isSoldB;
    }

    if (sortCards.value === 'name') {
      return a.name.localeCompare(b.name, 'es');
    } else if (sortCards.value === 'grade-desc') {
      const gradeA = parseFloat(a.grade) || 0;
      const gradeB = parseFloat(b.grade) || 0;
      return gradeB - gradeA;
    } else {
      return b.featured - a.featured;
    }
  });

  resultCount.textContent = `${result.length} ${result.length === 1 ? 'pieza' : 'piezas'}`;
  if (!result.length) {
    cardGrid.innerHTML = '<div class="empty-state">No hay slabs que coincidan con estos filtros.</div>';
    return;
  }

  const placeholders = window.innerWidth > 620 ? Math.max(0, 4 - result.length) : 0;
  cardGrid.innerHTML = result.map(cardTemplate).join('') + Array.from({ length: placeholders }, (_, i) => placeholderTemplate(i)).join('');

  $$('[data-card-id]').forEach(cardEl => {
    const activate = () => {
      const card = cardData.find(item => item.id === cardEl.dataset.cardId);
      if (card) loadCard(card, { scroll: true });
    };
    cardEl.addEventListener('click', (event) => {
      if (event.target.closest('.card-heart')) return;
      activate();
    });
    cardEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
    });
  });

  $$('[data-favorite-card]').forEach(button => button.addEventListener('click', (event) => {
    event.stopPropagation();
    favorite = !favorite;
    updateFavoriteUI();
    renderCatalog();
    showToast(favorite ? 'Guardada en favoritos.' : 'Eliminada de favoritos.');
  }));
}

graderButtons.forEach(button => button.addEventListener('click', () => {
  graderButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  graderFilter = button.dataset.grader;
  renderCatalog();
}));
gradeCheckboxes.forEach(cb => cb.addEventListener('change', renderCatalog));
stockCheckboxes.forEach(cb => cb.addEventListener('change', renderCatalog));
sortCards.addEventListener('change', renderCatalog);
globalSearch.addEventListener('input', (e) => {
  if (currentAppView !== 'catalog') {
    showCatalog();
  }
  renderCatalog();
});
$('#clearFilters').addEventListener('click', () => {
  gradeCheckboxes.forEach(cb => cb.checked = false);
  stockCheckboxes.forEach(cb => cb.checked = true);
  graderFilter = 'all';
  graderButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.grader === 'all'));
  globalSearch.value = '';
  sortCards.value = 'featured';
  renderCatalog();
});

document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    event.preventDefault();
    if (window.innerWidth <= 620) $('.site-header').classList.add('search-open');
    globalSearch.focus();
  }
  if (event.key === 'Escape' && window.innerWidth <= 620) $('.site-header').classList.remove('search-open');
});

// Mobile search trigger generated in CSS.
$('.header-actions').addEventListener('click', (event) => {
  if (window.innerWidth > 620) return;
  const rect = $('.header-actions').getBoundingClientRect();
  if (event.clientX < rect.left + 41) {
    $('.site-header').classList.toggle('search-open');
    if ($('.site-header').classList.contains('search-open')) setTimeout(() => globalSearch.focus(), 60);
  }
});

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

window.addEventListener('resize', () => renderCatalog());

loadCard(selectedCard);
updateFavoriteUI();
updateFilterCounts();
renderCatalog();

// Sutil demostración inicial del volumen 3D, sin autoplay permanente.
if (window.innerWidth > 900 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setTimeout(() => {
    rotationY = 12;
    updateSlab();
    setTimeout(() => { rotationY = 0; updateSlab(); }, 700);
  }, 450);
}

// ====== Lógica de Vistas (Navegación) ======
const welcomeView = $('#welcome-view');
const catalogView = $('#catalog-view');
const viewerView = $('#viewer-view');
const navLinks = $$('.main-nav a, .mobile-bottom-nav a');
let currentAppView = 'welcome';
let isContactVisible = false;

function updateNav() {
  if (currentAppView === 'welcome') {
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#inicio'));
    return;
  }

  navLinks.forEach(link => {
    if (isContactVisible) {
      link.classList.toggle('active', link.getAttribute('href') === '#contacto');
    } else {
      link.classList.toggle('active', link.getAttribute('href') === '#catalogo');
    }
  });
}

const contactObserver = new IntersectionObserver((entries) => {
  isContactVisible = entries[0].isIntersecting;
  updateNav();
}, { threshold: 0.2 });
contactObserver.observe($('#contacto'));

function showWelcome() {
  currentAppView = 'welcome';
  welcomeView.classList.remove('view-hidden');
  catalogView.classList.add('view-hidden');
  viewerView.classList.add('view-hidden');
  updateNav();
  window.scrollTo(0, 0);
}

function showCatalog(e) {
  if (e && e.preventDefault && e.target.getAttribute('href') === '#catalogo') {
    e.preventDefault();
  }
  currentAppView = 'catalog';
  welcomeView.classList.add('view-hidden');
  catalogView.classList.remove('view-hidden');
  viewerView.classList.add('view-hidden');
  updateNav();
  if (e && e.target.getAttribute('href') === '#catalogo') window.scrollTo(0, 0);
}

function showViewer() {
  currentAppView = 'viewer';
  welcomeView.classList.add('view-hidden');
  catalogView.classList.add('view-hidden');
  viewerView.classList.remove('view-hidden');
  updateNav();
  window.scrollTo(0, 0);
}

$('#enterCatalogBtn')?.addEventListener('click', showCatalog);
$('#backToCatalogBtn')?.addEventListener('click', showCatalog);
$$('a[href="#inicio"]').forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); showWelcome(); }));
$$('a[href="#contacto"]').forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentAppView !== 'catalog') showCatalog();
  setTimeout(() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }), 50);
}));
$$('a[href="#catalogo"]').forEach(link => link.addEventListener('click', showCatalog));

// Initialize correct nav state
updateNav('welcome');

// Modificar loadCard para que abra el visor
const originalLoadCard = loadCard;
loadCard = function (card, options) {
  originalLoadCard(card, options);
  if (options && options.scroll) {
    showViewer();
  }
};

