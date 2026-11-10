# CTA ve lead magnet skor kartı (internal)

Tarih: 2026-11-10. Bu belge sitede yayınlanmaz.

Skorlar koddan ve sayfa metinlerinden çıkarılmış **yargısal** puanlardır, ölçülmüş veri değildir (bu tarihte sitede analitik yoktu). Her kriter 0-5, toplam 25. Analitik açıldıktan sonra (`cta_click` olayları) gerçek veriyle yeniden skorlanmalıdır.

## Ana bulgular
1. Ölçüm yoktu (analitik eklendi, bkz. `CtaTracker`).
2. CTA'ların çoğu `mailto:`: sürtünme yüksek, kaynak sayfa bilinmiyor.
3. "Book Strategy Call" e-posta açıyor, randevu değil.
4. "Request Advisory" 9 yerde, genel.
5. Rehber, makale, vaka sayfalarında talep toplama yok.
6. Tek lead magnet var (Free Global Visibility Review), teslimatı manuel.

## CTA skor kartı
C=netlik, F=niyete uyum, L=düşük sürtünme, T=yakında güven/kanıt, M=ölçülebilirlik.

| CTA | Nerede | C | F | L | T | M | Toplam |
|---|---|---|---|---|---|---|---|
| Select & Pay (hizmet detay) | `/services/<slug>` | 5 | 5 | 4 | 4 | 1 | 19 |
| Select & Pay | `/services` | 5 | 5 | 4 | 3 | 1 | 18 |
| Request a Free Global Visibility Review (form) | `/services/global-digital-growth` | 5 | 4 | 3 | 3 | 2 | 17 |
| Explore Services | Ana sayfa hero | 4 | 4 | 5 | 2 | 0 | 15 |
| İlgili hizmet bağlantıları | Rehber sayfaları | 3 | 4 | 5 | 3 | 0 | 15 |
| Select & Pay (£1.000-1.800) | `/reports` | 5 | 4 | 3 | 2 | 1 | 15 |
| Contact us | Vaka detay | 3 | 3 | 2 | 5 | 0 | 13 |
| Book a Strategy Call → | `/love` | 2 | 4 | 2 | 4 | 0 | 12 |
| Contact sayfası (mailto) | `/contact` | 3 | 4 | 2 | 3 | 0 | 12 |
| Request Custom Report | `/reports` | 3 | 3 | 2 | 2 | 0 | 10 |
| Request Advisory | Ana sayfa CTA bölümü | 2 | 3 | 2 | 2 | 0 | 9 |
| Book Strategy Call | Ana sayfa hero | 2 | 3 | 2 | 2 | 0 | 9 |
| Launch enquiry (mailto) | Digital Products | 3 | 3 | 2 | 1 | 0 | 9 |
| Request Advisory | Navbar | 2 | 3 | 2 | 1 | 0 | 8 |
| Request Advisory Call | Makale sonu | 2 | 2 | 2 | 2 | 0 | 8 |

## Lead magnet skor kartı
V=alıcıya değeri, R=ücretli teklifle ilgisi, E=teslim kolaylığı (5=kolay), Q=lead kalitesi, M=ölçülebilirlik.

| Lead magnet | Durum | V | R | E | Q | M | Toplam |
|---|---|---|---|---|---|---|---|
| International Readiness Checklist (e-posta ile açılan) | Aday | 4 | 5 | 4 | 3 | 4 | 20 |
| Anonim örnek SEO audit | Aday (gerçek audit gerekir) | 4 | 5 | 3 | 4 | 3 | 19 |
| Etkileşimli hazırlık testi | Ertelendi (emek yüksek) | 4 | 5 | 1 | 4 | 5 | 19 |
| Free Global Visibility Review | Var | 4 | 5 | 2 | 5 | 2 | 18 |
| RFQ form şablonu | Aday | 3 | 4 | 4 | 3 | 4 | 18 |
| Rapor özeti (executive summary) | Aday | 3 | 4 | 4 | 3 | 3 | 17 |
| E-posta bülteni | Aday (e-posta altyapısı gerekir) | 3 | 3 | 3 | 2 | 4 | 15 |
| Rehberler (açık) | Var | 4 | 4 | 5 | 1 | 0 | 14 |
| Makaleler (açık) | Var | 3 | 3 | 5 | 1 | 0 | 12 |

## Yol haritası
1. Ölçüm (bu PR): Vercel Web Analytics + `cta_click` olayları (`data-cta`).
2. Tek talep formu `/contact#enquiry`, mailto CTA'larının yerine, `cta` ve `source_page` alanlarıyla.
3. Rehber, vaka ve makale sonuna içerik içi CTA.
4. Lead magnet: International Readiness Checklist.

## Güncelleme: randevu ve talep formu (2026-11-10)
- Randevu: `https://calendly.com/digiroiio/30min` (30 dk, Pzt-Cum 09:00-17:00 Europe/Istanbul). Tek kaynak: `src/lib/booking.ts`.
- "Book Strategy Call" CTA'ları artık gerçek randevuya gider (netlik ve sürtünme puanı yükselir, tahmini 9 -> 14).
- Genel "Request Advisory" CTA'ları `/contact#enquiry` formuna gider ("Send an Enquiry"); form `enquiry_source` alanıyla hangi CTA'dan gelindiğini kaydeder.
- Navbar: "Book a Call". Ana sayfa CTA bölümü: Send an Enquiry + Book a 30-Minute Call.
- Ölçüm: tüm bu CTA'larda `data-cta` (`book-call-*`, `enquiry-*`). Yeniden skorlama için Vercel Analytics `cta_click` verisi kullanılacak.
