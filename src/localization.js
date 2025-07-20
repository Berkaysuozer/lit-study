const translations = {
  en: {
    employeeListTitle: 'Employee List Page',
    employeeListDescription: 'Here employees will be listed.',
    addEmployee: 'Add Employee',
    delete: 'Delete',
    edit: 'Edit',
    confirmDelete: 'Are you sure you want to delete this employee?',
    id: 'ID',
    firstName: 'First Name',
    lastName: 'Last Name',
    employmentDate: 'Date of Employment',
    birthDate: 'Birth Date',
    phone: 'Phone',
    email: 'Email',
    department: 'Department',
    position: 'Position',
    actions: 'Actions'
  },
  tr: {
    employeeListTitle: 'Çalışan Listesi',
    employeeListDescription: 'Burada çalışanlar listelenecek.',
    addEmployee: 'Çalışan Ekle',
    delete: 'Sil',
    edit: 'Düzenle',
    confirmDelete: 'Bu çalışanı silmek istediğinizden emin misiniz?',
    id: 'ID',
    firstName: 'Ad',
    lastName: 'Soyad',
    employmentDate: 'İşe Giriş',
    birthDate: 'Doğum Tarihi',
    phone: 'Telefon',
    email: 'Email',
    department: 'Bölüm',
    position: 'Pozisyon',
    actions: 'Aksiyonla'
  }
};

let currentLang = localStorage.getItem('app-language') || 'tr';
document.documentElement.lang = currentLang;

export function t(key) {
  return translations[currentLang][key] || key;
}

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('app-language', lang);
    window.location.reload();
  }
}

export function getCurrentLanguage() {
  return currentLang;
}
