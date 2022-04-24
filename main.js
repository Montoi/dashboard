
/*==================== MENU SHOW Y HIDDEN ====================*/
const sideMenu = document.getElementById('aside')
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById("nav__close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
} )

/*==================== DARK THEME ====================*/
const themeToggler = document.querySelector('.right__theme-toggler')


themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})

/*==================== FILL ORDERS IN TABLE ====================*/
orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                            <tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.productStatus}</td>
                            <td class="${order.shipping === 'Declined' ? 'danger'
                             : order.shipping === 'Pending' ? 'warning' 
                             : 'primary'}"> ${order.shipping}</td>
                            <td class="primary"> Details </td>
                        </tr>
                        `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})