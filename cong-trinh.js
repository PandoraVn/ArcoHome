// Danh sách công trình
const allProjects = [
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "./project_completed/Project-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    {
        title: "Biệt thự hiện đại",
        image: "https://picsum.photos/id/1015/600/400",
        description: "Biệt thự hiện đại tại Vinhomes với không gian mở, vật liệu cao cấp, ánh sáng tự nhiên tối đa.",
        url: "du-an-1.html"
    },
    {
        title: "Căn hộ cao cấp",
        image: "https://picsum.photos/id/1016/600/400",
        description: "Căn hộ cao cấp phong cách châu Âu, kết hợp ánh sáng và tông màu trắng sáng tạo sự sang trọng.",
        url: "du-an-2.html"
    },
    {
        title: "Nhà phố kết hợp kinh doanh",
        image: "https://picsum.photos/id/1018/600/400",
        description: "Thiết kế thông minh tối ưu diện tích vừa ở vừa kinh doanh tại trung tâm thành phố.",
        url: "du-an-3.html"
    },
    // Thêm nhiều dự án khác...
];

let visibleCount = 9; // Hiện 9 công trình đầu tiên

function openProjectDetail(url) {
    window.open(url, '_blank');
}

function renderProjects(start, count) {
    const container = document.querySelector('.project-list');
    const projectsToRender = allProjects.slice(start, start + count);

    projectsToRender.forEach(project => {
        const box = document.createElement('div');
        box.className = 'project-item';
        box.onclick = () => openProjectDetail(project.url);

        box.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-item-div">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        container.appendChild(box);
    });
}

function loadMoreProjects() {
    renderProjects(visibleCount, 9);
    visibleCount += 9;

    if (visibleCount >= allProjects.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
}

// Gọi khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(0, visibleCount);
});