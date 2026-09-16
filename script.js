const stories = [
  { tag: "まちの現在", title: "朝の市場に、新しい風が吹く。小さな商店街の再出発", image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=85", text: "世代を越えて人が集まる場所を、もう一度。" },
  { tag: "科学と環境", title: "海辺の研究室から届いた、未来のエネルギーの話", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=85", text: "暮らしのすぐそばで進む研究を訪ねました。" },
  { tag: "ひと", title: "手紙を書く時間が、教えてくれたこと", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=85", text: "言葉を残す人々の静かな営み。" },
  { tag: "食の風景", title: "一皿の先にある、土地の記憶", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85", text: "旬をいただく、季節の台所から。" }
];
const programs = [
  { title: "問いの食卓", text: "身近な疑問を、専門家と一緒に考える", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=85" },
  { title: "旅する灯り", text: "知らない町の日常に会いに行く", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=700&q=85" },
  { title: "音の余白", text: "声と音楽でつくる、夜の30分", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=700&q=85" },
  { title: "明日の教室", text: "学び方をひらく、土曜の対話", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=85" },
  { title: "台所の窓", text: "季節の手仕事と、家族のレシピ", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=85" },
  { title: "夜の図書室", text: "本をめぐって語り合う静かな時間", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=700&q=85" }
];
const newsItems = [
  ["09:42", "都市と水の新しい関係を考える、来月から実証実験", "くらし・環境"], ["09:10", "秋の訪れを知らせる花、山間の町で見ごろに", "地域"], ["08:36", "全国の図書館がつなぐ「まちの記憶」アーカイブ", "文化"], ["昨日", "若手の職人を支える工房、海沿いの町に開設", "ひと"], ["昨日", "食卓から考える防災。常備食をめぐる小さな実験", "くらし"], ["9月14日", "夜空の変化を記録する、市民観測会の取り組み", "科学"]
];
const app = document.querySelector("#app");
const nav = document.querySelectorAll(".nav-item");
const image = (story) => `<img src="${story.image}" alt="${story.title}" loading="lazy">`;
const heading = (label, title, link = "") => `<div class="section-heading"><h2><span class="eyebrow">${label}</span>${title}</h2>${link ? `<a href="#">${link} →</a>` : ""}</div>`;

function homeView() {
  return `<div class="hero-grid"><article class="hero-story">${image(stories[0])}<div class="hero-copy"><span class="tag">${stories[0].tag}</span><h1>${stories[0].title}</h1><p>${stories[0].text}</p></div></article><div class="side-stories">${stories.slice(1, 3).map((story) => `<article class="side-story">${image(story)}<div class="side-copy"><span class="tag">${story.tag}</span><h3>${story.title}</h3><time>9月16日</time></div></article>`).join("")}</div></div><div class="ticker"><strong>いま知りたい</strong><span>各地で気温上昇。水分補給と室内の換気を心がけて</span></div><div class="content-grid"><section>${heading("LATEST", "最新の記事", "一覧を見る")}<div class="story-list">${stories.slice(1).map((story) => `<article class="list-story">${image(story)}<div><span class="tag">${story.tag}</span><h3>${story.title}</h3><span class="story-meta">9月16日　灯台通信編集部</span></div></article>`).join("")}</div></section><aside><div class="section-heading"><h2><span class="eyebrow">PICK UP</span>注目のテーマ</h2></div><div class="topic-box"><h3>いま、考えたいこと</h3><a href="#">地域の交通をつなぐ</a><a href="#">変わる働き方と学び</a><a href="#">海と暮らすために</a><a href="#">秋の食卓を楽しむ</a></div></aside></div>`;
}
function newsView() {
  return `<div class="page-intro"><div><span class="eyebrow">NEWS</span><h1>ニュース</h1></div><p>社会の動きから、あなたのまちの話題まで。<br>背景にある声とともにお届けします。</p></div><div class="category-tabs"><button class="active">すべて</button><button>社会</button><button>くらし</button><button>科学・環境</button><button>文化</button><button>地域</button></div><div class="news-layout"><section><div class="section-heading"><h2>今日のニュース</h2><a href="#">過去の記事 →</a></div>${newsItems.map((item) => `<article class="news-row"><time>${item[0]}</time><div><span class="tag">${item[2]}</span><h3>${item[1]}</h3><p>現場からの詳しい情報をお伝えします。</p></div></article>`).join("")}</section><aside><div class="topic-box"><h3>ニュースを探す</h3><a href="#">社会</a><a href="#">政治・経済</a><a href="#">科学・環境</a><a href="#">スポーツ</a><a href="#">文化・エンタメ</a></div></aside></div>`;
}
function programsView() {
  return `<div class="page-intro"><div><span class="eyebrow">PROGRAMS</span><h1>番組</h1></div><p>見たい、聞きたい、知りたいに出会う。<br>灯台通信のオリジナル番組。</p></div><div class="category-tabs"><button class="active">すべて</button><button>ドキュメンタリー</button><button>情報・教養</button><button>音声番組</button></div><div class="program-grid">${programs.map((program, index) => `<article class="program-card">${image(program)}<div><span class="tag">${index % 2 ? "毎週土曜" : "毎週水曜"}</span><h3>${program.title}</h3><p>${program.text}</p></div></article>`).join("")}</div>`;
}
function regionsView() {
  return `<div class="page-intro"><div><span class="eyebrow">REGIONS</span><h1>地域</h1></div><p>全国の編集室から、土地に根ざした話題を。<br>あなたの知らない日常に出会えます。</p></div><div class="region-layout"><a class="region-card" href="#"><span>北の編集室</span><h3>北海道・東北</h3><p>風土と暮らしの変化を見つめる</p></a><a class="region-card" href="#"><span>水辺の編集室</span><h3>関東・甲信越</h3><p>都市と自然、そのあいだ</p></a><a class="region-card" href="#"><span>山の編集室</span><h3>東海・北陸</h3><p>手仕事と産業のこれから</p></a><a class="region-card" href="#"><span>海の編集室</span><h3>近畿・中国・四国・九州</h3><p>海と人がつくる風景</p></a></div>`;
}
function simpleView(title, label, description) { return `<div class="page-intro"><div><span class="eyebrow">${label}</span><h1>${title}</h1></div><p>${description}</p></div><div class="content-grid" style="margin-top:32px"><section>${heading("FEATURE", "おすすめの記事", "もっと見る")}<div class="story-list">${stories.map((story) => `<article class="list-story">${image(story)}<div><span class="tag">${story.tag}</span><h3>${story.title}</h3><span class="story-meta">9月16日　灯台通信編集部</span></div></article>`).join("")}</div></section><aside><div class="topic-box"><h3>テーマから探す</h3><a href="#">季節のこと</a><a href="#">家族と仕事</a><a href="#">心とからだ</a><a href="#">旅と発見</a></div></aside></div>`; }
function render(view) {
  const views = { home: homeView, news: newsView, programs: programsView, regions: regionsView, life: () => simpleView("くらし", "LIFE", "日々の選択を少し豊かにする、暮らしのヒントと考え方。"), culture: () => simpleView("文化と旅", "CULTURE & TRAVEL", "本、音楽、土地の物語。世界の見え方が変わる出会いを。"), about: () => simpleView("灯台通信について", "ABOUT", "灯台通信は、人と地域のこれからを照らすオリジナルメディアです。") };
  app.innerHTML = `<div class="view-enter">${(views[view] || homeView)()}</div>`;
  nav.forEach((item) => item.classList.toggle("active", item.dataset.view === view || (view === "about" && item.dataset.view === "home")));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("click", (event) => { const target = event.target.closest("[data-view]"); if (target) { event.preventDefault(); const view = target.dataset.view; history.pushState({ view }, "", `#${view}`); render(view); } });
window.addEventListener("popstate", () => render(location.hash.slice(1) || "home"));
render(location.hash.slice(1) || "home");