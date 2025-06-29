# 📘 React Kullanıcı Formu - Code Challenge

Bu proje, frontend developer pozisyonu için verilen form bileşeni oluşturma görevini içermektedir. Amaç; yeniden kullanılabilir, validasyon destekli, kontrollü/kontrolsüz çalışabilen bir form bileşeni tasarlamak ve iki sayfalık bir kullanıcı oluşturma arayüzü geliştirmektir.

---

## 🚀 Özellikler

- ✅ React + TypeScript ile geliştirilmiştir
- ✅ `react-hook-form` kullanılarak validasyon ve form kontrolü yapılmıştır
- ✅ Tailwind CSS ile stil verilmiştir
- ✅ Yeniden kullanılabilir `Input` ve `Button` bileşenleri
- ✅ Form validasyonu (e-mail & alfanumerik şifre)
- ✅ Controlled / Uncontrolled input desteği
- ✅ Context ile form verisini farklı sayfaya taşıma
- ✅ Kullanıcı bilgilerini gösteren kart görünümü

---

## ❓ Neden `react-hook-form` kullandık?

`react-hook-form`, React uygulamalarında form yönetimini **performanslı**, **esnek** ve **kolay kullanılır** hale getiren popüler bir kütüphanedir. Bu projede tercih etmemizin başlıca nedenleri:

- **Performans:** Uncontrolled bileşenlere dayandığı için form alanlarında gereksiz render olmadan hızlı çalışır.
- **Kolay Validasyon:** Regex, required gibi validasyonları basit ve okunabilir şekilde tanımlamamızı sağlar.
- **Form Durum Yönetimi:** `formState` ile hatalar, validasyon durumu (`isValid`) gibi verilere kolay erişim sunar.
- **Yeniden Kullanılabilirlik:** Custom `Input` bileşenleri ile kolay entegrasyon sağlar.
- **Ölçeklenebilirlik:** Karmaşık formlarda ve dinamik alanlarda rahatça kullanılabilir.

Kısaca, bu kütüphane ile kullanıcı dostu, hatasız ve kolay yönetilebilir form yapıları oluşturmak mümkün oluyor.
