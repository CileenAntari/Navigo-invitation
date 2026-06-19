const eventDate = new Date("2026-07-14T12:30:00");

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=Navigo+Graduation+Project+Seminar" +
  "&dates=20260714T093000Z/20260714T113000Z" +
  "&details=Navigo++وصلني+graduation+project+presentation" +
  "&location=Birzeit+University,+Al-Masri+Building,+Hall+502";

const translations = {
  en: {
    pageTitle: "Navigo  وصلني | Seminar Invitation",
    pageDescription: "You're invited to the Navigo  وصلني graduation project seminar at Birzeit University, 14 July 2026.",
    nav: { countdown: "Countdown", ticket: "View Ticket" },
    hero: {
      chip: "Graduation Project Seminar Invitation",
      title: 'Your route to our <span>Graduation Project Seminar</span> is ready.',
      intro: 'Join us as we present <strong>Navigo  <span class="arabic">وصلني</span></strong>, a smart navigation and transportation solution built by Computer Science students.',
    },
    route: {
      from: "FROM",
      to: "TO",
      fromValue: "Your Location",
      toValue: "Al-Masri 502 Hall, Birzeit University",
      start: "Start Route",
      replay: "Replay Route",
      calendar: "Add to Calendar",
      statusWaiting: "Status: Waiting to start route...",
      statusStarted: "Status: Route started → destination: Graduation Project Seminar.",
      statusArrived: "Status: Arrived ✅ See you at Al-Masri 502 Hall.",
    },
    map: {
      start: "Start",
      seminar: "Seminar",
      nextStop: "Next stop",
      seminarTitle: "Graduation Project Seminar",
      dateTime: "Tuesday, 14 July 2026 · 12:30 PM",
    },
    countdown: {
      title: "Countdown",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    details: {
      title: "Seminar Details",
      presentedBy: "Presented by",
      member1: "Cileen Antari",
      member2: "Lara Shaltaf",
      member3: "Deema Khalifah",
      supervisedBy: "Supervised by",
      supervisor: "Mr. Fadi Khalil",
      date: "Date",
      dateValue: "Tuesday, 14 July 2026",
      time: "Time",
      location: "Location",
      locationValue: "Birzeit University",
      locationDetail: "Al-Masri Building, Hall 502",
    },
    ticket: {
      label: "Seminar Ticket",
      title: "Graduation Project",
      destination: "Navigo Seminar",
      project: '<b>Project:</b> Navigo  <span class="arabic">وصلني</span>',
      seat: "<b>Seat:</b> Hall 502",
      statusLabel: "<b>Status:</b>",
      statusReady: "Ready",
      statusConfirmed: "Confirmed",
      confirm: "Confirm Attendance",
      confirmed: "Attendance Confirmed ✓",
    },
    code: { title: "Coder Mode" },
    final: {
      heading: "We would be honored by your presence.",
      arabic: "حضوركم يشرفنا ويسعدنا",
      label: "Final Destination",
      confirmed: "Invitation confirmed ✅ Navigo team is excited to see you!",
    },
    toast: {
      routeStarted: "Route started successfully 🚕",
      routeArrived: "You arrived at the seminar destination ✅",
      calendar: "Opening Google Calendar…",
    },
    codeText: `final navigoSeminar = {
  "project": "Navigo  وصلني",
  "presentedBy": [
    "Cileen Antari",
    "Lara Shaltaf",
    "Deema Khalifah"
  ],
  "supervisedBy": "Mr. Fadi Khalil",
  "date": "Tuesday, 14 July 2026",
  "time": "12:30 PM",
  "location": "Birzeit University, Al-Masri 502 Hall",
  "message": "حضوركم يشرفنا"
};

startRoute(to: navigoSeminar);`,
  },
  ar: {
    pageTitle: "Navigo وصلني | دعوة المناقشة",
    pageDescription: "أنتم مدعوون إلى مناقشة مشروع التخرج Navigo وصلني في جامعة بيرزيت، 14 يوليو 2026.",
    nav: { countdown: "العد التنازلي", ticket: "عرض التذكرة" },
    hero: {
      chip: "دعوة مناقشة مشروع التخرج",
      title: 'مساركم إلى <span>مناقشة مشروع التخرج</span> جاهز.',
      intro: 'انضموا إلينا لعرض <strong>Navigo  <span class="arabic">وصلني</span></strong>، الحل الذكي للملاحة والنقل من طلاب علوم الحاسوب.',
    },
    route: {
      from: "من",
      to: "إلى",
      fromValue: "موقعكم",
      toValue: "قاعة المصري 502، جامعة بيرزيت",
      start: "ابدأ المسار",
      replay: "إعادة المسار",
      calendar: "أضف للتقويم",
      statusWaiting: "الحالة: في انتظار بدء المسار...",
      statusStarted: "الحالة: بدأ المسار ← الوجهة: مناقشة مشروع التخرج.",
      statusArrived: "الحالة: وصلتم ✅ نراكم في قاعة المصري 502.",
    },
    map: {
      start: "البداية",
      seminar: "المناقشة",
      nextStop: "المحطة التالية",
      seminarTitle: "مناقشة مشروع التخرج",
      dateTime: "الثلاثاء، 14 يوليو 2026 · 12:30 م",
    },
    countdown: {
      title: "العد التنازلي",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثوانٍ",
    },
    details: {
      title: "تفاصيل المناقشة",
      presentedBy: "يقدّمها",
      member1: "سيلين عنتري",
      member2: "لارا شلطف",
      member3: "ديما خليفة",
      supervisedBy: "بإشراف",
      supervisor: "أ. فادي خليل",
      date: "التاريخ",
      dateValue: "الثلاثاء، 14 يوليو 2026",
      time: "الوقت",
      location: "الموقع",
      locationValue: "جامعة بيرزيت",
      locationDetail: "مبنى المصري، القاعة 502",
    },
    ticket: {
      label: "تذكرة المناقشة",
      title: "مشروع التخرج",
      destination: "مناقشة Navigo",
      project: '<b>المشروع:</b> Navigo  <span class="arabic">وصلني</span>',
      seat: "<b>المكان:</b> القاعة 502",
      statusLabel: "<b>الحالة:</b>",
      statusReady: "جاهزة",
      statusConfirmed: "مؤكدة",
      confirm: "تأكيد الحضور",
      confirmed: "تم تأكيد الحضور ✓",
    },
    code: { title: "وضع المبرمج" },
    final: {
      heading: "يشرفنا ويسعدنا حضوركم.",
      arabic: "حضوركم يشرفنا ويسعدنا",
      label: "الوجهة النهائية",
      confirmed: "تم تأكيد الدعوة ✅ فريق Navigo متحمس لرؤيتكم!",
    },
    toast: {
      routeStarted: "تم بدء المسار بنجاح 🚕",
      routeArrived: "وصلتم إلى وجهة المناقشة ✅",
      calendar: "جارٍ فتح Google Calendar…",
    },
    codeText: `final navigoSeminar = {
  "project": "Navigo  وصلني",
  "presentedBy": [
    "سيلين عنتري",
    "لارا شلطف",
    "ديما خليفة"
  ],
  "supervisedBy": "أ. فادي خليل",
  "date": "الثلاثاء، 14 يوليو 2026",
  "time": "12:30 م",
  "location": "جامعة بيرزيت، قاعة المصري 502",
  "message": "حضوركم يشرفنا"
};

startRoute(to: navigoSeminar);`,
  },
};

let currentLang = localStorage.getItem("navigo-lang") || "en";
let typedIndex = 0;
let routeAnimationFrame = null;
let toastTimer = null;
let attendanceConfirmed = false;
let routeState = "idle";
let terminalStarted = false;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function t(key) {
  const parts = key.split(".");
  let value = translations[currentLang];
  for (const part of parts) {
    value = value?.[part];
  }
  return value ?? key;
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function applyTranslations() {
  const strings = translations[currentLang];

  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.title = strings.pageTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = strings.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNestedValue(strings, key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = getNestedValue(strings, key);
    if (!value) return;

    if (key === "ticket.statusLabel") {
      const status = document.getElementById("ticketStatus");
      const statusText = attendanceConfirmed ? strings.ticket.statusConfirmed : strings.ticket.statusReady;
      el.innerHTML = `${value} <span id="ticketStatus">${statusText}</span>`;
    } else {
      el.innerHTML = value;
    }
  });

  document.getElementById("ticketArrow").textContent = currentLang === "ar" ? "←" : "→";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  applyDynamicTexts();
  refreshTerminalCode();
}

function applyDynamicTexts() {
  const status = document.getElementById("routeStatus");
  const startBtn = document.getElementById("startRouteBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const ticketStatus = document.getElementById("ticketStatus");

  if (status) {
    if (routeState === "running") status.textContent = t("route.statusStarted");
    else if (routeState === "complete") status.textContent = t("route.statusArrived");
    else status.textContent = t("route.statusWaiting");
  }

  if (startBtn) {
    startBtn.textContent = routeState === "complete" ? t("route.replay") : t("route.start");
  }

  if (confirmBtn) {
    confirmBtn.textContent = attendanceConfirmed ? t("ticket.confirmed") : t("ticket.confirm");
  }

  if (ticketStatus) {
    ticketStatus.textContent = attendanceConfirmed ? t("ticket.statusConfirmed") : t("ticket.statusReady");
  }
}

function setLanguage(lang) {
  if (!translations[lang] || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem("navigo-lang", lang);
  applyTranslations();
  syncMapLayout();
}

function refreshTerminalCode() {
  const element = document.getElementById("typedCode");
  if (!element) return;

  if (terminalStarted && typedIndex >= translations[currentLang].codeText.length) {
    element.innerHTML = highlightCode(translations[currentLang].codeText);
    return;
  }

  if (terminalStarted) {
    typedIndex = 0;
    element.innerHTML = "";
    typeCode();
  }
}

function initLanguageSwitch() {
  document.getElementById("langEn")?.addEventListener("click", () => setLanguage("en"));
  document.getElementById("langAr")?.addEventListener("click", () => setLanguage("ar"));
  applyTranslations();
}

function highlightCode(text) {
  return text
    .replace(/(".*?")/g, '<span class="tok-string">$1</span>')
    .replace(/\b(final|to)\b/g, '<span class="tok-keyword">$1</span>')
    .replace(/\b(startRoute)\b/g, '<span class="tok-fn">$1</span>')
    .replace(/(\{|\}|\[|\]|;|,|:)/g, '<span class="tok-punct">$1</span>');
}

function typeCode() {
  const element = document.getElementById("typedCode");
  const codeText = translations[currentLang].codeText;
  if (!element) return;

  terminalStarted = true;

  if (typedIndex < codeText.length) {
    const slice = codeText.slice(0, typedIndex + 1);
    element.innerHTML = highlightCode(slice);
    typedIndex++;
    setTimeout(typeCode, prefersReducedMotion ? 0 : 16);
  } else {
    element.innerHTML = highlightCode(codeText);
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  const ids = ["days", "hours", "minutes", "seconds"];

  if (diff <= 0) {
    ids.forEach((id) => {
      document.getElementById(id).textContent = "00";
    });
    document.getElementById("countdown")?.classList.add("live");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const values = [days, hours, minutes, seconds];
  values.forEach((value, index) => {
    const el = document.getElementById(ids[index]);
    const formatted = String(value).padStart(2, "0");
    if (el.textContent !== formatted) {
      el.textContent = formatted;
      if (!prefersReducedMotion) {
        el.classList.remove("tick");
        void el.offsetWidth;
        el.classList.add("tick");
      }
    }
  });

  if (days === 0 && hours < 24) {
    document.getElementById("countdown")?.classList.add("urgent");
  }
}

function mapSvgPointToCard(point) {
  const map = document.getElementById("mapCard");
  const svg = document.querySelector(".route-svg");
  const mapRect = map.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();

  const x = svgRect.left - mapRect.left + (point.x / 600) * svgRect.width;
  const y = svgRect.top - mapRect.top + (point.y / 560) * svgRect.height;

  return { x, y };
}

function placePinAtPoint(pin, point, offsetX = 27, offsetY = 48) {
  if (!pin) return;
  const mapped = mapSvgPointToCard(point);
  pin.style.left = `${mapped.x - offsetX}px`;
  pin.style.top = `${mapped.y - offsetY}px`;
}

function placePinsFromRoute() {
  const path = document.querySelector(".street-main");
  const pinStart = document.getElementById("pinStart");
  const pinEnd = document.getElementById("pinEnd");
  if (!path) return;

  const totalLength = path.getTotalLength();
  placePinAtPoint(pinStart, path.getPointAtLength(0));
  placePinAtPoint(pinEnd, path.getPointAtLength(totalLength));
}

function placeCarAtStart() {
  const car = document.getElementById("movingCar");
  const path = document.querySelector(".street-main");
  if (!car || !path) return;

  const startPoint = path.getPointAtLength(0);
  const point = mapSvgPointToCard(startPoint);
  car.style.transform = `translate(${point.x - 29}px, ${point.y - 29}px)`;
}

function syncMapLayout() {
  placePinsFromRoute();
  placeCarAtStart();
}

function resetRouteLine() {
  const path = document.querySelector(".street-main");
  if (!path) return;
  path.style.strokeDasharray = "";
  path.style.strokeDashoffset = "";
}

function animateRouteLine(progress) {
  const path = document.querySelector(".street-main");
  if (!path) return;

  const length = path.getTotalLength();
  path.style.strokeDashoffset = `${length * (1 - progress)}`;
}

function startRoute() {
  const car = document.getElementById("movingCar");
  const path = document.querySelector(".street-main");
  const mapCard = document.getElementById("mapCard");
  const btn = document.getElementById("startRouteBtn");

  if (!car || !path) return;

  mapCard?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "center",
  });

  if (routeAnimationFrame) {
    cancelAnimationFrame(routeAnimationFrame);
  }

  mapCard?.classList.remove("route-complete");
  mapCard?.classList.add("route-active");
  btn?.setAttribute("disabled", "true");
  routeState = "running";
  placeCarAtStart();
  placePinsFromRoute();

  const totalLength = path.getTotalLength();
  path.style.strokeDasharray = `${totalLength}`;
  path.style.strokeDashoffset = `${totalLength}`;

  const duration = prefersReducedMotion ? 1200 : 4200;
  const startTime = performance.now();

  document.getElementById("routeStatus").textContent = t("route.statusStarted");
  showToast(t("toast.routeStarted"));

  function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    animateRouteLine(eased);

    const point = path.getPointAtLength(totalLength * eased);
    const nextPoint = path.getPointAtLength(Math.min(totalLength, totalLength * eased + 1));
    const mapped = mapSvgPointToCard(point);
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

    car.style.transform = `translate(${mapped.x - 29}px, ${mapped.y - 29}px) rotate(${angle}deg)`;

    if (progress < 1) {
      routeAnimationFrame = requestAnimationFrame(animate);
    } else {
      routeState = "complete";
      document.getElementById("routeStatus").textContent = t("route.statusArrived");
      showToast(t("toast.routeArrived"));
      mapCard?.classList.add("route-complete");
      btn?.removeAttribute("disabled");
      btn.textContent = t("route.replay");
      resetRouteLine();
    }
  }

  routeAnimationFrame = requestAnimationFrame(animate);
}

function showFinalDestination({ scroll = true } = {}) {
  const section = document.getElementById("finalMessage");
  const defaultView = document.getElementById("finalDefault");
  const confirmedView = document.getElementById("finalConfirmedView");

  defaultView.hidden = true;
  confirmedView.hidden = false;
  section.classList.add("confirmed", "visible");

  if (scroll) {
    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  }
}

function setConfirmedState({ scrollToFinal = false } = {}) {
  attendanceConfirmed = true;
  localStorage.setItem("navigo-attendance", "confirmed");

  const status = document.getElementById("ticketStatus");
  const btn = document.getElementById("confirmBtn");
  const ticket = document.querySelector(".ticket-card");

  status.textContent = attendanceConfirmed ? t("ticket.statusConfirmed") : t("ticket.statusReady");
  btn.textContent = attendanceConfirmed ? t("ticket.confirmed") : t("ticket.confirm");
  btn.setAttribute("disabled", "true");
  btn.setAttribute("aria-disabled", "true");
  ticket?.classList.add("confirmed");
  showFinalDestination({ scroll: scrollToFinal });
}

function confirmAttendance() {
  if (attendanceConfirmed) return;
  setConfirmedState({ scrollToFinal: true });
  launchConfetti();
}

function launchConfetti() {
  if (prefersReducedMotion) return;

  const layer = document.getElementById("confettiLayer");
  layer.innerHTML = "";

  const colors = ["#FF9800", "#19A34A", "#F59E0B", "#1F2937"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.background = colors[i % colors.length];
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${10 + Math.random() * 10}px`;
    layer.appendChild(piece);
  }

  setTimeout(() => {
    layer.innerHTML = "";
  }, 3800);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function initTerminalObserver() {
  const terminal = document.querySelector(".terminal");
  if (!terminal) return;

  if (prefersReducedMotion) {
    typedIndex = translations[currentLang].codeText.length;
    terminalStarted = true;
    typeCode();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        typeCode();
        observer.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  observer.observe(terminal);
}

function restoreAttendance() {
  if (localStorage.getItem("navigo-attendance") === "confirmed") {
    setConfirmedState();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitch();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initScrollReveal();
  initTerminalObserver();
  restoreAttendance();
  syncMapLayout();

  document.getElementById("calendarBtn")?.addEventListener("click", () => {
    window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
    showToast(t("toast.calendar"));
  });
});

window.addEventListener("resize", syncMapLayout);
