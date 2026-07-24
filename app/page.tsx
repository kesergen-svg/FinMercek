const metrics = [
  ["24", "portföy yöneticisi"],
  ["314", "takip fonu"],
  ["7.478", "fon-hisse pozisyonu"],
  ["617", "BIST hissesi"],
];

const features = [
  {
    number: "01",
    title: "Fon KAP taraması",
    text: "314 fonun yeni portföy raporlarını toplu olarak bulur; yalnızca yeni yayımlanan verileri işler.",
  },
  {
    number: "02",
    title: "Değişim analizi",
    text: "Yeni girilen, çıkılan, ağırlığı artırılan ve azaltılan hisseleri dönem dönem karşılaştırır.",
  },
  {
    number: "03",
    title: "Gün sonu hisse radarı",
    text: "617 BIST hissesini teknik görünüm, fon desteği, yönetici ilgisi ve şirket KAP etkisiyle tarar.",
  },
  {
    number: "04",
    title: "Dengeli Atlas puanı",
    text: "Olumlu KAP’ı teknik teyit olmadan öne taşımaz; aşırı hızlanan hisselere momentum ısınma cezası uygular.",
  },
  {
    number: "05",
    title: "Günlük Atlas bülteni",
    text: "Kapanış fiyatını, dönemsel hareketleri ve yeni riskleri özetler; raporu TXT, PDF, Word veya Excel olarak verir.",
  },
  {
    number: "06",
    title: "Atlas yorumları",
    text: "Yüzlerce satırı sade bir aylık özete dönüştürür; ortak fon hareketlerini öne çıkarır.",
  },
];

const flow = [
  ["Güncelle", "Fon raporları ve gün sonu piyasa verileri yenilenir."],
  ["Tara", "617 hisse aynı kurallarla analiz edilir."],
  ["Dengele", "KAP teyidi, fon desteği ve momentum riski birlikte değerlendirilir."],
  ["Karşılaştır", "Fiyat, puan, seviye, KAP ve yeni risk değişimleri bulunur."],
  ["Raporla", "Günlük bülten ve aylık Atlas yorumu okunabilir çıktıya dönüşür."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Atlas Fon Takip Pro ana sayfa">
          <span className="brand-mark">A</span>
          <span>Atlas Fon Takip Pro</span>
        </a>
        <nav aria-label="Ana menü">
          <a href="#ozellikler">Özellikler</a>
          <a href="#gunluk-radar">Günlük Radar</a>
          <a href="#nasil-calisir">Nasıl çalışır?</a>
          <a href="#guvenlik">Güvenlik</a>
        </nav>
        <a className="header-cta" href="#urun">Ürünü keşfet</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Fon hareketleri ve BIST radarı, tek ekranda</p>
          <h1>
            Veriyi tek tek
            <br />
            <em>yorumlamayın.</em>
          </h1>
          <p className="hero-lead">
            314 fonun portföy hareketlerini ve 617 BIST hissesinin gün sonu
            görünümünü aynı sistemde izleyin. Atlas; teknik veriyi, fon desteğini,
            KAP etkisini ve riski birleştirip anlaşılır rapora dönüştürsün.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#urun">
              Ürünü incele <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#nasil-calisir">
              Nasıl çalıştığını gör <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="metric-grid" aria-label="Ürün kapsamı">
            {metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-stage" id="urun">
          <div className="stage-orbit orbit-one" aria-hidden="true" />
          <div className="stage-orbit orbit-two" aria-hidden="true" />
          <div className="product-window">
            <div className="window-bar">
              <span className="window-brand">ATLAS / FON İZLEME</span>
              <span className="live-pill"><i /> SİSTEM SAĞLIKLI</span>
            </div>
            <img
              src="/atlas-app.png"
              alt="Atlas Fon Takip Pro masaüstü uygulamasında gün sonu hisse radarı ve Atlas puanları"
            />
          </div>
          <div className="floating-card floating-top">
            <span className="card-icon">⌁</span>
            <div>
              <small>Gün sonu taraması</small>
              <strong>617 BIST hissesi</strong>
            </div>
          </div>
          <div className="floating-card floating-bottom">
            <span className="card-icon positive">↗</span>
            <div>
              <small>Birleşik değerlendirme</small>
              <strong>Teknik + Fon + KAP + Risk</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="first-fold-rule" />

      <section className="section feature-section" id="ozellikler">
        <div className="section-heading">
          <p className="eyebrow"><span /> Veriden içgörüye</p>
          <h2>Bugünün fotoğrafı değil,<br /><em>değişimin hikâyesi.</em></h2>
          <p>
            Atlas yalnızca veri sıralamaz. Fon portföylerindeki aylık değişimi ve
            hisselerdeki günlük hareketi ayrı ayrı analiz eder; dikkat edilmesi
            gereken gelişmeleri gerekçeleriyle görünür hâle getirir.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section daily-section" id="gunluk-radar">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Her piyasa günü</p>
          <h2>Günlük Hisse Radarı.<br /><em>Günlük Atlas Bülteni.</em></h2>
          <p>
            Atlas, 617 BIST hissesinin gün sonu verisini tarar; öne çıkanları,
            dikkat çeken hareketleri ve yeni riskleri sizin için kısa bir
            günlük rapora dönüştürür.
          </p>
        </div>
        <div className="daily-grid">
          <article className="daily-card">
            <span className="daily-label">01 / GÜNLÜK HİSSE RADARI</span>
            <h3>617 hisse, aynı ölçüm sistemi.</h3>
            <p>
              Teknik görünüm, fon ve yönetici desteği, şirket KAP etkisi,
              kapanış fiyatı, hacim ve momentum birlikte değerlendirilir.
            </p>
            <ul>
              <li>Güçlü, Olumlu, Orta, Zayıf ve Riskli sınıflandırması</li>
              <li>KAP için teknik teyit kapısı</li>
              <li>Aşırı yükselişe momentum ısınma cezası</li>
              <li>Her puanın görünür gerekçesi</li>
            </ul>
          </article>
          <article className="daily-card bulletin-card">
            <span className="daily-label">02 / GÜNLÜK ATLAS BÜLTENİ</span>
            <h3>Yüzlerce hisse, tek okunabilir özet.</h3>
            <p>
              Günün öne çıkan hisselerini, olağan dışı fiyat hareketlerini,
              puan ve seviye değişimlerini, fon desteğini ve yeni riskleri
              tek raporda gösterir.
            </p>
            <ul>
              <li>Kapanış, günlük, 5 günlük ve 20 günlük değişim</li>
              <li>Takip listesindeki hisselerin günlük durumu</li>
              <li>Olumlu ve olumsuz şirket KAP etkileri</li>
              <li>TXT, PDF, Word ve Excel çıktısı</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section flow-section" id="nasil-calisir">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Günlük ve aylık akış</p>
          <h2>Beş adım.<br /><em>Tek özet.</em></h2>
        </div>
        <div className="flow-list">
          {flow.map(([title, text], index) => (
            <div className="flow-item" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section safety-section" id="guvenlik">
        <div className="safety-copy">
          <p className="eyebrow"><span /> Veri güvenliği</p>
          <h2>Hızlı değilse bekler.<br /><em>Eksikse arşivlemez.</em></h2>
          <p>
            Eksik dönem arşivlenmez, hata alan fonda mevcut veri korunur. Olumlu
            şirket bildirimi teknik teyit olmadan puanı şişirmez; aşırı momentum
            ayrıca sınırlandırılır.
          </p>
        </div>
        <div className="safety-panel">
          <div><i className="ok" /><span>Dönem tamamlanma eşiği</span><strong>%90+</strong></div>
          <div><i className="ok" /><span>Başarısız güncellemede eski veri</span><strong>Korunur</strong></div>
          <div><i className="ok" /><span>KAP ve momentum puan kontrolü</span><strong>Dengeli</strong></div>
          <div><i className="ok" /><span>Sistem ve parser kontrolü</span><strong>Otomatik</strong></div>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow"><span /> Atlas Fon Takip Pro</p>
        <h2>Fonları ve hisseleri<br /><em>tek bakışta anlamlandırın.</em></h2>
        <p>
          24 yönetici, 314 fon, 7.478 pozisyon ve 617 BIST hissesi;
          günlük ve aylık karar desteği için tek yerde.
        </p>
        <a className="primary-button" href="https://github.com/kesergen-svg">
          Projeyi geliştirenle iletişim <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">A</span>
          <span>Atlas Fon Takip Pro</span>
        </a>
        <p>Veriler bilgilendirme amaçlıdır. Yatırım tavsiyesi değildir.</p>
        <span>© 2026 Atlas</span>
      </footer>
    </main>
  );
}
