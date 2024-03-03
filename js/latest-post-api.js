const latestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const AllLatestPost = data;
    // console.log(AllLatestPost)
    displayLatestPost(AllLatestPost)

}

const displayLatestPost = AllLatestPost => {
    const latestPostContainer = document.getElementById('latest-post-container')
    AllLatestPost.forEach(post => {
        console.log(post)
        const latestPostCard = document.createElement('div')
        latestPostCard.classList = `flex gap-[15px]`
        latestPostCard.innerHTML = `<div class=" rounded-3xl lg:w-[423px] h-[510px] border gap-10 ">
        <div class="indicator mt-9 ml-[35px]">
            <div class="grid w-[335px] h-[190px] bg-[#12132D08] place-items-center rounded-2xl"><img class ="rounded-2xl" src="${post.cover_image}"
                    alt=""></div>
        </div>
        <div class="justify-center items-center ml-[18px]">
            <div class=" lg:pt-6 pt-7 ml-4 lg:mb-0 mb-5">
                <div class=" flex gap-2 items-center">
                    <i class="fa-regular fa-calendar"></i>
                    <p class="text-gray-500">${post.author.posted_date}</p>
                </div>
                <div>
                    <h2 class="card-title font-extrabold text-[20px] mb-2">${post.title}</h2>
                    <p class="mb-4 text-gray-500">${post.description}</p>
                </div>

                <div class="flex gap-3 items-center">
                    <div class="bg-base-300 w-[50px] h-[48px] rounded-full">
                        <img class ="rounded-full" src="${post.profile_image}" alt="">
                    </div>
                    <div>
                        <h5 class="font-bold text-lg">${post.author.name}</h5>
                        <p class="text-gray-500">${post.author.designation}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>`

    latestPostContainer.appendChild(latestPostCard)

    })
}

latestPost()


// function load() {
//     fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// function loadData(data) {
//     // const ul = document.getElementById('addElement')
//     for (const user of data) {
//         console.log(user.title)
        
//     }
// }

// load()