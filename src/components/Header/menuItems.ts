const menuItems = [
  {
    id: 'about-us',
    name: 'Over Ons',
    items: [
      { id: 'our-desire', name: 'Ons verlangen', url: 'our-desire' },
      { id: 'recommenders', name: 'Aanbevelingen', url: 'recommenders' },
      { id: 'donations', name: 'Donaties', url: 'donaties' },
      { id: 'blogs', name: 'Blogs', url: 'blogs' },
    ]
  },
  { id: 'register', name: 'Aanmelden', url: 'register' },
  {
    id: 'courses',
    name: 'Cursussen',
    items: [
      { id: 'series', name: 'Per serie', url: 'series' },
      { id: 'levels', name: 'Op niveau', url: 'levels' },
      { id: 'all-courses', name: 'Alle cursussen', url: 'courses' },
    ]
  },
  { id: 'faq', name: 'FAQ', url: 'faq' }
];

export default menuItems;
