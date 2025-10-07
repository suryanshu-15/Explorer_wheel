const bikes = [
  // Commuter Segment
  { id: 1, name: 'Hero Splendor', type: 'Commuter', price: '₹799 / day', img: 'https://shop.yamaha-motor-india.com/cdn/shop/files/MicrosoftTeams-image_5_600x.jpg?v=1698824600', desc: 'Reliable and fuel-efficient commuter bike ideal for daily city rides.' },
  { id: 2, name: 'Hero Passion Pro', type: 'Commuter', price: '₹799 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/103855/passion-pro-right-side-view0.jpeg?q=80', desc: 'Stylish commuter bike with excellent mileage and comfort.' },
  { id: 3, name: 'Honda Livo', type: 'Commuter', price: '₹799 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/104501/livo-right-side-view.jpeg?q=80', desc: 'Smooth ride and efficient performance for daily commuting.' },
  { id: 4, name: 'Honda Shine', type: 'Commuter', price: '₹799 / day', img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-shine-drum1751549564957.jpg?q=80', desc: 'Reliable commuter bike — perfect for short rides and city exploration.' },

  // Street Fighter (Sports bikes)
  { id: 5, name: 'Hero CBZ', type: 'Street Fighter', price: '₹999 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/40505/hero-honda-cbz-right-side-view0.jpeg?q=80', desc: 'Classic sporty performer with bold design and power-packed engine.' },
  { id: 6, name: 'Hero Xtreme', type: 'Street Fighter', price: '₹999 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/112721/xtreme-160r-4v-right-side-view.jpeg?q=80', desc: 'Dynamic and stylish — great for spirited city and highway rides.' },
  { id: 7, name: 'Yamaha FZS', type: 'Street Fighter', price: '₹1199 / day', img: 'https://shop.yamaha-motor-india.com/cdn/shop/files/MicrosoftTeams-image_5_600x.jpg?v=1698824600', desc: 'Sporty feel with comfortable ergonomics for day trips.' },
  { id: 8, name: 'TVS Apache 160', type: 'Street Fighter', price: '₹1199 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/110701/apache-rtr-160-2v-right-side-view0.jpeg?q=80', desc: 'Aggressive styling and strong performance make it a street favorite.' },
  { id: 9, name: 'Honda Hornet', type: 'Street Fighter', price: '₹1199 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/106321/hornet-2-0-right-side-view0.jpeg?q=80', desc: 'Muscular design and refined engine — perfect for weekend rides.' },

  // Higher CC
  { id: 10, name: 'Royal Enfield Hunter 350', type: 'Higher CC', price: '₹1399 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/119557/hunter-350-right-side-view0.jpeg?q=80', desc: 'Compact and stylish cruiser — ideal for city and highway rides.' },
  { id: 11, name: 'Royal Enfield Classic 350', type: 'Higher CC', price: '₹1499 / day', img: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/cammando-sand/01.png', desc: 'Classic long-ride cruiser — ideal for scenic routes like Deomali.' },
  { id: 12, name: 'Royal Enfield Meteor 350', type: 'Higher CC', price: '₹1499 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/106191/meteor-350-right-side-view0.jpeg?q=80', desc: 'Comfort cruiser built for long-distance touring with style.' },
  { id: 13, name: 'Benelli Imperiale 400', type: 'Higher CC', price: '₹1499 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/41962/imperiale-400-right-side-view0.jpeg?q=80', desc: 'Retro-styled motorcycle offering refined performance and comfort.' },

  // Scooters
  { id: 14, name: 'Honda Dio', type: 'Scooter', price: '₹799 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/106317/dio-right-side-view0.jpeg?q=80', desc: 'Lightweight and stylish scooter for easy city mobility.' },
  { id: 15, name: 'Honda Activa', type: 'Scooter', price: '₹799 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/112401/activa-6g-right-side-view.jpeg?q=80', desc: 'India’s most trusted scooter — smooth, reliable, and practical.' },
  { id: 16, name: 'Yamaha Fascino 125 Fi', type: 'Scooter', price: '₹949 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/108403/fascino-125-right-side-view0.jpeg?q=80', desc: 'Premium scooter with excellent mileage and comfort.' },
  { id: 17, name: 'Suzuki Access 125', type: 'Scooter', price: '₹949 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/108411/access-125-right-side-view.jpeg?q=80', desc: 'Spacious, smooth, and refined scooter for everyday commuting.' },
  { id: 18, name: 'TVS Ntorq 125', type: 'Scooter', price: '₹949 / day', img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/104685/ntorq-125-right-side-view0.jpeg?q=80', desc: 'Performance scooter with sporty design and Bluetooth features.' }
];

export default bikes;
