/* ====== 在这里修改信息（一处修改，全站生效） ====== */
const CONFIG = {
  childName: "小宝贝",          // 孩子的名字（待填）
  className: "待填 · 班级",      // 例如：小一班
  term: "2025 秋季学期",         // 学期
  signature: "爸爸妈妈",         // 落款
  defaultDate: "待填 · 日期"     // 每张照片的日期占位，可在下方 date 字段单独修改
};

/* ====== 章节与照片 ====== */
const CHAPTERS = [
  { id: "eat", title: "我会自己吃饭啦", icon: "i-heart", color: "#ffd8be", note: "一口米饭一口菜，光盘小能手就是我！",
    photos: [
      { src: "p02.jpg", title: "午饭时间到", text: "米饭、鸡蛋、绿绿的青菜，我自己拿勺子，一口一口吃得香喷喷。", date: "" },
      { src: "p16.jpg", title: "和好朋友一起吃饭", text: "三个小伙伴围着小桌子，比一比谁吃得最认真～", date: "" }
    ]},
  { id: "sport", title: "小小运动家", icon: "i-sun", color: "#c9ecd9", note: "爬、跳、推、滑，我的小腿可有劲儿啦！",
    photos: [
      { src: "p04.jpg", title: "攀爬红黄拱桥", text: "小手抓紧，小脚踩稳，一点也不怕！", date: "" },
      { src: "p06.jpg", title: "跳房子圈圈", text: "一个圈、两个圈……我像小兔子一样蹦过去。", date: "" },
      { src: "p10.jpg", title: "推轮胎大力士", text: "这个大轮胎比我还高，可我能推着它往前跑！", date: "" },
      { src: "p11.jpg", title: "轮胎网上站稳稳", text: "晃呀晃，我张开手臂保持平衡，旁边就是彩色的球球屋。", date: "" },
      { src: "p15.jpg", title: "勇敢滑滑梯", text: "黄色大滑梯，咻——我滑下来啦！", date: "" }
    ]},
  { id: "brain", title: "动手动脑", icon: "i-star", color: "#cfe3ff", note: "拼一拼、数一数，小脑袋转得飞快。",
    photos: [
      { src: "p01.jpg", title: "磁力拼拼脸", text: "圆圆的眼睛、三角的鼻子，我给它拼出一张笑脸。", date: "" },
      { src: "p05.jpg", title: "形状配对和小算盘", text: "和好朋友一起玩，圆形放圆洞，珠子一颗颗拨过去。", date: "" },
      { src: "p07.jpg", title: "蓝色六边形拼图", text: "一块一块找位置，拼好啦！好有成就感。", date: "" },
      { src: "p09.jpg", title: "两条小鲨鱼", text: "看！我找到了两块鲨鱼拼图，嗷呜～", date: "" }
    ]},
  { id: "art", title: "艺术小达人", icon: "i-crayon", color: "#ffd6e0", note: "油画棒在手，秋天被我画进纸里。",
    photos: [
      { src: "p08.jpg", title: "给银杏叶涂颜色", text: "选一支油画棒，把小扇子一样的银杏叶涂得漂漂亮亮。", date: "" }
    ]},
  { id: "festival", title: "中秋与国庆", icon: "i-moon", color: "#fff0b8", note: "月亮圆圆，红旗飘飘，节日的幼儿园真热闹。",
    photos: [
      { src: "p17.jpg", title: "做中秋小兔子", text: "剪剪贴贴，纸盘变成了月亮上的小玉兔。", date: "" },
      { src: "p14.jpg", title: "全班的小兔子", text: "大家举起自己做的兔子盘，一起说：中秋快乐！", date: "" },
      { src: "p18.jpg", title: "海绵印出欢度国庆", text: "蘸一蘸颜料，啪嗒啪嗒，印出一面红红的国旗画。", date: "" }
    ]},
  { id: "warm", title: "温暖时光", icon: "i-flower", color: "#e4dcff", note: "抱一抱，读一读，笑一笑，心里暖洋洋。",
    photos: [
      { src: "p03.jpg", title: "抱抱大凯蒂猫", text: "这只凯蒂猫好大好软，我要给它一个大大的拥抱。", date: "" },
      { src: "p12.jpg", title: "和妈妈读绘本", text: "在家里依偎着妈妈，一页一页听故事，是最幸福的时候。", date: "" },
      { src: "p13.jpg", title: "粉色伸缩管小帽子", text: "把伸缩管戴在头上，我是不是很像小精灵？", date: "" }
    ]}
];

const MILESTONES = [
  { icon: "🥄", name: "自己吃饭", tip: "会自己拿勺子把饭吃光光" },
  { icon: "🛝", name: "勇敢滑滑梯", tip: "从高高的滑梯上滑下来" },
  { icon: "🖍️", name: "会涂色", tip: "用油画棒给银杏叶涂颜色" },
  { icon: "🧩", name: "拼图小能手", tip: "独立拼好六边形拼图" },
  { icon: "🐰", name: "手工小巧手", tip: "做出了中秋小兔子" },
  { icon: "🤸", name: "平衡小高手", tip: "在轮胎网上站得稳稳的" },
  { icon: "🤝", name: "交到好朋友", tip: "和小伙伴一起玩、一起吃饭" },
  { icon: "📖", name: "爱听故事", tip: "和妈妈一起读绘本" }
];

/* ====== 渲染 ====== */
const $ = (s, el = document) => el.querySelector(s);
document.querySelectorAll("[data-cfg]").forEach(el => { el.textContent = CONFIG[el.dataset.cfg]; });
document.title = CONFIG.childName + "的成长手账";

const STICKERS = ["i-star", "i-heart", "i-flower", "i-sun", "i-cloud", "i-rabbit", "i-moon"];
const TAPES = ["t-pink", "t-blue", "t-yellow", "t-green", "t-purple"];
const flat = [];
const book = $("#book"), nav = $("#chapnav");

CHAPTERS.forEach((ch, ci) => {
  const a = document.createElement("a");
  a.href = "#" + ch.id; a.className = "chip"; a.style.setProperty("--c", ch.color);
  a.innerHTML = `<svg><use href="#${ch.icon}"/></svg><span>${ch.title}</span>`;
  nav.appendChild(a);

  const sec = document.createElement("section");
  sec.className = "chapter " + (ci % 2 ? "kraft" : "grid");
  sec.id = ch.id; sec.style.setProperty("--c", ch.color);
  let html = `<div class="chap-head reveal">
      <span class="chap-no">第 ${ci + 1} 章</span>
      <h2 class="chap-title"><svg class="chap-ic"><use href="#${ch.icon}"/></svg>${ch.title}</h2>
      <p class="chap-note">${ch.note}</p>
    </div><div class="polas ${ch.photos.length === 1 ? "single" : ""}">`;
  ch.photos.forEach((p, pi) => {
    const idx = flat.length; flat.push({ ...p, chapter: ch.title });
    const r = ((idx * 37) % 7 - 3) * 1.1;
    const st = STICKERS[(idx * 3 + ci) % STICKERS.length];
    html += `<figure class="pola reveal" style="--r:${r.toFixed(1)}deg;--d:${pi * 90}ms" data-i="${idx}" tabindex="0" role="button" aria-label="放大查看：${p.title}">
        <span class="tape ${TAPES[(idx + ci) % TAPES.length]}"></span>
        <div class="ph"><img src="photos/${p.src}" alt="${p.title}" loading="lazy" decoding="async"></div>
        <figcaption><b>${p.title}</b><span>${p.text}</span><em class="date">${p.date || CONFIG.defaultDate}</em></figcaption>
        <svg class="sticker"><use href="#${st}"/></svg>
      </figure>`;
  });
  html += `</div>`;
  sec.innerHTML = html;
  book.appendChild(sec);
});

const badges = $("#badges");
MILESTONES.forEach((m, i) => {
  const b = document.createElement("button");
  b.className = "badge reveal"; b.style.setProperty("--d", i * 70 + "ms");
  b.style.setProperty("--h", (i * 47) % 360);
  b.innerHTML = `<span class="b-ic">${m.icon}</span><span class="b-name">${m.name}</span><span class="b-tip">${m.tip}</span>`;
  b.addEventListener("click", () => { b.classList.toggle("flip"); pop(b); });
  badges.appendChild(b);
});

/* 滚动入场 + 贴纸掉落 */
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

/* 当前章节高亮 */
const chips = [...nav.querySelectorAll(".chip")];
const so = "IntersectionObserver" in window ? new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      chips.forEach(c => c.classList.toggle("on", c.getAttribute("href") === "#" + e.target.id));
      const on = nav.querySelector(".on"); if (on && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: on.offsetLeft - 16, behavior: "smooth" });
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" }) : null;
document.querySelectorAll(".chapter").forEach(s => so && so.observe(s));

$("#openBtn").addEventListener("click", () => {
  document.body.classList.add("opened");
  $("#" + CHAPTERS[0].id).scrollIntoView({ behavior: "smooth" });
});

/* 小星星爆开 */
function pop(el) {
  const r = el.getBoundingClientRect();
  for (let i = 0; i < 7; i++) {
    const s = document.createElement("span");
    s.className = "spark"; s.textContent = ["✦", "★", "♥", "✿"][i % 4];
    s.style.left = r.left + r.width / 2 + "px"; s.style.top = r.top + r.height / 2 + "px";
    const a = (Math.PI * 2 * i) / 7;
    s.style.setProperty("--x", Math.cos(a) * 60 + "px"); s.style.setProperty("--y", Math.sin(a) * 60 + "px");
    document.body.appendChild(s); setTimeout(() => s.remove(), 800);
  }
}

/* 灯箱 */
const lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
let cur = 0, lastFocus = null;
function show(i) {
  cur = (i + flat.length) % flat.length; const p = flat[cur];
  lbImg.classList.remove("swap"); void lbImg.offsetWidth; lbImg.classList.add("swap");
  lbImg.src = "photos/" + p.src; lbImg.alt = p.title;
  lbCap.innerHTML = `<small>${p.chapter} · ${cur + 1}/${flat.length}</small><b>${p.title}</b><span>${p.text}</span>`;
}
function openLb(i) { lastFocus = document.activeElement; show(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
book.addEventListener("click", e => { const f = e.target.closest(".pola"); if (f) openLb(+f.dataset.i); });
book.addEventListener("keydown", e => { const f = e.target.closest(".pola"); if (f && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openLb(+f.dataset.i); } });
$("#lbClose").onclick = closeLb; $("#lbPrev").onclick = () => show(cur - 1); $("#lbNext").onclick = () => show(cur + 1);
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1);
});
let tx = null;
lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1)); tx = null; });
