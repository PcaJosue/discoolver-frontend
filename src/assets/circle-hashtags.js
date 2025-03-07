const circleHashtags = [
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

export default circleHashtags;
