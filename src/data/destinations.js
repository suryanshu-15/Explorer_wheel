const destinations = [
  { id: 1, name: 'Deomali Peak', short: 'Highest peak around Koraput — sunrise views.', img: 'https://static2.tripoto.com/media/filter/tst/img/1733280/TripDocument/1604628408_1604628404557.jpg' },
  { id: 2, name: 'Kolab Dam', short: 'Picturesque dam and picnic spot.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BYoKKHqBvNQhB0nxhE2vlzneuF2F7x98WQ&s' },
  { id: 3, name: 'Gupteshwar Cave', short: 'Ancient cave temple with spiritual vibes.', img: 'https://sahasa.in/wp-content/uploads/2020/10/2018051738-1024x768-1-e1603431604139.jpg' },
  { id: 4, name: 'Pine Forest', short: 'Quiet pine forest for serene walks.', img: 'https://odishatour.in/wp-content/uploads/2025/04/koraput-nature-camp-resorts.jpg' },
  { id: 5, name: 'Sabara Srikhetra', short: 'Famous local spiritual site.', img: 'https://mediakoraput.wordpress.com/wp-content/uploads/2017/06/1424273_10152507438167170_1543778944467940525_n.jpg' },
  { id: 6, name: 'Tribal Museum', short: 'Museum showcasing tribal culture and artifacts.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9UAUYn4O2bj0ER-AsL5LTBfuu-lKCIYeQQ&s' },
  { id: 7, name: 'Coffee Garden', short: 'Lush coffee plantations.', img: 'https://i.ytimg.com/vi/rg0udnrfqz0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBj4q41Yk7gkMnTwiyyk83HHjBdRQ' },
  { id: 8, name: 'Talamali', short: 'Beautiful scenic spot with natural surroundings.', img: 'https://th-i.thgim.com/public/incoming/rdz7bz/article69739089.ece/alternates/FREE_1200/00014Deo.jpg' },
  { id: 9, name: 'Galigabdar Waterfall', short: 'Stunning waterfall for nature lovers.', img: 'https://pbs.twimg.com/media/EpqXn2EUcAIYuF4.jpg' },
  { id: 10, name: 'Raniduduma', short: 'Popular waterfall and picnic spot.', img: 'https://www.odishalifestyle.com/wp-content/uploads/2022/02/dudum.jpg' },
  { id: 11, name: 'Hanuman Vatika', short: 'Religious garden dedicated to Hanuman.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vNK22C8uPtuTEKISR_U5pPrwp2wnRikV_w&s' },
  { id: 12, name: 'Kantabausuni Temple', short: 'Ancient temple with historical significance.', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGm87p7hRR-2QtFcfpEf8tsEflYjRc3lDCBBVGbqIteZjzY6GJ_UUcIRX7KWLZ8Z5ZuLRuYFgBtZfgtTlSucSMzlF758EjvBAHPzptl_84XrPnT_kDuWxTNqA3qJoLyHMvF_I9-Xeuim8/s1600/bamboo1.jpg' },
  { id: 13, name: 'Redmud Pond', short: 'Unique red-colored pond surrounded by nature.', img: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqf9tBw_l3tCMBnq_6XzH3srA1dpsOTotvRa-d1eiwZeGRkF9i4VCmSnUHBNd6-bPxbTi6fu-DJHQRMt1tVehHNN5cEp7Qm_8RMBRUih1yL9cAcKlUkmoYyTiq7gvuJQwcphGg=s680-w680-h510-rw' },
  { id: 14, name: 'Machkund Duduma', short: 'Waterfalls and scenic river area.', img: 'https://tourmyodisha.com/wp-content/uploads/2025/09/DUDUMA-WATERFALL-KORAPUT.jpg' },
  { id: 15, name: 'Kechla Picnic Spot', short: 'Great spot for family picnics.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QPoOuchOGuUOPZYR9Ep1TAXIF101WD0Dt5lxM90RSxQf2jyaUVeJawBrwMuMvjbIuYU&usqp=CAU' },
  { id: 16, name: 'Punjisil', short: 'Natural beauty and open landscapes.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9cIBVquihjIKpuOrvtBzIlq1-8k8x2w5hw&s' },
  { id: 17, name: 'Talamiting', short: 'Serene location for nature walks.', img: 'https://i.ytimg.com/vi/iw7uKrKcz-E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCkGJjSm_OI8U-YOD4aEmvpzbfpTw' },
  { id: 18, name: 'Sahasra Siblinga', short: 'Cultural and spiritual landmark.', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b2/79/79/caption.jpg?w=1200&h=-1&s=1' },
  { id: 19, name: 'Chitrakoot', short: 'Scenic waterfalls and landscapes.', img: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-Things-To-Do-In-Chitrakoot.jpg' },
  { id: 20, name: 'Tiratgad', short: 'Historical fort with panoramic views.', img: 'https://holaciti.com/assets/place/1751787018_D9itE1Da1n.webp' },
]

export default destinations
