const bikes = [
  // Commuter Segment
  { id: 1, name: 'Hero Splendor', type: 'Commuter', price:799, img: 'https://imgd.aeplcdn.com/272x153/n/cw/ec/15109/splendor-plus-right-side-view-2.png?isig=0&q=80', desc: 'Reliable and fuel-efficient commuter bike ideal for daily city rides.' },
  { id: 2, name: 'Hero Passion Pro', type: 'Commuter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/50101/passion-pro-right-front-three-quarter.jpeg?q=80', desc: 'Stylish commuter bike with excellent mileage and comfort.' },
  { id: 3, name: 'Honda Livo', type: 'Commuter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum-20251737370775509.jpg?q=80', desc: 'Smooth ride and efficient performance for daily commuting.' },
  { id: 4, name: 'Honda Shine', type: 'Commuter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-shine-drum1751549564957.jpg?q=80', desc: 'Reliable commuter bike — perfect for short rides and city exploration.' },
  // Street Fighter (Sports bikes 
  { id: 5, name: 'Hero CBZ', type: 'Street Fighter', price:999, img: 'https://images.91wheels.com/assets/b_images/main/models/profile/profile1723293519.jpg?width=420&q=80', desc: 'Classic sporty performer with bold design and power-packed engine.' },
  { id: 6, name: 'Hero Xtreme', type: 'Street Fighter', price:999, img: 'https://imgd.aeplcdn.com/1056x594/n/cw/ec/169073/xtreme-125r-right-side-view-3.jpeg?isig=0&q=80&wm=3', desc: 'Dynamic and stylish — great for spirited city and highway rides.' },
  { id: 7, name: 'Yamaha FZS', type: 'Street Fighter', price:999, img: 'https://shop.yamaha-motor-india.com/cdn/shop/files/MicrosoftTeams-image_5_600x.jpg?v=1698824600', desc: 'Sporty feel with comfortable ergonomics for day trips.' },
  { id: 8, name: 'TVS Apache 160', type: 'Street Fighter', price:999, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/tvs-apache-160-rm-drum-black-edition1732629216165.jpg?q=80', desc: 'Aggressive styling and strong performance make it a street favorite.' },
  { id: 9, name: 'Honda Hornet', type: 'Street Fighter', price:999, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/207262/cb-125-hornet-right-side-view-3.jpeg?isig=0&q=80', desc: 'Muscular design and refined engine — perfect for weekend rides.' },

  // Higher CC
  { id: 10, name: 'Royal Enfield Hunter 350', type: 'Higher CC', price: 499, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-hunter-350-standard1745757843659.jpg?q=80', desc: 'Compact and stylish cruiser — ideal for city and highway rides.' },
  { id: 11, name: 'Royal Enfield Classic 350', type: 'Higher CC', price: 1499, img: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/cammando-sand/01.png', desc: 'Classic long-ride cruiser — ideal for scenic routes like Deomali.' },
  { id: 12, name: 'Royal Enfield Meteor 350', type: 'Higher CC', price: 499, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-meteor-350-fireball1757944044825.jpg?q=80', desc: 'Comfort cruiser built for long-distance touring with style.' },
  { id: 13, name: 'Benelli Imperiale 400', type: 'Higher CC', price: 499, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/48694/imperiale-400-right-side-view.png?isig=0&q=80', desc: 'Retro-styled motorcycle offering refined performance and comfort.' },

  // Scooters
  { id: 14, name: 'Honda Dio', type: 'Scooter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--standard-20251736863978494.jpg?q=80', desc: 'Lightweight and stylish scooter for easy city mobility.' },
  { id: 15, name: 'Honda Activa', type: 'Scooter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--connected-obd-2b1737697110094.jpg?q=80', desc: 'India’s most trusted scooter — smooth, reliable, and practical.' },
  { id: 16, name: 'Yamaha Fascino 125 Fi', type: 'Scooter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum-hybrid1755152120249.jpg?q=80', desc: 'Premium scooter with excellent mileage and comfort.' },
  { id: 17, name: 'Suzuki Access 125', type: 'Scooter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/suzuki-access-125-standard1738074352591.jpg?q=80', desc: 'Spacious, smooth, and refined scooter for everyday commuting.' },
  { id: 18, name: 'TVS Ntorq 125', type: 'Scooter', price:799, img: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/102709/ntorq-125-left-rear-three-quarter.jpeg?isig=0&q=80', desc: 'Performance scooter with sporty design and Bluetooth features.' }
];

export default bikes;
