const groupObj = [
  {
    id : 1,
    gId : 12,
    name : "Guruh #1",
    status : "Muzlatilgan",
    subject : "Matematika",
    educationType : "Sanoqli",
    payment : "200,000",
    teacher : "Alisher Xazratov",

  },
  {
    id : 2,
    gId : 13,
    name : "Guruh #13",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "200,000",
    teacher : "Valibek Nasimov",

  },
  {
    id : 3,
    gId : 14,
    name : "Guruh #14",
    status : "Aktiv",
    subject : "Ona tili",
    educationType : "Sanoqli",
    payment : "180,000",
    teacher : "Karimberdi Aliyev",

  },
  {
    id : 4,
    gId : 15,
    name : "Guruh #16",
    status : "Muzlatilgan",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "150,000",
    teacher : "Elmurod Toshqulov",
  },
  {
    id : 5,
    gId : 16,
    name : "Guruh #17",
    status : "Aktiv",
    subject : "Ingliz tili",
    educationType : "Sanoqli",
    payment : "180,000",
    teacher : "Aleksandr Ivanov",
  },
  {
    id : 6,
    gId : 17,
    name : "Guruh #16",
    status : "Muzlatilgan",
    subject : "Ingliz tili",
    educationType : "Oylik",
    payment : "150,000",
    teacher : "Albert Einstein",
  },
];

const teacherObj = [
  {
    id : 1,
    name : "Alisher Xazratov",
    group : 1,
    number : "(90) 212-22-15",
    groupNum : 1,
    img : "https://lebanonperfumes.com/images/testimonial/01.jpg"
  },
  {
    id : 2,
    name : "Valibek Nasimov",
    group : 13,
    number : "(99) 654-45-21",
    groupNum : 3,
    img : "https://cdn-icons-png.flaticon.com/512/183/183753.png"
  },
  {
    id : 3,
    name : "Karimberdi Aliyev",
    group : 17,
    number : "(93) 305-85-59",
    groupNum : 2,
    img : "https://cdn-icons-png.flaticon.com/512/247/247783.png"
  },
  {
    id : 4,
    name : "Elmurod Toshqulov",
    group : 14,
    number : "(90) 231-45-65",
    groupNum : 1,
    img : "https://www.shareicon.net/data/512x512/2016/07/26/801997_user_512x512.png"
  },
  {
    id : 5,
    name : "Aleksandr Ivanov",
    group : 16,
    number : "(91) 319-18-91",
    groupNum : 1,
    img : "https://muast.ac.zw/wp-content/uploads/2019/02/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels-1.png"
  }
];

const studentObj = [
  {
    id : 1,
    name : "Abdullokh Giyasov",
    group : [1],
    number : "(93) 688-64-61",
    groupNum : 6,
    img: 'https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-6.jpg'
  },
  {
    id : 2,
    name : "Shaxzod Unknown",
    group : [1],
    number : "(95) 151-25-12",
    groupNum : 1,
    img: 'https://www.nmcnagpur.gov.in/grievance/public//images/user/user-thumb.jpg'
  },
  {
    id : 3,
    name : "Akbarali Tengelov",
    group : [13, 14, 16],
    number : "(90) 201-90-25",
    groupNum : 3,
    img: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=395'

  },
  {
    id : 4,
    name : "Muhammadsodiq Koziyev",
    group : [17, 1],
    number : "(99) 119-51-51",
    groupNum : 2,
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'

  },
  {
    id : 5,
    name : "Jamoliddin Najmiddinov",
    group : [13],
    number : "(94) 251-21-21",
    groupNum : 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&usqp=CAU'

  },
  {
    id : 6,
    name : "Aziz Rakhim",
    group : [14],
    number : "(95) 011-36-33",
    groupNum : 1,
    img: 'http://bootstrap.gallery/everest-v3/img/user1.jpg'

  },
  {
    id : 7,
    name : "Samandar Bohodirov",
    group : [16, 17],
    number : "(91) 171-99-11",
    groupNum : 2,
    img: 'https://www.aucshow.com/assets/frontend/global/img/users/7.jpg'

  },

  {
    id : 8,
    name : "Ulug'bek Vahidov",
    group : [13],
    number : "(73) 501-13-63",
    groupNum : 1,
    img: 'https://focus-gems.com/wp-content/uploads/2017/07/1.jpg'

  },
  {
    id : 9,
    name : "Allan Rajabov",
    group : [14],
    number : "(71) 616-17-91",
    groupNum : 4,
    img: 'https://e1.pngegg.com/pngimages/258/65/png-clipart-cody-christian-man-s-face.png'

  },
  {
    id : 10,
    name : "Abdunozir Unknown",
    group : [16],
    number : "(33) 719-39-51",
    groupNum : 2,
    img: 'http://propuesta.pro/public/theme/assets/images/users/1.jpg'

  }
]

export {groupObj, teacherObj, studentObj};