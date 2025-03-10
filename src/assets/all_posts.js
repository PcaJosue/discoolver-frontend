const allPosts = [
        {
            type: "influencer_list",
            data: [
                {
                    id: 1,
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 2,
                    avatar: "https://framerusercontent.com/images/saLYvWtE2K22WFYXsPJ2Db9awU.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 3,
                    avatar: "https://framerusercontent.com/images/1AApdTA1Jcy0gmPsJAbExiDg.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 4,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 5,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 6,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 7,
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 8,
                    avatar: "https://framerusercontent.com/images/saLYvWtE2K22WFYXsPJ2Db9awU.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 9,
                    avatar: "https://framerusercontent.com/images/1AApdTA1Jcy0gmPsJAbExiDg.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 10,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 11,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 12,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 13,
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 14,
                    avatar: "https://framerusercontent.com/images/saLYvWtE2K22WFYXsPJ2Db9awU.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 15,
                    avatar: "https://framerusercontent.com/images/1AApdTA1Jcy0gmPsJAbExiDg.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 16,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 17,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },
                {
                    id: 18,
                    avatar: "https://framerusercontent.com/images/FpL2HbDsIDFhX9nbyl1EudwFQ9A.png",
                    nickname: "@NombreInfluencer"
                },

            ]
        },
        { type: "main_post",
            data: [
                {
                    id: 1,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Nombre",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Nombre influencer",
                    postDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nulla, accumsan eget tempor a, condimentum at augue.",
                    hashtags: ["#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag"]
                },
                {
                    id: 2,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "María González",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Segundo post de ejemplo",
                    postDescription:
                        "Donec sed magna quis sapien pretium condimentum. Nullam semper ipsum eros, ac ultrices sem interdum non. Vivamus massa sem.",
                    hashtags: ["#Creatividad", "#Hashtag", "#Ejemplo", "#Tecnología", "#Emprendimiento", "#Hashtag"]
                },
                {
                    id: 3,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Juan Pérez",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Tercer post de ejemplo",
                    postDescription:
                        "Proin a eros a dui porttitor molestie in et risus. Nunc id sapien ac risus convallis posuere a nec neque.",
                    hashtags: ["#Hashtag", "#Innovación", "#Hashtag", "#Productividad", "#Hashtag", "#Motivación"]
                }
            
        ]
        },
        {
            type: "circle_hashtag_plans",
            data: [
                {
                    id: 1,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 2,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 3,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 4,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },
                {
                    id: 5,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 6,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 7,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 8,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },
                {
                    id: 9,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 10,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 11,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 12,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },
                {
                    id: 13,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 14,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 15,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 16,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },
                {
                    id: 17,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 18,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 19,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 20,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },
                {
                    id: 21,
                    avatar: "https://www.singulart.com/images-sh/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiZ2FsbGVyaWVzXC9kaXJlY3RvcnlcL3NwYWluXC9jaXRpZXNcL21hZHJpZC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQ2OCwiaGVpZ2h0Ijo0NjgsImZpdCI6ImNvdmVyIn0sInRvRm9ybWF0IjoianBlZyJ9fQ==?signature=ed0a9e568b56c44ad610d93ab9e98bb1f5b24dc13c7de26bf0579121318af735",
                    hashtag: "#monumentos"
                },
                {
                    id: 22,
                    avatar: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7S951VLyf3U9ShR-10pevgfj065enLwqxXQ8N4MZ7rREb30LQ",
                    hashtag: "#rutas_naturaleza"
                },
                {
                    id: 23,
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x993gh8itCEIr3EgiFWAOMqAwQuftQqRCABuIGzrkLVnIcVj",
                    hashtag: "#arte&cultura"
                },
                {
                    id: 24,
                    avatar: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    hashtag: "#hashtag_1m.aximi"
                },

            ]
        },
        { type: "main_post",
            data: [
                {
                    id: 1,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Nombre",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Nombre influencer",
                    postDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nulla, accumsan eget tempor a, condimentum at augue.",
                    hashtags: ["#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag"]
                },
                {
                    id: 2,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "María González",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Segundo post de ejemplo",
                    postDescription:
                        "Donec sed magna quis sapien pretium condimentum. Nullam semper ipsum eros, ac ultrices sem interdum non. Vivamus massa sem.",
                    hashtags: ["#Creatividad", "#Hashtag", "#Ejemplo", "#Tecnología", "#Emprendimiento", "#Hashtag"]
                },
                {
                    id: 3,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Juan Pérez",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Tercer post de ejemplo",
                    postDescription:
                        "Proin a eros a dui porttitor molestie in et risus. Nunc id sapien ac risus convallis posuere a nec neque.",
                    hashtags: ["#Hashtag", "#Innovación", "#Hashtag", "#Productividad", "#Hashtag", "#Motivación"]
                }
            
        ]
        },
        {
            type: "list_plan",
            data: [
                {
                    "id": 1,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                },
                {
                    "id": 2,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                },
                {
                    "id": 3,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                },
                {
                    "id": 4,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                },
                {
                    "id": 5,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                },
                {
                    "id": 6,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                },
                {
                    "id": 7,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                },
                {
                    "id": 8,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                },
                {
                    "id": 9,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://i.ytimg.com/vi/To2onDip2iE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggKyh_MA8=&rs=AOn4CLCiR8g5tOeNBZ5cOFlw-CPic9B2TA"
                },
                {
                    "id": 10,
                    "rating": "Label",
                    "title": "Nombre del plan",
                    "description": "@nicknamenombreinfluencer01extralargos",
                    "image": "https://img.freepik.com/premium-photo/ultraviolet-spectrum-blue-violet-neon-lights-laser-show-night-club-equalizer-abstract-fluorescent-background-optical-illusion-virtual-reality-physics-concept-physics-lab_1028938-448616.jpg"
                }
            ]

        },
        { type: "main_post",
            data: [
                {
                    id: 1,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Nombre",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Nombre influencer",
                    postDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nulla, accumsan eget tempor a, condimentum at augue.",
                    hashtags: ["#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag"]
                },
                {
                    id: 2,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "María González",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Segundo post de ejemplo",
                    postDescription:
                        "Donec sed magna quis sapien pretium condimentum. Nullam semper ipsum eros, ac ultrices sem interdum non. Vivamus massa sem.",
                    hashtags: ["#Creatividad", "#Hashtag", "#Ejemplo", "#Tecnología", "#Emprendimiento", "#Hashtag"]
                },
                {
                    id: 3,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Juan Pérez",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Tercer post de ejemplo",
                    postDescription:
                        "Proin a eros a dui porttitor molestie in et risus. Nunc id sapien ac risus convallis posuere a nec neque.",
                    hashtags: ["#Hashtag", "#Innovación", "#Hashtag", "#Productividad", "#Hashtag", "#Motivación"]
                }
            
        ]
        },
        {
            type: "rating_plan",
            data: [
                {
                    ratingPlanImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2hsdrEDJUzyHokyal3p6dRa6ucEUMPjNFKmkrJ-JMA6bE0A5l",
                    rating: "#1",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 1
                },
                {
                    ratingPlanImage: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    rating: "#2",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 2
                },
                {
                    ratingPlanImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzq_Uyx5joI8CGqaqtIW0mR_f6CCLaEO3W9AoHtodLq8yaZ3W6",
                    rating: "#3",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 3
                },
                {
                    ratingPlanImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2hsdrEDJUzyHokyal3p6dRa6ucEUMPjNFKmkrJ-JMA6bE0A5l",
                    rating: "#4",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 4
                },
                {
                    ratingPlanImage: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    rating: "#5",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 5
                },
                {
                    ratingPlanImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzq_Uyx5joI8CGqaqtIW0mR_f6CCLaEO3W9AoHtodLq8yaZ3W6",
                    rating: "#6",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 6
                },
                {
                    ratingPlanImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2hsdrEDJUzyHokyal3p6dRa6ucEUMPjNFKmkrJ-JMA6bE0A5l",
                    rating: "#7",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 7
                },
                {
                    ratingPlanImage: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    rating: "#8",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 8
                },
                {
                    ratingPlanImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzq_Uyx5joI8CGqaqtIW0mR_f6CCLaEO3W9AoHtodLq8yaZ3W6",
                    rating: "#9",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 9
                },
                {
                    ratingPlanImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2hsdrEDJUzyHokyal3p6dRa6ucEUMPjNFKmkrJ-JMA6bE0A5l",
                    rating: "#10",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 10
                },
                {
                    ratingPlanImage: "https://images.unsplash.com/photo-1594352485943-79369c4531d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5pbWFjaSVDMyVCM24lMjBub2N0dXJuYXxlbnwwfHwwfHx8MA==",
                    rating: "#11",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 11
                },
                {
                    ratingPlanImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzq_Uyx5joI8CGqaqtIW0mR_f6CCLaEO3W9AoHtodLq8yaZ3W6",
                    rating: "#12",
                    planName: "Nombre del plan a un max de 2 lineas si no se cortará",
                    id: 12
                },
            ]
        },
        { type: "main_post",
            data: [
                {
                    id: 1,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Nombre",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Nombre influencer",
                    postDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nulla, accumsan eget tempor a, condimentum at augue.",
                    hashtags: ["#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag"]
                },
                {
                    id: 2,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "María González",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Segundo post de ejemplo",
                    postDescription:
                        "Donec sed magna quis sapien pretium condimentum. Nullam semper ipsum eros, ac ultrices sem interdum non. Vivamus massa sem.",
                    hashtags: ["#Creatividad", "#Hashtag", "#Ejemplo", "#Tecnología", "#Emprendimiento", "#Hashtag"]
                },
                {
                    id: 3,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Juan Pérez",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Tercer post de ejemplo",
                    postDescription:
                        "Proin a eros a dui porttitor molestie in et risus. Nunc id sapien ac risus convallis posuere a nec neque.",
                    hashtags: ["#Hashtag", "#Innovación", "#Hashtag", "#Productividad", "#Hashtag", "#Motivación"]
                }
            
        ]
        },
        {
            type: "secondary_post",
            data: [
                {
                    profileImg: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
                    image: "https://images.ctfassets.net/i3kf1olze1gn/7EiOswMbQZzEonbCHGmiQk/18cbecfdcf1b2b3cb2378bdc86f905a7/alev-takil-x2Or94kjaqo-unsplash.jpg?q=55&w=400",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer01extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81c0TN0YeIgAaneu5g57xRXPp6dbRZcCwdQ&s",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe82bWJUqma6Zq4_4nESas4ZAaYbNJvQaqD3sWHXkxyEICMIWS",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer02extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
                    image: "https://images.ctfassets.net/i3kf1olze1gn/7EiOswMbQZzEonbCHGmiQk/18cbecfdcf1b2b3cb2378bdc86f905a7/alev-takil-x2Or94kjaqo-unsplash.jpg?q=55&w=400",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer03extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81c0TN0YeIgAaneu5g57xRXPp6dbRZcCwdQ&s",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe82bWJUqma6Zq4_4nESas4ZAaYbNJvQaqD3sWHXkxyEICMIWS",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer04extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
                    image: "https://images.ctfassets.net/i3kf1olze1gn/7EiOswMbQZzEonbCHGmiQk/18cbecfdcf1b2b3cb2378bdc86f905a7/alev-takil-x2Or94kjaqo-unsplash.jpg?q=55&w=400",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer05extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81c0TN0YeIgAaneu5g57xRXPp6dbRZcCwdQ&s",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe82bWJUqma6Zq4_4nESas4ZAaYbNJvQaqD3sWHXkxyEICMIWS",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer06extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
                    image: "https://images.ctfassets.net/i3kf1olze1gn/7EiOswMbQZzEonbCHGmiQk/18cbecfdcf1b2b3cb2378bdc86f905a7/alev-takil-x2Or94kjaqo-unsplash.jpg?q=55&w=400",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer07extralargos",
                    hashtag: "Label"
                },
                {
                    profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81c0TN0YeIgAaneu5g57xRXPp6dbRZcCwdQ&s",
                    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRe82bWJUqma6Zq4_4nESas4ZAaYbNJvQaqD3sWHXkxyEICMIWS",
                    name: "Nombre influencer 01",
                    nickname: "@nicknamenombreinfluencer08extralargos",
                    hashtag: "Label"
                },
            ]
        },
        { type: "main_post",
            data: [
                {
                    id: 1,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Nombre",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Nombre influencer",
                    postDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo nulla, accumsan eget tempor a, condimentum at augue.",
                    hashtags: ["#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag", "#Hashtag"]
                },
                {
                    id: 2,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "María González",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Segundo post de ejemplo",
                    postDescription:
                        "Donec sed magna quis sapien pretium condimentum. Nullam semper ipsum eros, ac ultrices sem interdum non. Vivamus massa sem.",
                    hashtags: ["#Creatividad", "#Hashtag", "#Ejemplo", "#Tecnología", "#Emprendimiento", "#Hashtag"]
                },
                {
                    id: 3,
                    type: "main_post",
                    avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
                    name: "Juan Pérez",
                    description: "Sponsored",
                    imageSize: 32,
                    title: "Tercer post de ejemplo",
                    postDescription:
                        "Proin a eros a dui porttitor molestie in et risus. Nunc id sapien ac risus convallis posuere a nec neque.",
                    hashtags: ["#Hashtag", "#Innovación", "#Hashtag", "#Productividad", "#Hashtag", "#Motivación"]
                }
            
        ]
        }



];

export default allPosts;