const loadPost = async (searchText = '#') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const AllPost = data.posts;
    displayPost(AllPost);
}

const displayPost = AllPost => {
    const postContainer = document.getElementById('post-container');
    postContainer.textContent = '';

    AllPost.forEach((post, index) => {
        const postCard = document.createElement('div');
        postCard.classList = `flex gap-8 justify-center rounded-2xl lg:w-[790px] lg:h-[250px] bg-[#F3F3F5] mb-8`;

        const buttonId = `button-${index}`; // Unique ID for each button
        const buttonClickFunction = `handleButtonClick${index + 1}()`; // Unique onclick function for each button

        postCard.innerHTML = `
            <div class="indicator mt-9">
                <span class="indicator-item mt-1 mr-2 badge bg-[${post.isActive ? '#10B981' : '#EF4444'}]"></span>
                <div class="grid w-[75px] h-[70px] bg-base-300 place-items-center rounded-xl">
                    <img class="rounded-xl" src="${post.image}" alt="">
                </div>
            </div>

            <div class="mt-[15px]">
                <div class="lg:pt-6 pt-7 ml-4 lg:mb-0 mb-5">
                    <div class="flex items-center gap-6 mb-2">
                        <div class="flex gap-4 items-center">
                            <p class="font-medium"># ${post.category}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <p class="font-medium">Author : ${post.author.name}</p>
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title font-extrabold text-[20px] mb-2">${post.title}</h2>
                        <p class="mb-2 w-[552px]">${post.description}</p>
                    </div>
                    <div class="flex dashed justify-between mt-5">
                        <div class="flex items-center gap-8 mb-2 mt-5">
                            <div class="flex gap-3 items-center">
                                <i class="fa-solid fa-message"></i>
                                <p>${post.comment_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-eye"></i>
                                <p>${post.view_count}</p>
                            </div>
                            <div class="flex gap-3 items-center">
                                <i class="fa-regular fa-clock"></i>
                                <p>${post.posted_time} min</p>
                            </div>
                        </div>
                        <button id="${buttonId}" onclick="${buttonClickFunction}">
                        <div class="bg-[#10B981] h-[27px] w-[27px] text-center rounded-full mt-5">
                                <i class="fa-regular fa-envelope mt-[6px]"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`;

        postContainer.appendChild(postCard);
    });

    toggleLoadingSpinner(false);
}


// handle search button 

function handleSearch() {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    console.log(searchText)
    loadPost(searchText)
}

// loading-spinner 

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')

    if (isLoading) {
        loadingSpinner.classList.remove('hidden')

        setTimeout(() => {

        }, 2000);

    }
    else {
        loadingSpinner.classList.add('hidden')
        clearTimeout();
    }
}



loadPost()