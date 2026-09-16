const stories = [
  { tag: "社員旅行2026", title: "今年の行き先は、まだ誰も知らない。開催地は現在選定中です", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85", text: "1泊2日の行程と候補地を、決まり次第このページでお知らせします。" },
  { tag: "社内ニュース", title: "新スタジオ棟の運用がスタートしました", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85", text: "部署を越えた新しい制作環境が始動。" },
  { tag: "今年の記録", title: "春の特番が視聴率自己最高を更新", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=85", text: "チーム全員でつないだ、忘れられない一週間。" },
  { tag: "幹事会より", title: "参加希望アンケートへのご協力ありがとうございました", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85", text: "回答をもとに、旅の内容を検討しています。" }
];
const newsItems = [
  ["09/12", "新スタジオ棟の運用がスタートしました", "組織・設備"], ["08/28", "春の特番が視聴率自己最高を更新", "制作・放送"], ["07/19", "社内カフェに期間限定の水星ソーダ登場", "福利厚生"], ["06/30", "新人研修2026、全プログラムを無事終了", "人材・研修"], ["05/14", "全部署対抗ボウリング大会、営業部が優勝", "社内イベント"], ["04/01", "2026年度の新しい仲間を迎えました", "人事"]
];
const incidents = [
  ["第01話", "会議室の予約名が「宇宙船」になっていた件", "原因は総務の入力ミス。以降、会議室名には惑星コードが付くようになりました。"],
  ["第02話", "全社メールに猫の写真だけが届いた朝", "送信者は不明のままですが、添付画像の猫は社内で『ミカヅキ』と命名されました。"],
  ["第03話", "社長のマイクが本番5分前まで見つからない", "最終的に、社長自身のデスクの引き出しから発見。本人も覚えていませんでした。"]
];
const app = document.querySelector("#app");
const nav = document.querySelectorAll(".nav-item");
const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
let previousScroll = window.scrollY;
const image = (story) => `<img src="${story.image}" alt="${story.title}" loading="lazy">`;
const heading = (label, title, link = "") => `<div class="section-heading"><h2><span class="eyebrow">${label}</span>${title}</h2>${link ? `<a href="#">${link} →</a>` : ""}</div>`;

function homeView() {
  return `<div class="hero-grid"><article class="hero-story">${image(stories[0])}<div class="hero-copy"><span class="tag">${stories[0].tag}</span><h1>${stories[0].title}</h1><p>${stories[0].text}</p></div></article><div class="side-stories">${stories.slice(1, 3).map((story) => `<article class="side-story">${image(story)}<div class="side-copy"><span class="tag">${story.tag}</span><h3>${story.title}</h3><time>2026年</time></div></article>`).join("")}</div></div><div class="ticker"><strong>幹事会速報</strong><span>開催地は現在未定です。候補地を比較検討中、決定は10月上旬を予定しています。</span></div><div class="content-grid"><section>${heading("TRIP 2026", "社員旅行の概要", "詳細を見る")}<div class="trip-summary"><div><span>日程</span><strong>1泊2日</strong><small>2026年 11月予定</small></div><div><span>開催地</span><strong>未定</strong><small>候補地を検討中</small></div><div><span>対象</span><strong>SHK全社員</strong><small>ご家族の参加も相談可</small></div></div></section><aside>${heading("ARCHIVE", "今年の記録")}<div class="topic-box"><h3>SHK 2026</h3><a href="#news">社内ニュースを読む</a><a href="#incidents">珍事件簿を読む</a><a href="#results">売上実績を見る</a></div></aside></div>`;
}
function scheduleView() {
  return `<div class="page-intro"><div><span class="eyebrow">TRIP 2026</span><h1>日程・概要</h1></div><p>SHK社員旅行2026の計画概要です。<br>詳細は決定次第、順次更新します。</p></div><div class="schedule-grid"><section><div class="day-card"><span class="day-label">DAY 1</span><div><strong>集合・出発</strong><p>午前　都内某所に集合。貸切バスで出発予定。</p></div></div><div class="day-card"><span class="day-label">DAY 1</span><div><strong>現地プログラム</strong><p>午後　チーム交流企画、夕食、自由時間。</p></div></div><div class="day-card"><span class="day-label">DAY 2</span><div><strong>朝食・観光</strong><p>午前　開催地ならではの体験プログラムを予定。</p></div></div><div class="day-card"><span class="day-label">DAY 2</span><div><strong>帰着・解散</strong><p>夕方　都内着、解散。お疲れさまでした。</p></div></div></section><aside><div class="venue-box"><span class="tag">DESTINATION</span><h2>開催地</h2><strong>未定</strong><p>現在、候補地を幹事会で比較検討しています。決定後は交通、宿泊先、持ち物を追記します。</p><div class="venue-note">候補地アンケート結果<br><b>近日公開</b></div></div></aside></div>`;
}
function newsView() { return `<div class="page-intro"><div><span class="eyebrow">IN-HOUSE NEWS</span><h1>社内ニュース</h1></div><p>2026年、SHKで起きた出来事。<br>社員旅行の夜に話したいニュースを集めました。</p></div><div class="news-layout"><section><div class="section-heading"><h2>2026年の出来事</h2><a href="#">過去の記事 →</a></div>${newsItems.map((item) => `<article class="news-row"><time>${item[0]}</time><div><span class="tag">${item[2]}</span><h3>${item[1]}</h3><p>SHK社内アーカイブより</p></div></article>`).join("")}</section><aside><div class="topic-box"><h3>ニュースを探す</h3><a href="#">制作・放送</a><a href="#">人事・研修</a><a href="#">福利厚生</a><a href="#">社内イベント</a></div></aside></div>`; }
function incidentsView() { return `<div class="page-intro"><div><span class="eyebrow">UNEXPECTED FILES</span><h1>珍事件簿</h1></div><p>SHKの一年を彩った、ちょっとした事件。<br>笑って話せる範囲で記録しています。</p></div><div class="incident-list">${incidents.map((item) => `<article class="incident-card"><span>${item[0]}</span><div><h2>${item[1]}</h2><p>${item[2]}</p></div><b>+</b></article>`).join("")}</div>`; }
function resultsView() { return `<div class="page-intro"><div><span class="eyebrow">ANNUAL REPORT</span><h1>売上実績</h1></div><p>2026年度上期の速報値です。<br>数字の裏側にある、全員の仕事も紹介します。</p></div><div class="stats-grid"><div class="stat-card"><span>上期売上高</span><strong>12.8<span>億円</span></strong><small>前年比 <b>+8.4%</b></small></div><div class="stat-card"><span>番組配信本数</span><strong>486<span>本</span></strong><small>前年比 <b>+12.1%</b></small></div><div class="stat-card"><span>新規取引先</span><strong>37<span>社</span></strong><small>目標達成率 <b>123%</b></small></div><div class="stat-card"><span>社員満足度</span><strong>91<span>pt</span></strong><small>昨年度比 <b>+5pt</b></small></div></div><div class="result-note"><span class="tag">MESSAGE</span><h2>数字をつくったのは、現場の一人ひとりです。</h2><p>企画、制作、技術、営業、管理。見えないところで支え合った2026年上期。社員旅行では部署を越えて、これまでの仕事とこれからのSHKについて語り合いましょう。</p></div>`; }
function faqView() { return `<div class="page-intro"><div><span class="eyebrow">FAQ</span><h1>よくある質問</h1></div><p>社員旅行に関する基本情報です。<br>開催地決定後に内容を更新します。</p></div><div class="faq-list"><details open><summary>開催地はいつ決まりますか？</summary><p>10月上旬の決定を予定しています。決まり次第、社内メールとこのサイトでお知らせします。</p></details><details><summary>参加費用はいくらですか？</summary><p>会社補助を含めた金額を、開催地と宿泊先の決定後にご案内します。</p></details><details><summary>参加登録はどこからできますか？</summary><p>開催地決定後、このページに参加登録フォームへのリンクを掲載します。</p></details><details><summary>問い合わせ先を教えてください。</summary><p>旅行幹事会または総務部までご連絡ください。</p></details></div>`; }
function aboutView() { return `<div class="page-intro"><div><span class="eyebrow">ABOUT SHK</span><h1>このサイトについて</h1></div><p>SHK（水星放送協会）社員旅行2026の<br>社内限定特設サイトです。</p></div><div class="result-note"><span class="tag">FROM THE COMMITTEE</span><h2>知らない一面に会いに行こう。</h2><p>部署や拠点を越えて、普段は話せないことも話せる1泊2日を目指しています。企画の進捗、今年の出来事、旅行にまつわる情報をこのサイトでお届けします。</p></div>`; }
function render(view) {
  const views = { home: homeView, schedule: scheduleView, news: newsView, incidents: incidentsView, results: resultsView, faq: faqView, about: aboutView };
  app.innerHTML = `<div class="view-enter">${(views[view] || homeView)()}</div>`;
  nav.forEach((item) => item.classList.toggle("active", item.dataset.view === view || (view === "about" && item.dataset.view === "home")));
  observeRevealItems();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function observeRevealItems() {
  const items = app.querySelectorAll(".hero-grid, .ticker, .content-grid, .page-intro, .schedule-grid, .news-layout, .incident-card, .stats-grid, .result-note, .faq-list");
  if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); currentObserver.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
}
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  siteHeader.classList.toggle("is-scrolled", currentScroll > 12);
  siteHeader.classList.toggle("is-hidden", currentScroll > previousScroll && currentScroll > 150);
  backToTop.classList.toggle("is-visible", currentScroll > 480);
  previousScroll = currentScroll;
}, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view], a[href^='#']");
  if (!target) return;
  const view = target.dataset.view || target.getAttribute("href").slice(1);
  const validViews = ["home", "schedule", "news", "incidents", "results", "faq", "about"];
  if (validViews.includes(view)) { event.preventDefault(); history.pushState({ view }, "", `#${view}`); render(view); }
});
window.addEventListener("popstate", () => render(location.hash.slice(1) || "home"));
render(location.hash.slice(1) || "home");
